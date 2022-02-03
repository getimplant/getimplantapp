import { collection, query, where, addDoc, deleteDoc, getDocs, getDoc, updateDoc, setDoc, doc, Timestamp, orderBy, limit } from "firebase/firestore";
import { getAuth } from "@firebase/auth";
import { db } from "../firebase/config";
import { getdistance, getgeocodes } from './getdistance';
import { readuserdata } from "../pages/Academy/Usefirestore";
import axios from "axios";
const savebooking = async (data, userid) => {
    const service_name = data.response.returnvalue.service_name;
    const staff_contact_number = data.response.returnvalue.staff_contact_number;
    const staff_email = data.response.returnvalue.staff_email;
    const staff_name = data.response.returnvalue.staff_name;
    const start_time = data.response.returnvalue.start_time;
    const end_time = data.response.returnvalue.end_time;
    const booking_id = data.response.returnvalue.booking_id;
    const bookingdata = {
        service_name,
        staff_contact_number,
        staff_email,
        staff_name,
        booking_id,
        start_time,
        end_time
    }
    const timeadded = Timestamp.fromDate(new Date());
    const bookingRef = collection(db, 'document/' + userid + '/bookings');
    const docsnap = await getDocs(bookingRef);
    const docexists = [];
    docsnap.forEach((doc) => {
        docexists.push(doc.id, doc.data());
    });

    await addDoc(bookingRef, bookingdata);
    // if (docexists.length != 0) {
    //     //console.log(docexists[1].qty)
    //     const docref = doc(db, 'document/' + userid + '/bookings/' + docexists[0])
    //     setPending(true);
    //     // await updateDoc(docref, { "qty": docexists[1].qty + qty }).then(() => {
    //     //     getcart(userid, setCartdata, setPending);

    //     // })


    // }
    // else {
    //     setPending(true);
    //     await addDoc(cartRef, { productname, productprice, qty: qty, timeadded, productid }).then(() => {
    //         getcart(userid, setCartdata, setPending);
    //     })


};
const getbookings = async (userid, setPending, setBookings) => {
    const cartRef = collection(db, "document/" + userid + "/bookings");
    //Create a query against the collection.

    const querySnapshot = await getDocs(cartRef);
    const products = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        products.push(doc.data());

    });
    setBookings(products);
    setPending(false);


};

const deletebooking = async (bookingid, userid) => {
    const cartRef = collection(db, "document/" + userid + "/bookings");
    //Create a query against the collection.
    const q = query(cartRef, where("booking_id", '==', bookingid), limit(1));
    const querySnapshot = await getDocs(q).then(async (res) => {
        const bookingref = "document/" + userid + "/bookings/" + res._snapshot.docs.sortedSet.root.key.key.path.segments[8];
        await deleteDoc(doc(db, bookingref)).then((res) => {
            window.location.reload();
        })

    })

    // await deleteDoc(doc(q)).then(()=>{
    //     console.log("doc deleted from firebase")
    // });
}

const cancelbooking = async (bookingid, setMessage, userid) => {
    // deletebooking("#CO-00158","im9xyWy8piTQHCUjhzLNMnQfiGE3");
    const accesstoken = await getaccesstoken();
    const requesturl = "https://secure-tundra-08092.herokuapp.com/https://www.zohoapis.com/bookings/v1/json/updateappointment";
    console.log(requesturl)
    const slots = await axios({
        url: requesturl,
        method: "post",
        mode: "cors",
        dataType: 'application/x-www-form-urlencoded',   //you may use jsonp for cross origin request

        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "X-Requested-With": "Origin",
            'Authorization': 'Zoho-oauthtoken ' + accesstoken,

        },
        params: {
            'booking_id': bookingid,
            'action': 'cancel',
        }


    }).then((data) => {
        // console.log(data)
        deletebooking(bookingid, userid);
        setMessage("Appointment canceled successfully");

    }).catch((error) => {
        console.log(error);
    })

}


async function getaccesstoken(setAccesstoken) {
    const requesturl = "https://secure-tundra-08092.herokuapp.com/https://accounts.zoho.com/oauth/v2/token?grant_type=refresh_token&client_id=1000.BTMJ3BX0MPRVPXMTEIUDKT03S8OHOL&client_secret=50d9f6c41ee9b7f8e9c6eeecada0b4e5ad24b53764&redirect_uri=http://localhost:3000/academy/members/callback&refresh_token=1000.28502d26fa8025988ee587cb4fe46353.ba562af320b808245a87bf1634da6ce3";
    const accesstoken = await fetch(requesturl, {
        method: 'post',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "X-Requested-With": "Origin",
        },
    }
    ).then((res) => {
        return res.json();
    }).then((data) => {
        setAccesstoken && setAccesstoken(data.access_token)
        return data.access_token;
    })
    return accesstoken;
}
async function getavailibleslots(setAvalibleslots, accesstoken, datevalue) {
    const requesturl = "https://secure-tundra-08092.herokuapp.com/https://www.zohoapis.com/bookings/v1/json/availableslots?service_id=4204027000000032070&staff_id=4204027000000027015&selected_date=" + datevalue;
    const slots = await fetch(requesturl, {
        method: "post",
        mode: "cors",
        dataType: 'jsonp',   //you may use jsonp for cross origin request
        crossDomain: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "X-Requested-With": "Origin",
            'Authorization': 'Zoho-oauthtoken ' + accesstoken,
        }
    }).then((res) => {
        return res.json();
    }).then((data) => {

        setAvalibleslots(data.response.returnvalue.data);

    })
}
async function getstaff(accesstoken, setStaff, isuser = false, userdata) {

    const requesturl = "https://secure-tundra-08092.herokuapp.com/https://www.zohoapis.com/bookings/v1/json/staffs";
    const service_id = '4204027000000032070';
    const staff_id = '4204027000000027015';
    // const user = await readuserdata();
    const useraddress = userdata.address;
    // const useraddress=user.address?user.address.replace(/,/g,' '):"";
    const sortedstaff = [];
    // !isuser?(user.address?user.address.replace(/,/g,' '):""):
    const addresses = [77083,77079,"08820"];
    
    const slots = await fetch(requesturl, {
        method: "post",
        mode: "cors",
        dataType: 'jsonp',   //you may use jsonp for cross origin request
        crossDomain: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "X-Requested-With": "Origin",
            'Authorization': 'Zoho-oauthtoken ' + accesstoken,
        },
        body: {

            'service_id': service_id,
            'staff_id': staff_id,
        }
    }).then((res) => {
        return res.json();

    }).then(async (res) => {
        const staffs = res.response.returnvalue.data;
        staffs[0].address = addresses[0];
        staffs[1].address = addresses[1];
        staffs[2].address = addresses[2];
        const caddress = [useraddress];
       
        staffs.forEach((element, index) => {
            caddress.push(element.address)
        });
        // console.log(caddress)
        const geocodes=await getgeocodes([caddress]);
       
        
        const b = await getdistance(geocodes);
        console.log(staffs,b)
        setTimeout(() => {
            staffs.forEach((element, index) => {
                element.destancefromuser = b[index];
            });
          
            // let distances = [];
            // for (let i = 0; i < staffs.length; i++) {
            //     distances.push([staffs[i].destancefromuser, i]);
            // }
            // let sortedstaff = [];
            // const sorteddistances = distances.sort()
            // for (let i = 0; i < staffs.length; i++) {
            //     for (let j = 0; j < sorteddistances.length; j++) {
            //         if (i == sorteddistances[j][1]) {
            //             sortedstaff[j] = staffs[i]
            //         }
            //     }

            // }
            // setStaff(sortedstaff);
           
            
        }, [2000])
        // setStaff(staffs);
        //     setHaveloaded(false);
        setStaff(staffs);
       
})
}
const bookaslot = async (accesstoken, fromtime, staffid, userdata, setSlotbooked,
    setMessage) => {
    const service_id = '4204027000000032070';
    const staff_id = staffid;
    const from_time = fromtime;
    const timezone = 'Asia/Calcutta';
    const requesturl = "https://secure-tundra-08092.herokuapp.com/https://www.zohoapis.com/bookings/v1/json/appointment?service_id=4204027000000032070&staff_id=4204027000000027015&from_time=" + fromtime + '&customer_details={"name": "' + userdata.username + '", "email":"' + userdata.email + '", "phone_number":"9876543201"}';
    console.log(requesturl)
    const book = await fetch(requesturl, {
        method: "post",
        mode: "cors",
        dataType: 'json',   //you may use jsonp for cross origin request
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "X-Requested-With": "Origin",
            'Authorization': 'Zoho-oauthtoken ' + accesstoken,
            // 'service_id': service_id,
            // 'staff_id': staff_id,
            // 'from_time': from_time,
            // 'timezone': timezone,
        }
        // , body: {


        //     'customer_details': customerDetails

        // }
    }).then((res) => {
        return res.json();

    }).then(async (data) => {


        // await savebooking(data,userdata.user.uid);
        setMessage("Slot booked successfully");
        setSlotbooked(true);
    }).catch((error) => {
        console.log(error)
    })
}
const moveArrayItemToNewIndex = (arr, old_index, new_index) => {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
};

export { getaccesstoken, getavailibleslots, bookaslot, getstaff, getbookings, cancelbooking }
// curl --location --request GET 'https://www.zohoapis.com/bookings/v1/json/availableslots?service_id=3848021000000027083&staff_id=3848021000000027052&selected_date=30-Apr-2020%10:00:00' \
// --header 'Authorization: Zoho-oauthtoken 1000.7b3610d1XXXXXXXXXXXXXXXX087cc3.6282226f615637c467bee7209ce1c0a1'

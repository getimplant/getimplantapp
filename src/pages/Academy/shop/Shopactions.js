import { collection, query, where, addDoc, getDocs, getDoc, updateDoc, setDoc, doc, Timestamp, orderBy, limit } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { Getsingleproduct } from "../Usefirestore";

const addtocart = async (product, userid, qty, setCartdata, setPending) => {
    const id = product.id;
    const timeadded = Timestamp.fromDate(new Date());
    const cartRef = collection(db, 'document/' + userid + '/cart');
    const q = query(cartRef, where("id", "==", id), limit(1));
    const docsnap = await getDocs(q);
    const docexists = [];
    docsnap.forEach((doc) => {
        docexists.push(doc.id, doc.data());
    });
    if (docexists.length != 0) {
        //console.log(docexists[1].qty)
        const docref = doc(db, 'document/' + userid + '/cart/' + docexists[0])
        setPending(true);
        await updateDoc(docref, { "qty": docexists[1].qty + qty }).then(() => {
            getcart(userid, setCartdata, setPending);

        })


    }
    else {
        setPending(true);
        await addDoc(cartRef, { id, qty: qty, timeadded }).then(() => {
            getcart(userid, setCartdata, setPending);
        })
    }

};
const getcart = async (userid, setCartdata, setPending) => {
    const cartRef = collection(db, "document/" + userid + "/cart");
    //Create a query against the collection.
    const q = query(cartRef, where("qty", '>', 0), orderBy("qty"));
    const querySnapshot = await getDocs(q);
    const products = [];

    querySnapshot.forEach(async (doc) => {
        let document = doc._document.data.value.mapValue.fields;
       
        let qty = document.qty.integerValue;
        let id = document.id.stringValue;
        // doc.data() is never undefined for query doc snapshots
        await Getsingleproduct(id).then((res) => {
            let cartdocument = res[0]._document.data.value.mapValue.fields;

            products.push(
                {
                    name: cartdocument.productname.stringValue,
                    price: cartdocument.productprice.stringValue,
                    image: res[1],
                    id: id,
                    qty: qty
                })
        })

        // doc.map(async(ids)=>{
        //     await Getsingleproduct(ids).then((res)=>{
        //        products.push(res)
        //     })
        // })

    });

    setCartdata([products]);
    setPending(false);


};


export { getcart, addtocart }
//cart operations

import { collection, query, where, addDoc, getDocs, updateDoc, setDoc, doc, getDoc,deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { getAuth } from "@firebase/auth";
import '../../firebase/config'
import {GoogleSpreadsheet} from "google-spreadsheet";
const GOOGLE_APPLICATION_CREDENTIALS={
  "type": "service_account",
  "project_id": "getimplant",
  "private_key_id": "e13917cb9f2c0d254054a12292b6c56e52736c35",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCMiMK7+nIzL1Wu\nZNoo0nCVR613CSivcGgRVBaKTkEwqfAn0gkxQ9rlnJOpjLz6A6cDyWtGs1aexmmn\nQ0HPpBn/bTMbTCh1TpEMoDd05O8IaFx88C9rPqgUFV4Z/Z9X0wLLA8Mjmxo0d0Bw\n2WTfMYQOW4i/H2TbEfzJLnpZeUkU0YyiwpOynYKIYfrRa15HT6BcvodmQ6l1cyjg\nqxXyrZl/kgYWFpsG1zzr6M1XUh/LAde9t9h6lkhbTnXM2dRQkjeGPkXEK/gCpIUJ\nq2DHi8WFz8whTvU0gdiy30doma90UJFdtvlZcqdNCXF0aMujdpAjVS990cDrcZj9\nmhEzRnUJAgMBAAECggEAD+bDnhCDDn6bI83+j2LsYT/IhXEQXPWLmPZaTJD5OF/q\nMB9Icf4bDSMP5D3r/iAerEOEs23EbdfGiaoHDs8jL+8zurF93HQk3nhcfgoPb/Sb\nDnoA65Id45PdX3R+rKnQJZeJ44P/zZL2xC4dB1IrfpJl4TZUq6MX5s2vA2PBXK0E\nXa5qL+M/9qWq4i7mvAMqduyrNduVFMu+ahpo9xz4izhsv3cCEk7C2Qj6g6Wfeh3x\nV2LIGTMgBluvJ7XVxqCCdOofi9m89oB84WSsnDF7Rxd6Bcdbjy3rnllAUmpVbnvr\nSin4qiwx8BZYfiIftQrBjYgeLPZbmjaHgfRRBa7S3wKBgQDBUj5ODxY8f7JFLwio\nME5+v51A14KT/a6/cEZ+Qr0neHj1no5BBUZF5ScLrCtrzTFNKbLC8bkodvDoMW51\nAtNMQhoR34zSkriNDVtDQcflhmhAajrXd0sFd22KbTXG/2kytZzIX+nzcv5cRJD3\nQrG6d7KwTs8ZS81EKKhUFf2GYwKBgQC6GSrzPawu2xPxo6LFLdgndlKEWgLnF2MW\nFxtrkSXG5OeYUOBHUZPTLpoAnZiw/zuYq1FyrSf+46rzn8UChr/dkD43cyMYyzNL\nuTeNdzGNpGmG34r2+CT3gX6XhQIK6osrJYNECxfqGABB3ATaJ55Wyoa71iYbX9cW\nug64kyHMowKBgENVzSPNN3aNF9/nGQHUCZM2VKSgK/g2FSbTCYqy3kWgPal3t57I\nIoj33xi+uEUNLI3u5zflkBObEiAeD5YsDML0BzaQgfFab3OZ4l7Ty7eTkD5XgfVI\ntNXLmljr3x5YGiEyhtB4L/m+5P/oVgH5tgP360JjwNjTwURrUO4w1qR3AoGAX3Yd\nlBzkwDxdJKz+CAuWP9fwSDgsGQLkLya3SBxytm4hZv7FrY/pNoFHOl2dP94NYikv\nZJXyWEvNG5+vXbZloXAmmicTr9o8e/GMz6J+5tuZzjfJfxqXS+c/WtY9z/+0V/Os\nPDE8mTaqmx4T1xxPmtHU/3HApnYpTV0vw/qlceUCgYAev8jEKKHEQR/2Rjb0bjNw\nFCuz/EUM4cvpAo+GNU3ru5WjUeNlB4WhfOtJP43MF2VpqBvvnbQgb92vXqtaOpqK\nITMkyLScwWwUFzWOtPc6ey9MULapLIfZ8wzz1uTazNPkyf9dzyiNg1ibBpZogHuS\nONsQZKKgI/FFLqgHOcNKNg==\n-----END PRIVATE KEY-----\n",
  "client_email": "getimplant@getimplant.iam.gserviceaccount.com",
  "client_id": "103704907555229229179",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/getimplant%40getimplant.iam.gserviceaccount.com"
};

const saveuserdata = async (values) => {
 
    const row={"Practioner's name":values.name,	"Email":values.email,	"Username":values.username	,"License number":values.lNumber,	"Practice number":values.pNumber, 	"Practice address":values.address}
    const docRef = await addDoc(collection(db, 'document'), values);
    savedatatogsheet(row);
 
return docRef

}
const savedatatogsheet=async(row)=>{
  // const row={"Name":"values.name",	"Email":"values.email",	"Username":"values.username"	,"License No.":"values.lNumber",	"Pratice No.":"values.pNumber", 	"Address":"values.address"}
  
  const SPREADSHEET_ID = "1ritdl5t2my2YImv_Oj-5pB5Do8nFwuhQlHG-6S6eQ4M";
const SHEET_ID = 0;
const CLIENT_EMAIL = "getimplant@getimplant.iam.gserviceaccount.com";
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCMiMK7+nIzL1Wu\nZNoo0nCVR613CSivcGgRVBaKTkEwqfAn0gkxQ9rlnJOpjLz6A6cDyWtGs1aexmmn\nQ0HPpBn/bTMbTCh1TpEMoDd05O8IaFx88C9rPqgUFV4Z/Z9X0wLLA8Mjmxo0d0Bw\n2WTfMYQOW4i/H2TbEfzJLnpZeUkU0YyiwpOynYKIYfrRa15HT6BcvodmQ6l1cyjg\nqxXyrZl/kgYWFpsG1zzr6M1XUh/LAde9t9h6lkhbTnXM2dRQkjeGPkXEK/gCpIUJ\nq2DHi8WFz8whTvU0gdiy30doma90UJFdtvlZcqdNCXF0aMujdpAjVS990cDrcZj9\nmhEzRnUJAgMBAAECggEAD+bDnhCDDn6bI83+j2LsYT/IhXEQXPWLmPZaTJD5OF/q\nMB9Icf4bDSMP5D3r/iAerEOEs23EbdfGiaoHDs8jL+8zurF93HQk3nhcfgoPb/Sb\nDnoA65Id45PdX3R+rKnQJZeJ44P/zZL2xC4dB1IrfpJl4TZUq6MX5s2vA2PBXK0E\nXa5qL+M/9qWq4i7mvAMqduyrNduVFMu+ahpo9xz4izhsv3cCEk7C2Qj6g6Wfeh3x\nV2LIGTMgBluvJ7XVxqCCdOofi9m89oB84WSsnDF7Rxd6Bcdbjy3rnllAUmpVbnvr\nSin4qiwx8BZYfiIftQrBjYgeLPZbmjaHgfRRBa7S3wKBgQDBUj5ODxY8f7JFLwio\nME5+v51A14KT/a6/cEZ+Qr0neHj1no5BBUZF5ScLrCtrzTFNKbLC8bkodvDoMW51\nAtNMQhoR34zSkriNDVtDQcflhmhAajrXd0sFd22KbTXG/2kytZzIX+nzcv5cRJD3\nQrG6d7KwTs8ZS81EKKhUFf2GYwKBgQC6GSrzPawu2xPxo6LFLdgndlKEWgLnF2MW\nFxtrkSXG5OeYUOBHUZPTLpoAnZiw/zuYq1FyrSf+46rzn8UChr/dkD43cyMYyzNL\nuTeNdzGNpGmG34r2+CT3gX6XhQIK6osrJYNECxfqGABB3ATaJ55Wyoa71iYbX9cW\nug64kyHMowKBgENVzSPNN3aNF9/nGQHUCZM2VKSgK/g2FSbTCYqy3kWgPal3t57I\nIoj33xi+uEUNLI3u5zflkBObEiAeD5YsDML0BzaQgfFab3OZ4l7Ty7eTkD5XgfVI\ntNXLmljr3x5YGiEyhtB4L/m+5P/oVgH5tgP360JjwNjTwURrUO4w1qR3AoGAX3Yd\nlBzkwDxdJKz+CAuWP9fwSDgsGQLkLya3SBxytm4hZv7FrY/pNoFHOl2dP94NYikv\nZJXyWEvNG5+vXbZloXAmmicTr9o8e/GMz6J+5tuZzjfJfxqXS+c/WtY9z/+0V/Os\nPDE8mTaqmx4T1xxPmtHU/3HApnYpTV0vw/qlceUCgYAev8jEKKHEQR/2Rjb0bjNw\nFCuz/EUM4cvpAo+GNU3ru5WjUeNlB4WhfOtJP43MF2VpqBvvnbQgb92vXqtaOpqK\nITMkyLScwWwUFzWOtPc6ey9MULapLIfZ8wzz1uTazNPkyf9dzyiNg1ibBpZogHuS\nONsQZKKgI/FFLqgHOcNKNg==\n-----END PRIVATE KEY-----\n";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

await doc.useServiceAccountAuth(GOOGLE_APPLICATION_CREDENTIALS);
await doc.loadInfo();
const sheet = doc.sheetsByIndex[SHEET_ID];
const result = await sheet.addRow(row);
  // try {
  //   await doc.useServiceAccountAuth({
  //     client_email: CLIENT_EMAIL,
  //     private_key: PRIVATE_KEY,
  //   });
  //   // loads document properties and worksheets
  //   await doc.getInfo()

  //   const sheet = doc.sheetsById[SHEET_ID];
  //   const result = await sheet.addRow(row);
  // } catch (e) {
  //   console.error('Error: ', e);
  // }

}
const saveproduct = async (values) => {

  const docRef = await addDoc(collection(db, "products"), values);

  return docRef.id;
}
const updateuserdata = async ({ username, address }) => {
  try {
    const auth = getAuth()
    const user = await auth.currentUser
    const id = user.uid;
    // console.log(db)
    // console.log(doc(db, 'document', id))
    // console.log(username)
    // console.log(address)
    // console.log(id)
    const docRef = await updateDoc(doc(db, 'document', id), { "username": username, "address": address });
    console.log("Document updated with ID: ", docRef);

  } catch (e) {
    console.error("Error adding document: ", e);
  }

}
const readuserdata = async (setUserdata) => {
  const auth = getAuth()
  const user = await auth.currentUser
  const email = user ? user.email : ''
  //Create a reference to the cities collection
  const citiesRef = collection(db, "document");
  let userdata = {}
  //Create a query against the collection.
  const q = query(citiesRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    const username = data.username
    const email = data.email
    const address = data.address
    const isamember=data.isamember
    userdata = {
      user,
      username,
      email,
      address,
      isamember
    }
    setUserdata && setUserdata(userdata);

  });
  return userdata;
}
const Getfirestore = async () => {
  let documents = [];
  const q = collection(db, "products");
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (data) => {
    const sq = collection(doc(db, "products/" + data.id), "images");
    const querySnapshotsq = await getDocs(sq);
    data["images"] = [];
    let imagearray = data["images"];
    querySnapshotsq.forEach(async (image) => {
      let imageurl = image._document.data.value.mapValue.fields.downloadURL.stringValue;
      imagearray.push(imageurl);
    });
    documents.push(data)
  });
  return documents;
}
const Getsingleproduct = async (id) => {
  let document=[];
  const q = doc(db, "products/" + id);
  const querySnapshot = await getDoc(q);
  document.push(querySnapshot);
  const sq = collection(doc(db, "products/" + id), "images");
  const data = await getDocs(sq);
  
  let imagearray=[];
  data.forEach(async(image)=>{
    let imageurl=image._document.data.value.mapValue.fields.downloadURL.stringValue;
    imagearray.push(imageurl);
  });
  document.push(imagearray);

  return document;
}
const updateproduct = async (product,iD) => {
  let updatedvalues={
    productcatagory: product.productcatagory,
    productname: product.productname,
    productprice:product.productprice,
    productdesc: product.productdesc,
    productdescprice:product.productdescprice
  }
  const docRef = await updateDoc(doc(db, 'products', iD), updatedvalues);
  return 1;
}
const deleteproduct = async(iD) => {
  await deleteDoc(doc(db, "products", iD));
  return 1;
}
export { saveuserdata,savedatatogsheet,deleteproduct, updateproduct, Getsingleproduct, readuserdata, updateuserdata, saveproduct, Getfirestore }
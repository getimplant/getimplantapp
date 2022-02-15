import { collection, query, where, addDoc, getDocs, updateDoc, setDoc, doc, getDoc,deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { getAuth } from "@firebase/auth";
import '../../firebase/config'
const saveuserdata = async (values) => {
 
  
    const docRef = await addDoc(collection(db, 'document'), values);
    console.log("Document written with ID: ", docRef);
    console.log("Document written with ID: ");
 
return docRef

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
export { saveuserdata,deleteproduct, updateproduct, Getsingleproduct, readuserdata, updateuserdata, saveproduct, Getfirestore }
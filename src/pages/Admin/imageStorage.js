import { useState, useEffect } from 'react';
import { projectStorage, db, timestamp } from '../../firebase/config';
import { getAuth } from "@firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL,uploadBytesResumable } from "firebase/storage";
import { collection, query, where, addDoc, getDocs, updateDoc, setDoc, doc } from "firebase/firestore";

const imageStorage = async (files, productid) => {
    const storageRef = ref(projectStorage, productid);
    const imagesref=collection(db,"products/"+productid+"/images")
    files.map(file => {
        const imageref = ref(storageRef, generateString(10));
        const url = "";
        const uploadTask = uploadBytesResumable(imageref, file);
        
        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', 
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            // Handle unsuccessful uploads
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
           
            getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                
                await addDoc(imagesref, {downloadURL}).then(()=>{
                  alert("product added");
                  window.location.reload()
                });
               
            });
          });
});
   
    

}

function generateString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export default imageStorage;


// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"; //same link as above just change app to firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRR1tb-zhFpzwvyzrS_ggGCw60Nt3f6Q8",
  authDomain: "canineconnect-5e86d.firebaseapp.com",
  projectId: "canineconnect-5e86d",
  storageBucket: "canineconnect-5e86d.appspot.com",
  messagingSenderId: "831134964041",
  appId: "1:831134964041:web:96685663f5c297d57ba298",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); //nearly everything below can all be copied unless noted

async function getBreeds(db) {
  const breedCol = collection(db, "breeds"); // change tasks to collection name
  const breedSnapshot = await getDocs(breedCol); // also change variables to something related to project
  const breedList = taskSnapshot.docs.map((doc) => doc);
  return breedList;
}

const unsub = onSnapshot(collection(db, "breeds"), (doc) => {
  // console.log(doc.docChanges()); //test to see if docs are added/removed
  doc.docChanges().forEach((change) => {
    console.log(change, change.doc.data(), change.doc.id);
    if (change.type === "added") {
      //Call render function in UI
      renderBreed(change.doc.data(), change.doc.id);
    }
    if (change.type === "removed") {
      //do something
    }
  });
});

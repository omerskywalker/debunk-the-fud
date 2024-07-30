// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import {
  query,
  orderBy,
  limit,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { fbc_fo } from "./fbc_fo.js";

// Initialize Firebase
const app = initializeApp(fbc_fo);
const db = getFirestore(app);
let currentViewCountObj = null;

const querySnapshotPrevious = await getDocs(collection(db, "viewCount"));
querySnapshotPrevious.forEach((doc) => {
  currentViewCountObj = doc.data();
});

let newCount = currentViewCountObj.viewCount + 1;

const viewRef = doc(db, "viewCount", "views");
setDoc(viewRef, { viewCount: newCount }, { merge: true });

const querySnapshotNew = await getDocs(collection(db, "viewCount"));
querySnapshotNew.forEach((doc) => {
  currentViewCountObj = doc.data();
});

document.getElementById(
  "visitor-counter"
).innerHTML = `<span class="viewCount">${currentViewCountObj.viewCount}</span> nocoiners educated`;

export { app, db, collection, getDocs, Timestamp, addDoc };
export { query, orderBy, limit, where, onSnapshot };

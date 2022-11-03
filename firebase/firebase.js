import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { collection, getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBLzFwewCcu6yME6cUUflQEoWphub9duy4",
    authDomain: "app-portafoliovinii.firebaseapp.com",
    projectId: "app-portafoliovinii",
    storageBucket: "app-portafoliovinii.appspot.com",
    messagingSenderId: "261533577012",
    appId: "1:261533577012:web:cefc82c68fcc0556bfbf61"
  };

initializeApp(firebaseConfig);

const db = getFirestore();

export const consulta = async () => {
    const data = await getDocs(collection(db, '/proyectos'))
    return data;
}
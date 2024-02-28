import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyA7QN_cp2Ou55RcgzoNJQEXW10ogjzUIYI",
    authDomain: "enzovet-b8838.firebaseapp.com",
    projectId: "enzovet-b8838",
    storageBucket: "enzovet-b8838.appspot.com",
    messagingSenderId: "981295256253",
    appId: "1:981295256253:web:f7ee7b99f59d563a6c5dd4",
    measurementId: "G-6GLFH1KWZD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export async function psuhInfo (nombrePersona, tipoAnimal, cc, raza, fecha_cita){
    try {
        const docRef = await addDoc(collection(db, "REAL_DATA"), {
            nombrePersona: nombrePersona,
            tipoAnimal: tipoAnimal,
            cc: cc,
            raza: raza,
            fecha_cita: fecha_cita
        });
    
        console.log("Document written with ID: ", docRef.id);
        let uploading = new Event('uploading');
        document.dispatchEvent(uploading);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

document.addEventListener('uploading',()=>{
    console.log("aqui deberia saltar un modal check");
    
})
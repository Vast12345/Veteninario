
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// import { consultar_cita } from "./consultar_cita.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7QN_cp2Ou55RcgzoNJQEXW10ogjzUIYI",
    authDomain: "enzovet-b8838.firebaseapp.com",
    projectId: "enzovet-b8838",
    storageBucket: "enzovet-b8838.appspot.com",
    messagingSenderId: "981295256253",
    appId: "1:981295256253:web:f7ee7b99f59d563a6c5dd4",
    measurementId: "G-6GLFH1KWZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let search = document.getElementById('obtainData');
search.addEventListener('click',async()=>{
    const cc = document.getElementById('cedMostrar').value;
    const q = query(collection(db,"REAL_DATA"),where("cc","==",cc));
    try{
        const querySnapshot = await getDocs(q);
                    if (querySnapshot.empty){
                console.log(`No hay registros con el CC ${cc}`);
            } else {
                querySnapshot.forEach((doc)=>{
                    console.log(doc.id, ' => ', doc.data());
                    let nombrePersona = doc.data().nombrePersona;
                    let tipoAnimal = doc.data().tipoAnimal;
                    let cc = doc.data().cc
                    let raza = doc.data().raza;
                    let fecha_cita = doc.data().fecha_cita;

                    let campoPersona = document.createElement('th');
                    let campoAnimal = document.createElement('th');
                    let campoCC = document.createElement('th');
                    let campoRaza = document.createElement('th');
                    let campoFecha = document.createElement('th');

                    campoPersona.textContent=nombrePersona;
                    campoAnimal.textContent=tipoAnimal;
                    campoCC.textContent=cc;
                    campoRaza.textContent=raza;
                    campoFecha.textContent=fecha_cita;
                    let container = document.getElementById('tableBody');
                    let tableCont = document.createElement('tr');
                    tableCont.appendChild(campoPersona);
                    tableCont.appendChild(campoCC);
                    tableCont.appendChild(campoFecha);
                    tableCont.appendChild(campoAnimal);
                    tableCont.appendChild(campoRaza);
                    container.appendChild(tableCont);
                    console.log(nombrePersona,tipoAnimal,cc,raza,fecha_cita);
                })
            }
    }
    catch(error){
        console.log('Error al obtener documentos: ', error)
    }
});
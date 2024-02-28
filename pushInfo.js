import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export async function psuhInfo (){
    try {
        const docRef = await addDoc(collection(db, "REAL_DATA"), {
            nombrePersona: nombrePersona,
            tipoAnimal: tipoAnimal,
            cc: cc,
            raza: raza,
            fecha_cita: fecha_cita
        });
    
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}


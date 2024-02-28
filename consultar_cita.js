
export async function consultar_cita(){
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
                    alert(`nombre ${nombre}; cc ${cc}; nombre de mascota ${nombreMascota}`);
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
                })
            }
    }
    catch(error){
        console.log('Error al obtener documentos: ', error)
    }
}

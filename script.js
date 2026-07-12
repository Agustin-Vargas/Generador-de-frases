
 // declaracion de las varibles que utilizare en el documeto de js

const boton = document.getElementById("btnFrase");
const fraseTexto = document.getElementById("frase");
const autorTexto = document.getElementById("autor");
const autorBio = document.getElementById("autorBio");
const btnCopiar = document.getElementById("btnCopiar");


// la key o llave de la API que estoy utilizando en rapidapi
const API_KEY = "385190fb76msh7363d64a67d0115p1296f9jsneda681880f02";


// funcion para obtener una frase aleatoria de la API
async function obtenerFrase(){
    fraseTexto.textContent = "Cargando...";
    autorTexto.textContent = "";
    autorBio.textContent = "";

    // realizamos la conexion y peticion a la URL de la API con los parametros establecidos
    try {
        const respuesta = await fetch(
            "https://quotes15.p.rapidapi.com/quotes/random/?language_code=es",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key": API_KEY,
                    "x-rapidapi-host": "quotes15.p.rapidapi.com"
                }
            }
        );

     // convertimos la respuesta que nos da el servidor a un formato objeto JSON
        const data = await respuesta.json();
        console.log(data);
        fraseTexto.textContent = `"${data.content}"`;


     // variable para guardar el nombre del autor de la frase
        let nombreAutor = "Autor desconocido";
       if (data.originator) {nombreAutor = data.originator.name;
            autorTexto.textContent = `- ${nombreAutor}`;
        
            
            // si la API tiene la descripcion-bio del autor, la mostramos debajo de la frese
            if (data.originator.description) { autorBio.textContent = data.originator.description;
            }

        } else {
            autorTexto.textContent = `- ${nombreAutor}`;
        }

        // configurarcion del boton para copiar la freses
        btnCopiar.onclick = () => {
            const textoACopiar = `"${data.content}" - ${nombreAutor}`;
            navigator.clipboard.writeText(textoACopiar);
            btnCopiar.textContent = "¡Copiado!";
            setTimeout(() => {btnCopiar.textContent = "Copiar";}, 2000);
        };


        // si hay un error al momento de generar la frase este se montrara en pantalla
    } catch(error){fraseTexto.textContent ="error al obtener la frase";
        console.log(error);
    }
}

boton.addEventListener("click", obtenerFrase);
import { consulta } from './firebase/firebase.js';
const contenedorProyectos = document.getElementById('contenedor-proyectos');

window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshop = await consulta()

    let html = ''

    querySnapshop.forEach(doc => {
        const proyecto = doc.data();
        html +=`
            <div class="projectCard" style="background-image: url('${proyecto.background}');">
                <div class="projectCard--info">
                    <h3>${proyecto.title}</h3>
                    <ul>
                        ${proyecto.skills.map(item=>{
                            return(`<li>${item}</li>`)
                        })}
                    </ul>
                    <div class="iconLinks">
                        <a href=${proyecto.link_project}><i class="bi bi-arrow-up-right-square-fill"></i></a>
                        <a href=${proyecto.link_code}><i class="bi bi-github"></i></a>
                    </div>
                </div>
            </div>
        `
    })

    contenedorProyectos.innerHTML = html
    
})




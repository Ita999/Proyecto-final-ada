const contenedor = document.getElementById("contenedor")
const personajes = fetch("https://rickandmortyapi.com/api/character")

console.log(personajes)

personajes.then((response)=>{
    return response.json()
}).then((data) =>{
    const arrayDePersonajes = data.results
    
    for(let i = 0; i < arrayDePersonajes.length ;i++){
    const imagen = arrayDePersonajes[i].image
    const nombre = arrayDePersonajes[i].name
    const genero = arrayDePersonajes[i].gender
    const specie = arrayDePersonajes[i].specie
    const estado = arrayDePersonajes[i].status

    contenedor.innerHTML += 
    `
    <div class="cont-charact">
            <img class="charact" src="${imagen}" alt="foto del personaje">
            <div class="fact">
            <h3>Name: ${nombre}</h3>
            <h3>Gender: ${genero}</h3>
            <h3>Specie: ${specie}</h3>
            <h3>Status: ${estado}</h3>   
            </div>
            
        </div>
    `
  }
    })

  


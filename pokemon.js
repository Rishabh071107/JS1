async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
       
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        const pokemonHeight = document.getElementById("height");
        const pokemonWeight = document.getElementById("weight");
        
        console.log(data.height)
        console.log(data.weight)
        console.log(data.types)
        console.log(data.abilities)
        pokemonHeight.innerText = `Height: ${data.height} decimetres, `;
        pokemonWeight.weight = `${data.weight} hectograms`;
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}
//console.log("hello")
const nameBtn = document.getElementById("nameBtn");
nameBtn.addEventListener("click", fetchData);

async function fetchData() {
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("couldn't fetch resource");
        }

        const data = await response.json(); 
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("Pokemon Sprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }catch(error){
        console.error(error);
    }
}




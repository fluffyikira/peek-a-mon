const pokeID = Math.floor(Math.random() * (Math.floor(1008) - Math.ceil(1) + 1)) + Math.ceil(1);

fetch('https://pokeapi.co/api/v2/pokemon/' + pokeID)
.then(data => data.json())
.then(pokemon => {
    const getpokename = pokemon.name;
    
    const pokename = document.getElementById('pokename');
    pokename.innerHTML = "#" + pokeID + " " + getpokename;

    const pokesprite = document.getElementById('pokesprite');
    pokesprite.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokeID + '.png';
})
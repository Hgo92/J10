let pokedex;

async function loadPokedex() {
  try {
    const response = await fetch('./pokedex.json');
    pokedex = await response.json();
    console.log("✅ Fichier chargé avec succès !");
  } catch (err) {
    console.error("❌ Erreur de lecture du fichier pokedex.json :", err.message);
  }
}

loadPokedex()

const boutonChoix = document.getElementById("buttonPoke");
const choix = document.getElementById("choixPoke");
let nomPoke = choix.value;
console.log(nomPoke)

let titreCarte = document.getElementById("titre");
let numCarte = document.getElementById("num");
let imageCarte = document.getElementById("image");
let evoCarte = document.getElementById("evolutions");
let tailleCarte = document.getElementById("taille");
let poidsCarte = document.getElementById("poids");
let typesCarte = document.getElementById("types");
let faiblessesCarte = document.getElementById("faiblesses");

function createCard(name) {
  let search = pokedex.pokemon.find(n => n.name === name)
    if (search) {
      
    
      let faiblesses = search.weaknesses;
      let faiblessesText = "";

      for (let i = 0; i < faiblesses.length; i++) {
        if (i < faiblesses.length-1) {
        faiblessesText += `${search.weaknesses[i]}, `
        } else { faiblessesText +=`${search.weaknesses[i]}`
        }
      }

      let evolutions = search.next_evolution;
      let evolutionsText;

      if (evolutions == undefined) {
        evolutionsText = "Ce Pokemon n'a pas d'évolution !"
        } else if (evolutions.length === 1) {
        evolutionsText = `${search.next_evolution[0].name}`
        } else if (evolutions.length === 2) { 
        evolutionsText =`${search.next_evolution[0].name} -> ${search.next_evolution[1].name}`;
        } 

  let pokeTypes = search.type;
  let pokeTypesText ="";

      for (let k = 0; k < pokeTypes.length; k++) {
        if (k < pokeTypes.length-1) {
        pokeTypesText += `${search.type[k]}, `
        } else { pokeTypesText +=`${search.type[k]}`
        }
      }

  titreCarte.innerText = search.name;
  numCarte.innerText = search.num;
  imageCarte.src = search.img
  evoCarte.innerText = evolutionsText;
  tailleCarte.innerText = search.height;
  poidsCarte.innerText = search.weight;
  typesCarte.innerText = pokeTypesText;
  faiblessesCarte.innerText = faiblessesText;
} } 

boutonChoix.addEventListener("click", () => {
  createCard(nomPoke)
})


// countPokemon()
// heavyPokemon()
// sortByWeight(4)
// getEvolutions("Bulbasaur")
// searchPokemon("Bulbasaur")
// searchPokemon("Proutivore")
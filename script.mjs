// =============================================
// 🧩 Exercice 01 – Pokedex Explorer
// Fichier : J09/01_pokedex/script.js
// =============================================

// 🧠 Objectif : explorer et analyser les données du Pokédex en JavaScript pur
// ---------------------------------------------------------------
// Étapes :
// 1. Charger les données JSON
// 2. Manipuler les tableaux et objets
// 3. Écrire des fonctions d’analyse et de recherche
// ---------------------------------------------------------------

// 💾 Étape 1 : Charger le fichier JSON
// Si tu es dans un environnement Node.js, tu peux utiliser fs :
import fs from "fs";

let pokedex;

// Essaie d’abord de lire et parser le fichier local pokedex.json
try {
  const data = fs.readFileSync("./pokedex.json", "utf8");
  pokedex = JSON.parse(data);
  console.log("✅ Fichier chargé avec succès !");
} catch (err) {
  console.error("❌ Erreur de lecture du fichier pokedex.json :", err.message);
  process.exit(1);
}

// Vérifie que la structure est bien celle attendue
console.log("Nombre de Pokémon :", pokedex.pokemon.length);
console.log("Premier Pokémon :", pokedex.pokemon[0].name);

// ---------------------------------------------------------------
// ✨ Étape 2 : Fonctions de base à compléter
// ---------------------------------------------------------------

/**
 * Retourne le nombre total de Pokémon dans le Pokédex
 */
function countPokemon() {
  return (console.log(pokedex.pokemon.length))
}
/**
 * Retourne un tableau des Pokémon pesant plus de 10 kg
 */
function heavyPokemon() {
  let bigPokemon = [];

for (let i = 0; i < pokedex.pokemon.length; i++) {
  let weightPoke = parseFloat(pokedex.pokemon[i].weight);
  if (weightPoke > 10) {
    bigPokemon.push(pokedex.pokemon[i].name);
  } };

  return(console.log(bigPokemon));
}

/**
 * Retourne la liste des Pokémon triés par poids (croissant) -> J'ai ajouté un paramètre nombre pour décider du nombre qu'on veut plutôt qu'avoir tous les pokemons
 */
function sortByWeight(nombre) {
  for (let i = 0; i < pokedex.pokemon.length; i++) {
    pokedex.pokemon[i].weight = parseFloat(pokedex.pokemon[i].weight);
  }
  let pokemonSort = pokedex.pokemon.sort((a,b) => a.weight - b.weight)
  return(console.log(pokemonSort.slice(0,nombre)))
}



/**
 * Retourne les évolutions d’un Pokémon donné (s’il en a)
 */
function getEvolutions(name) {
  let tableauEvolution = []
  for (let i = 0; i < pokedex.pokemon.length; i++) {
    if (pokedex.pokemon[i].name == name && pokedex.pokemon[i].next_evolution) {
      for (let j=0; j < pokedex.pokemon[i].next_evolution.length; j++)
        tableauEvolution.push(pokedex.pokemon[i].next_evolution[j].name)
    }
  }
  return console.log(tableauEvolution)
}

/**
 * Retourne un objet complet représentant le Pokémon recherché
 */
function searchPokemon(name) {
  let search = pokedex.pokemon.find(n => n.name === name)
    if (search) {
      let faiblesses = search.weaknesses
      let faiblessesText = ""

      for (let i = 0; i < faiblesses.length; i++) {
        if (i<faiblesses.length-1) {
        faiblessesText += `${search.weaknesses[i]}, `
        } else { faiblessesText +=`${search.weaknesses[i]}`
        }
      }

      let evolutions = search.next_evolution;
      let evolutionsText

      if (evolutions == undefined) {
        evolutionsText = "Ce Pokemon n'a pas d'évolution !"
        } else if (evolutions.length === 1) {
        evolutionsText = `${search.next_evolution[0].name}`
        } else if (evolutions.length === 2) { 
        evolutionsText =`${search.next_evolution[0].name} -> ${search.next_evolution[1].name}`;
        } 

      return console.log(`
        Nom : ${search.name}

        Type(s) : ${search.type}

        Taille : ${search.height}

        Poids : ${search.weight}

        Faiblesses : ${faiblessesText}
        
        Evolutions : ${evolutionsText}`)  
} else {
      return null
    }

}


countPokemon()

heavyPokemon()
sortByWeight(4)

getEvolutions("Bulbasaur")

searchPokemon("Squirtle")
searchPokemon("Proutivore")

// ---------------------------------------------------------------
// 🔍 Tests rapides (tu peux commenter ou adapter ces lignes)
// ---------------------------------------------------------------

// console.log(countPokemon());
// console.log(heavyPokemon().slice(0, 5));
// console.log(getEvolutions("Bulbasaur"));
// console.log(searchPokemon("Pikachu"));
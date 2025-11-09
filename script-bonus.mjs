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


//Etape bonus : j'ai créé un Pokedex qui affiche les infos du Pokemon demandé ! 

const boutonChoix = document.getElementById("buttonPoke");
const choix = document.getElementById("choixPoke");


let carte = document.getElementById("pokedex")
let titreCarte = document.getElementById("titre");
let numCarte = document.getElementById("num");
let boxImage = document.getElementById("box-image");
let imageCarte = document.getElementById("image");
let evoCarte = document.getElementById("evolutions");
let tailleCarte = document.getElementById("taille");
let poidsCarte = document.getElementById("poids");
let typesCarte = document.getElementById("types");
let faiblessesCarte = document.getElementById("faiblesses");
let backCard = document.getElementById("back-card")

carte.style.display="none";
backCard.style.display="block";

function createCard(name) {
    let search = pokedex.pokemon.find(n => n.name === name)
    if (search && search != undefined) {
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
  numCarte.innerHTML = `N°${search.num}`;
  imageCarte.src = search.img
  evoCarte.innerHTML = `Evolutions: ${evolutionsText}`;
  tailleCarte.innerText = search.height;
  poidsCarte.innerText = search.weight;
  typesCarte.innerHTML = `Types: ${pokeTypesText}`;
  faiblessesCarte.innerHTML = `Weaknesses: ${faiblessesText}`;

  if (pokeTypes[0] === "Grass") {
    carte.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81ccfdb7-ac1d-423f-a276-af63abae5ba2/d5oulfh-45f9111f-d787-4040-8609-50e8ce099b31.png/v1/fit/w_430,h_614,q_70,strp/grass__bw__texture_by_pkmncardmaker264_d5oulfh-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6Ii9mLzgxY2NmZGI3LWFjMWQtNDIzZi1hMjc2LWFmNjNhYmFlNWJhMi9kNW91bGZoLTQ1ZjkxMTFmLWQ3ODctNDA0MC04NjA5LTUwZThjZTA5OWIzMS5wbmciLCJ3aWR0aCI6Ijw9NDMwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ayVKE-KEhxbSVQcJxscOnWKul95aR4O6kHhrfj186wk')";
    boxImage.style.backgroundColor = "#71c558";
  } else if (pokeTypes[0] === "Fire") {
    carte.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81ccfdb7-ac1d-423f-a276-af63abae5ba2/d5ouid9-b25eaf89-82dc-4e6b-a7c6-c012f6b64e32.png/v1/fit/w_429,h_613,q_70,strp/fire__bw__texture_by_pkmncardmaker264_d5ouid9-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6Ii9mLzgxY2NmZGI3LWFjMWQtNDIzZi1hMjc2LWFmNjNhYmFlNWJhMi9kNW91aWQ5LWIyNWVhZjg5LTgyZGMtNGU2Yi1hN2M2LWMwMTJmNmI2NGUzMi5wbmciLCJ3aWR0aCI6Ijw9NDI5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.UUq-42oXgDQOULslUdvxa8g9OONMFtAel0IPRqyvedc')";
    boxImage.style.backgroundColor = "#ea7a3c";
  }  else if (pokeTypes[0] === "Bug") {
    carte.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81ccfdb7-ac1d-423f-a276-af63abae5ba2/d5oulfh-45f9111f-d787-4040-8609-50e8ce099b31.png/v1/fit/w_430,h_614,q_70,strp/grass__bw__texture_by_pkmncardmaker264_d5oulfh-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6Ii9mLzgxY2NmZGI3LWFjMWQtNDIzZi1hMjc2LWFmNjNhYmFlNWJhMi9kNW91bGZoLTQ1ZjkxMTFmLWQ3ODctNDA0MC04NjA5LTUwZThjZTA5OWIzMS5wbmciLCJ3aWR0aCI6Ijw9NDMwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ayVKE-KEhxbSVQcJxscOnWKul95aR4O6kHhrfj186wk')";
    boxImage.style.backgroundColor = "#94bc4a";
  }  else if (pokeTypes[0] === "Dark") {
    boxImage.style.backgroundColor = "#736c75"
    carte.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3inhyi-28e16cb6-9d37-4a6e-bdc6-0d7fcf0af574.png/v1/fit/w_426,h_613,q_70,strp/pokemon_tcg_colorless_texture_by_ilkcmp_d3inhyi-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6Ii9mLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNi9kM2luaHlpLTI4ZTE2Y2I2LTlkMzctNGE2ZS1iZGM2LTBkN2ZjZjBhZjU3NC5wbmciLCJ3aWR0aCI6Ijw9NDI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yjZnG5s6Tu1I5WrXGhd1j2jDkzu_veGT1JsOsfGk7nw')";
  }  else if (pokeTypes[0] === "Dragon") {
    boxImage.style.backgroundColor = "#6a7baf"
    carte.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3inhyi-28e16cb6-9d37-4a6e-bdc6-0d7fcf0af574.png/v1/fit/w_426,h_613,q_70,strp/pokemon_tcg_colorless_texture_by_ilkcmp_d3inhyi-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6Ii9mLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNi9kM2luaHlpLTI4ZTE2Y2I2LTlkMzctNGE2ZS1iZGM2LTBkN2ZjZjBhZjU3NC5wbmciLCJ3aWR0aCI6Ijw9NDI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yjZnG5s6Tu1I5WrXGhd1j2jDkzu_veGT1JsOsfGk7nw')";
  }  else if (pokeTypes[0] === "Electric") {
    boxImage.style.backgroundColor = "#e5c531";
    carte.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81ccfdb7-ac1d-423f-a276-af63abae5ba2/d5oun1x-6975d2e1-093f-4f3f-88f4-21ea09a01e93.png/v1/fit/w_431,h_614,q_70,strp/lightning__bw__texture_by_pkmncardmaker264_d5oun1x-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6Ii9mLzgxY2NmZGI3LWFjMWQtNDIzZi1hMjc2LWFmNjNhYmFlNWJhMi9kNW91bjF4LTY5NzVkMmUxLTA5M2YtNGYzZi04OGY0LTIxZWEwOWEwMWU5My5wbmciLCJ3aWR0aCI6Ijw9NDMxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.PeD5IO0STKsVngGHHt3msoKiNO15VImGjQZB8di1Tp0')";
  }  else if (pokeTypes[0] === "Fairy") {
    boxImage.style.backgroundColor = "#e397d1"
    carte.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d6qlfo7-88ca5630-5884-4125-92fb-4e1a294dbc46.png/v1/fit/w_680,h_975,q_70,strp/pokemon_tcg_fairy_texture__not_final_by_ilkcmp_d6qlfo7-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTc1IiwicGF0aCI6Ii9mLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNi9kNnFsZm83LTg4Y2E1NjMwLTU4ODQtNDEyNS05MmZiLTRlMWEyOTRkYmM0Ni5wbmciLCJ3aWR0aCI6Ijw9NjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.68TbYaZinWTSlZ7nTgLsoVFL7XES-R_MkHXw_XpQwxI')"
  }  else if (pokeTypes[0] === "Fighting") {
    boxImage.style.backgroundColor = "#cb5f48"
    carte.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f144fa15-4001-4f05-83d9-73ad837f6bc4/d4wcj31-53a8338d-c2b1-4a00-ad15-aaa314cb9f6b.png/v1/fit/w_425,h_612,q_70,strp/classic_pkmn_tcg_texture_pack_by_flamingclaw_d4wcj31-375w-2x.jpg')"
  }  else if (pokeTypes[0] === "Flying") {
    boxImage.style.backgroundColor = "#7da6de"
    carte.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3inhyi-28e16cb6-9d37-4a6e-bdc6-0d7fcf0af574.png/v1/fit/w_426,h_613,q_70,strp/pokemon_tcg_colorless_texture_by_ilkcmp_d3inhyi-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6Ii9mLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNi9kM2luaHlpLTI4ZTE2Y2I2LTlkMzctNGE2ZS1iZGM2LTBkN2ZjZjBhZjU3NC5wbmciLCJ3aWR0aCI6Ijw9NDI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yjZnG5s6Tu1I5WrXGhd1j2jDkzu_veGT1JsOsfGk7nw')";
  }  else if (pokeTypes[0] === "Ghost") {
    boxImage.style.backgroundColor = "#846ab6"
    carte.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3inhyi-28e16cb6-9d37-4a6e-bdc6-0d7fcf0af574.png/v1/fit/w_426,h_613,q_70,strp/pokemon_tcg_colorless_texture_by_ilkcmp_d3inhyi-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6Ii9mLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNi9kM2luaHlpLTI4ZTE2Y2I2LTlkMzctNGE2ZS1iZGM2LTBkN2ZjZjBhZjU3NC5wbmciLCJ3aWR0aCI6Ijw9NDI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yjZnG5s6Tu1I5WrXGhd1j2jDkzu_veGT1JsOsfGk7nw')";
  }  else if (pokeTypes[0] === "Ground") {
    boxImage.style.style.backgroundColor = "#cc9f4f "
    carte.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f144fa15-4001-4f05-83d9-73ad837f6bc4/d4wcj31-53a8338d-c2b1-4a00-ad15-aaa314cb9f6b.png/v1/fit/w_425,h_612,q_70,strp/classic_pkmn_tcg_texture_pack_by_flamingclaw_d4wcj31-375w-2x.jpg')"
  }  else if (pokeTypes[0] === "Ice") {
    boxImage.style.style.backgroundColor = "#70cbd4 "
    carte.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/176622e8-bf4c-4d60-9a64-b75cff245c16/d6ada67-356f47fc-c8fe-49b7-b59a-313219d7022c.png/v1/fit/w_425,h_611/pokemon_tcg_ice_texture_by_ilkcmp_d6ada67-375w-2x.png')"
  }  else if (pokeTypes[0] === "Normal") {
    boxImage.style.backgroundColor = "#aab09f "
    carte.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3inhyi-28e16cb6-9d37-4a6e-bdc6-0d7fcf0af574.png/v1/fit/w_426,h_613,q_70,strp/pokemon_tcg_colorless_texture_by_ilkcmp_d3inhyi-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6Ii9mLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNi9kM2luaHlpLTI4ZTE2Y2I2LTlkMzctNGE2ZS1iZGM2LTBkN2ZjZjBhZjU3NC5wbmciLCJ3aWR0aCI6Ijw9NDI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yjZnG5s6Tu1I5WrXGhd1j2jDkzu_veGT1JsOsfGk7nw')";
  }  else if (pokeTypes[0] === "Poison") {
    boxImage.style.backgroundColor = "#b468b7"
    carte.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3inhyi-28e16cb6-9d37-4a6e-bdc6-0d7fcf0af574.png/v1/fit/w_426,h_613,q_70,strp/pokemon_tcg_colorless_texture_by_ilkcmp_d3inhyi-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6Ii9mLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNi9kM2luaHlpLTI4ZTE2Y2I2LTlkMzctNGE2ZS1iZGM2LTBkN2ZjZjBhZjU3NC5wbmciLCJ3aWR0aCI6Ijw9NDI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yjZnG5s6Tu1I5WrXGhd1j2jDkzu_veGT1JsOsfGk7nw')";
  }  else if (pokeTypes[0] === "Psychic") {
    boxImage.style.backgroundColor = "#e5709b"
    carte.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3inhyi-28e16cb6-9d37-4a6e-bdc6-0d7fcf0af574.png/v1/fit/w_426,h_613,q_70,strp/pokemon_tcg_colorless_texture_by_ilkcmp_d3inhyi-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6Ii9mLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNi9kM2luaHlpLTI4ZTE2Y2I2LTlkMzctNGE2ZS1iZGM2LTBkN2ZjZjBhZjU3NC5wbmciLCJ3aWR0aCI6Ijw9NDI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yjZnG5s6Tu1I5WrXGhd1j2jDkzu_veGT1JsOsfGk7nw')";
  }  else if (pokeTypes[0] === "Rock") {
    carte.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f23c48c4-218f-4490-a23d-551fbf5b3603/d5axd7v-f73ff5e5-9b71-4353-9856-5391cf0e2272.png/v1/fit/w_420,h_590,q_70,strp/metal_texture_by_shiningbill_d5axd7v-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkwIiwicGF0aCI6Ii9mL2YyM2M0OGM0LTIxOGYtNDQ5MC1hMjNkLTU1MWZiZjViMzYwMy9kNWF4ZDd2LWY3M2ZmNWU1LTliNzEtNDM1My05ODU2LTUzOTFjZjBlMjI3Mi5wbmciLCJ3aWR0aCI6Ijw9NDIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.d0qutDhIdaBZjse8bX3KOrvCXeD1WJFwbVf33SQkMPA')"
    boxImage.style.backgroundColor = "#b2a061 "
  }  else if (pokeTypes[0] === "Steel") {
    boxImage.style.backgroundColor = "#89a1b0 "
    carte.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f23c48c4-218f-4490-a23d-551fbf5b3603/d5axd7v-f73ff5e5-9b71-4353-9856-5391cf0e2272.png/v1/fit/w_420,h_590,q_70,strp/metal_texture_by_shiningbill_d5axd7v-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkwIiwicGF0aCI6Ii9mL2YyM2M0OGM0LTIxOGYtNDQ5MC1hMjNkLTU1MWZiZjViMzYwMy9kNWF4ZDd2LWY3M2ZmNWU1LTliNzEtNDM1My05ODU2LTUzOTFjZjBlMjI3Mi5wbmciLCJ3aWR0aCI6Ijw9NDIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.d0qutDhIdaBZjse8bX3KOrvCXeD1WJFwbVf33SQkMPA')";
  }  else if (pokeTypes[0] === "Water") {
    carte.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176622e8-bf4c-4d60-9a64-b75cff245c16/d3inhf4-271fd765-dfec-44fc-9985-3538b0bceb36.png/v1/fit/w_428,h_615,q_70,strp/pokemon_tcg_water_texture_rip_by_ilkcmp_d3inhf4-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6Ii9mLzE3NjYyMmU4LWJmNGMtNGQ2MC05YTY0LWI3NWNmZjI0NWMxNi9kM2luaGY0LTI3MWZkNzY1LWRmZWMtNDRmYy05OTg1LTM1MzhiMGJjZWIzNi5wbmciLCJ3aWR0aCI6Ijw9NDI4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iI4lOGGSjqLxVgCF6idZIWsUVFIFGbhmmW7C45fXl3Q')";
    boxImage.style.backgroundColor = "#539ae2 "
  }
  
  backCard.style.display="none";
  carte.style.display="grid";
} }

boutonChoix.addEventListener("click", () => {

  if (choix.value) {
    let nomPoke = choix.value;
    createCard(nomPoke);
    choix.value = "";
}
})


// countPokemon()
// heavyPokemon()
// sortByWeight(4)
// getEvolutions("Bulbasaur")
// searchPokemon("Bulbasaur")
// searchPokemon("Proutivore")
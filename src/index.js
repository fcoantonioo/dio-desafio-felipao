let hero = ["Contas", 12000];
let elo = "";

if (hero[1] < 1000) {
  elo = "Ferro";
} else if (hero[1] >= 1000 && hero[1] < 2001) {
  elo = "Bronze";
} else if (hero[1] >= 2001 && hero[1] < 6001) {
  elo = "Prata";
} else if (hero[1] >= 6001 && hero[1] < 7001) {
  elo = "Ouro";
} else if (hero[1] >= 7001 && hero[1] < 8001) {
  elo = "Platina";
} else if (hero[1] >= 8001 && hero[1] < 9001) {
  elo = "Ascendente";
} else if (hero[1] >= 9001 && hero[1] < 10001) {
  elo = "Imortal";
} else {
  elo = "Radiante";
}

console.log("O Herói de nome "+ hero[0] +" está no nível de " + elo);
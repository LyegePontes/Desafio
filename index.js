// Definindo o nome e a experiência (XP) do herói
let nomeHeroi = "Legolas";
let xpHeroi = 9999;
let nivel;

// Determinando o nível com base na XP usando estrutura de decisão (condicional)
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibindo a mensagem final com o nome do herói e seu nível
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);

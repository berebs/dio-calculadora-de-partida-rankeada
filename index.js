let vitorias = 150;
let derrotas = 130;


function calcularSaldoPartidasRankeadas(vitorias, derrotas){
    let saldoPartidasRankeadas = vitorias - derrotas;
    return saldoPartidasRankeadas;
}

let saldo = calcularSaldoPartidasRankeadas(vitorias, derrotas);


let nivel;
if (saldo < 10) {
    nivel = "Ferro";
} else if (saldo >= 11 && saldo <= 20) {
    nivel = "Bronze";
} else if (saldo >= 21 && saldo <= 50) {
    nivel = "Prata";
} else if (saldo >= 51 && saldo <= 80) {
    nivel = "Ouro";
} else if (saldo >= 81 && saldo <= 90) {
    nivel = "Diamante";
} else if (saldo >= 91 && saldo <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

console.log(`O Herói tem um saldo de **${saldo}** e está no nível de **${nivel}**`);
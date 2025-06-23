let herois = [
    {nome:"Ash", xp: 7500},
    {nome:"Sr Incrivel", xp: 8500},
    {nome:"Misty", xp: 950},
    {nome:"Brock", xp: 2200}
]

for (let heroi of herois){
    let nivel = "";

    if (heroi.xp < 1000){
        nivel = "Ferro";
    } else if (heroi.xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.xp <= 8000) {
        nivel = "Platina";
    } else if (heroi.xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome **${heroi.nome}** está no nivel de **${nivel}**`)
}



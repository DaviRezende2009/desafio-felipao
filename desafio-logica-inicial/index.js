let nome = 'Davi'
let xp = 2000
if (xp <= 1000){
    ranking = 'Ferro'
}
else if (xp > 1000 && xp <= 2000 ){
    ranking = 'Bronze'
}
else if (xp > 2000 && xp <= 5000){
    ranking = 'Prata'
}
else if (xp  > 5000 && xp <= 7000){
    ranking = 'Ouro'
}
else if (xp > 7000 && xp <= 8000){
    ranking = 'Platina'
}
else if (xp > 8000 && xp <= 9000){
    ranking = 'Acendente'
}
else if (xp > 9000 && xp <= 10000){
    ranking = 'Imortal'
}
else if (xp >= 10001){
    ranking = 'Radiante'
}
console.log('O jogador de nome: ' + nome + 'é do ranking: ' + ranking)
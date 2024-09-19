// Desafio Felipao DIO
//2º Teste usando "Do While"

//usar const para texto ou números muito repetitivos
const nomeDoHeroi = "Casca de Bala"
const xpHeroi = 1002;

let nivelDoHeroi;

for(let i = 0; i <= 10000; i += 1000){
    if (xpHeroi >= i && xpHeroi < i + 1000){ 
switch (i) {
    case 0:
      nivelDoHeroi = "Ferro";
      break;
    case 1000:
    nivelDoHeroi = "Bronze";
      break;
    case 2000:
    nivelDoHeroi =  "Prata";
      break;
    case 5000:
    nivelDoHeroi = "Ouro";
      break;
    case 7000:
    nivelDoHeroi = "Platina";
      break;
    case 8000:
    nivelDoHeroi = "Ascendente";
          break;  
    case 9000:
    nivelDoHeroi = "Imortal";
          break;
    default:
        nivelDoHeroi = "Radiante"
    }
    break; // Saímos do loop assim que encontramos a faixa correta
}
}
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}.`);
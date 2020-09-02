// Desafio launchbase BootCamp.

// Cáculo de IMC.

// Declaração das variáveis:
// -------------------------//
 const nome = 'Fulano'
 const peso = '70.9'
 const altura = '1.61'
 const sexo = 'M'
//--------------------------//

// Cálculo de Massa corporal 
//--------------------------//
const IMC = peso / (altura * altura)
console.log(`O seu IMC é: ${IMC}`)
//--------------------------//

//Condicionais
//------------------------------------------------// 
if(IMC >= 25 ){
    console.log(`${nome}, você está acima do peso!` )
}else{
    console.log(`${nome}, você não está acima do peso!`)
}
//-------------------------------------------------//

//++++++++++++++++++++++++++++++++++++++++++++++++//

// Ideia futuras para melhora esse desafio:
// Solicitar ao usuário que informe nome, peso, altura e sexo.
// Armazenar esses dados em variáveis, não em const.
// Indicar ao usuário qual seria o IMC ideal.
// Indicar hábitos saúdaveis.

//++++++++++++++++++++++++++++++++++++++++++++++++//
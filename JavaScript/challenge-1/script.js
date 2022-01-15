// crie uma variável que receba uma string
let firstName = "Victor"
let lastName  = "Alcantara"

// Crie uma variável que receba um número;
let age  = "24"

// Crie uma variável com o ano atual e subtraia pelo número que você guardou;
let year = 2022
let yearBirth = year - age

// Agora mostre no console o resultado da soma das duas variáveis guardadas 
// anteriormente;
console.log(age,yearBirth)

//Mostre no console a mensagem "Estou mexendo no console.log";
console.log("Estou mexendo no console")

// Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano 
// que representa verdadeiro ou falso e mostre a saída no console;
let quartaFeira = false
console.log(quartaFeira)

// Exiba no console o tipo de dado da váriavel quartaFeira;
console.log(typeof quartaFeira)

//1 - Crie uma condição que exiba uma mensagem no console 
// se a idade for maior que 18
if(age > 18){
    console.log("Maior que 18 anos")
}

//2 - Crie uma condição que exiba uma mensagem no console 
// se você for maior de idade E a condição humana seja true
var human = true
if(age > 18 & human){
    console.log("Humano e maior que 18 anos")
} else{""}

// Crie uma condição que exiba uma mensagem no console se você fizer aniversário
// em Janeiro OU Dezembro
var monthBirth = "junho"
if(monthBirth == "janeiro" || monthBirth == "dezembro"){
    console.log("Aniservariante de janeiro ou dezembro")
}else{
    console.log("Não é aniversariante de janeiro ou dezembro")
}

//4 - Criar uma condição que exiba uma mensagem no console 
// se seu nome começar com a letra R
firstLetter = firstName.substring(0,1)
if(firstLetter == "V"){
    console.log("O nome começa com a letra "+'"'+firstLetter+'"')
}else{
    console.log("O nome não começa com a letra "+'"'+firstLetter+'"')
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome 
// tenha mais de 6 letras OU seu nome começar com a letra E
if(lastName.length > 6 || firstLetter == "E"){
    console.log("O sobrenome possui mais de 6 letras ou o nome começa com a letra E")
}
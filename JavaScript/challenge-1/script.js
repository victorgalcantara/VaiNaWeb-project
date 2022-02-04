///                   DESAFIO 1 - ESTRUTURA
// crie uma variável que receba uma string
let firstName = "Victor"
let lastName  = "Alcantara"

// Crie uma variável que receba um número;
let age  = 24

// Crie uma variável com o ano atual e subtraia pelo número que você guardou;
let year = 2022
let yearBirth = year - age

// Agora mostre no console o resultado da soma das duas variáveis guardadas 
// anteriormente;
console.log(age+yearBirth)

//Mostre no console a mensagem "Estou mexendo no console.log";
console.log("Estou mexendo no console")

// Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano 
// que representa verdadeiro ou falso e mostre a saída no console;
let quartaFeira = false
console.log(quartaFeira)

// Exiba no console o tipo de dado da váriavel quartaFeira;
console.log(typeof quartaFeira)

///                   DESAFIO 2 - LÓGICA
//1 - Crie uma condição que exiba uma mensagem no console 
// se a idade for maior que 18
if(age > 18){
    console.log("Maior que 18 anos")
}

//2 - Crie uma condição que exiba uma mensagem no console 
// se você for maior de idade E a condição humana seja true
var human = true
if(age > 18 && human){
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
    console.log("O nome começa com a letra",firstLetter)
}else{
    console.log("O nome não começa com a letra",firstLetter)
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome 
// tenha mais de 6 letras OU seu nome começar com a letra E
if(lastName.length > 6 || firstLetter == "E"){
    console.log("O sobrenome possui mais de 6 letras ou o nome começa com a letra E")
}

///                   DESAFIO 3 - LOOPS

// 2 - Criar um loop que conte de 10 até 1 usando WHILE
let lastN = 10
console.log(lastN,"to 1 \n Code by while")
while(lastN >= 1){
console.log("number ",lastN)
    lastN = lastN - 1
}

// 3 - Criar um loop que conte todos os números ímpares de 1 até 100
// odd numbers from 1 to 100 with WHILE and FOR
let firstN2 = 1
console.log("Odd numbers from 1 to 100 \n Code by while")
while(100 >= firstN2){
    console.log("number ",firstN2)
    firstN2=firstN2+2
}
console.log("Odd numbers from 1 to 100 \n Code by for")
// com for
for(let i = 1;i <= 100;i = i + 2)
    console.log("number ",i)

// 4 - Criar um loop que conte todos os números pares de 0 a 100
// even numbers from 1 to 100 with WHILE and FOR
let firstN = 2
console.log("Even numbers from 1 to 100 \n Code by while")
while(100 >= firstN){
   console.log("number ",firstN)
   firstN=firstN+2
}

console.log("Even numbers from 1 to 100 \n Code by for")
for(let i = 2;i <= 100;i=i+2)
   console.log("number ",i)

///                   DESAFIO 4 - FUNÇÕES

//1 - crie uma função que exiba uma mensagem no console
function msg(x){
    console.log("Bom dia",x+"!")
}

msg("Mundo")
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function myname(name){
    console.log("Meu nome é",name)
}

myname("Victor")

//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console
function infos(movie,music){
    console.log("Meu filme favorito é",movie,"e minha música favorita é",music)
}

infos("As branquelas","quem tem um amigo tem tudo (Emicida)")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triple(x){
    return x*3
}

console.log(triple(9))

///                   DESAFIO 5 - ARRAY

 // Crie um array que receba 5 itens e exiba no console.

 let idade = [22,25,33,21,23]

 // Utilize um método para adicionar um nome ao inicio do array.
idade.unshift(25)
console.log(idade)

idade.splice(1,1,28)
console.log(idade)

 // Utilize um método para remover o último nome do array.
idade.splice(5,1)
console.log(idade)

// Utilize um método para adicionar dois nomes ao fim do array.
idade.splice(5,2,"nome1","nome2")
console.log(idade)

// Utilize um método para remover o primeiro nome do array.
idade.splice(0,1)
console.log(idade)

// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]
// numbers.sort(numbers)
// console.log(numbers)

///                   DESAFIO 5 - ARRAY E OBJETO

// Crie um objeto que receba ao menos três propriedades sobre você.
let me = {
    name: "Victor",
    age: 23,
    profession: "sociology"
}
console.log(me.age)
// Adicione uma nova propriedade sem alterar seu objeto inicial.
me.team = "Santos"
console.log(me)

// Remova uma propriedade desse objeto.
delete me.team

//Mostre no console todas as propriedades desse objeto.
console.log(me)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
let cadastro = [
    {
        client: 1
    },
    {
        client: 2
    },
    {
        client: 3
    },
    {
        client: 4
    },
    {
        client: 5
    }
]
console.log(cadastro)

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
cadastro[0] = {
    nome: "Victor",
    idade: 15,
    humano: true,
    telefone: 40028922,
    amigos: ["João","José","Renildo"]
}

cadastro[1] = {
    nome: "Eduarda",
    idade: 17,
    humano: true,
    telefone: 40028322,
    amigos: ["Victor","José","Renildo"]
}

cadastro[2] = {
    nome: "Renildo",
    idade: 20,
    humano: true,
    telefone: 40024922,
    amigos: ["João","Victor","Eduarda"]
}

cadastro[3] = {
    nome: "João",
    idade: 19,
    humano: true,
    telefone: 40023922,
    amigos: ["Victor","José","Renildo"]
}

cadastro[4] = {
    nome: "José",
    idade: 21,
    humano: true,
    telefone: 43028922,
    amigos: ["João","Eduarda","Renildo"]
}

//Na propriedade amigos, adicione ao menos 4 itens.
cadastro[0].amigos.unshift("Nalva","Antônio","André","Marília")
cadastro[1].amigos.unshift("Nalva","Antônio","André","Marília")
cadastro[2].amigos.unshift("Nalva","Antônio","André","Marília")
cadastro[3].amigos.unshift("Nalva","Antônio","André","Marília")


console.log(
    cadastro[0].amigos
    )

// Mostre no console o nome de um amigo de cada lista.
console.log(
    "\n Lista",1,cadastro[0].amigos[0],
    "\n Lista",2,cadastro[1].amigos[1],
    "\n Lista",3,cadastro[2].amigos[2],
    "\n Lista",4,cadastro[3].amigos[3]
    )
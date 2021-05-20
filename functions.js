//-------------------------------------------------------------------------------

// Functions*********************************************************************

/*function createPhrases(){
    console.log("Frase 1");
    console.log("Frase 2");
    console.log("Frase 3");
}

//createPhrases();


const sum = function(number1, number2){
    let total = number1 + number2;
    return total;
}

let number1 = 25;
let number2 = 34;

console.log(`Valor 1: ${number1}`);
console.log(`Valor 2: ${number2}`);
console.log(`Soma: ${sum(number1, number2)}`);
*/

//-------------------------------------------------------------------------------

// Function Scope****************************************************************

/*let subject = 'create video';

function createThink(){
    let subject = 'study';
    return subject;
}

console.log(createThink(subject));
console.log(subject);
*/

//-------------------------------------------------------------------------------

//Arrow Function*****************************************************************

/*const sayMyName = () => {
    console.log('Victor');
}

sayMyName();
*/

//-------------------------------------------------------------------------------

//CallBack***********************************************************************

/*function sayMyName2(name2){
    console.log('Antes da CallBack');
    name2();
    console.log('Depois da CallBack')
}

sayMyName2(
    ()=>{
        console.log('Dentro da CallBack');
    }
);
*/

//-------------------------------------------------------------------------------


//Funcao Construtora*************************************************************

function Person(name){
    this.name = name;
    this.walk = function(){
        return this.name + " está andando";
    };
}

const victor = new Person("Victor");
const lucas = new Person("Lucas");

console.log(victor.walk());
console.log(lucas.walk());

//-------------------------------------------------------------------------------
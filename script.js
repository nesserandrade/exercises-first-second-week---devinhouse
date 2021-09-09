alert('Olá mundo!')

var sobrenome1 = prompt('Qual o seu último sobrenome?')
alert('Olá, ' + sobrenome1.toUpperCase() + '. Seu sobrenome contém ' + sobrenome1.length + ' letras.')

var valorInicial = parseInt(prompt('Qual o valor inicial da PA?'))
var raiz = parseInt(prompt('Qual o valor da raiz da PA?'))

function calcularPA(a,b) {
    for (let index = 1; index <= 10; index++) {
    alert('Termo ' + index +' = ' + a)
    a+=b
    }
}

calcularPA(valorInicial, raiz)

function confirmarAcao() {
    confirm("Deseja continuar?");
  }

var nome = prompt('Qual o seu nome?')

if (!nome) {
    alert('Você não digitou um nome')
}
else {
    alert(nome)
}

var nome1 = prompt('Qual o seu nome?')
var idade = prompt('Qual a sua idade?')
var esporte = confirm('Gosta de esportes?')

console.log (nome1 + ' ' + idade + ' ' + esporte)

var nome2 = prompt('Qual o seu nome?')
var sobrenome = prompt('Qual o seu sobrenome?')
alert(nome2 + ' ' + sobrenome)

var anoNascimento = prompt('Qual o seu ano de nascimento?')
var anoAtual = prompt('Qual o ano atual?')
var idade = anoAtual - anoNascimento

alert('Sua idade é ' + idade + ' ou ' + (idade-1))

var operador = prompt('Digite o operador matemático.')
var num1 = parseFloat(prompt('Digite o primeiro número.'))
var num2 = parseFloat(prompt('Digite o segundo número'))

if (operador == "+") {
    var calculo = num1 + num2
    }
if (operador == "-") {
    var calculo = num1 - num2
    }
if (operador == "*") {
    var calculo = num1 * num2
    }
if (operador == "/") {
    var calculo = num1 / num2
    }
alert('O resultado do cálculo é ' + calculo)

var now = new Date()
var currentHours = ('0'+now.getHours()).substr(-2)
var currentMinutes = ('0'+now.getMinutes()).substr(-2)
var time = currentHours + ":" + currentMinutes
alert(time)

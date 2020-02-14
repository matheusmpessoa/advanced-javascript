# JavaScript Foundation 2

## Execution context
O contexto de execução - execution context descreve o conceito no qual o ambiente  é executado. É apenas um set de objetos que é criado e usa a engine do JavaScript em runtime.

Existem tres tipos de código ECMAScript: *global code*, *function code* e *eval code*. Todos os tres tipos possuem uma relação que formam a stack de execução - *execution stack*.

## Lexical environment
Lexical environment é apenas um conceito lógico.

Também conhecido como *scope*, lexical context determina o jeito que a informação vai viajar através de sua aplicação.

Envolve o conceito da diferença de uso do *let* e *var*.

## Hoisting
Hoisting é o comportamento de mover declarações (variáveis ou funções) para o topo do escopo.

Existem declarações de escopo global, encadeadas em funções e strict mode.

É bom evitar o hoisting para assim deixar o código 'previsível'.

## Diferentes funções

### Function expression
Função declarada que não vai estar acessível em linhas de código anteriores à linha de execução atual. Só está disponivel em runtime, ou seja, no momento em que a linha for corrida pelo código.
```js
alert(foo());
var foo = function() { 
  return 5;
}
```

### Function declaration
É uma função que está sempre disponível.
```js
alert(foo());
function foo() {
  return 5;
}
```

## Spread operator
Permite que expressões expandam o conteúdo de arrays em locais onde múltiplos elementos são esperados.
```js
var mid = [3, 4];
var arr = [1, 2, ...mid, 5, 6];
console.log(arr);
```
resultado: [1, 2, 3, 4, 5, 6]

É possível também: copiar arrays, concatenar arrays com string, operações matemáticas e transformar string em um array de caracteres.

## IIFE - Immediately-invoked Function Expression
Um IIFE é um jeito de executar funções imediatamente logo que são criadas. IIFEs são muito usadas porque elas não poluem o objeto global e possuem um jeito simples de isolar declarações de variáveis.

Function declarations querem um nome, enquanto function expressions não são necessárias.

```js
(function() {
  /* */
})()
```

Ou

```js
(() => {
  /* */
})()
```

## This
No JavaScript se usa a palavra-chave *this* como um atalho, uma referência a ele mesmo, ou seja, o sujeito no contexto ou o sujeito do código em execução.

Todas as funções em JavaScript têm propriedades, assim como os objetos. Quando uma função é executada, ela obtém a propriedade *this* — uma variável com o valor do objeto que invoca a função na qual *this* é usado.

*this* pode ser usado em callback, closure, atribuído a uma variável e métodos emprestados.

## call() apply() bind()

### call()
Chama o método de um objeto, substituindo outro objeto pelo objeto atual.

### apply()
Chama a função, substituindo o objeto especificado pelo valor this da função e a matriz especificada pelos argumentos da função.

### bind()
Para uma determinada função, cria uma função vinculada que possui o mesmo corpo que a função original. O objeto this da função vinculada está associado ao objeto especificado e possui os parâmetros iniciais especificados.

## Currying
Currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função curried.
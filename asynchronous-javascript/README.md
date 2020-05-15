# Asynchronous JavaScript
Assíncrono significa que ainda não temos a informação no momento, mas quando a informação existir ela é retornada.

O Node permite acessar coisas além do mundo JavaScript.

É possível fazer o código *sync* ou *assync*.

## Como funciona o JavaScript
JavaScript é uma linguagem single thread que pode ser *non-blocking*.

### O que é um programa?
Um programa é basicamente algo que tem funcionalidades.

Tem também que possuir as características de:
* Alocar memória
* Parse e execute (ler e escrever comandos)

### JavaScript runtime
Após executar o *call-stack*, é executado as web APIs do JS.
* DOM document
* AJAX (XMLHtppRequest)
* Timeout (setTimeout)

## Callbacks
Callback é uma função que é usada como "callback". Ela é tipicamente passada como argumento de outra função e/ou chamada quando um evento for acontecido, ou quando uma parte de código receber uma resposta de que estava à espera.

## Promises
Uma promise é um objeto que talvez produza um valor único no futuro. Pode ser um valor já 'resolvido' ou um resultado que ainda não está pronto.

Existem 3 possíveis estados de promises:
* fullfilled (resolved)
* rejected
* pending

## Async function
Uma função async é uma função que retorna uma promise.

---

## Spread Operator
Esse operador permite que expressões expandam o conteúdo de arrays em locais onde múltiplos elementos são esperados.

```js
var partes = ['ombros', 'joelhos'];
var letra = ['cabeca', ...partes, 'e', 'dedos'];
console.log(letra);
// ["cabeca", "ombros", "joelhos", "e", "dedos"]
```

É possível utilizar esse operador para muitos casos.

### Cópia de arrays
```js
var arr = ['a', 'b', 'c'];
var arr2 = [...arr];
console.log(arr2);
// ['a', 'b', 'c']
```

### Concatenação de arrays
```js
var arr = ['a', 'b', 'c'];
var arr2 = ['d', 'e', 'f'];
arr = [...arr, ...arr2];
console.log(arr);
// ['a', 'b', 'c', 'd', 'e', 'f']
```

### Operações matemáticas
```js
var arr = [2, 4, 8, 6, 0];
var max = Math.max(...arr);
console.log(max);
```

### String para Array
```js
var str = "hello";
var chars = [...str];
console.log(chars); 
// ['h', 'e',' l',' l', 'o']
```

---

## Finally
*.finally()* é utilizado quando um pedaço de código precisa ser executado independente de um sucesso/erro de uma promise executada previamente.

## Job queue
É uma maneira de executar o resultado de uma função assíncrona o mais rápido possível, em vez de ser colocada no final da pilha de chamadas.

As promises que resolverem antes que a função atual termine serão executadas logo após a função atual.

---

## Parallel
A primeira maneira de você querer que suas três promessas sejam executadas é *parallel*. Pelo Javascript ser uma linguagem de *single-thread*, na verdade, apenas uma promessa está sendo executada por vez. 

O que significa *parallel* é que todos os seus valores resolvidos serão retornados ao mesmo tempo. Exemplo: se houver três *promises* e elas levarem 3,4,2 segundos para serem concluídas - todas as três serão retornadas juntas após 4 segundos, que é o maior valor.

*Promise.all* pega um array de promises como argumento e resulta em um array de valores resolvidos depois de cada promise ser resolvida.

## Race
Com o *race* penas uma das três *promises* que você mantém na matriz e passa para a função será retornada. A *promise* que será devolvida será a que for resolvida mais rapidamente.

## Sequence
Com o sequence, as *promises* são resolvidas uma por uma, à medida que o código sequencial seria executado.

O tempo total gasto seria a soma de todos os tempos individuais das promessas.

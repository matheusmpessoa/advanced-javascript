# Closures and protoypal inheritance

## Escopo léxico
O escopo léxico é baseado nas variáveis e blocos de escopo definidos em tempo de escrita do código. Logo, ele é definido em tempo de compilação. Assim como blocos e funções podem ser inseridos dentro de outros blocos ou funções, o mesmo vale para escopos. 

Exemplo de dois escopos, o definido pela função soma e o global. Ao chamar a função, a engine encontra dentro do escopo da função soma apenas a variável b, como ela também necessita do valor da variável a, uma busca é feita no escopo externo, no caso, o global. Encontrado o valor, a operação segue normalmente, retornando o valor da soma das variáveis.

```js
var a = 2;
function soma() {
    var b = 3;
    return a + b;
}
console.log(soma());    // 5
```

## Closures
Closure é a forma de fazer com que as variáveis dentro de uma função sejam privadas e persistentes. É uma regra escopada dentro da função que referencia variáveis livres no contexto léxico. Uma clausura ocorre normalmente quando uma função é declarada dentro do corpo de outra, e a função interior referencia variáveis locais da função exterior. Em tempo de execução, quando a função exterior é executada, então uma clausura é formada, que consiste do código da função interior e referências para quaisquer variáveis no âmbito da função exterior que a clausura necessita.

```js
function pai(){
   var x = 1;
   function filho(){
     console.log(x);
     x++;
   }
   return filho;
}

var contador = pai();
contador();    // 1
contador();    // 2
contador();    // 3
```

A função filho possui uma referência ao escopo da função pai, e a essa referência nós damos o nome de closure.

O escopo léxico faz com que a função filho tenha acesso às variáveis definidas pela função pai. A função filho é retornada como um valor (no caso, retornamos a função à qual filho faz referência).

Exemplo: módulos são estruturas de código que fazem bom uso das closures.

## High order functions
Higher-order functions são funções que assumem outras funções como argumentos ou retornam funções como seus resultados.

Tomar uma outra função como argumento geralmente é chamada de função de retorno de chamada, porque é chamada de volta pela função de ordem superior.

Existem muitos usos, mas geralmente eles são usados ​​para tornar o código mais geral ou flexível, parametrizando o comportamento. Muito comum em bibliotecas ou estruturas.

```js
function greaterThan(n) {
  return function(m) {
    return m > n;
  };
}
```

## Prototypal inheritance
Inheritance (herança) refere-se a capacidade de um objeto de acessar métodos e outras propriedades de outro objeto.

Objetos podem herdar coisas de outros objetos. A herança em JavaScript funciona através de algo chamado prototypes (protótipos) e essa forma de herança é chamada de prototypal inheritance.

```js
console.log(Object); // -> ƒ Object() { [native code] }
console.log(Array); // -> ƒ Array() { [native code] }
console.log(Function); // -> ƒ Function() { [native code] }
```

Sempre que você cria um object literal, o mecanismo JavaScript efetivamente chama um *new Object()*. Um object literal é um object criado escrevendo {}, como em var obj = {} ;. Portanto, um object literal é uma chamada implícita para *Object*.

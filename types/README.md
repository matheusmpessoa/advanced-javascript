# Types

## Tipos existentes

### Primitivos
Um valor primitivo é um dado que é representado diretamente no nível mais baixo da implementação da linguagem.

Tipo primitivo é aquele dado que não é representado através de um Objeto e, por isso, não possui métodos. Eles também tem a característica de serem imutáveis (não podem ter o seu valor modificado).

Tipos primitivos são comparadas por valor. Dois valores são estritamente iguais se tiverem o mesmo valor.

Existem 6 tipos primitivos:
* Number - 5
* Boolean - true/false
* String - 'Matheus'
* undefined
* null
* Symbol

### Não Primitivos
Tipos não primitivos são objetos.

Objetos não são comparados por valor. Mesmo que dois objetos tenham as mesmas propriedades e valores, eles não são estritamente iguais. O mesmo vale para matrizes. Mesmo se eles tiverem os mesmos elementos que estão na mesma ordem, eles não são estritamente iguais.

Exemplos de tipos não-primitivos:
* Object - {}
* Array - []
* Function(){}

## Diferença entre null e undefined
*undefined* significa que uma variável foi declarada, mas ainda não foi atribuída um valor.

*null* é um valor de atribuição. Pode ser atribuído a uma variável como uma representação sem valor.

Além disso possuem tipos distintos: *undefined* é o próprio tipo (undefined) enquanto *null* é um objeto.

## Pass-by-value e pass-by-reference

### Tipos por valor e por referência
Integer é um tipo por valor. Uma variável de tipo por valor armazena o valor nela própria.

```js
int X = 1;
```

*String* é um tipo por referência. A variável Y contém um valor, mas o valor da variável Y não é "1". O valor da variável Y é uma referência para um objeto string.
```js
String Y = "1";
```

### Diferença
Na passagem por valor, é passada uma cópia do valor da variável.

Na passagem por referência, é passada uma referência à própria variável.

## Coercion
Coerção de tipo é o processo de conversão de valor de um tipo para outro (como string para number, object para boolean e assim por diante). Independente do tipo, seja primitivo ou um objeto, é possível fazer a coerção de tipo.

```js
var x = '3' * '4';
12
```

[Comparações de igualdade e uniformidade - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness)

## == e ===
Strict equality (===) and strict inequality (!==) consideram apenas valores que têm o mesmo tipo iguais.
A igualdade normal (==) e a desigualdade (! =) tentam converter valores de tipos diferentes antes de compará-los como com a igualdade estrita.

## Static vs dynamic typing
* *Static*: tipos verificados antes do tempo de execução.
* *Dynamic*: tipos verificados em tempo real, durante a execução.

Lnguagem compilada terá melhor desempenho em tempo de execução se for digitada estaticamente, porque o conhecimento dos tipos permite a otimização do código da máquina.

Linguagens de tipo estático têm melhor desempenho em tempo de execução intrinsecamente por não ter a necessidade de verificar tipos dinamicamente durante a execução, é verificado antes de executar.

### Linguagens dinâmicas
* JavaScript
* PHP
* Ruby
* Python
* Erlang

### Linguagens estáticas
* Java
* Haskell
* C
* C++

## Weakly vs strongly typing
Static typing é onde o tipo é vinculado à variável. Os tipos são verificados no momento da compilação.

Dynamic typing é onde o tipo está vinculado ao valor. Os tipos são verificados no tempo de execução.

# Object Oriented Programming

## OOP vs FP
A programação orientada a objetos (OOP) é ​​um paradigma de programação baseado no conceito de "objetos", que são estruturas de dados que atributos (características) e métodos (ações).

A programação funcional (FP) é um paradigma de programação, um estilo de construção da estrutura e dos elementos que trata funções e evita a mudança de estado e dados mutáveis.

## Factory functions
A factory function é uma função que não é uma classe ou constructor que retorna um novo objecto. Em JavaScript, qualquer function pode retornar um object. Quando isso acontece sem a palavra *new*, é uma factory function.

## Constructor functions
O método *Object.create()* cria um novo objeto, utilizando um outro object existente como protótipo para o novo object a ser criado.

```js
Object.create(proto[, propertiesObject])
```

O conceito de lexical e global é aplicado no arquivo *constructor-functions.ts* com um bom exemplo e explicação.

## Public vs private
Uma função *private* só pode ser usada dentro da função ou módulo pai. Uma função *public* pode ser usada dentro ou fora dela. As funções *public* podem chamar funções *private* dentro delas, normalemente geralmente compartilhando o mesmo escopo.

Restringir o acesso de algumas funções, é útil ao criar scripts modulares.

## POO
A programação orientada a objetos traz uma ideia de representar cada elemento de um objeto, ou classe. Esse tipo de representação procura aproximar o sistema que está sendo criado ao que é observado no mundo real, e um objeto contém características e ações,

Uma das vantagens é a reutilização de código, redução da complexidade, leitura e manutenção. 

## 4 pilares da POO

### Abstração
A abstração consiste em criar uma representação de um objeto real, temos que imaginar o que esse objeto irá realizar dentro de nosso sistema.

São três pontos que devem ser levados em consideração na abstração.
* Identidade (nome do objeto)
* Propriedades (características)
* Métodos (ações que o objeto irá executar)

### Encapsulamento
Encapsulamento é um dos elementos que adicionam segurança à aplicação em uma programação orientada a objetos pelo fato de esconder as propriedades. *getters* e *setters*, que retornam e setam o valor da propriedade, essa ação evita o acesso direto a propriedade do objeto, adicionando uma outra camada de segurança à aplicação.

### Herança
Se trata de reaproveitar o código reutilizando métodos e propriedades de outros objetos.

Dependendo da linguagem é possível realizar heranças múltiplas.

### Polimorfismo
O polimorfismo consiste na alteração do funcionamento interno de um método herdado de um objeto pai. O polimorfismo esta ligado diretamente a herança.

# JavaScript Foundation

## Interpretador
* Transforma uma declaracao por vez.
* Não intermedia o object code gerado, portanto é eficiente na memória.
* Continua traduzindo o programa até o primeiro erro ser encontrado, parando a aplicacão.
* Linguagens como Ruby, PHP e Python.

## Compilador
* Scaneia o programa inteiro e traduz o mesmo em código para máquina.
* Leva mais tempo para analisar o código fonte, mas com uma execucao mais rápida.
* Linguagens como C, C++ utilizam compiladores.

## Engine JavaScript
A engine mais popular e a V8 do Google. Utilizada dentro do Google Chrome e Node.

A engine consiste de dois principais componentes:
- Memory Heap — é onde a alocação de memória acontece.
- Call Stack — onde seus stack frames(quadros de pilha) estão enquanto seu código e executado, controlando quais funcoes estao atualmente ativas e sendo processadas.

## Stack Overflow
Stack Overflow ocorre quando existe uma função recursiva (uma função que chama ela mesma) sem um ponto de saída. Se o numero de chamadas crescer ao ponto de exceder a quantidade de memoria alocada, um erro de Stack Overflow (estouro da pilha) ocorrerá.

A função abaixo vai ser executada até o navegador estourar o limite de chamadas que ele consegue acomodar ate aparecer uma mensagem de erro.
```js
function inception() {
    inception();
}

inception();
```

## Loop de eventos
Loop de eventos ocorre quando o seguinte ciclo acontece: quando a pilha de chamadas está vazia, ele tira a primeira tarefa da fila de eventos e começa a processá-la. Os itens restantes precisam aguardar o fim do processamento para que seja a vez deles, seguindo sempre a ordem da fila.

## Garbage collection
Os valores do JavaScript são alocados quando coisas (objetos, strings, etc) são criadas e automaticamente liberadas quando não são mais usadas. O processo de liberar quando não é mais utilizado se chama *garbage collection*.

JavaScript garbage-collect cuida/manipula das variáveis, assim como acontece no Java.

## Memória
No JavaScript não se aloca memória, se criam objetos (é o que o *new* faz, cria um objeto). Funções também são objetos em JavaScript.

## Memory leak
Memory leak - vazamento de memória ocorre quando é criado uma instancia que fica armazenada na memória mas não pode mais ser acessado pelo código em execução.

## Single Thread
JavaScript é uma linguagem single-thread, ou seja, possui uma única *stack* e um *memory heap* (espaço na memória). Como esperado, executa o código na ordem e finaliza executando uma parte do código antes de seguir para o próximo.

## Node
Runtime JavaScript criada na v8 do Google Chrome engine.

Foi criada para ser executada fora do navegador, criando assim mais possibilidades para os desenvolvedores, pois é uma engine mais poderosa.

Possui as características de ser *non-blocking* e *single-thread*, ou seja, uma thread é responsável por executar o código JavaScript da aplicação, enquanto outras linguagens a execução é *multi-thread*.

Node é leve, de rápido desenvolvimento e possui flexibilidade em implementação de serviços e componentes de arquiteturas como a de microsserviços e serverless.
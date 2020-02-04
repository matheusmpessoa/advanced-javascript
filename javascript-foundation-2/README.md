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


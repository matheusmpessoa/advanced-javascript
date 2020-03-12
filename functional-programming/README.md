## Functional Programming
A programação funcional é um paradigma de programação - um estilo de construção da estrutura e dos elementos de programas de computador - que trata a computação como a avaliação de funções matemáticas e evita a mudança de estado e dados mutáveis.


### Pure functions
Funcoes puras sao funcoes que:
* Recebem a mesma entrada, e sempre retornam a mesma saída com base nessa entrada.
* Não produz side effects.
* Sao extremamente independentes - fáceis de mover, refatorar e reorganizar em seu código, tornando seus programas mais flexíveis e adaptáveis ​​a mudanças futuras.

### Side effects
Uma indicação de que uma função é impura é se faz sentido chamá-la sem usar seu valor de retorno. Para funções puras, isso é um *noop*.


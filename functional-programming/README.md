# Functional Programming
A programação funcional é um paradigma de programação - um estilo de construção da estrutura e dos elementos de programas de computador - que trata a computação como a avaliação de funções matemáticas e evita a mudança de estado e dados mutáveis.

## Pure functions
Funcoes puras sao funções que:
* Recebem a mesma entrada, e sempre retornam a mesma saída com base nessa entrada.
* Não produz side effects.
* Sao extremamente independentes - fáceis de mover, refatorar e reorganizar em seu código, tornando seus programas mais flexíveis e adaptáveis ​​a mudanças futuras.

Uma indicação de que uma função é impura é se faz sentido chamá-la sem usar seu valor de retorno. Para funções puras, isso é um *noop*.

## Side effects - efeitos colaterais
*side effects* é qualquer alteração no estado da aplicação que seja observável fora da função chamada que não seja seu valor de retorno.

Os efeitos colaterais incluem: Modificar qualquer variável externa ou propriedade de objeto (uma variável global ou uma variável na cadeia de escopo da função pai).

## Can everything be pure? - Tudo pode ser puro?
O grande objetivo de funções puras é reduzir *side effects*.

Atualmente é possível fazer chamadas HTTP, manipular DOM e comunicar com servidores.

## Responsabilidades de uma função pura
* Realizar uma tarefa
* Retorno de algo, input > output
* Pura
* Sem estado compartilhado com outras funções
* Estado imutável
* Composable - realmente tenha um profundo significado
* Previsível

## Idempotence
É quando uma função que sempre faz ou retorna o que esperamos (lembrando funções puras).

Exemplo: Ao deletar um usuário em um banco de dados, é possível realizar essa ação apenas uma vez.

Quando criamos uma ação idempotence temos o comportamento *predictable - previsível*.

## Imperativo, declarativo e reativo

### Imperativo
Baseado em instruções e comandos. Foca no *como* e não *o que* precisa ser feito. É neste paradigma que é baseado os laços de repetição, estruturas condicionais, atribuição de valor à variáveis e controle de estado.

Operadores *if*, *while*, *switch* e *for* fazem parte das linguagens imperativas.

### Declarativo
Programação declarativa descreve o que ele faz e não como seus procedimentos funcionam, reduzindo assim efeitos colaterais, mutabilidade, mais legibilidade.

Programação muito eficas e comum no front-end.

### Reativo
Em sistemas reativos a aplicação *responde* ou *reage* a eventos disparados por interações do usuário ou situações comuns em aplicações como falhas, sobrecarga de requisições, etc. Retorna apenas o que foi solicitado e/ou respondendo de maneira adequada a cada situação.

Basicamente, os sistemas reativos precisam atender a quatro principais características: elasticidade, resiliência, responsividade e ser orientado a mensagens.

O principal apelo para a adoção desse paradigma de programação é o contínuo crescimento da Internet e demanda por aplicações com grande quantidade de usuários, quantidade de requests, dados, e grande exigência de performance e tempo de resposta.

## Imutabilidade
Quando dados são imutáveis, eles não sofrem alterações depois de serem criados. 

Se quiser modificar um objeto imutável, ao invés de tentar modificar o seu valor, criamos um novo objeto com um novo valor. Assim, o antigo objeto imutável mantém seu estado inalterado.


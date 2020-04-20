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

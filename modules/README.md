# Modules
Um módulo é apenas um arquivo. Um script é um módulo.

Os módulos podem carregar um ao outro e usar diretivas especiais de *import* e *export* para trocar funcionalidades, chamar funções de um módulo a partir de outro.

## Export
Nome de variáveis ​​e funções que devem ser acessíveis de fora do módulo atual.

```js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

## Import
Permite a importação de funcionalidades de outros módulos.

```js
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
```

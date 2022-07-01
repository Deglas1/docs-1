const a = require("aoi.js");
const b = new.aoijsBot({
token: process.env.token,
prefix: "docs!",
intents: "GUILDS",
})

b.loopCommand({
executeOnStartUp: true,
every: $sum[$ping+$executionTime],
code: `$setVar[a;$sum[1;$getVar[a]]]
$writeFile[functions/usd$tolowercase[$replaceText[$djsEval[client.functionManager.functions[$getVar[a]];yes];$;]];

# $get[f]

Рассказ о функции и о том как онa работает.

### Использование
 
```php
$$get[f]$djseval[client.functionManager.usage.get($get[f]);yes]
```


### Опции


| Опция | Описание | Тип | Обязательно? |
|--------|-------------|------|----------|
| param 1 | Это показывает `param 1` | ТЕКСТ | да |
| param 2 | Это показывает `param 2` | ЧИСЛО | нет |


## Пример(ы)

```javascript
bot.command({
  name: 'function-name',
  code: `
  $function[index;aoijs]
  `
// Возвращает: ...
});
```
$let[f;$djsEval[client.functionManager.functions[$getVar[a]];yes]]

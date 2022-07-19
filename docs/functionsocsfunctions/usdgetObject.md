
# $getObject 

Выдаёт ранее созданный объект

### Использование
 
```php
$getObject
```

## Пример(ы)

```javascript
bot.command({
  name: 'object',
  code: `
  $getObject
  $createObject[{ "название": "значение" }]
  `
// Возвращает: { "название": "значение" }
});
```

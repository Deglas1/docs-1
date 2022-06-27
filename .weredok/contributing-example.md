
# $function 

Рассказ о функции и о том как онa работает.

### Использование
 
```php
$function[опция 1;опция 2?]
```

### Опции


| Опция | Описание | Тип | Обязательно? |
|--------|-------------|------|----------|
| param 1 | It shows `param 1` | string | yes |
| param 2 | It shows `param 2` | number | no |


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

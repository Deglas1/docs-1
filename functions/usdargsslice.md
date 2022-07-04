# $argsSlice
desc
### Использование
```php
$argsSlice[text;from?;to]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| from |  |  | Нет | 
| to |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$argsSlice',
  code: `
$argsSlice[hello, my name is weredok, and you?;2;5]`
// Возвращает: my name is weredok
})
```
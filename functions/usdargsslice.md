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
$argsSlice[text;from?;to]`
// Возвращает: ...
})
```
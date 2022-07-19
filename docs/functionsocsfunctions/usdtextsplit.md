# $textSplit
desc
### Использование
```php
$textSplit[text;sep?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| sep |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$textSplit',
  code: `
$textSplit[text;sep?]`
// Возвращает: ...
})
```
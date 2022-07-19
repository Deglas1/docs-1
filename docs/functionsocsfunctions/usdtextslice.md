# $textSlice
desc
### Использование
```php
$textSlice[text;from?;to]
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
  name: '$textSlice',
  code: `
$textSlice[text;from?;to]`
// Возвращает: ...
})
```
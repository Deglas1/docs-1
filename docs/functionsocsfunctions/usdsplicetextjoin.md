# $spliceTextJoin
desc
### Использование
```php
$spliceTextJoin[text;splitter;sep1?;';sep2?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| splitter |  |  | Да | 
| sep1 |  |  | Нет |
| ' |  |  | Да |
| sep2 |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$spliceTextJoin',
  code: `
$spliceTextJoin[text;splitter;sep1?;';sep2?]`
// Возвращает: ...
})
```
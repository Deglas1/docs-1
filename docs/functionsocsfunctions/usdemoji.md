# $emoji
desc
### Использование
```php
$emoji[emoji;option]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| emoji |  |  | Да | 
| option |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$emoji',
  code: `
$emoji[emoji;option]`
// Возвращает: ...
})
```
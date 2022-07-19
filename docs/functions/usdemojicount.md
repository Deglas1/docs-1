# $emojiCount
desc
### Использование
```php
$emojiCount[guildID;type;force?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Да | 
| type |  |  | Да | 
| force |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$emojiCount',
  code: `
$emojiCount[guildID;type;force?]`
// Возвращает: ...
})
```
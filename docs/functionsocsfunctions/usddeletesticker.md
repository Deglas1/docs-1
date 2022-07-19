# $deleteSticker
desc
### Использование
```php
$deleteSticker[guildId;sticker]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| sticker |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$deleteSticker',
  code: `
$deleteSticker[guildId;sticker]`
// Возвращает: ...
})
```
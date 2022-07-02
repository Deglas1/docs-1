# $addEmoji
desc
### Использование
```php
$addEmoji[guildId;url;name;returnEmoji?;reason;...roles]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| url |  |  | Да | 
| name |  |  | Да |
| returnEmoji |  |  | Нет |
| reason |  |  | Да |
| ...roles |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$addEmoji',
  code: `
$addEmoji[$guildID;https://cdn.discordapp.com/emojis/973277149945544734;715;yes;$username;$highestrole[$guildid;$authorid]]`
// Возвращает: :715:
})
```
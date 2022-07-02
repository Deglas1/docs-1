# $muteUser
desc
### Использование
```php
$muteUser[guildId;userId;mute?;reason]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| userId |  |  | Да | 
| mute |  |  | Нет |
| reason |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$muteUser',
  code: `
$muteUser[guildId;userId;mute?;reason]`
// Возвращает: ...
})
```
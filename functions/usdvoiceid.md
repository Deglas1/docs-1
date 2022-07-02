# $voiceID
desc
### Использование
```php
$voiceID[userID?;guildID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userID |  |  | Нет | 
| guildID |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$voiceID',
  code: `
$voiceID[userID?;guildID?]`
// Возвращает: ...
})
```
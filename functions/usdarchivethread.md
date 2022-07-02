# $archiveThread
desc
### Использование
```php
$archiveThread[threadID;channelID?;archive?;reason]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| threadID |  |  | Да | 
| channelID |  |  | Нет | 
| archive |  |  | Нет |
| reason |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$archiveThread',
  code: `
$archiveThread[threadID;channelID?;archive?;reason]`
// Возвращает: ...
})
```
# $isServerMuted
desc
### Использование
```php
$isServerMuted[userID?;guildID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userID |  |  | Нет | 
| guildID |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isServerMuted',
  code: `
$isServerMuted[userID?;guildID?]`
// Возвращает: ...
})
```
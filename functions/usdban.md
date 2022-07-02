# $ban
desc
### Использование
```php
$ban[guildID?;userID;days?;reason]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет | 
| userID |  |  | Да | 
| days |  |  | Нет |
| reason |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$ban',
  code: `
$ban[guildID?;userID;days?;reason]`
// Возвращает: ...
})
```
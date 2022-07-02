# $serverVerificationLevel
desc
### Использование
```php
$serverVerificationLevel[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverVerificationLevel',
  code: `
$serverVerificationLevel[guildId?]`
// Возвращает: ...
})
```
# $isVideoOn
desc
### Использование
```php
$isVideoOn[userId?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isVideoOn',
  code: `
$isVideoOn[userId?;guildId?]`
// Возвращает: ...
})
```
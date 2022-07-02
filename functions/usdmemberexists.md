# $memberExists
desc
### Использование
```php
$memberExists[userId;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$memberExists',
  code: `
$memberExists[userId;guildId?]`
// Возвращает: ...
})
```
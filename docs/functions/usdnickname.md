# $nickname
desc
### Использование
```php
$nickname[userId?;guildId?;returnUser?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
| returnUser |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$nickname',
  code: `
$nickname[userId?;guildId?;returnUser?]`
// Возвращает: ...
})
```
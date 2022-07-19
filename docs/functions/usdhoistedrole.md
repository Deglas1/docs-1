# $hoistedRole
desc
### Использование
```php
$hoistedRole[userId?;guildId?;option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
| option |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$hoistedRole',
  code: `
$hoistedRole[userId?;guildId?;option?]`
// Возвращает: ...
})
```
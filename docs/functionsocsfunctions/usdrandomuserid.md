# $randomUserID
desc
### Использование
```php
$randomUserID[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$randomUserID',
  code: `
$randomUserID[guildId?]`
// Возвращает: ...
})
```
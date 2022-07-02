# $setStatus
desc
### Использование
```php
$setStatus[name;type?;status?;url;afk?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| type |  |  | Нет | 
| status |  |  | Нет |
| url |  |  | Да |
| afk |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$setStatus',
  code: `
$setStatus[name;type?;status?;url;afk?]`
// Возвращает: ...
})
```
# $getCooldownTime
desc
### Использование
```php
$getCooldownTime[time;type;cmdName;id]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да | 
| type |  |  | Да | 
| cmdName |  |  | Да |
| id |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$getCooldownTime',
  code: `
$getCooldownTime[time;type;cmdName;id]`
// Возвращает: ...
})
```
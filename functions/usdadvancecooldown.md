# $advanceCooldown
desc
### Использование
```php
$advanceCooldown[time;id;errorObject?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да | 
| id |  |  | Да | 
| errorObject |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$advanceCooldown',
  code: `
$advanceCooldown[time;id;errorObject?]`
// Возвращает: ...
})
```
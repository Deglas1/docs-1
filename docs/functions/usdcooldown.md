# $cooldown
desc
### Использование
```php
$cooldown[time;errorObject?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да | 
| errorObject |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$cooldown',
  code: `
$cooldown[time;errorObject?]`
// Возвращает: ...
})
```
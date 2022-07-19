# $setTimeout
desc
### Использование
```php
$setTimeout[name;duration;timeoutData;returnId?;pulse]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| duration |  |  | Да | 
| timeoutData |  |  | Да |
| returnId |  |  | Нет |
| pulse |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$setTimeout',
  code: `
$setTimeout[name;duration;timeoutData;returnId?;pulse]`
// Возвращает: ...
})
```
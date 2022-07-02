# $getApplicationCommandID
desc
### Использование
```php
$getApplicationCommandID[name;type?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| type |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$getApplicationCommandID',
  code: `
$getApplicationCommandID[name;type?]`
// Возвращает: ...
})
```
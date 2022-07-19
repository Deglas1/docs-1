# $newUser
desc
### Использование
```php
$newUser[option]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$newUser',
  code: `
$newUser[option]`
// Возвращает: ...
})
```
# $isUserDmEnabled
desc
### Использование
```php
$isUserDmEnabled[userId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$isUserDmEnabled',
  code: `
$isUserDmEnabled[userId?]`
// Возвращает: ...
})
```
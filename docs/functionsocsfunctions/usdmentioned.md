# $mentioned
desc
### Использование
```php
$mentioned[index;returnSelf?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| index |  |  | Да | 
| returnSelf |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$mentioned',
  code: `
$mentioned[index;returnSelf?]`
// Возвращает: ...
})
```
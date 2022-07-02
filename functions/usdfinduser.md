# $findUser
desc
### Использование
```php
$findUser[userResolver;returnSelf?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userResolver |  |  | Да | 
| returnSelf |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$findUser',
  code: `
$findUser[userResolver;returnSelf?]`
// Возвращает: ...
})
```
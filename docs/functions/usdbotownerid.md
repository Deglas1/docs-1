# $botOwnerID
desc
### Использование
```php
$botOwnerID[separator?;"]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| separator |  |  | Нет | 
| " |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$botOwnerID',
  code: `
$botOwnerID[separator?;"]`
// Возвращает: ...
})
```
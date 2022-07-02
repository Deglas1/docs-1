# $mentionType
desc
### Использование
```php
$mentionType[mention]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| mention |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$mentionType',
  code: `
$mentionType[mention]`
// Возвращает: ...
})
```
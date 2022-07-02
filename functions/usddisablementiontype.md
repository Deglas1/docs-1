# $disableMentionType
desc
### Использование
```php
$disableMentionType[type?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$disableMentionType',
  code: `
$disableMentionType[type?]`
// Возвращает: ...
})
```
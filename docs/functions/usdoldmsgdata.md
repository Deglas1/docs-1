# $oldMsgData
desc
### Использование
```php
$oldMsgData[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$oldMsgData',
  code: `
$oldMsgData[option?]`
// Возвращает: ...
})
```
# $emojisFromMessage
desc
### Использование
```php
$emojisFromMessage[text?;sep?;"]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Нет | 
| sep |  |  | Нет | 
| " |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$emojisFromMessage',
  code: `
$emojisFromMessage[text?;sep?;"]`
// Возвращает: ...
})
```
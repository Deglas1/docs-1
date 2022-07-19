# $deleteChannel
desc
### Использование
```php
$deleteChannel[channel]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channel |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$deleteChannel',
  code: `
$deleteChannel[channel]`
// Возвращает: ...
})
```
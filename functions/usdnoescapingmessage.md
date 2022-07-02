# $noEscapingMessage
desc
### Использование
```php
$noEscapingMessage[arg?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| arg |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$noEscapingMessage',
  code: `
$noEscapingMessage[arg?]`
// Возвращает: ...
})
```
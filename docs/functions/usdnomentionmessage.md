# $noMentionMessage
desc
### Использование
```php
$noMentionMessage[arg?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| arg |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$noMentionMessage',
  code: `
$noMentionMessage[arg?]`
// Возвращает: ...
})
```
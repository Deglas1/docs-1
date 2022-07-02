# $deleteEmojis
desc
### Использование
```php
$deleteEmojis[...emojis]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...emojis |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$deleteEmojis',
  code: `
$deleteEmojis[...emojis]`
// Возвращает: ...
})
```
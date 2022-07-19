# $isCustomEmoji
desc
### Использование
```php
$isCustomEmoji[emoji;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| emoji |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isCustomEmoji',
  code: `
$isCustomEmoji[emoji;guildId?]`
// Возвращает: ...
})
```
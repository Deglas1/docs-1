# $isStreaming
desc
### Использование
```php
$isStreaming[userId?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isStreaming',
  code: `
$isStreaming[userId?;guildId?]`
// Возвращает: ...
})
```
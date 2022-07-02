# $channelCount
desc
### Использование
```php
$channelCount[guildID?;type?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет | 
| type |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$channelCount',
  code: `
$channelCount[guildID?;type?]`
// Возвращает: ...
})
```
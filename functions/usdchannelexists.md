# $channelExists
desc
### Использование
```php
$channelExists[channel]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channel |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$channelExists',
  code: `
$channelExists[channel]`
// Возвращает: ...
})
```
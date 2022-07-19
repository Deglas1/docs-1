# $deleteChannels
desc
### Использование
```php
$deleteChannels[...channels]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...channels |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$deleteChannels',
  code: `
$deleteChannels[...channels]`
// Возвращает: ...
})
```
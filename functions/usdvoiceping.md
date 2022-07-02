# $voicePing
desc
### Использование
```php
$voicePing[type?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$voicePing',
  code: `
$voicePing[type?]`
// Возвращает: ...
})
```
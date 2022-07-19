# $newGuild
desc
### Использование
```php
$newGuild[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$newGuild',
  code: `
$newGuild[option?]`
// Возвращает: ...
})
```
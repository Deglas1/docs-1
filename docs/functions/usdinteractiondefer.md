# $interactionDefer
desc
### Использование
```php
$interactionDefer[ephemeral?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ephemeral |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$interactionDefer',
  code: `
$interactionDefer[ephemeral?]`
// Возвращает: ...
})
```
# $newApplicationCmd
desc
### Использование
```php
$newApplicationCmd[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$newApplicationCmd',
  code: `
$newApplicationCmd[option?]`
// Возвращает: ...
})
```
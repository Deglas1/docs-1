# $oldApplicationCmd
desc
### Использование
```php
$oldApplicationCmd[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$oldApplicationCmd',
  code: `
$oldApplicationCmd[option?]`
// Возвращает: ...
})
```
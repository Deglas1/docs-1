# $messageSlice
desc
### Использование
```php
$messageSlice[from?;to?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| from |  |  | Нет | 
| to |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$messageSlice',
  code: `
$messageSlice[from?;to?]`
// Возвращает: ...
})
```
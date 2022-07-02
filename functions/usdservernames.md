# $serverNames
desc
### Использование
```php
$serverNames[sep]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| sep |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverNames',
  code: `
$serverNames[sep]`
// Возвращает: ...
})
```
# $humanizeMs
desc
### Использование
```php
$humanizeMs[time]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$humanizeMs',
  code: `
$humanizeMs[time]`
// Возвращает: ...
})
```
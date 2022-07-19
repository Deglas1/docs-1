# $findNumbers
desc
### Использование
```php
$findNumbers[text]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$findNumbers',
  code: `
$findNumbers[text]`
// Возвращает: ...
})
```
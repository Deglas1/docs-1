# $findSpecialChars
desc
### Использование
```php
$findSpecialChars[text]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$findSpecialChars',
  code: `
$findSpecialChars[text]`
// Возвращает: ...
})
```
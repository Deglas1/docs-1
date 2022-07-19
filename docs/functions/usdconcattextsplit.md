# $concatTextSplit
desc
### Использование
```php
$concatTextSplit[...text]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...text |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$concatTextSplit',
  code: `
$concatTextSplit[...text]`
// Возвращает: ...
})
```
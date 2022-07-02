# $slashOption
desc
### Использование
```php
$slashOption[option]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$slashOption',
  code: `
$slashOption[option]`
// Возвращает: ...
})
```
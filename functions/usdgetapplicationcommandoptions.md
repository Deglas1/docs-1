# $getApplicationCommandOptions
desc
### Использование
```php
$getApplicationCommandOptions[name;type?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| type |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$getApplicationCommandOptions',
  code: `
$getApplicationCommandOptions[name;type?]`
// Возвращает: ...
})
```
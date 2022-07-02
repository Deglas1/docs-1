# $commandInfo
desc
### Использование
```php
$commandInfo[name;option]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| option |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$commandInfo',
  code: `
$commandInfo[name;option]`
// Возвращает: ...
})
```
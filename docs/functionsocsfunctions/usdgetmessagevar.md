# $getMessageVar
desc
### Использование
```php
$getMessageVar[varname;messageId?;table?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| messageId |  |  | Нет | 
| table |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getMessageVar',
  code: `
$getMessageVar[varname;messageId?;table?]`
// Возвращает: ...
})
```
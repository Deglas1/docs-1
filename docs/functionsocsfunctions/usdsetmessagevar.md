# $setMessageVar
desc
### Использование
```php
$setMessageVar[varname;value;messageID?;table?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| value |  |  | Да | 
| messageID |  |  | Нет |
| table |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$setMessageVar',
  code: `
$setMessageVar[varname;value;messageID?;table?]`
// Возвращает: ...
})
```
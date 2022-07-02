# $interactionModal
desc
### Использование
```php
$interactionModal[title;customID;components]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| title |  |  | Да | 
| customID |  |  | Да | 
| components |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$interactionModal',
  code: `
$interactionModal[title;customID;components]`
// Возвращает: ...
})
```
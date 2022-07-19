# $filterMessage
desc
### Использование
```php
$filterMessage[text;...letters]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| ...letters |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$filterMessage',
  code: `
$filterMessage[text;...letters]`
// Возвращает: ...
})
```
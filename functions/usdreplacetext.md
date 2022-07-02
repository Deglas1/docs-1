# $replaceText
desc
### Использование
```php
$replaceText[text;replacer;replacedTo;times?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| replacer |  |  | Да | 
| replacedTo |  |  | Да |
| times |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$replaceText',
  code: `
$replaceText[text;replacer;replacedTo;times?]`
// Возвращает: ...
})
```
# $replaceTextWithRegex
desc
### Использование
```php
$replaceTextWithRegex[text;reg;flags;newT]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| reg |  |  | Да | 
| flags |  |  | Да |
| newT |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$replaceTextWithRegex',
  code: `
$replaceTextWithRegex[text;reg;flags;newT]`
// Возвращает: ...
})
```
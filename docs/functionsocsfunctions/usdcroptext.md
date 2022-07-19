# $cropText
desc
### Использование
```php
$cropText[text;limit?;start?;char?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| limit |  |  | Нет | 
| start |  |  | Нет |
| char |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$cropText',
  code: `
$cropText[text;limit?;start?;char?]`
// Возвращает: ...
})
```
# $onlyIfMessageContains
desc
### Использование
```php
$onlyIfMessageContains[text;...stuffs]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| ...stuffs |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$onlyIfMessageContains',
  code: `
$onlyIfMessageContains[text;...stuffs]`
// Возвращает: ...
})
```
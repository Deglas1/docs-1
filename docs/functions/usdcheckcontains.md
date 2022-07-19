# $checkContains
desc
### Использование
```php
$checkContains[text;...chars]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| ...chars |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$checkContains',
  code: `
$checkContains[text;...chars]`
// Возвращает: ...
})
```
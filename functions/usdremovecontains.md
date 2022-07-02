# $removeContains
desc
### Использование
```php
$removeContains[text;...words]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| ...words |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$removeContains',
  code: `
$removeContains[text;...words]`
// Возвращает: ...
})
```
# $whitelist
desc
### Использование
```php
$whitelist[type;...ids]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Да | 
| ...ids |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$whitelist',
  code: `
$whitelist[type;...ids]`
// Возвращает: ...
})
```
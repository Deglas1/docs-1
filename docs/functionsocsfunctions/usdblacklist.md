# $blacklist
desc
### Использование
```php
$blacklist[type;...ids]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Да | 
| ...ids |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$blacklist',
  code: `
$blacklist[type;...ids]`
// Возвращает: ...
})
```
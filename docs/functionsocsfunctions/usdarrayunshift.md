# $arrayUnshift
desc
### Использование
```php
$arrayUnshift[name;...elements]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| ...elements |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$arrayUnshift',
  code: `
$arrayUnshift[name;...elements]`
// Возвращает: ...
})
```
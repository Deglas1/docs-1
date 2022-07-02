# $createArray
desc
### Использование
```php
$createArray[name;...elements]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| ...elements |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$createArray',
  code: `
$createArray[name;...elements]`
// Возвращает: ...
})
```
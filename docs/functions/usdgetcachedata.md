# $getCacheData
desc
### Использование
```php
$getCacheData[type;name;key;option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Да | 
| name |  |  | Да | 
| key |  |  | Да |
| option |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getCacheData',
  code: `
$getCacheData[type;name;key;option?]`
// Возвращает: ...
})
```
# $setCacheData
desc
### Использование
```php
$setCacheData[type;cacheName;cacheKey;cacheValue]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Да | 
| cacheName |  |  | Да | 
| cacheKey |  |  | Да |
| cacheValue |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$setCacheData',
  code: `
$setCacheData[type;cacheName;cacheKey;cacheValue]`
// Возвращает: ...
})
```
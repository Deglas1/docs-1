# $createCache
desc
### Использование
```php
$createCache[type;name;options]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Да | 
| name |  |  | Да | 
| options |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$createCache',
  code: `
$createCache[type;name;options]`
// Возвращает: ...
})
```
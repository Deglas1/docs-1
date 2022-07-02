# $eventEmit
desc
### Использование
```php
$eventEmit[name;...datas]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| ...datas |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$eventEmit',
  code: `
$eventEmit[name;...datas]`
// Возвращает: ...
})
```
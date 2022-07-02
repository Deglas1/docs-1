# $allChannelsCount
desc
### Использование
```php
$allChannelsCount[type]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$allChannelsCount',
  code: `
$allChannelsCount[type]`
// Возвращает: ...
})
```
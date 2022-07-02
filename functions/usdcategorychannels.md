# $categoryChannels
desc
### Использование
```php
$categoryChannels[id;option?;sep?;"]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| id |  |  | Да | 
| option |  |  | Нет | 
| sep |  |  | Нет |
| " |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$categoryChannels',
  code: `
$categoryChannels[id;option?;sep?;"]`
// Возвращает: ...
})
```
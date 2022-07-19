# $webhook
desc
### Использование
```php
$webhook[id;option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| id |  |  | Да | 
| option |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$webhook',
  code: `
$webhook[id;option?]`
// Возвращает: ...
})
```
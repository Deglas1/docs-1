# $discriminator
desc
### Использование
```php
$discriminator[userId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$discriminator',
  code: `
$discriminator[userId?]`
// Возвращает: ...
})
```
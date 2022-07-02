# $newMember
desc
### Использование
```php
$newMember[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$newMember',
  code: `
$newMember[option?]`
// Возвращает: ...
})
```
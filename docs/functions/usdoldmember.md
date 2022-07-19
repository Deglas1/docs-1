# $oldMember
desc
### Использование
```php
$oldMember[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$oldMember',
  code: `
$oldMember[option?]`
// Возвращает: ...
})
```
# $mentionedRoles
desc
### Использование
```php
$mentionedRoles[index]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| index |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$mentionedRoles',
  code: `
$mentionedRoles[index]`
// Возвращает: ...
})
```
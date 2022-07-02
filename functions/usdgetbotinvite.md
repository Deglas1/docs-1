# $getBotInvite
desc
### Использование
```php
$getBotInvite[...perms]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...perms |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$getBotInvite',
  code: `
$getBotInvite[...perms]`
// Возвращает: ...
})
```
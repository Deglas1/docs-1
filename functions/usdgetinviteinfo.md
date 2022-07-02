# $getInviteInfo
desc
### Использование
```php
$getInviteInfo[code;option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| code |  |  | Да | 
| option |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$getInviteInfo',
  code: `
$getInviteInfo[code;option?]`
// Возвращает: ...
})
```
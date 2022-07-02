# $timeoutMember
desc
### Использование
```php
$timeoutMember[guildId?;memberId?;timeout?;timeoutEndsAt?;reason;]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет | 
| memberId |  |  | Нет | 
| timeout |  |  | Нет |
| timeoutEndsAt |  |  | Нет |
| reason |  |  | Да |
|  |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$timeoutMember',
  code: `
$timeoutMember[guildId?;memberId?;timeout?;timeoutEndsAt?;reason;]`
// Возвращает: ...
})
```
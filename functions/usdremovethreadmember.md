# $removeThreadMember
desc
### Использование
```php
$removeThreadMember[channelId;threadId;userId;reason]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| threadId |  |  | Да | 
| userId |  |  | Да |
| reason |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$removeThreadMember',
  code: `
$removeThreadMember[channelId;threadId;userId;reason]`
// Возвращает: ...
})
```
# $changeNickname
desc
### Использование
```php
$changeNickname[userId;nick;reason]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Да | 
| nick |  |  | Да | 
| reason |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$changeNickname',
  code: `
$changeNickname[userId;nick;reason]`
// Возвращает: ...
})
```
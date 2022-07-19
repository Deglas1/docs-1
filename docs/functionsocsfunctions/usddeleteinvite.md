# $deleteInvite
desc
### Использование
```php
$deleteInvite[guildID?;code;reason]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет | 
| code |  |  | Да | 
| reason |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$deleteInvite',
  code: `
$deleteInvite[guildID?;code;reason]`
// Возвращает: ...
})
```
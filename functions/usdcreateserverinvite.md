# $createServerInvite
desc
### Использование
```php
$createServerInvite[guildId?;...options]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет | 
| ...options |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$createServerInvite',
  code: `
$createServerInvite[guildId?;...options]`
// Возвращает: ...
})
```
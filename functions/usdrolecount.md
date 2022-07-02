# $roleCount
desc
### Использование
```php
$roleCount[guildId?;fetchFirst?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет | 
| fetchFirst |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$roleCount',
  code: `
$roleCount[guildId?;fetchFirst?]`
// Возвращает: ...
})
```
# $rolePosition
desc
### Использование
```php
$rolePosition[roleId;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleId |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$rolePosition',
  code: `
$rolePosition[roleId;guildId?]`
// Возвращает: ...
})
```
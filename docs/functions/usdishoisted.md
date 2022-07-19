# $isHoisted
desc
### Использование
```php
$isHoisted[roleId;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleId |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isHoisted',
  code: `
$isHoisted[roleId;guildId?]`
// Возвращает: ...
})
```
# $isManaged
desc
### Использование
```php
$isManaged[roleId;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleId |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isManaged',
  code: `
$isManaged[roleId;guildId?]`
// Возвращает: ...
})
```
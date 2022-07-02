# $roleId
desc
### Использование
```php
$roleId[roleResolver;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleResolver |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$roleId',
  code: `
$roleId[roleResolver;guildId?]`
// Возвращает: ...
})
```
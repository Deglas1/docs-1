# $getServerVar
desc
### Использование
```php
$getServerVar[varname;guildId?;table?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| guildId |  |  | Нет | 
| table |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getServerVar',
  code: `
$getServerVar[varname;guildId?;table?]`
// Возвращает: ...
})
```
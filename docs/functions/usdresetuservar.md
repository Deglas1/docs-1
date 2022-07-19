# $resetUserVar
desc
### Использование
```php
$resetUserVar[varname;guildId?;table?]
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
  name: '$resetUserVar',
  code: `
$resetUserVar[varname;guildId?;table?]`
// Возвращает: ...
})
```
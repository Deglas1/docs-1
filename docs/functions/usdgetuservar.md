# $getUserVar
desc
### Использование
```php
$getUserVar[varname;userId?;guildId?;table?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| userId |  |  | Нет | 
| guildId |  |  | Нет |
| table |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getUserVar',
  code: `
$getUserVar[varname;userId?;guildId?;table?]`
// Возвращает: ...
})
```
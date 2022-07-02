# $platform
desc
### Использование
```php
$platform[userId?;guildId?;sep?;']
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
| sep |  |  | Нет |
| ' |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$platform',
  code: `
$platform[userId?;guildId?;sep?;']`
// Возвращает: ...
})
```
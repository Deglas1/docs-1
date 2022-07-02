# $usersBanned
desc
### Использование
```php
$usersBanned[guildID?;force?;option?;sep?;']
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет | 
| force |  |  | Нет | 
| option |  |  | Нет |
| sep |  |  | Нет |
| ' |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$usersBanned',
  code: `
$usersBanned[guildID?;force?;option?;sep?;']`
// Возвращает: ...
})
```
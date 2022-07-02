# $onlyBotPerms
desc
### Использование
```php
$onlyBotPerms[...stuffs]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...stuffs |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$onlyBotPerms',
  code: `
$onlyBotPerms[...stuffs]`
// Возвращает: ...
})
```
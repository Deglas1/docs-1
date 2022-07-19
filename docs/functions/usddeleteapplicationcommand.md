# $deleteApplicationCommand
desc
### Использование
```php
$deleteApplicationCommand[guildId;id]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| id |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$deleteApplicationCommand',
  code: `
$deleteApplicationCommand[guildId;id]`
// Возвращает: ...
})
```
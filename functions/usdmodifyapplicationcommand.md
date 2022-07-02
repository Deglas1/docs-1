# $modifyApplicationCommand
desc
### Использование
```php
$modifyApplicationCommand[guildId;id;...Datas]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| id |  |  | Да | 
| ...Datas |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$modifyApplicationCommand',
  code: `
$modifyApplicationCommand[guildId;id;...Datas]`
// Возвращает: ...
})
```
# $createApplicationCommand
desc
### Использование
```php
$createApplicationCommand[guildId;name;description;defaultPermission?;type?;...opts]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| name |  |  | Да | 
| description |  |  | Да |
| defaultPermission |  |  | Нет |
| type |  |  | Нет |
| ...opts |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$createApplicationCommand',
  code: `
$createApplicationCommand[guildId;name;description;defaultPermission?;type?;...opts]`
// Возвращает: ...
})
```
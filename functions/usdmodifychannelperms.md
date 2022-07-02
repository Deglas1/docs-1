# $modifyChannelPerms
desc
### Использование
```php
$modifyChannelPerms[roruId;channelId;...perms]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roruId |  |  | Да | 
| channelId |  |  | Да | 
| ...perms |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$modifyChannelPerms',
  code: `
$modifyChannelPerms[roruId;channelId;...perms]`
// Возвращает: ...
})
```
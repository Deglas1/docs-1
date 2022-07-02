# $createChannel
desc
### Использование
```php
$createChannel[guildId;name;type;returnId?;parentId]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| name |  |  | Да | 
| type |  |  | Да |
| returnId |  |  | Нет |
| parentId |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$createChannel',
  code: `
$createChannel[guildId;name;type;returnId?;parentId]`
// Возвращает: ...
})
```
# $randomChannelID
desc
### Использование
```php
$randomChannelID[guildId?;type?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет | 
| type |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$randomChannelID',
  code: `
$randomChannelID[guildId?;type?]`
// Возвращает: ...
})
```
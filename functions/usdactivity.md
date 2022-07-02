# $activity
desc
### Использование
```php
$activity[guildID?;id?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет | 
| id |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$activity',
  code: `
$activity[$guildID;$authorID]`
// Возвращает: Visual Studio Code
})
```
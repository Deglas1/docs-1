# $allChannelsCount
desc
### Использование
```php
$allChannelsCount[type]
```

Voice
Text
Announcements
Stage
Thread

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$allChannelsCount',
  code: `
$allChannelsCount[Text]`
// Возвращает: 24
})
```
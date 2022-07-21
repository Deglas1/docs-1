# $getCustomStatus
Эта функция возвращает пользовательский статус данного пользователя, если он у него есть
### Использование
```php
$getCustomStatus[userId?;guildId?;emoji/state?]
```
emoji - Текст статуса, emoji - эмодзи статуса

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
| type |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getCustomStatus',
  code: `
$getCustomStatus[userId?;guildId?;type?]`
// Возвращает: ...
})
```

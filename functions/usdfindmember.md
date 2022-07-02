# $findMember
desc
### Использование
```php
$findMember[memberResolver;returnSelf?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| memberResolver |  |  | Да | 
| returnSelf |  |  | Нет | 
| guildId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$findMember',
  code: `
$findMember[memberResolver;returnSelf?;guildId?]`
// Возвращает: ...
})
```
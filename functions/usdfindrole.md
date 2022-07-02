# $findRole
desc
### Использование
```php
$findRole[roleResolver;guildID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleResolver |  |  | Да | 
| guildID |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$findRole',
  code: `
$findRole[roleResolver;guildID?]`
// Возвращает: ...
})
```
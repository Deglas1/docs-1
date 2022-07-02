# $onlyForServers
desc
### Использование
```php
$onlyForServers[...stuffs]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...stuffs |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$onlyForServers',
  code: `
$onlyForServers[...stuffs]`
// Возвращает: ...
})
```
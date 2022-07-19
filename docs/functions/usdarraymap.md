# $arrayMap
desc
### Использование
```php
$arrayMap[name;awaitedCmd;separator?;';awaitData?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| awaitedCmd |  |  | Да | 
| separator |  |  | Нет |
| ' |  |  | Да |
| awaitData |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$arrayMap',
  code: `
$arrayMap[name;awaitedCmd;separator?;';awaitData?]`
// Возвращает: ...
})
```
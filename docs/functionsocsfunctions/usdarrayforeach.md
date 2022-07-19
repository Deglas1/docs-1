# $arrayForeach
desc
### Использование
```php
$arrayForeach[name;awaitedCmd;awaitData?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| awaitedCmd |  |  | Да | 
| awaitData |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$arrayForeach',
  code: `
$arrayForeach[name;awaitedCmd;awaitData?]`
// Возвращает: ...
})
```
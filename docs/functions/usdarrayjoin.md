# $arrayJoin
desc
### Использование
```php
$arrayJoin[name;separator?;"]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| separator |  |  | Нет | 
| " |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$arrayJoin',
  code: `
$arrayJoin[name;separator?;"]`
// Возвращает: ...
})
```
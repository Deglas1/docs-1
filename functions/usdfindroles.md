# $findRoles
desc
### Использование
```php
$findRoles[query;limit?;type?;res?;]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| query |  |  | Да | 
| limit |  |  | Нет | 
| type |  |  | Нет |
| res |  |  | Нет |
|  |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$findRoles',
  code: `
$findRoles[query;limit?;type?;res?;]`
// Возвращает: ...
})
```
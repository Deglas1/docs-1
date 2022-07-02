# $findMembers
desc
### Использование
```php
$findMembers[query;limit?;type?;force?;res?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| query |  |  | Да | 
| limit |  |  | Нет | 
| type |  |  | Нет |
| force |  |  | Нет |
| res |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$findMembers',
  code: `
$findMembers[query;limit?;type?;force?;res?]`
// Возвращает: ...
})
```
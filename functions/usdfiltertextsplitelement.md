# $filterTextSplitElement
desc
### Использование
```php
$filterTextSplitElement[query;type?;separator?;"]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| query |  |  | Да | 
| type |  |  | Нет | 
| separator |  |  | Нет |
| " |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$filterTextSplitElement',
  code: `
$filterTextSplitElement[query;type?;separator?;"]`
// Возвращает: ...
})
```
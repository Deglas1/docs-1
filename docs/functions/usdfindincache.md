# $findInCache
desc
### Использование
```php
$findInCache[type;name;prop;value;findType?;returnValue?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Да | 
| name |  |  | Да | 
| prop |  |  | Да |
| value |  |  | Да |
| findType |  |  | Нет |
| returnValue |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$findInCache',
  code: `
$findInCache[type;name;prop;value;findType?;returnValue?]`
// Возвращает: ...
})
```
# $fileSize
desc
### Использование
```php
$fileSize[path;unit?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| path |  |  | Да | 
| unit |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$fileSize',
  code: `
$fileSize[path;unit?]`
// Возвращает: ...
})
```
# $fileExists
desc
### Использование
```php
$fileExists[path]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| path |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$fileExists',
  code: `
$fileExists[path]`
// Возвращает: ...
})
```
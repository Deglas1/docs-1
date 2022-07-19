# $deleteFile
desc
### Использование
```php
$deleteFile[file]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| file |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$deleteFile',
  code: `
$deleteFile[file]`
// Возвращает: ...
})
```
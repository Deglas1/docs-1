# $createFile
desc
### Использование
```php
$createFile[attachment;name]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| attachment |  |  | Да | 
| name |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$createFile',
  code: `
$createFile[attachment;name]`
// Возвращает: ...
})
```
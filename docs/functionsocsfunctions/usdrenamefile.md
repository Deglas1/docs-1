# $renameFile
desc
### Использование
```php
$renameFile[oldfile;newfile]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| oldfile |  |  | Да | 
| newfile |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$renameFile',
  code: `
$renameFile[oldfile;newfile]`
// Возвращает: ...
})
```
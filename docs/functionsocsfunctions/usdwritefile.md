# $writeFile
desc
### Использование
```php
$writeFile[file;text;encode?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| file |  |  | Да | 
| text |  |  | Да | 
| encode |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$writeFile',
  code: `
$writeFile[file;text;encode?]`
// Возвращает: ...
})
```
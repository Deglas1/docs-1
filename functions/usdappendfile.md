# $appendFile
desc
### Использование
```php
$appendFile[file;text;encode?]
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
  name: '$appendFile',
  code: `
$appendFile[file;text;encode?]`
// Возвращает: ...
})
```
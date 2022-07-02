# $readFile
desc
### Использование
```php
$readFile[file;encoding?;flag]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| file |  |  | Да | 
| encoding |  |  | Нет | 
| flag |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$readFile',
  code: `
$readFile[file;encoding?;flag]`
// Возвращает: ...
})
```
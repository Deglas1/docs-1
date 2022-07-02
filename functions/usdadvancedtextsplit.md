# $advancedTextSplit
desc
### Использование
```php
$advancedTextSplit[text;...fields]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| ...fields |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$advancedTextSplit',
  code: `
$advancedTextSplit[text;...fields]`
// Возвращает: ...
})
```
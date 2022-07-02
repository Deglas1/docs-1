# $toLocaleUpperCase
desc
### Использование
```php
$toLocaleUpperCase[texts]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| texts |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$toLocaleUpperCase',
  code: `
$toLocaleUpperCase[texts]`
// Возвращает: ...
})
```
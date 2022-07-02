# $abbreviate
desc
### Использование
```php
$abbreviate[num;dec?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| num |  |  | Да | 
| dec |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$abbreviate',
  code: `
$abbreviate[10000;1000]`
// Возвращает: 10.000
})
```
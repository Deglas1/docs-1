# $resolveColor
desc
### Использование
```php
$resolveColor[type;returnAs?;...datas]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Да | 
| returnAs |  |  | Нет | 
| ...datas |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$resolveColor',
  code: `
$resolveColor[type;returnAs?;...datas]`
// Возвращает: ...
})
```
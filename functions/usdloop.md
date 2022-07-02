# $loop
desc
### Использование
```php
$loop[time;awaitData;...awaits]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да | 
| awaitData |  |  | Да | 
| ...awaits |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$loop',
  code: `
$loop[time;awaitData;...awaits]`
// Возвращает: ...
})
```
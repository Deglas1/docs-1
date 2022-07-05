# $awaitData
desc
### Использование
```php
$awaitData[option]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$awaitData',
  code: `
$awaitData[hi]
$loop[1;{ "hi": "bye" };gn]`
})
```
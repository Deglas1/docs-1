# $removeSplitTextElement
desc
### Использование
```php
$removeSplitTextElement[...elements]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...elements |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$removeSplitTextElement',
  code: `
$removeSplitTextElement[...elements]`
// Возвращает: ...
})
```
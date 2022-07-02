# $editTextSplitElement
desc
### Использование
```php
$editTextSplitElement[index;text]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| index |  |  | Да | 
| text |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$editTextSplitElement',
  code: `
$editTextSplitElement[index;text]`
// Возвращает: ...
})
```
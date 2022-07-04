# $author
desc
### Использование
```php
$author[]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| Usage Not Found |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$author',
  code: `
$author[1;$userTag;$authorAvatar]`
// Возвращает: ...
})
```
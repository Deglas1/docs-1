# $deafenUser
desc
### Использование
```php
$deafenUser[userId?;deaf?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| deaf |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$deafenUser',
  code: `
$deafenUser[userId?;deaf?]`
// Возвращает: ...
})
```
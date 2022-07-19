# $setRoleColor
desc
### Использование
```php
$setRoleColor[roleID;color]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleID |  |  | Да | 
| color |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$setRoleColor',
  code: `
$setRoleColor[roleID;color]`
// Возвращает: ...
})
```
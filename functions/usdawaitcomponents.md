# $awaitComponents
desc
### Использование
```php
$awaitComponents[messageID;userFilter;customIDs;cmds;errorMsg?;uses?;data?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageID |  |  | Да | 
| userFilter |  |  | Да | 
| customIDs |  |  | Да |
| cmds |  |  | Да |
| errorMsg |  |  | Нет |
| uses |  |  | Нет |
| data |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$awaitComponents',
  code: `
$awaitComponents[$messageID;everyone;hi;bye;gn; l ;1;{}]
Hi 
$addButton[1;Hi;2;hi]
$addButton[1;Bye;2;bye]`
// Возвращает: ...
})
```
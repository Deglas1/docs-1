
# $stopTimeout

Останавливает работу таймера по его айди.

### Использование
 
```php
$stopTimeout[айди]
```

### Опции


| Опция | Описание | Тип | Обязательно? |
|--------|-------------|------|----------|
| айди | айди запущеного таймера | АЙДИ | да |


## Пример(ы)

```javascript
bot.command({
  name: 'timeout',
  code: `
  $setVar[id;$setTimeout[remind;2h;{};false;true]]
  `
});

bot.command({
name: "stoptimeout",
code: `$stopTimeout[$getVar[id]]`
```

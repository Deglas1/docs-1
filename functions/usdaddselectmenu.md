# $addSelectMenu
desc
### Использование
```php
$addSelectMenu[index?;customId;placeHolder;minValues?;maxValues?;disabled?;...options]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| index |  |  | Нет | 
| customId |  |  | Да | 
| placeHolder |  |  | Да |
| minValues |  |  | Нет |
| maxValues |  |  | Нет |
| disabled |  |  | Нет |
| ...options |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$addSelectMenu',
  code: `$description[1;Привет, мир!]
$addSelectMenu[1;weredokIsWeredok;Меню выбора - это просто!;1;2;no;Да!:Вередок это вередок:yesWIW:no::joy:;Нет:Вередок это не вередок:noWIW:no::joy:]`
})
```
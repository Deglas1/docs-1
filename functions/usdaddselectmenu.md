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
  code: `
$addSelectMenu[index?;customId;placeHolder;minValues?;maxValues?;disabled?;...options]`
// Возвращает: ...
})
```
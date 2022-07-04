# $apiMessage
desc
### Использование
```php
$apiMessage[channelId;content;embeds?;components?;files?;stickers?;allowedMentions?;reply?;returnId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| content |  |  | Да | 
| embeds |  |  | Нет |
| components |  |  | Нет |
| files |  |  | Нет |
| stickers |  |  | Нет |
| allowedMentions |  |  | Нет |
| reply |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$apiMessage',
  code: `
$apiMessage[$channelID;Hello, World!;{newEmbed:{title: l }};{actionRow:{button:Hi:1:hi}{button:Bye:2:bye}};{attachment:$authorAvatar:avatar.png};9855473711203379;yes;yes;yes]`
// Возвращает: 984566341245090017
})
```
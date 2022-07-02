# $joinVC
desc
### Использование
```php
$joinVC[voiceId?;selfMute?;selfDeaf?;speaker?;debug?;]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| voiceId |  |  | Нет | 
| selfMute |  |  | Нет | 
| selfDeaf |  |  | Нет |
| speaker |  |  | Нет |
| debug |  |  | Нет |
|  |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$joinVC',
  code: `
$joinVC[voiceId?;selfMute?;selfDeaf?;speaker?;debug?;]`
// Возвращает: ...
})
```
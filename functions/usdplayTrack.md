
# $playTrack

Начинает воспроизведение трека с указаной платформы.
{ % hint style='info' %} Для того чтобы использовать эту функцию, вам нужно установить дополнительный пакет **@akarui/aoi.music** { %endhint% }

### Использование
 
```php
$playTrack[платформа;трек/ссылка/путь]
```

### Опции


| Опция | Описание | Тип | Обязательно? |
|--------|-------------|------|----------|
| платформа | платформа. от которой будет идти воспроизведение | ТЕКСТ | да |
| трек | название трека, который нужно найти | ТЕКСТ | да |
| ссылка | ссылка на трек, который нужно воспроизвести или найти | ССЫЛКА | да |
| путь | путь к файлу трека, который нужно воспроизвести | ТЕКСТ | да |



## Пример(ы)

```javascript
bot.command({
  name: 'play-track-youtube',
  code: `
  $playTrack[youtube;Nightcore - All My Friends Are Fake]
  $joinVC
  `
// Возвращает: Added Nightcore - All My Friends Are Fake to queue
});
```

```javascript
bot.command({
  name: 'play-track-youtube-url',
  code: `
  $playTrack[youtube;https://youtube.com/watch?v=u2XTXeEWGc4]
  `
// Возвращает: Added Nightcore - All My Friends Are Fake to queue
});
```

```javascript
bot.command({
  name: 'play-track-youtube-playlist',
  code: `
  $playTrack[youtube;https://youtube/]
  $joinVC
  `
// Возвращает: Added 
});
```

 
 


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
### Пример для добавления трека через ютуб
```javascript
bot.command({
  name: 'play-track-youtube',
  $if: "v4",
  code: `
  $playTrack[youtube;Nightcore - All My Friends Are Fake]
  $if[$hasplayer==false;]
  $joinVc
  $endif
  `
// Возвращает: Added Nightcore - All My Friends Are Fake to queue
});
```
### Добавление трека по ссылке. Видео должно быть публичным или доступным по ссылке, в ином случае бот выдаст ошибку
```javascript
bot.command({
  name: 'play-track-youtube-url',
  $if: "v4",
  code: `
  $playTrack[youtube;https://youtube.com/watch?v=u2XTXeEWGc4]
  $if[$hasplayer==false;]
  $joinVc
  $endif
  `
// Возвращает: Added Nightcore - All My Friends Are Fake to queue
});
```
### Добавление плэйлистов. Бот может найти только публичные плэйлисты и только по ссылке. Выдаёт количество добавленных в очередь треков
```javascript
bot.command({
  name: 'play-track-youtube-playlist',
  $if: "v4",
  code: `
  $playTrack[youtube;https://www.youtube.com/playlist?list=PL_2-M0cHcLO4PYOoiyq0PxOeHqGlhlnmQ]
  $if[$hasplayer==false;]
  $joinVc
  $endif
  `
// Возвращает: Added 2.180
});
```
 ### Пример для воспроизведения музыки с саундклауд. Для работы с ним вам нужно настроить главный файл и указать айди саундклауд клиента
```javascript
bot.command({
  name: 'play-track-soundcloud',
  $if: "v4",
  code: `
  $playTrack[soundcloud;Nightcore - All My Friends Are Fake]
  $if[$hasplayer==false;]
  $joinVc
  $endif
  `
// Возвращает: Added Nightcore - All My Friends Are Fake to queue
});
```
 ### Пример для воспроизведения трека в спотифай. Поддерживаются как и названия треков, так и ссылки и плэйлисты
 ```javascript
bot.command({
  name: 'play-track-spotify',
  $if: "v4",
  code: `
  $playTrack[spotify;Nightcore - All My Friends Are Fake]
  $if[$hasplayer==false;]
  $joinVc
  $endif
  `
// Возвращает: Added Nightcore - All My Friends Are Fake to queue
});
```
### Пример для воспроизведения трека с файлов. Файлы берутся с вашего хостинга, где находится ваш бот
```javascript
bot.command({
  name: 'play-track-path',
  $if: "v4",
  code: `
  $playTrack[path;./music/Nightcore - All My Friends Are Fake.mp3]
  $if[$hasplayer==false;]
  $joinVc
  $endif
  `
// Возвращает: Added Nightcore - All My Friends Are Fake to queue
});
```

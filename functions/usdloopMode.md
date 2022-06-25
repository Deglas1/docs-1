
# $loopMode

Включает режим повторения воспроизведения/плэйлиста или выключает его

### Использование
 
```php
$loopMode[режим]
```

### Опции


| Опция | Описание | Тип | Обязательно? |
|--------|-------------|------|----------|
| режим | режим повторения трека | ТЕКСТ | да |


## Пример(ы)
### Включение режима повторения для текущего трека
```javascript
bot.command({
  name: 'loop-mode-song',
  code: `
  $loopMode[song]
 `
});
```
### Включение режима повторения для очереди

```javascript
bot.command({
  name: 'loop-mode-queue',
  code: `
  $loopMode[queue]
 `
});
```

### Отключение режима повторения
```javascript
bot.command({
  name: 'loop-mode-none',
  code: `
  $loopMode[none]
 `
});
```

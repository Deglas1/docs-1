# Интерактивные взаимодействия
Использование интерактивных взаимодействий с пользоателем - **слэш команды, кнопки, меню выбора**
Для начала создадим ивент в главном файле, чтобы начать работу с интерактивами: `bot.onInteractionCreate()`.

## Слэш-команды
Теперь, создадим слэш-команду на сервере. Для этого нам понадобится функция `$createApplicationCommand`.
Создаём команду с ней: 
```js
module.exports = {
  name: "c-slash",
  code: `$createAppllicationCommand[$guildid;hello;Привет, мир!;true;slash]`
```
Прописав эту команду, вы создадите слэш-команду `hello` на своём сервере с описанием `Привет, мир!`

Теперь нужно создать сам слэш в коде. 
```js
module.exports = {
name: "hello", //Название слэш-команды
type: "interaction", 
prototype: "slash",
code: `$interactionReply[Привет!] `
}
```

**Чтобы не было "Ошибки взаимодействия", для ответов нужно использовать функцию $interactionReply.**

## Кнопки

Кнопки - лучшее,и самое дизайнерское взаимодействие.
```js
module.exports = {
name: "button",
code: ` Нажми на кнопку! $addButton[1;Кнопка;2;mtrx] `
}
```
И саму кнопку в коде:
```js
module.exports = {
name: "mtrx", // Название кнопки
type: "interaction",
prototype: "button",
code: `$interactionReply[wokin is cool]`
}
```
**Доступные стили кнопки**
* `primary` - синяя кнопка
* `secondary` - серая кнопка
* `danger` - красная кнопка 
* `success` - зелённая кнопка
* `link` - серая кнопка, нажав на которую можно попасть на сайт указанный вместо названия кнопки.


## Меню выбора 
Меню выбора - меню с кнопками, которое можно настроить: cколько опций будет в меню, сколько опций сможет выбрать пользователь (одно или несколько), а также все их поля: название, описание и эмодзи.

Cоздадим в нашем сообщении меню выбора (selectMenu)
```javascript
bot.command({
name: "selectmenu",
code: ` Вы разработчик? $addSelectmenu[1;yesno;Выбери ответ;1;2;no;Да:Я разработчик бота $userTag[$clientID]:1:no;Нет:Я не разработчик этого бота:2:no] 
})
```
и само меню выбора в коде:
```javascript
bot.interactionCommand({
name: "yesno",
prototype: "selectmenu",
code: `$if[$message==Да;Вы сказали, что вы разработчик бота, $if[$botOwnerID==$authorID;и не соврали;и вы соврали];]
$if[$message==Нет;Вы сказали, что вы не разработчик бота, $if[$botOwnerID==$authorID;и вы соврали;и вы не соврали];]`
})
```

## Mодальные окна
Модальные окна - формы, недавно добавленные в Discord API. Они создают интерфейс (окно) где пользователь может увидеть поля и заполнить ответы на них.

Создавать модальные окна можно только при помощи других взаимодействий - кнопок, меню, слэш-команд. Это условие Discord API.
```javascript
bot.command({
name: "modals",
code: `Используй модальные окна через кнопки, это очень удобно! 
$addButton[1;Нажми!;1;modals]`
})
bot.interactionCommand({
name: "modal",
prototype: "button",
code: `$interactionModal[Это текст вверху твоего модального окна;modals;{actionRow:{textInput:Привет! Как у тебя дела?:1:yes:Ну же, напиши!:0:4000:HowAreYou}}]`
})
```
Чтобы получить значение того, что ввёл пользователь - нужно просто использовать функцию $textInputValue[HowAreYou]
```javascript
bot.interactionCommand({
name: "modals",
prototype: "modal",
code: `Я рад, что у тебя **$textInputValue[HowAreYou]** дела.`
})
```

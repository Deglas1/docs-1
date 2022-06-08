 # $if: "v4"


{ % hint style='warning' % } В этих функциях не работает следующий ряд функций: $let и $get, все функции которые зависят от обратных вызовов (такие как $newRole, $newGuild и подобные), функции которые выдают инфоомацию о интерактиве (такие как $interactionData, $slashOption, $getApplicationCommandID) { % endhint % }

 ## ункции
* `$endif` - закрывает код, который выполнится в условии

* `$elseif[условие]` - открывает блок кода, который выполнится если условие в $if неправильное

* `$endelseif` - закрывает блок кода условия, которое выполняется если условие в $if неправильное

* `$else` - создает блок кода, который выполнится если условие в $id неправильное, при любом значении]

## ex
```javascript
module.exports = {
name: "if",
$if: "v4",
code: `$if[$isNumber[$message]==1;]

$else

$endif`
}
```


```javascript
module.exports = {
name: "if2",
$if: "v4",
code: `$if[$message[1]==1;]

$elseif[$message[1]==2]

$endelseif
$else

$endif`
}
```

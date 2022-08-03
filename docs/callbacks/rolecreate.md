# roleCreate
Сообщает о создании новой роли
### Использование
```php
bot.onroleCreate()
bot.roleCreateCommand
```
## Пример(ы)

```javascript
bot.roleCreatecommand({
  name: 'roleCreate',
  code: `
Была создана новая роль: $newRole[name]!
`
// Возвращает: Была создана новая роль: Deglas Legenda
})
```

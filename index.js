const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
  token: "OTM0OTE5NjY5MTQyMzkyODcz.Ye3Fyw.ikACXM6h-NoAsR3vWRBDsVVD-lo", // Discord Bot Token
  prefix: "z?",// Discord Bot Prefix
  intents: "all", //Discord Bot Intents
})

bot.variables({ functionD: "3" })
bot.readyCommand({ code: `
$log[$djsEval[client.loader.paths[0].keys[$getvar[functionD]];yes]]` })
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,"./c/")
bot.awaitedCommand({ name: "d", code: `
$loop[1;{};d]
$wait[70ms]
$writeFile[callbacks/$tolowercase[$replaceText[$get[c].md;$;]];# $get[c]
desc
### Использование
\`\`\`php
bot.on$get[c]()
bot.$get[c]Command
\`\`\`
## Пример(ы)

\`\`\`javascript
bot.$get[c]command({
  name: '$get[c]',
  code: \`
\`
// Возвращает: ...
})
\`\`\`]
$setvar[functionD;$sum[1;$getvar[functionD]]]
$let[c;$djsEval[client.functionManager.paths[0].keys[$getvar[functionD]];yes]]
$onlyIf[$djsEval[client.functionManager.functions[$getvar[functionD]];yes]!=undefined;$log[$getvar[functionD]]]`})
const a = require("aoi.js");
const b = new.aoijsBot({
token: process.env.token,
prefix: "docs!",
intents: "GUILDS",
})

b.loopCommand({
executeOnStartUp: true,
every: $sum[$ping+$executionTime],
code: `$setVar[a;$sum[1;$getVar[a]]]
$writeFile[functions/usd$tolowercase[$replaceText[$djsEval[client.functionManager.functions[$getVar[a]];yes];$;]];
# $get[f]

Тут описание, если оно нe указано - обратитесь к документационным менеджерам.




$let[f;$djsEval[client.functionManager.functions[$getVar[a]];yes]]

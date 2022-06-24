module.exports = [{
  name: "metadata",
  code: `$title[1;$splittext[1]$textSplit[$splitText[2]$textSplit[$httpRequest[https://raw.githubusercontent.com/Weredok/docs/dev/functions/usd$tolowercase[$replacetext[$message[1];$;]];#];
  ];www.docs.weredok.ga/functions/usd$tolowercase[$replacetext[$message[1];$;]];#];
  ]]
  $addField[1;Описание;$splitText[2]$textSplit[$httpRequest[https://raw.githubusercontent.com/Weredok/docs/dev/functions/usd$tolowercase[$replacetext[$message[1];$;]];#];
  ];$splittext[1]$textSplit[$splitText[2]$textSplit[$httpRequest[https://raw.githubusercontent.com/Weredok/docs/dev/functions/usd$tolowercase[$replacetext[$message[1];$;]];#];
  ];## Описание];no]
  $addField[1;Пример использования;$splittext[1]$textSplit[$splitText[2]$textSplit[$httpRequest[https://raw.githubusercontent.com/Weredok/docs/dev/functions/usd$tolowercase[$replacetext[$message[1];$;]];## Пример использования];
  ]
  $color[1;RANDOM]  
  $onlyif[$hasPerms[$guildID;$authorID;admin]==true;]`
}]

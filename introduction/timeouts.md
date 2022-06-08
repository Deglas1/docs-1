# Timeouts
d

## usg


```javascript
module.exports = [{
name: "remind",
aliases: [" L "],
code: `$setTimeout[reminder;$message[1];{ "message": "$messageSlice[1;20]" }]`
}, {
name: "reminder",
type: "timeout",
code: `$sendDm[$timeoutData[author.id]; ! : $timeoutData[message]]`
}]

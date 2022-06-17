module.exports = [{
 name: "check",
  code: ` 
  
  
  
  
  Fields: $getObjectProperty[fields]
  Function Name: $getObjectProperty[name]
  $createObject[{$readFile[api/api.json]}]
  `

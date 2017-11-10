var arr=['a','a','b','b','b','b','c','a']
var obj={}


arr.forEach(function (item) {
    obj[item]=(!!obj[item]&&obj[item])+1
})


console.log(obj)
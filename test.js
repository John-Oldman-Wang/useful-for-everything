
function _proxy(obj){
    if(typeof obj!=='object'){
        return obj
    }
    var _p=new Proxy(obj, {
        get: function (target, key, receiver) {
            console.log('get')
            return Reflect.get(target, key, receiver);
        },
        set: function (target, key, value, receiver) {
            // if (typeof value == 'object') {
            //     console.log('object')
            // }
            var p = _proxy(value)
            console.log('!!')
            return Reflect.set(target, key, p, receiver);
        }
    })
    return _p
}
// return
var obj = {}
var proxyobj = _proxy(obj)
// var o = Object.create(proxyobj)
// Object.assign(o,{a:1,b:{c:1}})
// o.a=3
console.log(proxyobj)
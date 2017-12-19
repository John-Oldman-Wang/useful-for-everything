Proxy.prototype={
    name:"Proxy"
}
class ObjectWatch extends Proxy{
    constructor(target) {
        var handle
        super(target, handle={
            get: function (target, key, receiver) {
                return Reflect.get(target, key, receiver);
            },
            set: function (target, key, value, receiver) {
                var p = typeof value == 'Object'? new ObjectWatch(value, handle):value
                console.log('set!')
                // flag = true
                // setTimeout(function () {
                //     console.log('--')
                //     if (flag) {
                //         console.log('set')
                //         flag = !flag
                //     }
                // }, 0)
                return Reflect.set(target, key, p, receiver);
            }
        })
    }
}

var o=new ObjectWatch({})
o.a=3
o.b={}
console.log(o)
o.b.c=3
console.log(o)
console.log(ObjectWatch.name)
return
function _proxy(obj) {
    if (typeof obj !== 'object') {
        return obj
    }
    var _p = new ObjectWatch(obj, {
        get: function (target, key, receiver) {
            //console.log('get')
            return Reflect.get(target, key, receiver);
        },
        set: function (target, key, value, receiver) {
            var p = _proxy(value)
            console.log('set!')
            flag = true
            setTimeout(function () {
                console.log('--')
                if (flag) {
                    console.log('set')
                    flag = !flag
                }
            }, 0)
            return Reflect.set(target, key, p, receiver);
        }
    })
    _p.__proto__.valueOf=function(){
        return Object.create(this)
    }
    return _p
}

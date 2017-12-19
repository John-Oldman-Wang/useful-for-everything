;var con=(function (window) {
    var localStorage = window.localStorage
    var obj = {}
    var item
    var flag=false
    // class ObjectWach extends Proxy{
    //     constructor(target, handler){
    //         spuer(target, handler)
    //     }
    // }
    function _proxy(obj) {
        if (typeof obj !== 'object') {
            return obj
        }
        var _p = new Proxy(obj, {
            get: function (target, key, receiver) {
                //console.log('get')
                return Reflect.get(target, key, receiver);
            },
            set: function (target, key, value, receiver) {
                var p = _proxy(value)
                console.log('set!')
                flag=true
                setTimeout(function(){
                    console.log('--')
                    if(flag){
                        console.log('set')
                        flag = !flag
                    }
                },0)
                return Reflect.set(target, key, p, receiver);
            }
        })
        _p.__proto__.valueOf = function () {
            console.log('valueof')
            return Object.create(this)
        }
        return _p
    }
    return function (key) {
        item=key
        var obj = {}
        var proxyobj = _proxy(obj)
        // var _obj = Object.create(proxyobj) 
        Object.assign(proxyobj, JSON.parse(localStorage.getItem(key)))
        return proxyobj
    }
})(this);

var o = con("key")
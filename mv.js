// 需要更多的思考，和dom知识
; (function () {
    var datas = {
        /*
            symbol:value
        */
    }
    var mapOfObjects = new Map()
    /* object key ele property
    {
        object:{
            key1:
            key2:symbol
        }
    }
    */
    var mapOfElements = new Map()
    var index = 1;
    return function bin(obj, key, ele, property) {
        var sym = Symbol(index++)
        //初始赋值
        if ('key' in obj) {
            datas[sym] = obj[key]
        } else if (property in ele) {
            datas[sym] = obj[key]
        }
        //检查obj之前是否有绑定
        if (!sets.has(obj)) {
            //没有绑定
            var map = new Map()
            map.set(ele, new Set([property]))
            sets.set(obj, {
                key: {
                    value: sym,
                    map: map
                }
            })
        } else {
            var options = s.get(obj)
            if (key in options) {
                var thiskeyoption = options[key]
                if (thiskeyoption.map.has(ele)) {

                } else {

                }
            } else {
                var
            }
        }

        Object.defineProperty(obj, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function () {
                return data[sym];
            },
            set: function (newVal) {
                data[sym] = newVal;
            }
        })
        Object.defineProperty(ele, property, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function () {
                return data[sym];
            },
            set: function (newVal) {
                data[sym] = newVal;
            }
        })
    }
})()
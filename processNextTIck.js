(function(global,factory){
    if(typeof module == 'object' && typeof module.exports == 'object'){
        module.exports = factory(global)
    }else{
        global.nextTick = factory(global)
    }
})(new Function('return this')(), function (global){
    if('process' in global && typeof global.process=='object'&& typeof process.nextTick == 'function'){
        return process.nextTick.bind(process)
    }else{
        let promise = new Promise(function (resolve,rej){
            resolve()
        })
        return function (fn){
            promise.then(fn)
        }
    }
})
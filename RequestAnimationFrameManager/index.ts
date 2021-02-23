
class RequestAnimationFrameManager {
    callBacks: Function[] = [];
    timer: any = null;
    constructor(public animationFrameProvider: AnimationFrameProvider) {

    }
    start() {
        const self = this;
        this.timer = self.animationFrameProvider.requestAnimationFrame(function f() {
            self.callBacks.forEach(fn => {
                fn()
            })
            self.timer = self.animationFrameProvider.requestAnimationFrame(f);
        })
    }
    stop() {
        this.animationFrameProvider.cancelAnimationFrame(this.timer);
        this.timer = null;
    }
    addLoop(fn: Function) {
        this.callBacks.push(fn)
        if (this.timer === null) {
            this.start();
        }
        return fn;
    }
    removeLoop(fn: Function) {
        const index = this.callBacks.findIndex(i => i === fn);
        if (index === -1) {
            return false;
        }
        this.callBacks.splice(index, 1);
        if (this.callBacks.length === 0) {
            this.stop();
        }
        return true;
    }
}
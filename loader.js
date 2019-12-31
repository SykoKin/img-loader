function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]'
}

class Loader {
    constructor(startIndex, endIndex, filePath, imgCode, finishCB) {
        // 初始化变量
        this.list = [] // 图片数组
        this.cnt = 0
        this.loadingFinish = false
        // 记录回调函数
        this.finishCB = finishCB

        // 加载图片回掉
        let _this = this
        function count() {
            _this.cnt++
            if (_this.cnt >= _this.list.length) {
                console.log('加载完成')
                _this.loadingFinish = true
                if (_this.finishCB) _this.finishCB()
            }
        }

        if (isArray(filePath)) {
            // 根据图片数组配置
            for (let i = 0; i < filePath.length; i++) {
                let img = new Image()
                img.onload = count
                this.list.push(img)
                img.src = filePath[i]
            }
        } else {
            // 根据参数配置原始数据数组
            for (let i = startIndex; i <= endIndex; i++) {
                let img = new Image()
                img.onload = count
                this.list.push(img)
                img.src = filePath + i + '.' + imgCode
            }
        }
    }
}
// 在Loader原型上添加 all 方法
Loader.__proto__.all = function(arr, callback) {
    // loading实例全部加载完毕
    let checkInter = setInterval(() => {
        try {
            for (let i = 0; i < arr.length; i++) {
                if (!arr[i].loadingFinish) return
            }
            // 实例全部加载完成
            if (callback) callback()
            clearInterval(checkInter)
        } catch (error) {
            console.log(error)
            clearInterval(checkInter)
        }
    }, 100)
}

export default Loader

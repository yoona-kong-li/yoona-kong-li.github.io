
function drag(obj) {

    title.onmousedown = function (e) {
        this.style.cursor = 'move';
        var e = e || window.event;
        // 获取鼠标当前的距离
        var x = e.pageX;
        var y = e.pageY;

        var left = obj.offsetLeft + obj.offsetWidth / 2;
        var top = obj.offsetTop + obj.offsetHeight / 2;

        document.onmousemove = function (e) {
            var e = e || window.event;
            // 获取鼠标移动后的坐标
            var _x = e.pageX;
            var _y = e.pageY;
            obj.style.left = _x - x + left + 'px';
            obj.style.top = _y - y + top + 'px';
            return false;
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            obj.style.cursor = 'default';
        }

        return false;

    }
}
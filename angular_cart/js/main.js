
var cartController = function ($scope) {
    $scope.cart = [
        {
            id: 001,
            name: 'iphone7',
            num: 4,
            price: 5388
        },
        {
            id: 002,
            name: 'Galaxy S7 Edge',
            num: 2,
            price: 5688
        },
        {
            id: 003,
            name: 'HUAWEI P9 plus',
            num: 2,
            price: 5299
        },
        {
            id: 004,
            name: 'SONY Xperia Z5',
            num: 1,
            price: 5199
        }
    ];



    // 计算总价
    $scope.totalPrice = function () {
        var total = 0;
        angular.forEach($scope.cart, function (item) {
            total += item.num * item.price;
        })
        return total;
    }

    // 计算总购买数
    $scope.totalNum = function () {
        var total = 0;
        angular.forEach($scope.cart, function (item) {
            total += parseInt(item.num);
        })
        return total;
    }

    // 获取商品的索引
    var findIndex = function (id) {
        var index = -1;
        angular.forEach($scope.cart, function (item, key) {
            if (item.id === id) {
                index = key;
                return;
            }
        });
        return index;
    }

    // 增加购买数量
    $scope.add = function (id) {
        var index = findIndex(id);
        if (index !== -1) {
            ++$scope.cart[index].num;
        }
    }

    // 减少购买数量
    $scope.reduce = function (id) {
        var index = findIndex(id);
        if (index !== -1) {
            var item = $scope.cart[index];
            if(item.num > 1){
                --item.num;
            }else{
                var returnKey = confirm('是否从购物车中删除该商品？');
                if(returnKey){
                    $scope.remove(id);
                }
            }
        }
    }

    // 移除商品
    $scope.remove = function (id) {
        var index = findIndex(id);
        if (index !== -1) {
            $scope.cart.splice(index, 1);
        }
    }

    // 监听商品数量变化 小于1时提示用户是否要删除该商品
    $scope.$watch('cart',function(newValue,oldValue){
        angular.forEach(newValue,function(item,key){
            if(item.num < 1){
                var returnKey = confirm('是否从购物车中删除该商品？');
                if(returnKey){
                    $scope.remove(item.id);
                }else{
                    item.num = oldValue[key].num;
                }
            }
        })
    },true);

    
}
angular.module('starter.controllers', [])

.controller('MommentCtrl', function($scope,MonmmentService) {
	//scope变量定义
	$scope.hasNew = [];//是否有新消息
	$scope.userName='张小六';//登录的用户
	$scope.commentNum=3;
	$scope.commentClick=false;
	$scope.viewAllTextHead='查看全部';
	$scope.viewAllTextEnd='条评论';
	$scope.hasFavour=false;
	//从MonmmentService中获取数据;
	$scope.data=MonmmentService.all();
	//点赞函数
	$scope.onFavorClick=function () {
		console.log(this.value.favourIco);
	$scope.hasFavour=!$scope.hasFavour;
		if (this.value.favourIco=='ion-ios-heart-outline') {
			this.value.favour++;
			this.value.favourIco='ion-ios-heart favourIco';
			console.log('test');
			$scope.hasNew.push(1);
		} else if(this.value.favourIco=='ion-ios-heart favourIco'){
			this.value.favour--;
			this.value.favourIco='ion-ios-heart-outline';
			$scope.hasNew.pop();
		}
	}
	//点击展开评论列表函数
	$scope.onCommentShowClick=function (len){
		// console.log(len);
		// console.log($scope.commentNum);
		$scope.commentClick=!$scope.commentClick;
		if ($scope.commentClick) {
			$scope.commentNum=len;
		} else {
			$scope.commentNum=3;
			$scope.viewAllTextMid=len;
		}
	};
})

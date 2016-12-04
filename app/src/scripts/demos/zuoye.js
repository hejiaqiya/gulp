angular.module("myApp",[])
.controller("zController",["$scope",function($scope){
	var userInfo=[
		{
			firstname:"FANG",
			lastname:"vane",
			salary:"1233350",
			birthday:new Date("2007-07-11")
		},
		{
			firstname:"SARA",
			lastname:"rose",
			salary:"23233423",
			birthday:new Date("1997-02-03")
		},
		{
			firstname:"AAM",
			lastname:"hot",
			salary:"6688050",
			birthday:new Date("1986-03-06")
		},
		{
			firstname:"MARK",
			lastname:"bear",
			salary:"6800000",
			birthday:new Date("2001-11-16")
		}
	]
	$scope.userInfo=userInfo;
	$scope.firstName="";
	$scope.lastName="";
	$scope.sortColumn="firstname";  //默认排序字段
	$scope.reverseSort=false;   //默认的排序方式

	$scope.searchFirst=function(obj){
		if($scope.firstName!=""){
			if(obj.firstname.toUpperCase().indexOf($scope.firstName.toUpperCase())!=-1){
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}
	$scope.searchLast=function(dat){
		if($scope.lastName!=""){
			if(dat.lastname.toLowerCase().indexOf($scope.lastName.toLowerCase())!=-1){
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}

	//设置排序字段
	$scope.setSort=function(column){
		//如果传递过来的排序字段和当前字段一致，则是降序，否则升序
		$scope.reverseSort=$scope.sortColumn==column?!$scope.reverseSort:false;
		$scope.sortColumn=column;
	}
	
	//设置类
	$scope.getClass=function(column){
		if($scope.sortColumn==column){
			return $scope.reverseSort?"down":"up";
		}
	}
}])
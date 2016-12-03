angular.module("myApp",[])
.controller("zController",["$scope",function($scope){
	var messages=[
		{
			FirstName:"FANG",
			LastName:"vane",
			Salary:"￥12,333.50",
			Birthday:"2007-07-11"
		},
		{
			FirstName:"SARA",
			LastName:"rose",
			Salary:"￥232,334.23",
			Birthday:"1997-02-03"
		},
		{
			FirstName:"AAM",
			LastName:"hot",
			Salary:"￥66,880.50",
			Birthday:"1986-03-06"
		},
		{
			FirstName:"MARK",
			LastName:"bear",
			Salary:"￥68,000.00",
			Birthday:"2001-11-16"
		}
	]
	$scope.messages=messages;
	$scope.firstName="";
	$scope.lastName="";

	$scope.searchFirst=function(obj){
		if($scope.firstName!=""){
			if(obj.FirstName.toUpperCase().indexOf($scope.firstName.toUpperCase())!=-1){
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
			if(dat.LastName.toLowerCase().indexOf($scope.lastName.toLowerCase())!=-1){
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}

	$scope.col = 'FirstName';
    $scope.desc = 0;
}])
angular.module("myApp",[])
.controller("myController",["$scope",function($scope){
	var friends=[
		{
			name:"marry",
			phone:"15895220525"
		},
		{
			name:"amy",
			phone:"15235968547"
		},
		{
			name:"lili",
			phone:"18515869587"
		},
		{
			name:"coco",
			phone:"18356987456"
		}
	]
	$scope.friends=friends;
	$scope.searchText="";

	$scope.search=function(obj){
		if($scope.searchText!=""){
			if(obj.name.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1 || obj.phone.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1){
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	}
}])


/*-----------------------------------------promise----------------------------------------*/
$.ajax("/mock/livelist.json")
.done(function(data){
	console.log(data);
})
.fail(function(){

})
.done(function(){
	console.log("done");
})

$.when($.ajax("/mock/livelist.json"),$.ajax("/mock/login.json"))
.done(function(data1,data2){
	console.log("执行成功");
})
.fail(function(){
	console.log("执行失败");
})

var dtd=$.Deferred();   //创建一个deferred对象

var wait=function(){
	var task=function(){
		alert("hello");
		dtd.resolve();   //将dtd对象的状态改变为已完成
		//dtd.reject();      //将dtd对象的状态改变为已失败
	}
	setTimeout(task,2000);
	return dtd.promise();
}

var d=wait(dtd);

$.when(d)
.done(function(){
	alert("ok");
})
.fail(function(){
	alert("error");
})
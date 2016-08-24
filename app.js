var app = angular.module('flapperNews',[]);

app.controller('MainCtrl',[
'$scope',
function($scope){
	$scope.test = 'Hello Chris';
	$scope.posts = [
		{title:'Post 1', upvotes: 12},
		{title:'Post 2', upvotes: 2},
		{title:'Post 3', upvotes: 1},
		{title:'Post 4', upvotes: 11},
		{title:'Post 5', upvotes: 13}
	];

$scope.addPost = function(){
	//if entry is blank just return
	if ( !$scope.title || $scope.title === ''){return;}

	$scope.posts.push({
		title: $scope.title,
		link: $scope.link,
		upvotes: 0
	});
	$scope.title = '';
	$scope.link ='';
}

$scope.incrementUpvotes = function(post){
	post.upvotes += 1;
}


}]);
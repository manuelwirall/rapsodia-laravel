<!doctype html>
<html lang="en" ng-app="rapsodiaApp">
<head>
	<title>Rapsodia Laravel</title>
	<!-- Meta Configs -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Country Base HREF -->
	<!-- <base href="/ar/"> -->
	<!-- AngularJS HTML5Mode -->
	<meta name="fragment" content="!">
	<!-- SEO -->
	<meta name="title" content=""/>
	<meta name="description" content=""/>
	<meta name="keywords" content=""/>
	<!-- SEO Shares -->
	<meta property="og:title" content=""/>
	<meta property="og:type" content=""/>
	<meta property="og:url" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta property="og:image" content=""/>
	<!-- Angular -->
	<script type="text/javascript" src="/components/angular.js"></script>
	<script type="text/javascript" src="/components/angular-route.js"></script>
	<!-- JS -->
	<script type="text/javascript" src="/js/app.js"></script>
	<script type="text/javascript" src="/js/controllers.js"></script>
</head>
<body>
	<div ng-view></div>
	<div ng-controller="LookbookController">
		<ul>
			<li ng-repeat="look in looks"><img ng-src="http://qa.rapsodia.com/ar/{{look.imageL}}"/></li>
		</ul>
	</div>
</body>
</html>

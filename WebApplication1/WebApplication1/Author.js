var AuthorApp = angular.module("AuthorApp", []);  //Creating Module

AuthorApp.controller('AuthorController', function ($scope) {  //Creating Controller and Controller is a function that takes $scope as parameter
    $scope.authors =
        [
            { 'name': 'Gaurav Goyal' },
            { 'name': 'Tejas Garg' },
            { 'name': 'Prashant Agarwal' },
            { 'name': 'Tony' }
        ];
});
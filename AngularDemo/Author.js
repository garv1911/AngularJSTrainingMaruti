var AuthorApp = angular.module("AuthorApp", []);  //Creating Module

AuthorApp.controller('AuthorController', function ($scope) {  //Creating Controller and Controller is a function that takes $scope as parameter
    $scope.authors =
        [
            { 'name': 'Anoop Garg', 'age': '32' },
            { 'name': 'Tejas Garg', 'age': '3' },
            { 'name': 'Prashant Agarwal', 'age': '45' },
            { 'name': 'Tony', 'age': '35' },

        ];
});
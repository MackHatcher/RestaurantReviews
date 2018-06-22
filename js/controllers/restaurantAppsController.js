angular.module('restaurantApp')
    .controller('restaurantAppsController', ['restaurantService', function(restaurantList) {
        this.restaurants = restaurantList.restaurants
        this.thumbsUp = function (restr) {
            restaurantList.thumbsUp(restr);
        }
        this.thumbsDown = function (restr) {
            restaurantList.thumbsDown(restr);
        }     
    }])
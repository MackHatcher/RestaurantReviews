angular.module('restaurantApp')
    .service('restaurantService', function () {
        this.restaurants = [{
                name: 'Sukhothai',
                description: 'Delicious and authentic Thai food.',
                image: 'http://www.sukhothaiwpg.com/wp-content/uploads/sites/30/2015/07/shutterstock_91363808.jpg',
                rating: 3,
            },
            {
                name: 'Nu Burger',
                description: 'Gourmet burgers with an emphasis on real, whole ingredients.',
                image: 'http://accesswinnipeg.com/wp-content/uploads/2017/08/nuburger-forks.jpg',
                rating: 3,
            },
            {
                name: "Stella's Cafe & Bakery",
                description: 'All-day breakfast with a twist, sandwiches, entrees, and more!',
                image: 'https://c2.staticflickr.com/6/5573/14803260710_ac324c61a5_b.jpg',
                rating: 3,
            },
            {
                name: "Niko's",
                description: 'Traditional Greek/Mediterranean cuisine.',
                image: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t31.0-8/26198626_864547343708362_3753082334290825556_o.jpg?_nc_cat=0&oh=11104ee26ac9eeadc0a20d12b7451a46&oe=5B81F2EF',
                rating: 3,
            },
            {
                name: 'Poutinerie',
                description: "If you've eaten it, there's probably a poutine version of it!",
                image: 'https://www.seriouseats.com/recipes/images/2015/03/20150327-poutine-joshua-bousel-1500x1125.jpg',
                rating: 3,
            },
            {
                name: 'Elephant & Castle',
                description: 'High quality, English-inspired bar food done right.',
                image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/1/25/0/PACE-SALSA_Deluxe-Nachos_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371591001669.jpeg',
                rating: 3,
            },
            {
                name: 'Boston Pizza',
                description: 'Pizza, burgers, steaks, appetizers and all in between.',
                image: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/10984090_919145618120218_6390478750340587916_n.png?_nc_cat=0&oh=8b16f1a02e27c0dc5be57b77a3e9f202&oe=5B76157E',
                rating: 3,
            },
            {
                name: 'Charisma',
                description: 'Authentic Indian food, includes an excellent buffet.',
                image: 'https://imagesvc.timeincuk.net/v3/keystone/image?url=http://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/01/Butter-chicken-recipe.jpg&q=82',
                rating: 3
            }
        ];
        this.thumbsDown = function (restaurant) {
            let index = this.restaurants.indexOf(restaurant)
            this.restaurants[index].rating--;

        }
        this.thumbsUp = function (restaurant) {
            let index = this.restaurants.indexOf(restaurant)
            this.restaurants[index].rating++;

        }


    })
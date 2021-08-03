const RESTAURANT_DATA = [
    {
        id: 1,
        title: 'Food',
        routeName: 'food',
        items: [
            {
                id: 1,
                name: 'Beef Burger',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/beef-burger.jpg?alt=media&token=8b010cde-778e-4905-8076-06462b31f911',
                price: 120
            },
            {
                id: 2,
                name: 'Chicken Burger',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/chicken-burger.jpg?alt=media&token=a0d95220-6dfb-44a7-a172-4a4f1504c7c0',
                price: 120
            },
            {
                id: 3,
                name: 'Steak',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/steak.jpg?alt=media&token=85940899-0dfa-40ce-9dc1-94ec9dee661a',
                price: 150
            },
            {
                id: 4,
                name: 'Prawns',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/prawns.jpg?alt=media&token=70f14209-c30f-4b29-a8f4-bb5e44dd7736',
                price: 120
            },
            {
                id: 5,
                name: 'Seafood Platter',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/seafood-platter.jpg?alt=media&token=9ca02cf0-2d83-4f18-a098-13b7c090ce9a',
                price: 180
            },
            {
                id: 6,
                name: 'Cheese Pizza',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/pizza-1.jpg?alt=media&token=6b78ed6f-ed06-4f2a-b934-66773014feb8',
                price: 120
            },
            {
                id: 7,
                name: 'Chicken Pizza',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/pizza-2.jpg?alt=media&token=da5ddbc4-739c-4818-a4cd-33cc998061d2',
                price: 130
            },
            {
                id: 8,
                name: 'Meat Pizza',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/pizza-3.jpg?alt=media&token=5f402f7a-438c-4bd6-8cd9-3e36678167a5',
                price: 140
            },
            {
                id: 9,
                name: 'Samoosas',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/samoosas.jpg?alt=media&token=ec3db348-f521-4b6f-aaba-d1b8db375c35',
                price: 60
            },
            {
                id: 10,
                name: 'Curry',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/curry.jpg?alt=media&token=ec8da691-6706-4c62-85d8-7d46330c4900',
                price: 160
            },
            {
                id: 11,
                name: 'Lamb Chops',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/lamb-chops.jpg?alt=media&token=c12cc6e5-63c1-46b9-bfe7-407d0036a125',
                price: 140
            }

        ]
    },
    {
        id: 2,
        title: 'Drinks',
        routeName: 'drinks',
        items: [
            {
                id: 1,
                name: 'Beer',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/beer.jpg?alt=media&token=da7f5650-da4a-4671-996f-0aa5ace8d715',
                price: 30
            },
            {
                id: 2,
                name: 'Whiskey',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/whiskey.jpg?alt=media&token=34b17474-8e1e-4f27-965d-e15014130932',
                price: 40
            },
            {
                id: 3,
                name: 'Brandy',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/brandy.jpg?alt=media&token=e6993fdf-c373-4d33-b19f-3bc557cadfab',
                price: 40
            },
            {
                id: 4,
                name: 'Cider',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/cider.jpg?alt=media&token=755db9e0-aed3-4955-a910-35cd2a481eb5',
                price: 30
            },
            {
                id: 5,
                name: 'Vodka',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/vodka.jpg?alt=media&token=b6322562-d296-4fb3-889e-391e0d484d9c',
                price: 40
            },
            {
                id: 6,
                name: 'Daquiri',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/daquiri.jpg?alt=media&token=5831aee5-1330-4a72-8bee-d8a2570b3e49',
                price: 65
            },
            {
                id: 7,
                name: 'Mojito',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/mojito.jpg?alt=media&token=1444d00d-e9d0-4dd0-8b45-d5e54ec4f369',
                price: 65
            },
            {
                id: 8,
                name: 'Gin',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/gin.jpg?alt=media&token=6eafbf46-ca49-4291-be84-480fc526ca29',
                price: 40
            },
            {
                id: 9,
                name: 'Sex On The Beach',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/the-jagger-lounge.appspot.com/o/sex-on-the-beach.jpg?alt=media&token=4a548fca-edc4-4feb-ae08-525a215047cd',
                price: 40
            }
        ]
    }

]

export default RESTAURANT_DATA;
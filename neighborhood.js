const restaurants = ['Archibald\'s', 'HWA', 'R&R Barbeque'];

let restaurantGenerator = document.querySelector('#generator');
restaurantGenerator.addEventListener('click', () => {
    const randomRestaurant = Math.floor(Math.random() * restaurants.length);
    alert(restaurants[randomRestaurant])
})


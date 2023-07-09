// create the 'database' of values
// this is an array with objects inside it
    // the object has three
const galleryItems = [
    { id: 1, 
        path: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/iStock-177369626-1-0e8d40eaabe65d2cb2d745ef45f09229.jpg', 
        description: 'Photo of a goat taken at Glacier National Park.', 
        likes: 0 },
    {id: 2, 
        path:'..public/images/pug.jpg', 
        description: 'dog with bulgy eyes', 
        likes: 0},
    {id: 3, 
        path: '..public/images/woof.jpg', 
        description: 'woofing dog', 
        likes: 0},
    {id: 4, 
        path: 'images/englishCream.jpg', 
        description: 'english cream dog', 
        likes: 0},
    {id: 5, 
        path: 'images/glasses.jpg', 
        description: 'dog with glasses', 
        likes: 0},
    {id: 6, 
        path: 'corgi.jpeg', 
        description: 'happy corgi', 
        likes: 0}
];

module.exports = galleryItems;
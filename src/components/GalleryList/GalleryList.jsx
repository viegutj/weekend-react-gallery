// import our gallery.data.js so that we can work with the data in this file
import galleryItems from "../../../server/modules/gallery.data"

// create function to .map() the incoming data
    // parameters will be 
function GalleryList({galleryItems}) {
    // we want to be returning what we're appending to the DOM
    return (
        <ul>{galleryItems.map((item) => (
            // <GalleryItem key={item.id}/>
        ))}</ul>
    )
}
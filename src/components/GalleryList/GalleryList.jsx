// import our gallery.data.js so that we can work with the data in this file
// import galleryItems from "../../../server/modules/gallery.data"
import GalleryItem from "../GalleryItem/GalleryItem"

// create function to .map() the incoming data
    // parameters will be 
function GalleryList({galleryList}) {
    // we want to be returning what we're appending to the DOM
    return (
        <ul>{galleryList.map((item) => (
            // pass it the gallery data stored in `App` via `props`.
            <GalleryItem key={item.id} item={item}/>
        ))}</ul>
    )
} // end GalleryList

export default GalleryList
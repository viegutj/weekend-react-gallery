// import our gallery.data.js so that we can work with the data in this file
// import galleryItems from "../../../server/modules/gallery.data"
import GalleryItem from "../GalleryItem/GalleryItem"

// import styles to add flexbox to display
import './GalleryList.css'

// create function to .map() the incoming data
    // parameters will be 
function GalleryList({galleryList, likeDog}) {
    // we want to be returning what we're appending to the DOM
    return (
        <ul className="butts">{galleryList.map((item) => (
            // pass it the gallery data stored in `App` via `props`.
                <GalleryItem className="GalleryItem" key={item.id} item={item} likeDog={likeDog}/>
        ))}</ul>
    )
} // end GalleryList

export default GalleryList

// GalleryItems() is the overarching function for all things in this file
function GalleryItem(props) {
    // return what we want to individually display for each item
    return(
        <li>
            <h5>{props.item.name}</h5>
            <div>
                <p>{props.item.path}</p>
                <p>Love it!</p>
            </div>
        </li>
    )
} // end GalleryItem

export default GalleryItem
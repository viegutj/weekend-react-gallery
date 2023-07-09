
// GalleryItems() is the overarching function for all things in this file
function GalleryItem(props) {
    // return what we want to individually display for each item
    return(
        <div>
            <h5>{props.item.description}</h5>
            <div>
                <img src={`${props.item.path}`} alt="dog" />
                <p>Love it!</p>
            </div>
            </div>
    )
} // end GalleryItem

export default GalleryItem
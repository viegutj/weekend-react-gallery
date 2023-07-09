// import CSS styling
import './GalleryItem.css';

// GalleryItems() is the overarching function for all things in this file
function GalleryItem(props) {
    // return what we want to individually display for each item
    return(
        <div className='GalleryItem'>
            <div>
            <h5>{props.item.description}</h5>
                <img src={`${props.item.path}`} alt="dog" />
                {/* style={{ width: 100, height: 100 }}  */}
                <div>
                <button>
                    Love It!
                </button>
                </div>
            </div>
        </div>
    )
} // end GalleryItem

export default GalleryItem
// import CSS styling
import './GalleryItem.css';
import { useState } from "react";

// GalleryItems() is the overarching function for all things in this file
function GalleryItem(props) {

    // set hook for flip boolean value
    const [flipCard, setFlipCard] = useState(true)

    function handleFlip() {
        console.log('card has been clicked!');
        setFlipCard(!flipCard);
    }
    function handleLikes(){
        console.log('like button clicked!');
        props.likeDog({
            id: props.item.id,
        });
    }

    let textForLikes=''
    if(props.item.likes){
        textForLikes = `${props.item.likes} people like this!`
    } else {
        textForLikes = 'no people love this :('
    }

    if (flipCard) {
        // return what we want to individually display for each item
        return(
            <div className='GalleryItem'>
            <div>
                <img onClick={handleFlip} src={`${props.item.path}`} alt="dog" />
                <div>
                    <button onClick={handleLikes}>
                        Love It!
                    </button>
                    <div>
                    {textForLikes}
                    </div>
                </div>
            </div>
        </div>
    )
    } else {
        return(
            <div onClick={handleFlip}>
                <p>
                    {props.item.description}
                </p>
            </div>
        )
    }
} // end GalleryItem

export default GalleryItem
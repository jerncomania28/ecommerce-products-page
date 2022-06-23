import { useState } from "react";


//asssets 
import IconPrev from "../../assets/icon-previous.svg";
import IconNext from "../../assets/icon-next.svg";

const ImageDisplay = ({ Images }) => {

    const [resource, setResource] = useState();
    const [slideIndex, setSlideIndex] = useState(0);

    const handleResource = (e) => {
        setResource(e.target.src);
    }

    const handleNext = () => {
        if (slideIndex === (Images.length - 1)) {
            setSlideIndex(0);
        } else {

            setSlideIndex(slideIndex + 1);
        }
    }

    const handlePrev = () => {
        if (slideIndex === 0) {
            setSlideIndex(Images.length - 1);
        } else {
            setSlideIndex(slideIndex - 1);
        }
    }


    return (
        <div className="display">
            <div className="display-playground">
                <div className="controls">
                    <div className="controls__prev" onClick={handlePrev}>
                        <img src={IconPrev} alt="prev-btn" />
                    </div>
                    <div className="controls__next" onClick={handleNext} >
                        <img src={IconNext} alt="next-btn" />
                    </div>
                </div>
                <img src={resource ? resource : Images[slideIndex]} alt="playground.img" />
            </div>
            <div className="display-options">
                {
                    Images.map((img, index) => {
                        return <img src={img} alt="dislay-options.img" key={index} onMouseOver={handleResource} />
                    })
                }

            </div>

        </div>
    )
}


export default ImageDisplay;
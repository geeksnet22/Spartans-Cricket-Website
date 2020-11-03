import React, { useState, useEffect } from "react";
import "../css/GalleryModal.css"

function GalleryModal(props) {

    const { allSlides, currentSlide } = props

    const [currentModalImage, setCurrentModalImage] = useState(currentSlide);

    const closeModal = () => {
        document.getElementById("galleryModal").style.display = "none";
    }

    const setCurrentSlide = ( n ) => {
        showSlides(n);
    }

    const showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName("modalSlide");
        var dots = document.getElementsByClassName("thumbnailImage");
        if (n > slides.length) {setCurrentModalImage(0)}
        else if (n < 0) {setCurrentModalImage(slides.length-1)}
        else { setCurrentModalImage(n) }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[currentModalImage].style.display = "block";
        dots[currentModalImage].className += " active";
    };

    useEffect(() => {
        showSlides(currentSlide);
    });

    const ModalSlide = (props) => {
        const {slideIndex} = props
        return (
            <div className="modalSlide">
                <div className="numbertext">{slideIndex+1}/{allSlides.length}</div>
                <img src={allSlides[slideIndex]} alt="" />
            </div>
        )
    }
    
    const ThumbnailImage = (props) => {
        const {slideIndex} = props
        return (
            <img className="thumbnailImage" src={allSlides[slideIndex]} onClick={() => setCurrentModalImage(slideIndex)} alt="" />
        )
    }

    return (
        <div id="galleryModal" className="galleryModal">
            <span className="close cursor" onClick={closeModal}>&times;</span>
            <div className="modalContent">
                <div className="slidesContainer">
                    <ModalSlide slideIndex={0} />
                    <ModalSlide slideIndex={1} />
                    <ModalSlide slideIndex={2} />
                    <ModalSlide slideIndex={3} />
                    <ModalSlide slideIndex={4} />
                    <ModalSlide slideIndex={5} />
                    <ModalSlide slideIndex={6} />
                    <ModalSlide slideIndex={7} />
                    <ModalSlide slideIndex={8} />
                    <ModalSlide slideIndex={9} />
                    <ModalSlide slideIndex={10} />
                    <ModalSlide slideIndex={11} />
                    <ModalSlide slideIndex={12} />
                    <ModalSlide slideIndex={13} />
                    <ModalSlide slideIndex={14} />
                    <ModalSlide slideIndex={15} />
                    <ModalSlide slideIndex={16} />
                    <ModalSlide slideIndex={17} />
                    <ModalSlide slideIndex={18} />
                    <ModalSlide slideIndex={19} />
                    <ModalSlide slideIndex={20} />
                </div>
                
                <a className="prev" onClick={() => setCurrentSlide(currentModalImage + 1)}>&#10094;</a>
                <a className="next" onClick={() => setCurrentSlide(currentModalImage + 1)}>&#10095;</a>
                

                <div className="thumbnailsContainer">
                    <ThumbnailImage slideIndex={0}/>
                    <ThumbnailImage slideIndex={1}/>
                    <ThumbnailImage slideIndex={2}/>
                    <ThumbnailImage slideIndex={3}/>
                    <ThumbnailImage slideIndex={4}/>
                    <ThumbnailImage slideIndex={5}/>
                    <ThumbnailImage slideIndex={6}/>
                    <ThumbnailImage slideIndex={7}/>
                    <ThumbnailImage slideIndex={8}/>
                    <ThumbnailImage slideIndex={9}/>
                    <ThumbnailImage slideIndex={10}/>
                    <ThumbnailImage slideIndex={11}/>
                    <ThumbnailImage slideIndex={12}/>
                    <ThumbnailImage slideIndex={13}/>
                    <ThumbnailImage slideIndex={14}/>
                    <ThumbnailImage slideIndex={15}/>
                    <ThumbnailImage slideIndex={16}/>
                    <ThumbnailImage slideIndex={17}/>
                    <ThumbnailImage slideIndex={18}/>
                    <ThumbnailImage slideIndex={19}/>
                    <ThumbnailImage slideIndex={20}/>
                </div>
            </div>
        </div>
    );
}

export default GalleryModal;
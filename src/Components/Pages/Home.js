import React from 'react';
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Img1 from "../../Assets/1.jpg";
import Img2 from "../../Assets/2.jpg";
import Img3 from "../../Assets/3.jpg";

const Home = () => {
    const Image = [{ image: Img1 }, { image: Img2 }, { image: Img3 },]
    return (
        <div className="carouselContainer">
            <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop interval={2000} showArrows={false}>
                {Image.map((item, index) =>
                    <div>
                        <img src={item.image} alt={`image-nep-pharm-${index}`} height="500px"/>
                    </div>)
                }
            </Carousel>
        </div>
    )
}

export default Home;
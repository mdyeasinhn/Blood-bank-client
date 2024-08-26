import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import banner from  '../../../assets/Image/Banner/banner.jpg'
import banner1 from  '../../../assets/Image/Banner/banner1.jpg'
import banner2 from  '../../../assets/Image/Banner/banner2.jpg'

const Banner = () => {
    return (
        <Carousel >
            <div>
                <img src={banner} />
            </div>
            <div>
                <img src={banner1} />
            </div>
            <div>
                <img src={banner2} />
            </div>
            
        </Carousel>
    );
};

export default Banner;
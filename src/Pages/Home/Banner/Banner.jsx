import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import banner from  '../../../assets/Image/Banner/banner.jpg'
import banner1 from  '../../../assets/Image/Banner/banner1.jpg'
import banner2 from  '../../../assets/Image/Banner/banner2.jpg'

const Banner = () => {
    return (
        <Carousel >
            <div>
                <img src="https://media.istockphoto.com/id/1781487564/photo/preparation-for-blood-test-with-senior-woman-by-female-doctor-medical-uniform-on-the-table-in.jpg?s=612x612&w=0&k=20&c=3o5PUAd0Vtx0aijACbrYK4EpLdfcCy8-IC40-hcFyUI="/>
            </div>
            <div>
                <img src='https://media.istockphoto.com/id/1972079694/photo/cheerful-female-blood-donor-sitting-on-procedure-chair-in-clinic.jpg?s=612x612&w=0&k=20&c=RQjh6XZ_0DfJZxAP3BY85yp-1SfpUicIom1hyBIBQEk=' />
            </div>
            <div>
                <img src='https://media.istockphoto.com/id/1303315827/photo/close-up-asian-chinese-nurse-drawing-blood-from-female-chinese-patient-arms-vein-in-the-clinic.jpg?s=612x612&w=0&k=20&c=07hAJhY0wm2P0_5EhMu3DPUKsFtSKC1N7_q5tS3v0F8=' />
            </div>
            
        </Carousel>
    );
};

export default Banner;
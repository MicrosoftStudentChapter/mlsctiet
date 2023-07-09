import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import '../Styles/Polaroid.module.css'
import FinalCard from './FInalCard';



export default function Carousels (items) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 3,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
       <div className='container'>
            <Carousel responsive={responsive} autoPlay={false} autoPlaySpeed={3500} infinite={true}>
                <FinalCard items={items}/>
            </Carousel>
        </div>
    )
}


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Card from "../Card";
import { Fragment } from "react";
import { RECOMMENDATIONS } from '../../constants'

const Slider = (props: { deviceType: string | undefined; }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return ( 
<Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  infinite={true}
  autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={5000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
    {
      RECOMMENDATIONS.map((recommendation) => 
      <div key={recommendation.name}>
        <Card>
        <Fragment>
        <div className="border border-green-600 w-16" />
          <Image
              className="rounded-full"
              src={recommendation.photo}
              width={300}
              height={300}
              alt='Project'
          />
          <h1 className="text-2xl">{recommendation.work}</h1>
          <p className="break-normal">{recommendation.recommendation}</p>
        </Fragment>
        </Card>
      </div>
      )
    }

  </Carousel>
   );
}
 
export default Slider;
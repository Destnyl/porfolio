import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imageBoy from '../../public/feedback/boy.jpg'
import imageGirl from '../../public/feedback/girl.png'
import imageUrl from '../../public/feedback/recognition.png'
import imageNominate from '../../public/feedback/nominate.png'
import Image from "next/image";
import Card from "../Card";
import { Fragment } from "react";

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

    <div>
      <Card>
      <Fragment>
      <div className="border border-green-600 w-16" />
        <Image
            src={imageUrl}
            width={300}
            height={300}
            alt='Project'
        />
        <h1 className="text-2xl">2021 Unionbank Recognition</h1>
        <p className="break-normal">Unionbank rewards and recognition for providing a great customer experience to their client and for continuous support for the development. </p>
      </Fragment>
      </Card>
    </div>

    <div>
      <Card>
      <Fragment>
      <div className="border border-green-600 w-16" />
        <Image
            src={imageGirl}
            width={300}
            height={300}
            alt='Project'
        />
        <h1 className="text-2xl">Joanna Grace Jose</h1>
        <h1 className="text-sm">UBx - Quality Assurance Lead</h1>
        <p className="break-normal">Unionbank rewards and recognition for providing a great customer experience to their client and for continuous support for the development. </p>

      </Fragment>
      </Card>
    </div>

    <div>
      <Card>
      <Fragment>
      <div className="border border-green-600 w-16" />
        <Image
            src={imageBoy}
            width={300}
            height={300}
            alt='Project'
        />
        <h1 className="text-2xl">Xerxis Alvar</h1>
        <h1 className="text-sm">UBx - Sr. Software Engineer</h1>
        <p className="break-normal">I worked with Andrea for almost a year, I have no complaints working with her. She is very determined to deliver fast with quality and assures that acceptance criteria is met.
          Very dedicated to her work and always supports the team when needed. 
          Has passion to develop and improve her skills set.  </p>

      </Fragment>
      </Card>
    </div>

    <div>
      <Card>
      <Fragment>
      <div className="border border-green-600 w-16" />
        <Image
            src={imageNominate}
            width={300}
            height={300}
            alt='Project'
        />
        <h1 className="text-2xl">UBx</h1>
        <h1 className="text-sm">Technology Services Circle of Excellence </h1>


      </Fragment>
      </Card>
    </div>
  </Carousel>
   );
}
 
export default Slider;
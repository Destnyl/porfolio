import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pergent from '../../public/feedback/pergent.jpeg'
import cams from '../../public/feedback/cams.jpeg'
import jourish from '../../public/feedback/jourish.jpeg'
import joana from '../../public/feedback/joana.jpeg'
import x from '../../public/feedback/x.jpeg'
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
            className="rounded-full"
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
            className="rounded-full"
            src={joana}
            width={300}
            height={300}
            alt='Project'
        />
        <h1 className="text-2xl">Joanna Grace Jose</h1>
        <h1 className="text-sm">UBx - Quality Assurance Lead</h1>
        <p className="break-normal">I’ve worked with Andrea for a Marketplace project, She’s a creative/talented FE developer, she can manage the changes happening, she’s a team player and proactive if anything is needed on her side. It’s a pleasure to work with her & I would love to work with her again in the future </p>

      </Fragment>
      </Card>
    </div>

    <div>
      <Card>
      <Fragment>
      <div className="border border-green-600 w-16" />
        <Image
            className="rounded-full"
            src={x}
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

    <div>
      <Card>
      <Fragment>
      <div className="border border-green-600 w-16" />
        <Image
            className="rounded-full"
            src={jourish}
            width={300}
            height={300}
            alt='Project'
        />
        <h1 className="text-2xl">Jourish Abasolo</h1>
        <h1 className="text-sm">UBx - Software Engineer</h1>
        <p className="break-normal">Andrea is a dependable and hard-working developer.
          She gets the job done and can work with any team. She can quickly understand
          and work her way through new codebases with less supervision. </p>

      </Fragment>
      </Card>
    </div>

    <div>
      <Card>
      <Fragment>
      <div className="border border-green-600 w-16" />
        <Image
            className="rounded-full"
            src={cams}
            width={300}
            height={300}
            alt='Project'
        />
        <h1 className="text-2xl">Camille Vallota</h1>
        <h1 className="text-sm">UBx - Quality Engineer</h1>
        <p className="break-normal">
        Andrea is keen to understand the technical know-how of the system and workflow as she plans out her tasks,
        she is also receptive and responsive on investigating issues raised in the team,
        making sure fix has been applied and behaved as expected.
        She has improved a lot and can handle multiple issues simultaneously with great determination.
        </p>

      </Fragment>
      </Card>
    </div>

    <div>
      <Card>
      <Fragment>
      <div className="border border-green-600 w-16" />
        <Image
            className="rounded-full"
            src={pergent}
            width={300}
            height={300}
            alt='Project'
        />
        <h1 className="text-2xl">Pergent Galang</h1>
        <h1 className="text-sm">Bitcapp - Frontend Developer</h1>
        <p className="break-normal">Andrea was my team mate on my first job.
          She was a reliable contributor to the team specifically on Frontend or Backend Development.
        </p>

      </Fragment>
      </Card>
    </div>
  </Carousel>
   );
}
 
export default Slider;
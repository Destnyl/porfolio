import Image from "next/image";
import Card from "./Card";
import ContentTitle from '../components/ContentTitle'
import ContentDetails from '../components/ContentDetails'
import imageUrl from "../public/skills.png"
import { Fragment } from "react";
import Button from "./base/button";

const Skills = () => {
    return ( 
        <div className="flex-none md:flex justify-between gap-x-8 gap-y-8 items-center p-8">
            <section className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <Card>
                    <Fragment>
                        <Image 
                            src={imageUrl}
                            width={50}
                            height={50}
                            alt=""
                        />
                        <p>Node Js</p>
                        <p>1 year backend experience with node js.</p>
                    </Fragment>
                </Card>

                <Card>
                    <Fragment>
                        <Image 
                            src={imageUrl}
                            width={50}
                            height={50}
                            alt=""
                        />
                        <p>React Js/Next js</p>
                        <p>No experience yet with this javascript library but still learning React Js. Had a basic knowledge with this libraries and this porfolio was based on React.</p>
                    </Fragment>
                </Card>

                <Card>
                    <Fragment>
                        <Image 
                            src={imageUrl}
                            width={50}
                            height={50}
                            alt=""
                        />
                        <p>Nuxt Js</p>
                        <p>More that 1 year experience with Nuxt. Bilidali and Commisari was my main project that was based on this framework.</p>
                    </Fragment>
                </Card>

                <Card>
                    <Fragment>
                        <Image 
                            src={imageUrl}
                            width={50}
                            height={50}
                            alt=""
                        />
                        <p>Vue Js</p>
                        <p>More than two years experience with this javascript framework.</p>
                    </Fragment>
                </Card>
            </section>

            <section>
                <ContentTitle
                    title="Skills"
                />
                <ContentDetails
                    title='Why Hire Me For Next Project?'
                    description='As a Software Engineer I want to make sure to accomplished every single task that need to be done in a given period of time. I could collaborate in every members of the team just to have a clarification on the work that we need to do and clear visualization of the actual result.'
                    btnLabel="Download CV"
                    url=""
                />
            </section>
        </div>
     );
}
 
export default Skills;
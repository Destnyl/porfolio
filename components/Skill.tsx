import Image from "next/image";
import Card from "./Card";
import ContentTitle from '../components/ContentTitle'
import ContentDetails from '../components/ContentDetails'
import { Fragment } from "react";
import { SKILLS } from "../constants"

const Skills = () => {

    const handleClick = ( url: any) => {
        window.open('../public/file/resume.pdf', '_blank');
    }

    return ( 
        <div className="flex-none md:flex justify-between gap-x-8 gap-y-8 items-center p-8">
            <section className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {
                    SKILLS.map((skill) => 
                        <Card key={skill.title}>
                            <Fragment>
                                <Image 
                                    src={skill.logo}
                                    width={50}
                                    height={50}
                                    alt=""
                                />
                                <p>{skill.title}</p>
                                <p className="break-normal">{skill.description}</p>
                            </Fragment>
                        </Card>
                    )

                }

            </section>

            <section>
                <ContentTitle
                    title="Skills"
                />
                <ContentDetails
                    title='Why Hire Me For Next Project?'
                    description='As a Software Engineer I want to make sure to accomplished every single task that need to be done in a given period of time. I could collaborate in every members of the team just to have a clarification on the task that we need to work on and a clear visualization of the actual result. With that for almost 3 years of working as a developer I can immediately help you accomplish software
                    development.'
                    btnLabel="Download CV"
                    fontSize="text-base"
                    fn={handleClick}
                />
            </section>
        </div>
     );
}
 
export default Skills;
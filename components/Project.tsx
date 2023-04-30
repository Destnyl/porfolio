import Image from 'next/image';
import { Fragment } from 'react';
import ContentDetails from '../components/ContentDetails'
import ContentTitle from '../components/ContentTitle'
import Icon from './icon';
import { PROJECTS } from "../constants"

const Project = () => {
    const localClass = " w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
    const handleClick = ( url: any ) => {
        window.open(url);
      }
    return ( 
        <div className='flex flex-col gap-y-8'>
            {
                PROJECTS.map((project) => 
                    <div className='grid grid-cols-1 gap-16 md:grid-cols-2 m-24' key={project.name}>
                        <section>
                            <ContentTitle title='Project'/>
                            <ContentDetails 
                                title={project.name}
                                description={project.description}
                                btnLabel='visit'
                                fn={() => handleClick(project.link)}
                                fontSize='font-base'
                            />
                            
                            <div className='flex flex-row gap-x-8 mt-4'>
                                {
                                    project?.built?.map((icon) => <Icon key={icon} url={icon} />)
                                }
                            </div>
                        </section>
                        <Fragment>
                            <Image
                                className={localClass}
                                src={project.image}
                                width={500}
                                height={500}
                                alt='Project'
                            />
                        </Fragment>
                    </div>
                )
            }
        </div>
     );
}
 
export default Project;
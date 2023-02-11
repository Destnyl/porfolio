import Image from 'next/image';
import { Fragment } from 'react';
import ContentDetails from '../components/ContentDetails'
import ContentTitle from '../components/ContentTitle'
import projet1 from '../public/biliDaily.png'
import projet2 from '../public/bitcapp.png'
import projet3 from '../public/commisari.png'

const Project = () => {
    const localClass = " w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
    return ( 
        <div className='flex flex-col gap-y-8'>
            <div className='grid grid-cols-1 gap-16 md:grid-cols-2 m-24'>
                <section>
                    <ContentTitle title='Project'/>
                    <ContentDetails 
                        title='BiliDaily(Mobile View)'
                        description="BiliDaily, aims to bring success to grocers digitally. An online Grocery Marketplace which allows you to: Set up your online store,
                        Choose products for uploading,
                        Sell to your buyers thru the web app,
                        Accept online payments, and
                        Fulfill orders."
                        btnLabel='visit'
                        url='https://www.bilidaily.com'
                        fontSize='font-base'
                    />
                </section>
                <Fragment>
                    <Image
                        className={localClass}
                        src={projet1}
                        width={500}
                        height={500}
                        alt='Project'
                    />
                </Fragment>
            </div>
            <div className='grid grid-cols-1 gap-16 md:grid-cols-2 m-24'>
                <Fragment>
                    <Image
                        className={localClass}
                        src={projet2}
                        width={500}
                        height={500}
                        alt='Project'
                    />
                </Fragment>
                <section>
                    <ContentTitle title='Project'/>
                    <ContentDetails 
                        title='Bitcapp'
                        description='Company website aims to inform everyone about the business capabilities, Business organization, and Business opportunities.'
                        btnLabel='visit'
                        url='https://bitcapp.netlify.app/#/'
                        fontSize='font-base'
                    />
                </section>
            </div>

            <div className='grid grid-cols-1 gap-16 md:grid-cols-2 m-24'>
                <section>
                    <ContentTitle title='Project'/>
                    <ContentDetails 
                        title='Commisari'
                        description='Commisari aims to give a food supplier, hotel, restaurant and/or caterer an application where it is easy for them to make their food orders regularly so that they can conveniently and quickly address their inventory requirements for their F&B business'
                        btnLabel='visit'
                        url='https://www.commisari.com'
                        fontSize='font-base'
                    />
                </section>
                <Fragment>
                    <Image
                        className={localClass}
                        src={projet3}
                        width={500}
                        height={500}
                        alt='Project'
                    />
                </Fragment>
            </div>
        </div>
     );
}
 
export default Project;
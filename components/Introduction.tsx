import Image from 'next/image';
import ContentTitle from '../components/ContentTitle'
import ContentDetails from '../components/ContentDetails'
import imageUrl from '../public/feedback/profile2.png'

const Intro = () => {
    return ( 
        <div className='flex flex-col gap-y-4 p-32 bg-stone-900'>
            <ContentTitle
                title="Introduction"
            />
            <div className="flex flex-col md:flex-row gap-x-8 gap-y-8">
                <ContentDetails
                    title='Hello I&apos;m Andrea Destajo,'
                    description='Hard working professional with almost 3 years of experience in providing comprehensive technical support to clients and companies.
                    Enthusiastic professional with background in developing a e-commerce project.

                    Aiming to leverage skills to successfully fill the Developer role.
                    '
                    btnLabel='Contact'
                    url=""
                />
                <div className='flex justify-center'>
                    <Image
                        src={imageUrl}
                        height={3000}
                        width={3000}
                        alt="profile"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Intro;
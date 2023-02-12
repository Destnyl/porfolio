import ContentTitle from '../components/ContentTitle'
import ContentDetails from '../components/ContentDetails'

const Intro = () => {

    return ( 
        <div className='flex flex-col gap-y-4 p-32  mt-7 bg-stone-900  bg-no-repeat bg-right bg-[url("../public/feedback/profile2.png")] bg-contain'>
            <ContentTitle
                title="Introduction"
            />
            <div className="flex flex-col md:flex-row gap-x-8 gap-y-8 font-mono pb-32 w-8/12">
                <ContentDetails
                    title='Hello I&apos;m Andrea Destajo,'
                    description='Hard working professional with almost 3 years of experience in providing comprehensive technical support to clients and companies.
                    Enthusiastic professional with background in developing a e-commerce project.

                    Aiming to leverage skills to successfully fill the Developer role.
                    '
                    btnLabel='Contact'
                    url=""
                    fontSize='text-3xl'
                />
            </div>
        </div>
     );
}
 
export default Intro;
import Experience from './Experience';
import Highlight from './Highlight';
import Intro from './Introduction';
import Project from './Project';
import Skills from './Skill';

const Home = () => {
    return ( 
        <div className='flex flex-col gap-y-8 mt-10'>
            <Intro/>
            <Skills/>
            <Project />
            {/* <Experience /> */}
            <Highlight />
        </div>
     );
}
 
export default Home;
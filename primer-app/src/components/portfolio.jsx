import './portfolio.css'; 
import Title from './title';
import ProjectElement from './projectElement';


function Portfolio() {
    return (
       <section id='portfolio' className='portfolio-container'> 
            <Title text="Portfolio" />
            <div className='flex-container'>
                <ProjectElement name="Trivia" imgUrl="src/assets/img/trivia.png" description="Trivia is a game build for university." />
            </div>
       </section>
    )
}

export default Portfolio;

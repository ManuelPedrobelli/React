import './tech-stack.css';
import Title from './title';

function TechStack () {
    return (
        <section className='tech-stack-container'> 
            <Title text="Skills" />
            <ul className='tech-stack-iconContainer'>
                <li> <img className='tech-stack-icon zoom' src=".\src\assets\img\html.png" alt="HTML5" /> </li> 
                <li> <img className='tech-stack-icon zoom' src=".\src\assets\img\css-3.png" alt="CSS3" /></li>
                <li> <img className='tech-stack-icon zoom' src=".\src\assets\img\js.png" alt="JS" /></li>
                <li> <img className='tech-stack-icon zoom' src=".\src\assets\img\science.png" alt="React" /></li>
                <li> <img className='tech-stack-icon zoom'src=".\src\assets\img\tailwind.png" alt="Tailwind" /></li>
                <li> <img className='tech-stack-icon zoom'src=".\src\assets\img\nodejs.png" alt="NodeJS" /></li>
                <li> <img className='tech-stack-icon zoom' src=".\src\assets\img\git.png" alt="Git" /></li>
            </ul>
        </section>
    )

}



export default TechStack;
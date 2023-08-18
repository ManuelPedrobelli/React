import './about.css';
import Title from './title';    

function About() {
    return (
        <section id='about' className='about-container'>
            <Title text="About me" />
            <div className='about-info'>
                <img className='about-avatar' src='src\assets\avatar.jpg' alt='manu-pedrobelli' />
                <div className='about-personalInfo'>
                    <p>
                        I am studying the second year of Software Engineer at UNLP.<br />
                        In my free time, I enjoy working on my side projects and try to refine my skills.<br />
                        My mission is to get in the industry and be able to provide for my family.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
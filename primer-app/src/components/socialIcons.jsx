import './socialIcons.css';

function SocialIcons() {
    return ( 
        <aside className='social-icons-container'>
            <a href='https://github.com/ManuelPedrobelli'>
                <img className='social-icons-icon' src='/src/assets/img/GITHUB.png' />
            </a>

            <a href='https://www.linkedin.com/in/manuel-agustin-pedrobelli-salaberria-897009213/'>
               <img className='social-icons-icon' src='/src/assets/img/linkedin.png' />
            </a>
        </aside>
    )
}


export default SocialIcons;
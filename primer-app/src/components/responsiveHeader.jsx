import './responsiveHeader.css'; // Importa la hoja de estilos específica del encabezado
import Button from './button';

function ResponsiveHeader({name, text}) {
    return (
        <header id='home' className="responsive-header">
            <div className='responsive-header-container'>
                <h1>{name}</h1>
                <img className='responsive-header-img' src='/src/assets/img/developer-img.png' />
            </div>
            <p className='responsive-header-subtitle'>
                {text}
            </p>
            <Button url="#"/>

        </header>
    );
}

export default ResponsiveHeader;

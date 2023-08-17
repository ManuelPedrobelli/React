import './responsiveHeader.css'; // Importa la hoja de estilos específica del encabezado
import Button from './button';

function ResponsiveHeader({name, text}) {
    return (
        <header className="responsive-header">
            <h1>{name}</h1>
            <p>
                {text}
            </p>
            <Button url="#"/>

        </header>
    );
}

export default ResponsiveHeader;

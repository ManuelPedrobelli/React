import './button.css'; // Importa la hoja de estilos específica del encabezado

function Button({url}) {

const handleButtonClick = () => {
    window.location.href = {url};
};

    return (
        <button className="resume-button" onClick={handleButtonClick}>
            Download CV
        </button>
    );
}

export default Button;

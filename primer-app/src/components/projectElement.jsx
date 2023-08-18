import './projectElement.css'


function ProjectElement({name,imgUrl,description}) {
    return (
        <div className='projectElement-container'>
            <div className='flexColumn-container'>
                <h2 className='game-name'>{name}</h2>
                <p className='game-description'>{description}</p>
            </div>
            <img className='projectElement-img' src={imgUrl} />
        </div>

    )
}


export default ProjectElement;
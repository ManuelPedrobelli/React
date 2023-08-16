export function TwitterFollowCard( {username, name,  } ) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar' 
                    alt='manu avatar'
                    src="https://img.freepik.com/vector-premium/imagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg?w=740"/>
            <div className='tw-followCard-info'>
                <strong> {name}</strong>
                <span className='tw-followCard-username'>{username}</span>
            </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}
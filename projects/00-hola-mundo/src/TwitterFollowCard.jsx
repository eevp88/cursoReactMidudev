import { useState } from "react"
export function TwitterFollowCard({formatUserName, userName, name, inicialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(inicialIsFollowing)

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    const imageSrc = `https://unavatar.io/twitter/${userName}`
    const textButton = isFollowing ? 'Siguiendo' : 'Segir'
    const classButton  = isFollowing 
    ?  'tw-followCard-button is-following'
    :  'tw-followCard-button'
    return  (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Enzo"  src={imageSrc} />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoName'>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={classButton} onClick={handleClick}>{textButton}</button>
            </aside>
        </article>
    )
}
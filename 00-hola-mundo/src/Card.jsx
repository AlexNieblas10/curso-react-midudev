import React from "react";
import { useState } from "react";

export const Card = ({children, userName = 'Unknown', initialIsFollowing}) => {
    const img = 'https://www.w3schools.com/howto/img_avatar.png'

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <>
            <article className='tw-followCard'>
                <header className='tw-followCard-header'>
                    <img
                        className='tw-followCard-avatar'
                        alt="El avatar de midudev"
                        src={img} />
                    <div className="tw-followCard-info">
                        <strong>{children}</strong>
                        <span className="tw-followCard-infoUserName">@{userName}</span>
                    </div>
                </header>

                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        {<span className='tw-followCard-text'>{text}</span>}
                        <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                    </button>
                </aside>
            </article>
        </>
    )
}








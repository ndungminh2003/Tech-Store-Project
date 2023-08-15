import React, { useState } from "react";

import { styles } from './styles'

const Avatar = props => {
    const [hovered, setHovered] = useState(false)

    return (
        <div className=" fixed bottom-[24px] right-[24px] lg:bottom-24">
            <div style={props.style}>
                <div 
                    className='transition-3'
                    style={{
                        ...styles.avatarHello,
                        ...{ opacity: hovered ? '1' : '0' }
                    }}
                > 
                    Do you need help
                </div>

                <div 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => props.onClick && props.onClick()}
                    className='transition-3'
                    style={{
                        ...styles.chatWithMeButton,
                        ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #7a39e0' }
                    }}
                />
            </div>
        </div>
    )
}

export default Avatar;
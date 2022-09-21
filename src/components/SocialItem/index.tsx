import {HandySvg} from "handy-svg";

import s from './SocialItem.module.scss'

interface SocialItemProps {
    title: string
}

const SocialItem = ({title}: SocialItemProps) => {

    const icon = require(`../../icons/${title}.svg`)

    return (
        <HandySvg src={icon} className={s.icon} width={24} height={24}/>
    )
}

export {SocialItem}
import React from "react";
import {Container} from "../Container";
import {Logo} from "../Header/Logo";
import {SocialItem} from "../SocialItem";

import s from './Footer.module.scss'

const icons = ['vk', 'github', 'telegram']

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.inner}>
                    <Logo color={'var(--white)'} size={32}/>

                    <div className={s.socials}>
                        {icons.map(icon => (<SocialItem title={icon}/>))}
                    </div>

                    <span className={s.date}>© {new Date().getFullYear()} Armist</span>
                </div>
            </Container>
        </footer>
    )
}

export {Footer}
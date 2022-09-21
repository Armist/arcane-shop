import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../Button';
import {Container} from '../Container';
import {Burger} from './Burger';
import {Logo} from './Logo';
import {ILink} from "../../models/ILink";

import s from './Header.module.scss';

export const Header = () => {
    const [open, setOpen] = useState(false);
    const links: ILink[] = [
        {
            id: 1,
            path: "/brands",
            title: "Brands"
        },
        {
            id: 2,
            path: "/catalog/all",
            title: "Catalog"
        },
        {
            id: 3,
            title: "Man",
            path: "/catalog/man"
        },
        {
            id: 4,
            title: "Woman",
            path: "/catalog/woman"
        }
    ]

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`${s.header} ${open ? s.header_open : ''}`} style={scrollPosition > 0 ? {boxShadow: 'var(--shadow-lg-darken)'} : {}}>
            <Container>
                <div className={`${s.inner} ${open ? s.open : ''}`}>
                    <Logo color={'var(--black)'}/>
                    <Burger open={open} onClick={() => setOpen(!open)}/>
                    <div className={`${s.menu} ${open ? s.opened : ''}`}>
                        <nav className={s.nav}>
                            <ul className={s.list}>
                                {links.map((item) => (
                                    <li key={item.id}>
                                        <Link to={`${item.path}`}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className={s.buttons}>
                            <Button
                                onClick={() => {
                                    console.log('Clicked 1');
                                }}
                                text={'Button'}
                            />
                            <Button
                                onClick={() => {
                                    console.log('Clicked 2');
                                }}
                                text={'Sign In'}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

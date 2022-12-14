import {Outlet} from 'react-router-dom';
import {Header} from '../Header';
import {Footer} from "../Footer";

import s from './Layout.module.scss';

const Layout = () => {
    return (
        <>
            <Header/>
            <main className={s.main}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export {Layout};

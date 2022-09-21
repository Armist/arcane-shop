import React from 'react';
import s from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.loading}></div>
        </div>
    );
};

export {Loader};

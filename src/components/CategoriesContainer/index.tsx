import React from "react";
import {useSearchCategoriesQuery} from "../../store/categories/categories.api";

import s from './CategoriesContainer.module.scss'

const CategoriesContainer = () => {
    const {data} = useSearchCategoriesQuery('')
    return (
        <div className={s.container}>
            {data?.map(item => (
                <div className={s.item}>
                    <div style={{backgroundImage: `url(${item.img})`}} className={s.background}></div>
                    <div className={s.inner}><h3>{item.title}</h3></div>
                </div>
            ))}
        </div>
    )
}

export {CategoriesContainer}
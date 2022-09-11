import s from "../CategoriesItem/CategoriesItem.module.scss";
import React from "react";
import {ICategory} from "../../models/ICategory";

const CategoriesItem = (category: ICategory) => {
    return (
        <div className={s.item}>
            <div style={{backgroundImage: `url(${category.img})`}} className={s.background}></div>
            <div className={s.inner}><h3>{category.title}</h3></div>
        </div>
    )
}

export {CategoriesItem}
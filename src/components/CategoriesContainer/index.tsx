import React from "react";
import {useSearchCategoriesQuery} from "../../store/categories/categories.api";

import s from './CategoriesContainer.module.scss'
import {CategoriesItem} from "../CategoriesItem";

const CategoriesContainer = () => {
    const {data: categories} = useSearchCategoriesQuery('')
    return (
        <div className={s.container}>
            {categories?.map(category => (
                <CategoriesItem key={category.id} {...category} />
            ))}
        </div>
    )
}

export {CategoriesContainer}
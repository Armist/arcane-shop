import React from "react";
import {Loader} from "../Loader";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Mousewheel, Navigation, Pagination } from "swiper";
import {useSearchBrandsQuery} from "../../store/brands/brands.api";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import './BrandsCarousel.scss';

const BrandsCarousel = () => {
    const {isLoading, data: brands} = useSearchBrandsQuery('');
    return (
        <>
            {isLoading && <Loader/>}
            <Swiper
                spaceBetween={20}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                loop={true}
                mousewheel={true}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation, Mousewheel ]}
                className="mySwiper"
                navigation={true}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
            >
                {brands?.map(brand => (
                    <SwiperSlide key={brand.id}>
                        <div>
                            <img style={{width: '100%', height: '100%', padding: '32px'}}
                                 src={brand.img} alt={brand.title}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export {BrandsCarousel}
import React, { ReactNode, RefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface SectionSliderContentProps {
    children: ReactNode[] | ReactNode;
    prevRef: RefObject<HTMLButtonElement>;
    nextRef: RefObject<HTMLButtonElement>;
    spaceBetween?: number;
    breakpoints?: {
        [key: number]: {
            slidesPerView: number;
        };
    };
    loop?: boolean;
}

const TestimonialsSliderContent: React.FC<SectionSliderContentProps> = ({
    children,
    prevRef,
    nextRef,
    spaceBetween = 10,
    breakpoints = {
        640: { slidesPerView: 2 },
        996: { slidesPerView: 3 },
    },
    loop = true,
}) => {
    return (
        <div className= "overflow-hidden w-full " >
        <Swiper
        modules={ [Navigation] }
    spaceBetween = { spaceBetween }
    loop = { loop }
    breakpoints = { breakpoints }
    onBeforeInit = {(swiper) => {
    if (
        swiper.params.navigation &&
        typeof swiper.params.navigation !== "boolean"
    ) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
    }
}}
className = "flex "
    >
{
    React.Children.toArray(children).map((item, index) => (
        <SwiperSlide
            key= { index }
            className = "m-auto mb-2"
        >
        { item }
        </SwiperSlide>
    ))
}
    </Swiper>
    </div>
  );
};

export default TestimonialsSliderContent;

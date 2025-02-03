import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { NavLink } from "react-router-dom";

export const HomeSlider = ({ loaderData, movieId }) => {
    const baseURL = "https://image.tmdb.org/t/p/w500"; // Base URL for images

    const sliderImages = [
        {
            image: `${baseURL}${loaderData.results[7].backdrop_path}`,
            key: loaderData.results[7].id
        },
        {
            image: `${baseURL}${loaderData.results[11].backdrop_path}`,
            key: loaderData.results[11].id
        },
        {
            image: `${baseURL}${loaderData.results[12].backdrop_path}`,
            key: loaderData.results[12].id
        },
        {
            image: `${baseURL}${loaderData.results[13].backdrop_path}`,
            key: loaderData.results[13].id
        },
        {
            image: `${baseURL}${loaderData.results[18].backdrop_path}`,
            key: loaderData.results[18].id
        }
    ];

    // Set the loop option to false
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    return (
        <div className="slideHero">
            <div className="slideShow overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {sliderImages.map((slide, index) => (
                        <div key={index} className="embla__slide min-w-full">
                            <NavLink to={`/${slide.key}}`}>
                                <img
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

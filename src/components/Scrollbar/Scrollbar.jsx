import LogoSlides from "@/components/LogoSlides";
import React from "react";
import { FaHome, FaHouseUser } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Scrollbar = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 12,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
        };

    return (
        <Carousel
            //swipeable={true}
            //draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            //infinite={true}
            //autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlay={false}
            //autoPlaySpeed={1000}
            keyBoardControl={true}
            //customTransition="all .5"
            //transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="h-32"
            >

            {
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,].map(() => {
                    return <LogoSlides title="Maisons" logo={<FaHome />} />
                })
            }
           
        </Carousel>
    )
};

export default Scrollbar;
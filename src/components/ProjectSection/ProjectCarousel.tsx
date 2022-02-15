import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper';
import CarouselControls from './CarouselControls';

const ProjectCarousel = () => {
  return (
    <div className="">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        direction="vertical"
        slidesPerView={'auto'}
        spaceBetween={-20}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 60,
          modifier: 20,
          slideShadows: false, // 80,20
        }}
        pagination={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log('slide change')}
        modules={[EffectCoverflow, Pagination]}
      >
        <div
          slot="container-start"
          className="mr-8 flex flex-col justify-evenly"
        >
          <CarouselControls />
        </div>
        {[1, 2, 3].map((count, index) => (
          <SwiperSlide key={count} style={{ width: 'auto', height: 'auto' }}>
            {({ isActive, isNext, isPrev }) => (
              <ProjectCard
                isSelected={isActive}
                isNext={isNext}
                isPrev={isPrev}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;

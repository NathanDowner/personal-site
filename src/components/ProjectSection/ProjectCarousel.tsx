import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Pagination } from 'swiper';

const ProjectCarousel = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      direction="horizontal"
      slidesPerView={'auto'}
      spaceBetween={10}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log('slide change')}
      modules={[EffectCoverflow, Pagination]}
    >
      {[1, 2, 3, 4, 5].map((count, index) => (
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
  );
};

export default ProjectCarousel;

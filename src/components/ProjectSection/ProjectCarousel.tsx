import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import prevBtn from '../../assets/icons/prev-arrow.svg';
import nextBtn from '../../assets/icons/next-arrow.svg';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Pagination } from 'swiper';
import CarouselButton from './CarouselButton';

const ProjectCarousel = () => {
  const swiper = useSwiper();

  const nextSlide = () => swiper.slideNext();
  const prevSlide = () => swiper.slidePrev();

  return (
    <div className="flex">
      <div className="mr-8 flex flex-col justify-evenly">
        <CarouselButton icon={prevBtn} label="Prev" onClick={prevSlide} />
        <CarouselButton icon={nextBtn} label="Next" onClick={nextSlide} />
      </div>
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

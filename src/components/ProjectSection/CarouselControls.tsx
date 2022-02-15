import prevBtn from '../../assets/icons/prev-arrow.svg';
import nextBtn from '../../assets/icons/next-arrow.svg';
import { useSwiper } from 'swiper/react';
import CarouselButton from './CarouselButton';

const CarouselControls = () => {
  const swiper = useSwiper();

  const nextSlide = () => swiper.slideNext();
  const prevSlide = () => swiper.slidePrev();
  return (
    <>
      <CarouselButton icon={prevBtn} label="Prev" onClick={prevSlide} />
      <CarouselButton icon={nextBtn} label="Next" onClick={nextSlide} />
    </>
  );
};

export default CarouselControls;

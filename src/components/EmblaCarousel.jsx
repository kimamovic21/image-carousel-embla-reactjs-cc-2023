import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>

      <div className="embla__container">
          <div className="embla__slide">
              <img src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div className="embla__slide">
              <img src="https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div className="embla__slide">
              <img src="https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
      </div>  {/* embla_container */}
    
    </div> // embla
  );
};

export default EmblaCarousel;


// 1. dodajemo img elemente unutar div elemenata sa klasom embla_slide


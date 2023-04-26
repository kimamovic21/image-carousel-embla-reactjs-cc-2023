import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const EmblaCarousel2 = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>

        <div className="embla__container">
            <div className="embla__slide">
                <img src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     alt="Nature 1"
                />
            </div>
            <div className="embla__slide">
                <img src="https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     alt="Nature 2" 
                />
            </div>
            <div className="embla__slide">
                <img src="https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     alt="Nature 3" 
                />
            </div>
        </div>  {/* embla_container */}
    
    </div> // embla
  );
};

export default EmblaCarousel2;

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { ASSETS } from '../constants';
import { motion } from 'motion/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Gallery() {
  return (
    <div className="container mx-auto px-6 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-white text-4xl font-light tracking-tighter mb-4">Cinematic Memories</h2>
        <div className="w-12 h-[1px] bg-primary/30 mx-auto" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full py-12"
        >
          {ASSETS.photos.map((photo, index) => (
            <SwiperSlide 
              key={index} 
              className="w-[300px] h-[400px] md:w-[450px] md:h-[600px] bg-center bg-cover rounded-3xl premium-shadow overflow-hidden group"
              style={{ backgroundImage: `url(${photo})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p className="font-poppins font-medium text-lg">Memory #{index + 1}</p>
                <p className="font-inter text-xs tracking-wider uppercase opacity-80">Rizky & Mita</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2);
        }
        .swiper-pagination-bullet-active {
          background: #ec4899 !important;
          box-shadow: 0 0 10px #ec4899;
        }
        .swiper-slide-shadow-left, .swiper-slide-shadow-right {
           border-radius: 1.5rem !important;
        }
      `}</style>
    </div>
  );
}

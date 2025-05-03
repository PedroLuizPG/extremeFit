import useEmblaCarousel from "embla-carousel-react";
import foto1 from '../../assets/academia/WhatsApp Image 2025-05-02 at 17.18.14 (1).jpeg'
import foto2 from '../../assets/academia/WhatsApp Image 2025-05-02 at 17.18.14 (2).jpeg'
import foto3 from '../../assets/academia/WhatsApp Image 2025-05-02 at 17.18.14.jpeg'
import foto4 from '../../assets/academia/WhatsApp Image 2025-05-02 at 17.18.15 (1).jpeg'
import foto5 from '../../assets/academia/WhatsApp Image 2025-05-02 at 17.18.15 (2).jpeg'
import foto6 from '../../assets/academia/WhatsApp Image 2025-05-02 at 17.18.15 (3).jpeg'
import foto7 from '../../assets/academia/WhatsApp Image 2025-05-02 at 17.18.15.jpeg'
import foto8 from '../../assets/academia/WhatsApp Image 2025-05-02 at 17.18.16 (1).jpeg'
import foto9 from '../../assets/academia/WhatsApp Image 2025-05-02 at 17.18.16 (2).jpeg'
import foto10 from '../../assets/academia/WhatsApp Image 2025-05-02 at 17.18.16.jpeg'
import { ChevronLeft, ChevronRight } from "lucide-react";

const fotos = [
  {
    foto: foto1,
  },
  {
    foto: foto2,
  },
  {
    foto: foto3,
  },
  {
    foto: foto4,
  },
  {
    foto: foto5,
  },
  {
    foto: foto6,
  },
  {
    foto: foto7,
  },
  {
    foto: foto8,
  },
  {
    foto: foto9,
  },
  {
    foto: foto10,
  },
];

export function EstruturaDaAcademia() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev(){
    emblaApi?.scrollPrev()
  }

  function scrollNext(){
    emblaApi?.scrollNext()
  }
  return (
    <section className="bg-linear-to-b from-yellow-500 from-50% to-[#121212] py-12">
      <div className="container m-auto px-4 " data-aos="zoom-in-up"> 
        <h2 className="text-4xl md:text-6xl font-bold mb-12 mt-6 text-center text-white">
          Conheça nossa Estrutura
        </h2>

        <div className="relative my-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3">
              {fotos.map((item, index) => (
                <div key={index} className=" min-w-0  rounded-lg flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)]">
                  <div className="flex items-center justify-center"> 
                    <img
                      src={item.foto}
                      alt=""
                      className="w-[80%] h-[80%] rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="bg-white rounded-full flex items-center justify-center shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 " />
          </button>
          <button 
          onClick={scrollNext}
          className="bg-white rounded-full flex items-center justify-center shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
            <ChevronRight
              
              className="w-6 h-6 text-gray-600"
            />
          </button>

        </div>

        
      </div>
    </section>
  );
}

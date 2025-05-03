import sobre from "../../assets/pesosSobre.jpg";
import { BsCheckLg } from "react-icons/bs";

export function Sobre() {
  return (
    <section className="bg-[#121212] text-white">
      <div className="container mx-auto pt-16 pb-20 md:pb-20  px-6 relative" data-aos="fade-down">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center " data-aos="fade-left">
          
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden ">
              <img
                src={sobre}
                alt="Foto de um cachorro e um gato"
                className="relative  w-full h-full object-cover hover:scale-110 duration-300"
              />
            </div>

            <div className="space-y-8 md:mt-5 md:m-auto flex flex-col items-center md:items-start">
                <h2 className="text-4xl md:text-6xl font-bold">Sobre a Academia</h2>
                <ul className="space-y-6 text-xl ">
                    <li className="flex items-center gap-2"><BsCheckLg className="text-yellow-500"/> Academia climatizada</li>
                    <li className="flex items-center gap-2"><BsCheckLg className="text-yellow-500"/> Professores capacitadas</li>
                    <li className="flex items-center gap-2"><BsCheckLg className="text-yellow-500"/> Vestiários completos</li>
                    <li className="flex items-center gap-2"><BsCheckLg className="text-yellow-500"/> Aparelhos de alta qualidade</li>
                </ul>
            </div>
          </div>
        </div>
      
    </section>
  );
}

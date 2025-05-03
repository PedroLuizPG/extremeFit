import { MdOutlineFitnessCenter } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { IoFitness } from "react-icons/io5";

const services = [
  {
    title: "Musculação",
    description:
      "Nossos treinos vão te proporcionar força, resistência e definição muscular, com acompanhamento profissional e equipamentos modernos.",
    icon: <MdOutlineFitnessCenter />,
  },

  {
    title: "Aulas de Dança",
    description:
      "Queime calorias, se divirta e melhore sua coordenação com aulas dinâmicas que unem ritmo, energia e movimento.",
    icon: <FaMusic />,
  },
  {
    title: "Treinamento Funcional",
    description:
      "Desenvolva seu condicionamento, agilidade e equilíbrio com treinos versáteis que trabalham o corpo de forma completa.",
    icon: <IoFitness />,
  },
];

export function Servicos() {
  return (
    <section className="bg-[#121212] py-12 text-black ">
      <div className="container m-auto px-4 " data-aos="zoom-in">
        <h2 className="text-4xl md:text-6xl text-center mb-12 mt-5 font-bold text-white">Nossas Atividades</h2>
        <div className="grid md:grid-cols-3 items-center justify-center gap-4 mx-4 lg:mx-20 my-8">
          {services.map((item, index) => (
            <div
              key={index}
              className=" bg-yellow-500  md:w-[0_0_100/3] md:h-full flex flex-col items-center justify-center p-16 md:p-8 lg:p-16 rounded-lg hover:bg-gray-900 hover:text-white duration-300"
            >
              <div className="flex-col flex items-start justify-between px-2 space-y-2">
                <span className="text-2xl ">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-2xl text-center mb-2">
                    {item.title}
                  </h3>
                  <p className="font-semibold text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

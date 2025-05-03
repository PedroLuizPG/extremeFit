import homemHero from "../../assets/pexels-anush-1229356.jpg";
import logo from "../../assets/logoAcademia.png";

export function Hero() {
  return (
    <section className="bg-linear-to-r from-[#121212] to-[#343434]  text-white relative overflow-hidden" >
      <div className="flex items-start justify-center " >
        <img
          src={homemHero}
          alt="Foto de um cachorro"
          className="absolute  w-full h-full object-cover md:object-contain opacity-60 lg:hidden md:object-bottom-right md:outline-1 md:rounded"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-40 md:hidden "></div>

      <div className="container mx-auto pt-16 pb-16 md:pb-1 px-6 relative" data-aos="fade-up">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center  " >
          <div className="mb-8">
            <a href="/" className="flex items-center w-fit ">
              <img
                src={logo}
                alt=""
                className="max-w-[200px] hover:scale-110 duration-300"
              />
            </a>

            <div className="space-y-8 " data-aos="fade-right">
              <h1 className="text-5xl  lg:text-7xl font-bold">
                o corpo do verão começa{" "}
                <span className="text-[#FFC300]">agora.</span>{" "}
              </h1>
              <h2 className="text-2xl font-semibold">
                Disciplina hoje, resultado amanhã
              </h2>
              <a
                href={`https://wa.me/5579999428149?text=Olá,tudobem? vim pelo site e gostaria de mais informações sobre a matrícula.`}
                className="text-2xl md:text-3xl border-l border-r border-[#FFC300] p-2 rounded-md hover:text-[#FFC300] duration-300"
              >
                Matricule-se
              </a>
            </div>
          </div>

          <div className="hidden lg:block h-full relative  ">
            <img
              src={homemHero}
              alt="Foto de uma mulher malhando"
              className="md:w-md lg:w-full h-full object-cover rounded-3xl outline-1 xl:object-contain opacity-50" 
              sizes="(max-width: 768px) 0vw, 100vw "
            />
          </div>
        </article>
      </div>
    </section>
  );
}

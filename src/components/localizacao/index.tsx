import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";

export function Localizacao() {
  return (
    <section className="bg-[#121212] py-12 text-white overflow-hidden">
      <div className="container m-auto px-4" data-aos="zoom-out-up">
        <article className="flex flex-col  items-center justify-center gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-4 mb-8">
            <h2 className="font-bold text-4xl md:text-6xl text-center">
              Onde Estamos Localizados{" "}
              
            </h2>
            {/* Ícone para md+ */}
            <span className="hidden md:block mt-2 md:mt-1 text-6xl">
              <FaMapMarkedAlt color="gray"  />
            </span>

            {/* Ícone para mobile */}
            <span className="block md:hidden mt-2">
              <FaMapMarkedAlt color="gray" size={40} />
            </span>
          </div>

          <div className="mx-4 w-full flex flex-col md:flex-row items-center justify-around rounded-lg gap-8 border border-yellow-300 p-10">
            <div className="w-2xs text-center md:text-start">
              <h3 className="md:text-2xl text-wrap text-xl ">
                <span className="font-bold flex md:block gap-2 items-center">
                  <FaMapMarkerAlt className="mb-4 text-red-700" size={36} />
                  Endereço:
                </span>{" "}
                Rod. José de Campos, 358 - Moisés Gomes, Barra dos Coqueiros -
                SE, 49140-000{" "}
              </h3>
            </div>
            <div className="mx-4 w-full max-w-[400px] h-[400px] lg:max-w-[500px] lg:h-[500px] flex items-center justify-center rounded-lg">
              <APIProvider apiKey={"AIzaSyAy-RhvMcG4Ssn1HtyCEd38q_icAtIPQA0"}>
                <Map
                  style={{ maxWidth: "100%", height: "100%" }}
                  defaultCenter={{
                    lat: -10.910918826384288,
                    lng: -37.02562429591633,
                  }}
                  defaultZoom={18}
                  gestureHandling={"greedy"}
                  disableDefaultUI={true}
                />
              </APIProvider>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

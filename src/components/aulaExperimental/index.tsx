import { BsWhatsapp } from "react-icons/bs"

export function AulaExperimental(){
    return(
        <div className="bg-linear-to-b from-[#121212] from-40% to-yellow-500 flex items-center justify-center text-white">
            <div className="m-6  flex items-center flex-col " data-aos="zoom-out">
                <a href={`https://wa.me/5579999428149?text=Olá vim pelo site e gostaria de marcar uma aula experimental.`} className="font-bold text-sm text-center  md:text-nowrap md:text-2xl flex items-center justify-center gap-3 hover:scale-110 duration-300 py-4"><BsWhatsapp/> Marque Já Sua Aula Experimental </a>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
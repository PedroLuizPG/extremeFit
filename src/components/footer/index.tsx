import { PiGithubLogo, PiInstagramLogo, PiTiktokLogo, PiWhatsappLogo } from "react-icons/pi";


export function Footer(){
    return(
        <section className="bg-[#FFC300] py-16 text-black">
      <div className="container mx-auto px-4">

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2 ">Academia ExtremeFit-Praia</h3>
            <p className="mb-4 font-bold">#VempraeXtreme</p>
            <a
                href={`https://wa.me/5579999428149?text=Olá vim pelo site e gostaria de mais informações.`}
                className="bg-green-500 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <PiWhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 ">Contatos</h3>
            <p>Email: extremefitbarra@gmail.com</p>
            <p>Telefone pra contato: (79) 9 - 99428189</p>
            <p>Rod. José de Campos, 358 - Barra dos Coqueiros - SE</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 ">Redes Sociais</h3>
            <div className="flex gap-4 ">
              
              <a href="https://www.instagram.com/academiaextremefit/" className="flex items-center font-semibold gap-2">
                <PiInstagramLogo size={28} />
                @academiaextremefit
              </a>
              
            </div>
          </div>
        </footer>
      </div>
    </section>
    )
}
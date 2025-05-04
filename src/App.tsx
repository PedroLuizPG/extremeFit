import { Citacao } from "./components/citacao";
import { Hero } from "./components/hero";
import { Sobre } from "./components/sobre";
import { Servicos } from "./components/servicos";
import { AulaExperimental } from "./components/aulaExperimental";
import { EstruturaDaAcademia } from "./components/nossoEspaco";
import { Localizacao } from "./components/localizacao";
import { Faqs } from "./components/faqs";
import { Footer } from "./components/footer";
import { Assinatura } from "./components/assinatura";

export function App(){
  return(
    <main>
      <Hero/>
      <Citacao/>
      <Sobre/>
      <Servicos/>
      <AulaExperimental/>
      <EstruturaDaAcademia/>
      <Localizacao/>
      <Faqs/>
      <Footer/>
      <Assinatura/>
    </main>
  )
}
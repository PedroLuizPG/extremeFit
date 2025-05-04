import { BsInstagram } from "react-icons/bs"

export function Assinatura(){
    return(
        <div className="w-full mx-auto text-center bg-[#121212] text-white ">
            <h4 className="italic p-2 flex items-center justify-center gap-2">Desenvolded by <a href="https://www.insth4gram.com/peuluiz_/" className="flex items-center justify-center hover:underline duration-300 gap-2 hover:animate-bounce max-w-fit"><BsInstagram/> @peuluiz_ </a> </h4>
            
        </div>
    )
}
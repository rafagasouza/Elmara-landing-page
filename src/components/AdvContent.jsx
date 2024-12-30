import Style from './AdvContent.module.css'
import ContactBtn from './ContactBtn'

function AdvContent(){
  return(
    <>
    <div className={Style.banner}>
       <div>
         <img src="./src/assets/elmara.png" alt="elmaraAdv" className={Style.profissional}/>
       </div>
       <div className={Style.texts}>
         <p>SOBRE A ADVOGADA</p>
        <h1>Elmara Dutra</h1>
        <p>Especialista em Direito previdenciário.</p>
        <p>Atuamos de forma assertiva e individualizada com cada um de nossos clientes, clique no botão abaixo e consulte nossa especialista.</p>
        <ContactBtn/>
    </div>
    </div>
    </>
  )
}

export default AdvContent
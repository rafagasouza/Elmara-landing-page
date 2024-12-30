import Style from './Header.module.css'
import ContactBtn from './ContactBtn'

function Header(){
  return(
    <div className={Style.banner}>
    <div className={Style.texts}>
         <img src="./src/assets/logo-elmara-transparente.png" alt="" className={Style.logo}/>
        <h1>Advogada especializada em <span>benefícios do INSS.</span></h1>
        <p>Escritório de advocacia experiente e dedicado a fornecer soluções jurídicas personalizadas em questões Médicas e da Saúde.</p>
        <p>Atuamos de forma assertiva e individualizada com cada um de nossos clientes, clique no botão abaixo e consulte nossa especialista!.</p>
        <ContactBtn/>
    </div>
    <div>
      <img src="./src/assets/elmara.png" alt="elmaraAdv" className={Style.profissional}/>
    </div>
    </div>
  )
}

export default Header
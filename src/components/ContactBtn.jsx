import Style from '../components/ContactBtn.module.css'

function ContactBtn(){
  return(
    <>
      <button type="button" className={Style.contactBtn}><i className="fa-brands fa-whatsapp"></i> Falar com o especialista</button>
    </>
  )
}

export default ContactBtn
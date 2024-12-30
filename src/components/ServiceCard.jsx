import Style from './ServiceCard.module.css'

function ServiceCard({titulo, descricao}){
  return(
    <div className={Style.card}>
      <h3 className={Style['title']}>{titulo}</h3>
      <p className={Style.description}>{descricao}</p>
    </div>
  )
}

export default ServiceCard
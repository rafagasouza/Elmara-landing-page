import Style from "./Services.module.css"
import ServiceCard from "./ServiceCard"

function Services(){

  const servicos = [
    { titulo: "Aposentadoria por Idade", descricao: "Assessoria completa para garantir o direito à aposentadoria por idade, analisando documentos e requisitos exigidos pelo INSS." },
    { titulo: "Aposentadoria por Tempo de Contribuição", descricao: "Cálculo e orientação para obtenção da aposentadoria por tempo de contribuição, considerando as regras de transição e reformas recentes." },
    { titulo: "Benefício de Prestação Continuada (BPC/LOAS)", descricao: "Acompanhamento para solicitar o BPC destinado a idosos e pessoas com deficiência em situação de vulnerabilidade." },
    { titulo: "Revisão de Benefícios", descricao: "Análise detalhada de benefícios concedidos para identificar possíveis erros e solicitar revisões junto ao INSS." },
    { titulo: "Pensão por Morte", descricao: "Orientação e suporte para dependentes solicitarem o benefício de pensão por morte, garantindo agilidade no processo." },
    { titulo: "Auxílio-Doença e Aposentadoria por Invalidez", descricao: "Apoio jurídico em casos de afastamento por incapacidade, incluindo auxílio-doença e aposentadoria por invalidez." }
  ];

  

  return(
   <div className={Style.container}>
      <div className={Style['describe-services']}>
        <p>SERVIÇOS</p> 
        <h1>Como podemos te ajudar?</h1>
        <p>Ajudamos fazendo blablablabla la</p>
      </div>
      <div className={Style['services-container']}>
       {
        servicos.map((servico)=>(
          <ServiceCard titulo={servico.titulo} descricao={servico.descricao}/>
        )
          
        )
       }
      </div>
   </div>
  )
}

export default Services
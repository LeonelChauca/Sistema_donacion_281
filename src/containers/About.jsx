
import style from "../styles/components/About.module.css"
const About = () => {
   return (
      <>
         <h3 style={{ textAlign: "center" }}>Sobre Nosotros</h3>

         <section className={style.about + " " + style.section}>
            <div className={style.card}>
               <h4>Quienes Somos? </h4>
               <p>
                  Sis Donación es una plataforma innovadora dedicada a combatir el hambre y el desperdicio de alimentos.
               </p>
               <p>Nuestra misión es conectar donantes de alimentos con organizaciones benéficas y personas necesitadas de manera eficiente y transparente. Impulsados por valores como la solidaridad, la transparencia y la innovación, estamos comprometidos a construir un mundo donde cada persona tenga acceso a alimentos nutritivos y ninguna comida se desperdicie.
               </p>
            </div>

         </section>
         <section className={style.historia + " " + style.section}>
            <div className={style.card}>
               <h4>Historia</h4>
               <p>
                  En Sis Donación, creemos en un mundo donde ningún alimento se desperdicie y donde cada persona tenga acceso a comida nutritiva. Nuestra historia comenzó con la visión de hacer una diferencia significativa en la lucha contra el hambre y el desperdicio de alimentos. Inspirados por la necesidad y motivados por el deseo de crear un impacto positivo, nos embarcamos en un viaje para desarrollar una solución innovadora que abordara estos desafíos de manera efectiva y eficiente.
               </p>
               <p>
                  Desde nuestros humildes comienzos, hemos trabajado incansablemente para construir un sistema integral que conecte a donantes de alimentos con organizaciones benéficas y personas necesitadas. Nos enorgullece ofrecer una plataforma tecnológica avanzada que simplifica y agiliza el proceso de donación, recolección y entrega de alimentos, permitiendo una distribución más equitativa y efectiva de recursos.
               </p>
            </div>
         </section>
         <section className={style.valores + " " + style.section}>
            <div className={style.card}>
               <h4>Nuestro valores</h4>
               <p>         En Sis Donación, nos guiamos por un conjunto de valores fundamentales que reflejan nuestra dedicación a la causa y orientan cada aspecto de nuestro trabajo:
               </p>
               <ol className={style.itemValores}>
                  <li>Compromiso con la comunidad: Estamos comprometidos con el bienestar de nuestras comunidades y nos esforzamos por crear un impacto positivo y duradero en la lucha contra el hambre.</li>
                  <li>Innovación y excelencia: Nos comprometemos a impulsar la innovación y la excelencia en todo lo que hacemos, buscando constantemente nuevas formas de mejorar y optimizar nuestros servicios para satisfacer las necesidades cambiantes de nuestra comunidad.</li>
                  <li>Colaboración y solidaridad: Creemos en el poder de la colaboración y la solidaridad para lograr un impacto significativo. Trabajamos en estrecha colaboración con donantes, organizaciones benéficas y voluntarios para maximizar nuestros esfuerzos y alcanzar nuestros objetivos comunes.</li>
                  <li>Respeto por el medio ambiente: Valoramos y respetamos el medio ambiente, y nos comprometemos a reducir el desperdicio de alimentos y minimizar nuestro impacto en el planeta a través de prácticas sostenibles y ecológicamente responsables.</li>
               </ol>
            </div>
         </section>


      </>
   )
}

export default About; 
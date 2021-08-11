import React from "react";
import { NavMobile } from "./Nav_mobile";
import { Pdf } from "./Pdf";
import bulletin1 from './../assets/Dla_firm_1.pdf'
import bulletin2 from './../assets/Dla_firm_2.pdf'
import bulletin3 from './../assets/Dla_firm_3.pdf'
import bulletin4 from './../assets/Dla_firm_4.pdf'
import bulletin5 from './../assets/Dla_firm_5.pdf'
import bulletin6 from './../assets/Dla_firm_6.pdf'
import bulletin7 from './../assets/Dla_firm_7.pdf'
import bulletin8 from './../assets/Dla_firm_8.pdf'
import { Footer } from "./Footer";

function Bulletin() {

  const docs = [bulletin1, bulletin2, bulletin3, bulletin4, bulletin5, bulletin6, bulletin7, bulletin8]

  return (
    <section className="bulletin">
      <NavMobile />
      <h2 className="bulletin__title__header">Biuletyn dla firm</h2>
      <div className="downloads">
        {docs.map((e, i) => {
          return (<Pdf docs={e} key={i} />)
        })}
      </div>
      <Footer />
    </section>
  );
}

export { Bulletin };

import img1 from '../assets/img/img1.jpg'
import img3 from '../assets/img/img3.jpg'
import img5 from '../assets/img/img5.jpg'
import me from '../assets/img/me.png'
import Col2_Header from  './Col2_Header'
import Col2_membres from './Col2_membres'
function Col2()
{
    const membres = {
        data: [
            {id: 1, pdp: img1, name: 'Feno Randria', content: 'Vu',time:'12:02'},
            {id: 2, pdp: img3, name: 'Tahina Razafinjoelina', content: 'Indrisy mantsy fa mangatsiaka ny andro ka dia ata0 ahoana',time:'1d ago'},
            {id: 3, pdp: img5, name: 'Nardi Stanley', content: 'Je t&apos;aime be !',time:'14:20'},
            {id: 4, pdp: img1, name: 'Rojo Rabenanahary', content: 'Fa matoky aho fa na fiainana na fahafatesana',time:'3d ago'},
            {id: 5, pdp: me, name: 'Alexia Rana', content: 'Je t&apos;aime Feno',time:'just now'},
            {id: 6, pdp: img1, name: 'Feno Randria', content: 'Vu',time:'12:02'},
            {id: 2, pdp: img3, name: 'Tahina Razafinjoelina', content: 'Indrisy mantsy fa mangatsiaka ny andro ka dia ata0 ahoana',time:'1d ago'},
            {id: 3, pdp: img5, name: 'Nardi Stanley', content: 'Je t&apos;aime be !',time:'14:20'},
            {id: 4, pdp: img1, name: 'Rojo Rabenanahary', content: 'Fa matoky aho fa na fiainana na fahafatesana',time:'3d ago'},
            {id: 5, pdp: me, name: 'Alexia Rana', content: 'Je t&apos;aime Feno',time:'just now'},
        ]
    };
    return <div id="pageCol2">
                <Col2_Header/>
                <div className="allMessage">
                    { membres.data.map((membre)=><Col2_membres member={membre} />) }
                </div>
            </div>
};
export default Col2;
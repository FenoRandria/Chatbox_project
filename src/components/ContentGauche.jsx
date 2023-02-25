import home from '../assets/img/home.jpg'
import sary12 from '../assets/img/12.jpg'
import me from '../assets/img/me.jpg'

const ContentGauche = () => {
    return (
        <div id="contentGauche">
            <div className="ctgauche0">
                <div><img src={home} alt=""/></div>
                <div><h1>FUTUR <br/>IMPERFECT</h1></div>
                <div><p>ANOTHER SITE SITE MAFINARITRA ISAN-KARAZANY</p></div>
            </div>
            <div className="ctgauche1">
                <div>
                        <img src={sary12} alt=""/>
                </div>
                <div>
                    <div className="s1">
                        <h3>VITAE SED CONDIMENTUM</h3>
                        <p>OCTOBER 20,2015</p>
                    </div>
                    <div className="s2">
                        <a href="profile">                    
                            <img src={me} alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="ctgauche1">
                <div>
                    <img src={home} alt=""/>
                </div>
                <div>
                    <div className="s1">
                        <h3>VITAE SED CONDIMENTUM</h3>
                        <p>OCTOBER 20,2015</p>
                    </div>
                    <div className="s2">
                        <a href="profile"> 
                            <img src={me} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        
        </div>
    )
};
export default ContentGauche;
import me from '../assets/img/me.jpg'

const ContentDroite = () => {
    return (
        <div id="contentDroit">
            <div className="contverticalDroit">
                <div className="titre1">
                    <h1>MAGNA SET LINE INFORMATION</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga id natus qui</p>
                </div>
                <div className="titre2">
                    <p>Novembre 1,2015</p>
                    <div className="propos">
                        <span>HARIAJA</span>
                        <span>
                            <a href="profile">
                                <img src={me} />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="titreDroit1">
            </div>
            <div className="titreDroit2">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus reprehenderit amet accusantium tempora iste, voluptates possimus aperiam cum? Aperiam maiores ratione libero dolorem ducimus, nulla et nam ea praesentium aliquam.</p>
            </div>
        </div>
    )
};
export default ContentDroite;
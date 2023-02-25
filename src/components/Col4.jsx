import me from '../assets/img/me.png'
import nat4 from '../assets/img/nat5.jpg'
import nat1 from '../assets/img/nat1.jpg'

function Col4()
{
    return(
        <div id="pageCol4">
        <div id="top">
            <div className="header"></div>
            <div className="pdp">
                <img src={me} alt="pdp"/>
            </div>
            <div className="name">
                <h5>Hariaja Andry</h5>
                <p>Active now</p>
            </div>
        </div>
        <div id="bottom">
            <div className="miniTitle">
                <h5>Photo</h5>
                <p>4</p>
            </div>
            {/* <!------------Photo Miniature----------> */}
            <div id="sary">
                <div id="sarymini"><img src={nat4} alt=""/></div>
            </div>
            <div id="sary">
                <div id="sarymini"><img src={nat1} alt=""/></div>
            </div>
            <div id="sary">
                <div id="sarymini"><img src={nat4} alt=""/></div>
            </div>
            <div id="sary">
                <div id="sarymini"><img src={nat4} alt=""/></div>
            </div>
            <div id="sary">
                <div id="sarymini"><img src={nat1} alt=""/></div>
            </div>
            <div id="sary">
                <div id="sarymini"><img src={nat4} alt=""/></div>
            </div>
        </div>
    </div>
    )
};

export default Col4;
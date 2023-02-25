import me from '../assets/img/me.png'


function Col1()
{
    return(
        <div id="pageCol1">
        <div className="pdp">
            <img src={me} alt="pdp"/>
        </div>
        <div><i className="fas fa-home"></i></div>
        <div><i className="fab fa-facebook-messenger"></i></div>
        <div><i className="fas fa-users"></i></div>
    </div>
    )
};
export default Col1;
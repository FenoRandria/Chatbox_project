const Col3_Header = (props) => {
    const{ active } = props;
    return (
        <div id="header">
            <div className="fleche">
                <br/>
                <i className="fas fa-long-arrow-alt-left"></i>
            </div>
            <div className="pdp">
                <img src={active.pdp} alt="pdp"/>
            </div>
            <div className="soratra">
                <h3>{active.name}</h3>
                <p>Active now</p>
            </div>
        </div>
    )
};
export default Col3_Header;
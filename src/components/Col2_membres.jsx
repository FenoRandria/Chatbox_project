const Col2_membres = (props) =>{
    const { member } = props;
    return (
    <div className="membres">
        <div className="pdp">
            <img src={member.pdp} alt="pdp"/>
        </div>
        <div className="soratra">
            <h3>{member.name}</h3>
            <p>{member.content}</p>
        </div>
        <div className="time">
            <h4>{member.time}</h4>
            <p>{member.id}</p>
        </div>
    </div>
    )
};
export default Col2_membres;
const Col3_chat_Sender = (props) => {
    const {chat} = props;
    return (
    <div id="chat2">
        <div className="pdp">
            <img src={chat.pdp} alt="pdp"/>
        </div>
        <div className="soratra">
            <p>{chat.texto}</p>
            <h4>{chat.time}</h4>
        </div>
    </div>
    )
};
export default Col3_chat_Sender;
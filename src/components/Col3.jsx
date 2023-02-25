import img3 from '../assets/img/img3.jpg'
import me from '../assets/img/me.png'
import Col3_Header from './Col3_Header';
import Col3_chat_Receiver from './Col3_chat_Receiver';
import Col3_chat_Sender from './Col3_chat_Sender';

function Col3()
{
    const connected = {
        data: [
            {id: 1, pdp: img3, name: 'Feno Randria'},
        ]
    };
    const chats = {
        data:[
            {id: 1, pdp: img3, texto: 'Bonjour nju', time: '12:34'},
            {id: 2, pdp: me, texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quas iusto labore ducimus nesciunt aliquam eveniet neque molestias!', time: '12:38'},
            {id: 1, pdp: img3, texto: 'efa fantatro fa izy no milay e', time: '12:39'},
            {id: 2, pdp: me, texto: 'ka zay atanao any io ee', time: '12:53'},
        ]
    };
    let messages = [];
    const id_connected = 2;
    for (let i = 0; i<chats.data.length; i++) {
        const mess = chats.data[i];
        if(mess.id == id_connected)
        {
            messages.push(<Col3_chat_Sender chat={mess} />);
        }else{
            messages.push(<Col3_chat_Receiver chat={mess} />);
        }
    }
    return(
        <div id="pageCol3">
            { connected.data.map((connect)=><Col3_Header active={connect} />) }
            <div id="content">
                { messages }
            </div>
            <div id="input">
                <input type="text" className="" id="sendChat" placeholder="Tap a Message to send.."/>
                <i className="fas fa-paper-plane"></i>
            </div>
        </div>
    )
};
export default Col3;
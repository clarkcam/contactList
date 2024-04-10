
export default function ContactRow({contact, selectedId, setSelectedId}) {
    
    let className = 'contactRow';

    if(selectedId){
        className = className + ' selected';
    }
   
    return (
        
        <tr className={className} id={contact.id} onClick={() => {setSelectedId(contact.id)}}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}
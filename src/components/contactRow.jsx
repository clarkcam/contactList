
export function ContactRow({status, contact, selectedId, setSelectedId}) {
    function clickHandler(id){

        setSelectedId(id);
        console.log("selected", selectedId);
    }
    let className = "contact " + status;
   
    return (
        
        <tr className={className} id={contact.id} onClick={(e) => {clickHandler(contact.id)}}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}
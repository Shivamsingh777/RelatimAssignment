function Contacts({ contacts }) {
  return (
    <div className="contacts">
      {contacts.map(c => (
        <p key={c.id}>{c.contact_name}</p>
      ))}
    </div>
  );
}
export default Contacts

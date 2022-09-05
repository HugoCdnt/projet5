const getContact = () => {
    const contact = localStorage.getItem("contact");
    if (contact === null) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem("contact"));
    }
}

const saveContact = (contact) => {
    localStorage.setItem("contact", JSON.stringify(contact));
}

const addContact = (infos) => {
    const contact = getContact();
    contact.push(infos);
    saveContact(contact);
}
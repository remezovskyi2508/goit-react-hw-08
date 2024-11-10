import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import Header from '../../components/Header/Header'
import SearchBox from '../../components/SearchBox/SearchBox'

const ContactsPage = () => {
  return (
    <>
        <Header/>
        <ContactForm />
        <SearchBox />
        <ContactList />
        
    </>
  )
}

export default ContactsPage
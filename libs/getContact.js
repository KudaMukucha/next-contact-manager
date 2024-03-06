import React from 'react'

export default async function getContact(id) {
    const response = await fetch(`http://localhost:3000/api/contacts/${id}`)
    const contact = await response.json()
    return contact
}

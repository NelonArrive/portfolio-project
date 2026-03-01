import type { Metadata } from 'next'

import { Contacts } from './Contacts'

export const metadata: Metadata = {
	title: 'Contacts',
	description: 'Contacts'
}

export default function ContactsPage() {
	return <Contacts />
}

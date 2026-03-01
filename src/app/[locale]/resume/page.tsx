import type { Metadata } from 'next'

import { Resume } from './Resume'

export const metadata: Metadata = {
	title: 'Resume',
	description: 'Resume'
}

export default function ResumePage() {
	return <Resume />
}

import type { Metadata } from 'next'

import { Portfolio } from './Portfolio'

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Portfolio'
}

export default function PortfolioPage() {
	return <Portfolio />
}

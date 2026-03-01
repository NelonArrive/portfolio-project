import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Geist_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'

import { Toaster } from '@/components/ui/toaster/Toaster'

import { SITE_NAME } from '@/constants/seo.constants'

import '../globals.css'
import { Providers } from '../providers'

import { Sidebar, Wrapper } from '@/components'
import { routing } from '@/i18n/routing'

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		default: 'Nelon Arrive',
		template: `%s | ${SITE_NAME}`
	},
	description: 'Fullstack Developer'
}

export default async function LocaleLayout({
	children,
	params
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params

	// Validate locale
	if (!routing.locales.includes(locale as 'en' | 'ru')) {
		notFound()
	}

	const messages = await getMessages()

	return (
		<html
			lang={locale}
			suppressHydrationWarning
		>
			<body className={geistMono.className}>
				<NextIntlClientProvider messages={messages}>
					<Providers>
						<main>
							<Sidebar />
							<Wrapper>{children}</Wrapper>
							<Toaster
								theme='dark'
								position='bottom-right'
								duration={2500}
								richColors
							/>
						</main>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}

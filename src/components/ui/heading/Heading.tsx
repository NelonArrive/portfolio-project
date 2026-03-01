'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import styles from './Heading.module.scss'
import ThemeSwitch from './ThemeSwitch'
import { Link, usePathname } from '@/i18n/routing'

interface IHeading {
	title: string
}

const navLinks = [
	{ key: 'about', href: '/', imgUrl: '/navbar/about.svg' },
	{ key: 'resume', href: '/resume', imgUrl: '/navbar/resume.svg' },
	{ key: 'portfolio', href: '/portfolio', imgUrl: '/navbar/portfolio.svg' },
	{ key: 'contact', href: '/contacts', imgUrl: '/navbar/contacts.svg' }
] as const

export function Heading({ title }: IHeading) {
	const t = useTranslations('nav')
	const pathname = usePathname()

	return (
		<header className={styles.heading}>
			<div className={styles.title}>
				<h1>{title}</h1>
			</div>
			<div className={styles.navWrapper}>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						{navLinks.map(({ key, href, imgUrl }) => {
							const isActive =
								href === '/'
									? pathname === '/' || pathname === ''
									: pathname.startsWith(href)
							return (
								<li key={key} className={styles.item}>
									<Link
										className={`${styles.link} ${isActive ? styles.active : ''}`}
										href={href}
									>
										<div className={styles.icon}>
											<Image src={imgUrl} alt={t(key)} width={30} height={30} />
										</div>
										<span>{t(key)}</span>
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
				<button className={styles.themeButton}>
					<ThemeSwitch />
				</button>
			</div>
		</header>
	)
}

'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import styles from './Sidebar.module.scss'
import { Link, routing, usePathname, useRouter } from '@/i18n/routing'

export function Sidebar() {
	const [showContacts, setShowContacts] = useState(false)
	const t = useTranslations('sidebar')
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()

	function switchLocale(next: string) {
		router.replace(pathname, { locale: next })
	}

	return (
		<aside
			className={`${styles.sidebar} ${showContacts ? styles.contactsVisible : ''}`}
		>
			<div className={styles.logo}>
				<Link className={styles.logoImage} href='/'>
					<Image
						priority
						src='/logo.png'
						alt='logo nelon arrive'
						width={80}
						height={80}
					/>
				</Link>
				<div>
					<div className={styles.logoTitle}>
						David <br /> Polovnikov
					</div>
					<div className={styles.logoText}>{t('role')}</div>
				</div>
				<button
					className={styles.btn}
					onClick={() => setShowContacts(!showContacts)}
				>
					<span>{showContacts ? t('hideContacts') : t('showContacts')}</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='13'
						height='13'
						viewBox='0 0 24 24'
					>
						<path
							fill='#ebebeb'
							fillRule='evenodd'
							d='M5.293 8.293a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L12 13.586 6.707 8.293a1 1 0 0 0-1.414 0z'
							clipRule='evenodd'
						/>
					</svg>
				</button>
			</div>

			<div
				className={`${styles.contacts} ${showContacts ? styles.contactsVisible : ''}`}
			>
				<div className={styles.contactsItem}>
					<div className='icon-box'>
						<Image
							className={styles.contactsItemImage}
							src='/email.svg'
							alt=''
							width={18}
							height={18}
						/>
					</div>
					<div className={styles.contactsItemText}>
						<div className={styles.contactsItemTitle}>{t('email')}</div>
						<a
							href='mailto:nelon.arrive@gmail.com'
							className={styles.contactsItemValue}
						>
							nelon.arrive@gmail.com
						</a>
					</div>
				</div>
				<div className={styles.contactsItem}>
					<div className='icon-box'>
						<Image
							className={styles.contactsItemImage}
							src='/phone.svg'
							alt=''
							width={18}
							height={18}
						/>
					</div>
					<div className={styles.contactsItemText}>
						<div className={styles.contactsItemTitle}>{t('phone')}</div>
						<a href='tel:+79530526260' className={styles.contactsItemValue}>
							+7(953)052-62-60
						</a>
					</div>
				</div>
				<div className={styles.contactsItem}>
					<div className='icon-box'>
						<Image
							className={styles.contactsItemImage}
							src='/location.svg'
							alt=''
							width={18}
							height={18}
						/>
					</div>
					<div className={styles.contactsItemText}>
						<p className={styles.contactsItemTitle}>{t('location')}</p>
						<address className={styles.contactsItemValue}>
							{t('locationValue')}
						</address>
					</div>
				</div>
			</div>

			<div className={styles.socialList}>
				<div className={styles.socialListItem}>
					<Link href='https://github.com/NelonArrive'>
						<Image
							className={styles.socialListItemImage}
							src='/github.svg'
							alt='github icon'
							width={22}
							height={22}
						/>
					</Link>
				</div>
				<div className={styles.socialListItem}>
					<Link href='https://t.me/NelonArrive'>
						<Image
							className={styles.socialListItemImage}
							src='/telegram.svg'
							alt='telegram icon'
							width={22}
							height={22}
						/>
					</Link>
				</div>
			</div>

			{/* Language switcher */}
			<div className={styles.localeSwitcher}>
				{routing.locales.map(loc => (
					<button
						key={loc}
						className={`${styles.localeBtn} ${loc === locale ? styles.localeBtnActive : ''}`}
						onClick={() => switchLocale(loc)}
						title={loc === 'ru' ? 'Русский' : 'English'}
					>
						<Image
							src={`/flags/${loc}.svg`}
							alt={loc}
							width={22}
							height={22}
							className={styles.flagIcon}
						/>
						<span>{loc.toUpperCase()}</span>
					</button>
				))}
			</div>
		</aside>
	)
}

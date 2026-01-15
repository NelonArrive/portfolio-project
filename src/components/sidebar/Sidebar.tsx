'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import styles from './Sidebar.module.scss'

export function Sidebar() {
	const [showContacts, setShowContacts] = useState(false)

	return (
		<aside
			className={`${styles.sidebar} ${showContacts ? styles.contactsVisible : ''}`}
		>
			<div className={styles.logo}>
				<Link
					className={styles.logoImage}
					href='/'
				>
					<Image
						priority
						src='/logo.jpg'
						alt='logo nelon arrive'
						width={80}
						height={80}
					/>
				</Link>
				<div className=''>
					<div className={styles.logoTitle}>Nelon Arrive</div>
					<div className={styles.logoText}>Fullstack developer</div>
				</div>

				<button
					className={styles.btn}
					onClick={() => setShowContacts(!showContacts)}
				>
					<span>Show Contacts</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						version='1.1'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						width='13'
						height='13'
						x='0'
						y='0'
						viewBox='0 0 24 24'
						enableBackground='new 0 0 512 512'
						xmlSpace='preserve'
					>
						<g>
							<path
								fill='#ebebeb'
								fillRule='evenodd'
								d='M5.293 8.293a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L12 13.586 6.707 8.293a1 1 0 0 0-1.414 0z'
								clipRule='evenodd'
								opacity='1'
							/>
						</g>
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
						<div className={styles.contactsItemTitle}>Email</div>
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
						<div className={styles.contactsItemTitle}>Phone</div>
						<a
							href='tel:+79530526260'
							className={styles.contactsItemValue}
						>
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
						<p className={styles.contactsItemTitle}>Location</p>
						<address className={styles.contactsItemValue}>
							Ekaterinburg, Russia
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

				<div className={styles.socialListItem}>
					<Link href='https://vk.com/nelonarrive'>
						<Image
							className={styles.socialListItemImage}
							src='/vk.svg'
							alt='vk icon'
							width={22}
							height={22}
						/>
					</Link>
				</div>

				<div className={styles.socialListItem}>
					<Link href='https://wa.me/79530526260'>
						<Image
							className={styles.socialListItemImage}
							src='/whatsapp.svg'
							alt='whatsapp icon'
							width={22}
							height={22}
						/>
					</Link>
				</div>
			</div>
		</aside>
	)
}

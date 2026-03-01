'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import styles from './Services.module.scss'

export function Services() {
	const t = useTranslations('services')

	const items = [
		{ key: 'backend', alt: 'Backend Development' },
		{ key: 'microservices', alt: 'Microservices & System Architecture' },
		{ key: 'database', alt: 'Database Design & Optimization' },
		{ key: 'fullstack', alt: 'Fullstack Development' }
	] as const

	return (
		<section className={styles.wrapper}>
			<h3 className={styles.title}>{t('heading')}</h3>
			<ul className={styles.list}>
				{items.map(({ key, alt }) => (
					<li
						key={key}
						className={styles.item}
					>
						<div className={styles.content}>
							<div className={styles.icon}>
								<Image
									src='/services/services-img.svg'
									alt={alt}
									width={90}
									height={90}
									className={styles.image}
								/>
							</div>
							<h4 className={styles.titleText}>{t(`${key}.title`)}</h4>
						</div>
						<p className={styles.text}>{t(`${key}.description`)}</p>
					</li>
				))}
			</ul>
		</section>
	)
}

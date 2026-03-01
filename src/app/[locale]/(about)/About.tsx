'use client'

import { useTranslations } from 'next-intl'

import { Services } from '@/components/services/Services'
import { Skills } from '@/components/skills/Skills'
import { Heading } from '@/components/ui'

import styles from './About.module.scss'

export function About() {
	const t = useTranslations('about')

	return (
		<>
			<Heading title={t('heading')} />
			<section className={styles.text}>
				<p>{t('bio1')}</p>
				<p>{t('bio2')}</p>
			</section>
			<Services />
			<Skills />
		</>
	)
}

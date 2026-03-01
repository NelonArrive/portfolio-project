'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Heading } from '@/components/ui'

import style from '../NotFound.module.scss'
import { Link } from '@/i18n/routing'

export default function NotFound() {
	const t = useTranslations('notFound')

	return (
		<>
			<Heading title={t('heading')} />
			<div className={style.list}>
				<Image src='/notfound.svg' width={256} height={256} alt='notfound' />
				<div className={style.info}>
					<h2>{t('title')}</h2>
					<p>{t('description')}</p>
					<Link href='/'> 
						<button>{t('goHome')}</button>
					</Link>
				</div>
			</div>
		</>
	)
}

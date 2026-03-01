import {
	BookOpen,
	BriefcaseBusiness,
	Calendar,
	Download,
	Layers
} from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Heading } from '@/components/ui'

import styles from './Resume.module.scss'

const educationData = [
	{
		degree: 'Information Systems & Programming',
		institution: 'Ural Industrial and Economic College',
		period: 'Sep 2024 — May 2027',
		details: [
			'Python, JavaScript, C#, algorithms & OOP fundamentals',
			'Frontend development: interfaces, forms, components',
			'Data structures, scripting & utilities'
		]
	}
]

const expKeys = ['nelonshift', 'nelonecommerce', 'freelance'] as const
const expStacks: Record<string, string[]> = {
	nelonshift: ['Spring Boot', 'Spring Security', 'JWT', 'Redis', 'PostgreSQL'],
	nelonecommerce: [
		'Spring Boot',
		'JWT',
		'JPA/Hibernate',
		'PostgreSQL',
		'Maven'
	],
	freelance: ['HTML', 'CSS', 'JavaScript']
}
const skillKeys = [
	'languages',
	'frameworks',
	'databases',
	'tools',
	'concepts'
] as const

export function Resume() {
	const t = useTranslations('resume')

	return (
		<section className={styles.resume}>
			<Heading title={t('heading')} />

			<div className={styles.grid}>
				{/* Education */}
				<div className={styles.block}>
					<div className={styles.blockHeader}>
						<span className={styles.iconWrap}>
							<BookOpen size={18} />
						</span>
						<h3 className={styles.blockTitle}>{t('education')}</h3>
					</div>

					{educationData.map((edu, i) => (
						<div key={i} className={styles.card}>
							<div className={styles.cardMeta}>
								<span className={styles.badge}>
									<Calendar size={12} />
									{t('edu.period')}
								</span>
							</div>
							<h4 className={styles.cardRole}>{t('edu.degree')}</h4>
							<p className={styles.cardCompany}>{t('edu.institution')}</p>
							<ul className={styles.detailList}>
								{(t.raw('edu.details') as string[]).map((d, j) => (
									<li key={j}>{d}</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Experience */}
				<div className={styles.block}>
					<div className={styles.blockHeader}>
						<span className={styles.iconWrap}>
							<BriefcaseBusiness size={18} />
						</span>
						<h3 className={styles.blockTitle}>{t('experience')}</h3>
					</div>

					{expKeys.map((key, i) => (
						<div
							key={key}
							className={`${styles.card} ${i === 0 ? styles.cardFeatured : ''}`}
						>
							<div className={styles.cardMeta}>
								<span className={styles.badge}>
									<Calendar size={12} />
									{t(`exp.${key}.period`)} · {t(`exp.${key}.duration`)}
								</span>
							</div>
							<h4 className={styles.cardRole}>{t(`exp.${key}.role`)}</h4>
							<p className={styles.cardCompany}>{t(`exp.${key}.company`)}</p>
							<div className={styles.stackRow}>
								{expStacks[key].map(s => (
									<span key={s} className={styles.tag}>
										{s}
									</span>
								))}
							</div>
							<ul className={styles.detailList}>
								{(t.raw(`exp.${key}.highlights`) as string[]).map((h, j) => (
									<li key={j}>{h}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			{/* Skills */}
			<div className={styles.skillsBlock}>
				<div className={styles.blockHeader}>
					<span className={styles.iconWrap}>
						<Layers size={18} />
					</span>
					<h3 className={styles.blockTitle}>{t('technicalSkills')}</h3>
				</div>
				<div className={styles.skillsGrid}>
					{skillKeys.map(key => (
						<div key={key} className={styles.skillItem}>
							<span className={styles.skillLabel}>
								{t(`skillCategories.${key}.label`)}
							</span>
							<span className={styles.skillValue}>
								{t(`skillCategories.${key}.value`)}
							</span>
						</div>
					))}
				</div>
			</div>

			<a
				href='/Polovnikov_David_Alekseevich__Backend_developer.pdf'
				target='_blank'
				rel='noopener noreferrer'
				className={styles.downloadLink}
			>
				<button className={styles.btn} type='button'>
					<Download size={16} />
					{t('downloadCV')}
				</button>
			</a>
		</section>
	)
}

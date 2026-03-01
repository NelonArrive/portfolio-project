'use client'

import { useTranslations } from 'next-intl'
import { FaJava } from 'react-icons/fa'
import {
	SiApachekafka,
	SiApachemaven,
	SiApollographql,
	SiBun,
	SiDocker,
	SiGit,
	SiGradle,
	SiGraphql,
	SiHibernate,
	SiJavascript,
	SiLinux,
	SiMysql,
	SiNestjs,
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiRedis,
	SiRedux,
	SiSass,
	SiSpring,
	SiTailwindcss,
	SiTypescript,
	SiVite,
	SiVuedotjs
} from 'react-icons/si'

import styles from './Skills.module.scss'

type Skill = {
	icon: React.ReactNode
	label: string
}

const backend: Skill[] = [
	{ icon: <FaJava />, label: 'Java' },
	{ icon: <SiSpring />, label: 'Spring' },
	{ icon: <SiHibernate />, label: 'Hibernate' },
	{ icon: <SiNestjs />, label: 'NestJS' },
	{ icon: <SiPrisma />, label: 'Prisma' },
	{ icon: <SiGraphql />, label: 'GraphQL' }
]

const infra: Skill[] = [
	{ icon: <SiPostgresql />, label: 'PostgreSQL' },
	{ icon: <SiMysql />, label: 'MySQL' },
	{ icon: <SiRedis />, label: 'Redis' },
	{ icon: <SiApachekafka />, label: 'Kafka' },
	{ icon: <SiDocker />, label: 'Docker' },
	{ icon: <SiLinux />, label: 'Linux' },
	{ icon: <SiApachemaven />, label: 'Maven' },
	{ icon: <SiGradle />, label: 'Gradle' },
	{ icon: <SiGit />, label: 'Git' },
	{ icon: <SiVite />, label: 'Vite' }
	// { icon: <SiBun />, label: 'Bun' }
]

const frontend: Skill[] = [
	{ icon: <SiReact />, label: 'React' },
	{ icon: <SiRedux />, label: 'Redux' },
	{ icon: <SiNextdotjs />, label: 'Next.js' },
	{ icon: <SiTypescript />, label: 'TypeScript' },
	{ icon: <SiJavascript />, label: 'JavaScript' },
	{ icon: <SiSass />, label: 'Sass' },
	{ icon: <SiTailwindcss />, label: 'Tailwind' },
	{ icon: <SiVuedotjs />, label: 'Vue' },
	{ icon: <SiApollographql />, label: 'Apollo' }
]

function SkillGrid({ skills }: { skills: Skill[] }) {
	return (
		<div className={styles.grid}>
			{skills.map(({ icon, label }) => (
				<div key={label} className={styles.skillItem}>
					<span className={styles.icon}>{icon}</span>
					<span className={styles.label}>{label}</span>
				</div>
			))}
		</div>
	)
}

export function Skills() {
	const t = useTranslations('skills')

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.mainTitle}>{t('heading')}</h2>
			<div className={styles.block}>
				<h3 className={styles.subtitle}>{t('backend')}</h3>
				<SkillGrid skills={backend} />
			</div>
			<div className={styles.block}>
				<h3 className={styles.subtitle}>{t('infra')}</h3>
				<SkillGrid skills={infra} />
			</div>
			<div className={styles.block}>
				<h3 className={styles.subtitle}>{t('frontend')}</h3>
				<SkillGrid skills={frontend} />
			</div>
		</section>
	)
}

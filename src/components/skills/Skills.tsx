'use client'

import styles from './Skills.module.scss'

export function Skills() {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.mainTitle}>🛠️ Skills</h2>

			<div className={styles.block}>
				<h3 className={styles.subtitle}>Backend</h3>
				<img
					src='https://skillicons.dev/icons?i=java,spring,hibernate&theme=dark'
					alt='Languages & Frameworks'
					loading='lazy'
				/>{' '}
				|{' '}
				<img
					src='https://skillicons.dev/icons?i=nestjs,prisma,graphql&theme=dark'
					alt='Languages & Frameworks'
					loading='lazy'
				/>
			</div>

			<div className={styles.block}>
				<h3 className={styles.subtitle}>Databases & Infrastructure</h3>
				<img
					src='https://skillicons.dev/icons?i=postgres,mysql,redis,kafka,docker,linux,maven,gradle,git,vite,bun&theme=dark'
					alt='Databases & Infrastructure'
					loading='lazy'
				/>
			</div>

			<div className={styles.block}>
				<h3 className={styles.subtitle}>Frontend</h3>
				<img
					src='https://skillicons.dev/icons?i=react,redux,nextjs,typescript,javascript,sass,tailwind,vue,pinia,apollo&theme=dark'
					alt='Frontend'
					loading='lazy'
				/>
			</div>
		</section>
	)
}

import { Services } from '@/components/services/Services'
import { Skills } from '@/components/skills/Skills'
import { Heading } from '@/components/ui'

import styles from './About.module.scss'

export function About() {
	return (
		<>
			<Heading title='About Me' />

			<section className={styles.text}>
				<p>
					A passionate Fullstack Developer crafting elegant web interfaces with React, Next.js & TypeScript while building robust backend systems with Java, Spring Boot, Hibernate, Kafka, Redis & Microservices. I bring strong UI/UX skills, performance tuning, state management, and scalable architecture design.
				</p>
				<p>
					If you're looking for someone who codes with purpose, bridges frontend and backend seamlessly, and delivers production-ready solutions — let's bring your ideas to life!
				</p>
			</section>

			<Services />
			<Skills />
		</>
	)
}

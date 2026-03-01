'use client'

import type { Metadata } from 'next'

import { Heading } from '@/components/ui'

import styles from './Portfolio.module.scss'
import { PortfolioItem } from './portfolio-item/PortfolioItem'
import projects from './portfolio.data.json'
import { IPortfolioProject } from './portfolio.interface'

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Portfolio'
}

export function Portfolio() {
	return (
		<div>
			<Heading title='Portfolio' />

			<section className={styles.projects}>
				<ul className={styles.list}>
					{(projects as IPortfolioProject[]).map(item => (
						<PortfolioItem
							key={item.id}
							category={item.category}
							title={item.title}
							imgUrl={item.imgUrl}
							link={item.link}
						/>
					))}
				</ul>
			</section>
		</div>
	)
}

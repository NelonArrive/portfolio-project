import Image from 'next/image'
import Link from 'next/link'

import styles from './PortfolioItem.module.scss'

interface IPortfolioItem {
	title: string
	category: string
	imgUrl: string
	link: string
}

export function PortfolioItem({
	title,
	category,
	imgUrl,
	link
}: IPortfolioItem) {
	return (
		<li className={styles.item}>
			<Link target='_blank' href={link}>
				<div className={styles.image}>
					<Image priority src={imgUrl} alt={title} width={350} height={145} />
				</div>
			</Link>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.category}>{category}</p>
			</div>
		</li>
	)
}

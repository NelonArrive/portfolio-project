'use client'

import emailjs from '@emailjs/browser'
import { useTheme } from 'next-themes'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Heading } from '@/components/ui'

import styles from './Contacts.module.scss'

type FormData = {
	fullname: string
	email: string
	subject: string
	message?: string
}

export function Contacts() {
	const formRef = useRef<HTMLFormElement | null>(null)

	const {
		register,
		handleSubmit,
		formState: { isValid, isSubmitting },
		reset
	} = useForm<FormData>({
		mode: 'onChange'
	})

	const onSubmit = async (data: FormData) => {
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			})

			if (!res.ok) throw new Error('Server error')

			toast.success('Message sent ✅', {
				description: 'We will respond to your inquiry as soon as possible'
			})
			reset()
		} catch (err) {
			console.error('Ошибка отправки:', err)
			toast.error('Failed to send message ❌')
		}
	}

	return (
		<>
			<Heading title='Contacts' />

			<div>
				<form
					ref={formRef}
					className={styles.form}
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className={styles.wrapper}>
						<input
							{...register('fullname', { required: true })}
							type='text'
							name='fullname'
							className={styles.formInput}
							placeholder='Full name'
						/>
						<input
							{...register('email', { required: true })}
							type='email'
							name='email'
							className={styles.formInput}
							placeholder='Email address'
						/>
					</div>

					<input
						{...register('subject', { required: true })}
						type='text'
						name='subject'
						className={styles.formInput}
						placeholder='Subject'
					/>

					<textarea
						{...register('message')}
						name='message'
						className={styles.formTextarea}
						placeholder='Your Message'
					/>

					<button
						className={styles.formBtn}
						type='submit'
						disabled={!isValid || isSubmitting}
					>
						<span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
					</button>
				</form>
			</div>
		</>
	)
}

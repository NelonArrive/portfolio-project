import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const { fullname, email, subject, message } = await req.json()
	console.log('TOKEN:', process.env.TG_BOT_TOKEN)
	console.log('CHAT_ID:', process.env.TG_CHAT_ID)
  
	const text = `
📩 *Новое сообщение с сайта*

👤 *Имя:* ${fullname}
📧 *Email:* ${email}
📌 *Тема:* ${subject}
💬 *Сообщение:* ${message || '—'}
  `.trim()

	const res = await fetch(
		`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: process.env.TG_CHAT_ID,
				text,
				parse_mode: 'Markdown'
			})
		}
	)

	if (!res.ok) {
		const errorBody = await res.text()
		console.error('Telegram error:', res.status, errorBody)
		return NextResponse.json({ error: 'Telegram error' }, { status: 500 })
	}

	return NextResponse.json({ ok: true })
}

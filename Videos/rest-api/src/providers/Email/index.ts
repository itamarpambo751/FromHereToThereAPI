/* import * as nodemailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"

type MailerRequestType = {
	from: string
	to: string
	subject: string
	html: string | null
}

export default class Nodemailer {

	from: string
	to: string
	subject: string
	html: string | null
	transporter?: nodemailer.Transporter<SMTPTransport.SentMessageInfo>

	constructor({ from, to, subject, html }: MailerRequestType) {
        this.from = from
        this.to = to
        this.subject = subject
        this.html = html
		this.transporter = nodemailer.createTransport({
			service: process.env.MAILER_SERVICE,
			auth: {
				user: process.env.MAILER_RECIPIENT,
				pass: process.env.MAILER_RECIPIENT_PASSWORD
			}
		})
	}

	async sendMail() {
		return await this.transporter.sendMail({
			from: this.from,
			to: this.to,
			subject: this.subject,
			html: this.html
		})
	}
}
 */
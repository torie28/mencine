import type { Metadata } from 'next'
import ContactForm from '../contact_internal/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Mencine Co Ltd for smoke-free incinerator solutions and waste management consulting in Tanzania.',
}

export default function ContactPage() {
  return <ContactForm />
}
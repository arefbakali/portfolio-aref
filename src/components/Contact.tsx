import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { profile } from '../data/profile'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const update = (key: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const links = [
    { label: t.contact.email, value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: t.contact.github, value: `@${profile.githubHandle}`, href: profile.github, icon: Github },
    { label: t.contact.linkedin, value: profile.linkedinHandle, href: profile.linkedin, icon: Linkedin },
  ]

  return (
    <section id="contact" className="relative border-t border-border px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-accent">{t.contact.label}</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
          {t.contact.heading}
        </h2>
        <p className="mt-5 max-w-xl text-sm text-muted sm:text-base">{t.contact.subheading}</p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {links.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent"
              >
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-accent">{label}</span>
                  <span className="mt-1 block text-sm text-ink">{value}</span>
                </span>
                <Icon size={18} className="text-muted" />
              </a>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted-2">
                  {t.contact.formName}
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={update('name')}
                  className="w-full rounded-lg border border-border bg-cream px-3.5 py-2.5 text-sm text-ink focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted-2">
                  {t.contact.formEmail}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  className="w-full rounded-lg border border-border bg-cream px-3.5 py-2.5 text-sm text-ink focus:border-accent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted-2">
                {t.contact.formSubject}
              </label>
              <input
                id="subject"
                value={form.subject}
                onChange={update('subject')}
                className="w-full rounded-lg border border-border bg-cream px-3.5 py-2.5 text-sm text-ink focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted-2">
                {t.contact.formMessage}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={update('message')}
                className="w-full resize-none rounded-lg border border-border bg-cream px-3.5 py-2.5 text-sm text-ink focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent-solid px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wide text-white transition-transform hover:scale-[1.01]"
            >
              {t.contact.send} <Send size={14} />
            </button>
            <p className="text-center font-mono text-[11px] text-muted">{t.contact.responseTime}</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

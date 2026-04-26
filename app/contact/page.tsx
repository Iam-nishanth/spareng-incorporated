'use client'

import { useState } from 'react'

import { Footer } from '#components/site/Footer'
import { Navbar } from '#components/site/Navbar'
import {
  ArrowIcon,
  CheckIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from '#components/site/icons'

import styles from './contact.module.css'

const inquiryTypes = [
  'General Enquiry',
  'Quote Request: MHE Spares',
  'Custom Fabrication',
  'Technical Support',
  'Partnership / Distributor',
]

const points = [
  {
    title: 'Engineer-led replies',
    sub: 'Your enquiry lands directly with our applications team. Never a generic inbox.',
  },
  {
    title: 'Response within one working day',
    sub: 'For RFQs we acknowledge same day, with full quote inside 48 hours.',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className={styles.root}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroEyebrow}>Get in Touch</div>
          <h1 className={styles.heroTitle}>
            Tell us what you need,
            <br />
            <strong>we’ll engineer the rest.</strong>
          </h1>
          <p className={styles.heroDesc}>
            Whether you’re sourcing a single replacement idler or specifying an
            entire conveyor system, our team turns enquiries around fast. Use
            the form below or reach us directly through any of the channels.
          </p>
        </div>
      </section>

      <div className={styles.infoRow}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <PinIcon />
          </div>
          <div className={styles.infoTitle}>Visit Us</div>
          <p className={styles.infoMain}>Spareng Incorporated, Hyderabad</p>
          <p className={styles.infoSub}>
            Plot No. E8/C8-2A, IDA, UPPAL,
            <br />
            Hyderabad 500039, Telangana, India
          </p>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <MailIcon />
          </div>
          <div className={styles.infoTitle}>Email</div>
          <p className={styles.infoMain}>
            <a href="mailto:info@sparenginc.com">info@sparenginc.com</a>
          </p>
          <p className={styles.infoSub}>
            Send drawings, RFQs, and technical questions. Replies within one
            working day.
          </p>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <PhoneIcon />
          </div>
          <div className={styles.infoTitle}>Phone</div>
          <p className={styles.infoMain}>
            <a href="tel:+914012345678">+91 40 1234 5678</a>
          </p>
          <p className={styles.infoSub}>
            Speak directly with our applications engineers, Monday – Saturday.
          </p>
        </div>
      </div>

      <section className={styles.formSec}>
        <div className={styles.formInner}>
          <aside className={styles.aside}>
            <div className={styles.eyebrow}>How we work</div>
            <h2>Specifications, drawings, or just a problem to solve.</h2>
            <p>
              Most of our enquiries arrive as a sketch, a sample, or a worn-out
              part on a workshop bench. Send what you have. We’ll come back
              with options, prices, and lead times.
            </p>

            <ul className={styles.points}>
              {points.map((p) => (
                <li key={p.title}>
                  <span className={styles.pointBadge}>
                    <CheckIcon />
                  </span>
                  <div>
                    <div className={styles.pointTitle}>{p.title}</div>
                    <div className={styles.pointSub}>{p.sub}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.hours}>
              <div className={styles.hoursIcon}>
                <ClockIcon />
              </div>
              <div>
                <div className={styles.hoursTitle}>Business Hours</div>
                <p className={styles.hoursTime}>
                  Mon – Sat · 9:00 AM – 6:00 PM IST
                </p>
              </div>
            </div>
          </aside>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formHead}>
              <h3>Send us a message</h3>
              <p>
                Fields marked with{' '}
                <span style={{ color: 'var(--accent)' }}>*</span> are required.
              </p>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={styles.input}
                  placeholder="Jane Doe"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="company">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className={styles.input}
                  placeholder="Acme Steel Plant"
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={styles.input}
                  placeholder="you@company.com"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={styles.input}
                  placeholder="+91 98xxxxxxxx"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="inquiry">
                Inquiry Type *
              </label>
              <select
                id="inquiry"
                name="inquiry"
                className={styles.select}
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select an inquiry type
                </option>
                {inquiryTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                className={styles.textarea}
                placeholder="Tell us about the part, application, or system you need…"
              />
            </div>

            <button type="submit" className={styles.submit}>
              {submitted ? 'Message Sent. Thank You' : 'Send Message'}{' '}
              {!submitted && <ArrowIcon />}
            </button>
            <p className={styles.formNote}>
              We respect your privacy. Your details are used only to respond to
              this enquiry.
            </p>
          </form>
        </div>
      </section>

      <section className={styles.locStrip}>
        <div className={styles.locInner}>
          <div className={styles.locText}>
            <div className={styles.eyebrow}>Our Plant</div>
            <h2>Visit our works in Uppal, Hyderabad.</h2>
            <p>
              Our manufacturing and assembly works sit in the IDA Uppal
              industrial estate, with full machining, fabrication, and assembly
              facilities under one roof.
            </p>
            <div className={styles.locActions}>
              <a
                className={styles.btnNavy}
                href="https://www.google.com/maps/search/?api=1&query=Plot+No.+E8%2FC8-2A%2C+IDA%2C+UPPAL%2C+Hyderabad+500039"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions <ArrowIcon />
              </a>
            </div>
          </div>

          <div className={styles.map}>
            <iframe
              title="Spareng Incorporated, Hyderabad"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=IDA+Uppal+Hyderabad+500039&output=embed"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

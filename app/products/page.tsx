import type { Metadata } from 'next'
import Link from 'next/link'

import { Footer } from '#components/site/Footer'
import { HashScroller } from '#components/site/HashScroller'
import { Navbar } from '#components/site/Navbar'
import { ArrowIcon } from '#components/site/icons'
import { hubCategories } from '#data/hub-categories'

import { CategoryPills } from './CategoryPills'
import styles from './products.module.css'

export const metadata: Metadata = {
  title: 'Products — Spareng Incorporated',
  description:
    'Complete catalog of MHE spare parts and equipment: Processing Equipment, Conveyor Idlers, Pulleys, Crushers, Feeders, and Screening Equipment for industrial bulk material handling.',
}

const coverLineIds = new Set([
  'belt-conveyor',
  'bucket-elevator',
  'circular-motion-screen',
  'flip-flow-screen',
  'rotary-air-valve',
  'single-roll-crusher',
  'sizer-grader',
])

type CategoryMeta = {
  eyebrow: string
  lead: string
}

const categoryMeta: Record<string, CategoryMeta> = {
  'processing-equipment': {
    eyebrow: 'Bulk Transport',
    lead: 'Continuous-duty conveying systems engineered for high-throughput bulk material handling across mining, cement, coal handling, and power plant operations.',
  },
  'conveyor-idlers': {
    eyebrow: 'Belt Support',
    lead: 'Precision-machined idler sets that deliver smooth belt travel and long service life under impact loads, abrasive feeds, and continuous duty cycles.',
  },
  'conveyor-pulleys': {
    eyebrow: 'Drive & Tail',
    lead: 'Heavy-duty drive, redirect, and magnetic pulleys engineered for high tension — with precision-turned shells and rubber lagging matched to the duty.',
  },
  'crushing-equipment': {
    eyebrow: 'Size Reduction',
    lead: 'Primary, secondary, and tertiary crushers built to reduce hard ore, coal, limestone, and minerals — backed by a full inventory of interchangeable wear parts.',
  },
  'feeding-equipment': {
    eyebrow: 'Controlled Flow',
    lead: 'Feeders, elevators, and scrapers that draw, meter, and lift material from hoppers, bins, and stockpiles — including the wet, cohesive feeds that defeat conventional systems.',
  },
  'screening-equipment': {
    eyebrow: 'Classification',
    lead: 'Precision screening solutions for accurate sizing — from high-throughput stratification through to flip-flow separation of wet, sticky, near-mesh feeds.',
  },
}

const colsForCount = (n: number) => (n === 4 ? 2 : Math.min(Math.max(n, 1), 3))

export default function ProductsPage() {
  const pillItems = hubCategories.map((c) => ({
    id: c.id,
    number: c.number,
    name: c.name,
  }))
  const totalLines = hubCategories.reduce(
    (n, c) => n + c.productLines.length,
    0,
  )

  return (
    <div className={styles.root}>
      <Navbar />
      <HashScroller />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <div className={styles.heroEyebrow}>Product Catalog</div>
            <h1 className={styles.heroTitle}>
              Equipment and Spares,
              <br />
              <strong>built for the long haul.</strong>
            </h1>
            <p className={styles.heroDesc}>
              {hubCategories.length} core categories. {totalLines} distinct
              product lines. Every system in our catalog is
              precision-engineered for continuous industrial duty — whether
              you’re sourcing a complete conveyor, a single impact idler, or a
              custom wear liner.
            </p>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNum}>{totalLines}</div>
              <div className={styles.heroStatLabel}>Product Lines</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNum}>
                {hubCategories.length}
              </div>
              <div className={styles.heroStatLabel}>Categories</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNum}>20+</div>
              <div className={styles.heroStatLabel}>Years</div>
            </div>
          </div>
        </div>
      </section>

      <CategoryPills items={pillItems} />

      {hubCategories.map((c, idx) => {
        const meta = categoryMeta[c.id]
        return (
          <section
            key={c.id}
            id={c.id}
            className={`${styles.section} ${idx % 2 === 1 ? styles.sectionAlt : ''}`}
          >
            <div className={styles.sectionInner}>
              <div className={styles.intro}>
                <div className={styles.introEyebrow}>
                  {c.number} — {meta?.eyebrow ?? c.tagline}
                </div>
                <h2 className={styles.introTitle}>{c.name}</h2>
                <p className={styles.introLead}>
                  {meta?.lead ?? c.tagline}
                </p>
              </div>

              <div className={styles.lines}>
                <div className={styles.linesHead}>
                  <div className={styles.linesEyebrow}>Product Lines</div>
                  <div className={styles.linesCount}>
                    {c.productLines.length}{' '}
                    {c.productLines.length === 1 ? 'line' : 'lines'}
                  </div>
                </div>

                <div
                  className={styles.linesGrid}
                  style={
                    {
                      ['--cols' as string]: colsForCount(
                        c.productLines.length,
                      ),
                    } as React.CSSProperties
                  }
                >
                  {c.productLines.map((line, lIdx) => {
                    const cover = coverLineIds.has(line.id)
                    return (
                      <article
                        className={styles.line}
                        key={line.id}
                        id={line.id}
                      >
                        <div
                          className={`${styles.lineImg} ${cover ? styles.lineImgCover : ''}`}
                        >
                          {line.image && (
                            <img src={line.image} alt={line.name} />
                          )}
                          <span className={styles.lineIndex}>
                            {String(lIdx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className={styles.lineBody}>
                          <p className={styles.lineTag}>{line.tagline}</p>
                          <h4 className={styles.lineName}>{line.name}</h4>
                          <p className={styles.lineSummary}>
                            {line.description}
                          </p>
                          {line.applications.length > 0 && (
                            <div className={styles.lineMeta}>
                              {line.applications.slice(0, 3).map((a) => (
                                <span className={styles.lineChip} key={a}>
                                  {a}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <div className={styles.ctaBand}>
        <div>
          <h2>
            Need a part that
            <br />
            isn’t in this catalog?
          </h2>
        </div>
        <div>
          <p>
            Our engineering team builds custom wear parts, drive assemblies, and
            replacement spares to drawing or sample. Tell us what you need and
            we’ll respond within one working day.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Send Us a Drawing <ArrowIcon />
          </Link>
          <div className={styles.ctaContact}>
            or email us at info@sparenginc.com
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

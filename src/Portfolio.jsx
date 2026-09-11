import { useState } from "react";

const data = {
  name: "Vishal Jonnalagadda",
  subtitle: "",
  photo: "",
  bio: [
    "Welcome to my homepage! I'm a freshman at UT Austin, majoring in Computer Science and Business through the CSB honors program.",
    "Before this, I attented the Texas Academy of Mathematics and Science.",
  ],
  links: [
    { label: "Email", href: "mailto:vsj2300@gmail.com" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=J6Bo46wAAAAJ&hl=en" },
    { label: "Instagram", href: "https://www.instagram.com/vishaljonnalagadda76/?hl=en" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vishal-s-j/" },
    { label: "Github", href: "https://github.com/vishalsj5" },
  ],
  education: [
    { name: "UT Austin", initials: "UT" },
    { name: "UNT", initials: "UNT" },
    { name: "TAMS", initials: "TAMS" },
  ],
  research:
    "My research has spanned biomedical machine learning and computational chemistry. I've worked on objectively classifying hemiplegic cerebral palsy subtypes from instrumented gait data using autoencoders and clustering, and on optimizing the Kinetic Database algorithm used in Adaptive Kinetic Monte Carlo simulations of catalyst regeneration. I'm currently interested in Embodied AI.",
  projects: [
    {
      title: "MLB Sports Betting Predictor",
      tagline: "XGBoost model predicting MLB game winners from 9 years of historical data.",
      description:
        "My current project! I've recently tried to get into sports betting, but after losing a money, I decided to program an XGBoost model trained on several years worth of game data pulled via the MLB Stats API. I also implemented rolling features from raw box score data so every input represents only pre-game information so that I could avoid lookahead bias. It is still a work in progress!",
      tags: ["Python", "XGBoost", "MLB Stats API"],
      link: "#",
    },
    {
      title: "Dyspel & LinkedUp",
      tagline: "Founder & co-developer — accessibility software for students with dyslexia, plus a professional networking tool.",
      description:
        "Led development of Dyspel, an accessibility software suite for students with dyslexia, and LinkedUp, a tool for profile-based networking and direct messaging between professionals. In Dyspel, I programmed features like text-to-speech, specialized font integration, and customizable reading guides.",
      tags: ["JavaScript", "Python", "Accessibility"],
      link: "#",
    },

    {
      title: "FTC Robotics — Lead Programmer",
      tagline: "Directed all programming for a competitive robotics team, State UIL award winner.",
      description:
        "Directed all programming efforts for the FTC robotics team, including designing and coding Java-based autonomous systems and developing robot strategy for competitions. Qualified for State and Regional Tournaments multiple times and won the State UIL award for robotics, along with Best Design (Regional), Winning Alliance (2x, Regional and Local), and third place in Outreach (Local).",
      tags: ["Java", "Robotics"],
      link: "#",
    },
  ],
  news: [
    { date: "Aug 2026", text: "UT started." },
    { date: "May 2026", text: "Graduated TAMS" },
    { date: "Sept 2025", text: "Selected as TAMS' institutional nominee for the U.S. Presidential Scholars Program." },
    { date: "Oct 2025", text: "Presented \"Phenotyping using Deep Autoencoders on Instrumented Gait Data of Hemiplegic Subjects\" at IEEE MIT URTC." },
    { date: "July 2025", text: "Earned a Gold medal at the Stanford International Logic Olympiad (top 5%)." },
    { date: "June 2025", text: "Selected as a Welch Summer Scholar, UT Austin, working under Dr. Graeme Henkelman." },
  ],
  pubCategories: [
    {
      id: "biomed",
      label: "Biomedical AI",
      description: "Machine learning for objective clinical classification from movement and biometric data.",
      items: [
        {
          title: "Phenotyping using Deep Autoencoders on Instrumented Gait Data of Hemiplegic Subjects",
          authors: "Lakhisha Balaji, Vishal Jonnalagadda, Troy Krupinski, Renugopal Sivaprakasam, Mark V. Albert, Kevin Dibbern",
          venue: "IEEE MIT Undergraduate Research Technology Conference (URTC), 2025",
          award: "",
          featured: true,
          links: [{ label: "paper", href: "https://doi.org/10.1109/URTC68753.2025.11533050" }],
        },
        {
          title: "Predicting Fall Likelihood in Patients Using Sway Index: A Comprehensive Study on Biometric Factors",
          authors: "Vishal Jonnalagadda (first author)",
          venue: "UNT Scholar's Day, 2024",
          award: "",
          featured: false,
          links: [{ label: "poster", href: "/sway-index-poster.pdf" }],
        },
      ],
    },
    {
      id: "chem",
      label: "Computational Chemistry",
      description: "Optimizing simulation methods for long-timescale catalyst kinetics.",
      items: [
        {
          title: "Optimizing the Kinetic Database Algorithm for AKMC, with Applications in Studying the Kinetics of Catalyst Regeneration",
          authors: "Vishal Jonnalagadda, Sung Hoon Jung, Wenrui Chai, Graeme Henkelman",
          venue: "Welch Summer Scholar Program, UT Austin, 2025",
          award: "",
          featured: true,
          links: [{ label: "paper", href: "/akmc-kdb-paper.pdf" }],
        },
      ],
    },
  ],
};

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const hasPubs = data.pubCategories && data.pubCategories.length > 0;
  const [tab, setTab] = useState(hasPubs ? data.pubCategories[0].id : null);
  const activeCat = hasPubs ? data.pubCategories.find((c) => c.id === tab) : null;

  return (
    <div className="pf-page">
      <style>{css}</style>

      <header className="pf-header">
        <div className="pf-headertext">
          <h1 className="pf-name">{data.name}</h1>
          {data.subtitle && <div className="pf-subtitle">{data.subtitle}</div>}
          {data.bio.map((p, i) => (
            <p key={i} className="pf-bio">
              {p}
            </p>
          ))}
          <div className="pf-links">
            {data.links.map((l, i) => (
              <span key={l.label}>
                {i > 0 && <span className="pf-links__sep">/</span>}
                <a href={l.href} className="pf-links__item">
                  {l.label}
                </a>
              </span>
            ))}
          </div>
        </div>
        <div className="pf-photo">
          {data.photo ? <img src={data.photo} alt={data.name} /> : <span>{data.name.charAt(0)}</span>}
        </div>
      </header>

      <section className="pf-section">
        <h2 className="pf-h2">Experience</h2>
        <div className="pf-exp">
          {data.experience.map((e) => (
            <div key={e.name} className="pf-exp__item">
              <div className="pf-exp__logo">{e.initials}</div>
              <div className="pf-exp__name">{e.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="pf-section">
        <h2 className="pf-h2">Projects</h2>
        <div className="pf-projects">
          {data.projects.map((p) => (
            <button key={p.title} className="pf-project" onClick={() => setActiveProject(p)}>
              <div className="pf-project__thumb" />
              <div className="pf-project__title">{p.title}</div>
              <div className="pf-project__tagline">{p.tagline}</div>
            </button>
          ))}
        </div>
      </section>

      <section className="pf-section">
        <h2 className="pf-h2">Research</h2>
        <p className="pf-body">{data.research}</p>
      </section>

      <section className="pf-section">
        <h2 className="pf-h2">News</h2>
        <ul className="pf-news">
          {data.news.map((n, i) => (
            <li key={i} className="pf-news__item">
              <span className="pf-news__date">{n.date}:</span> {n.text}
            </li>
          ))}
        </ul>
      </section>

      {hasPubs && (
        <section className="pf-section">
          <h2 className="pf-h2">Selected Publications</h2>
          <div className="pf-tabs">
            {data.pubCategories.map((c) => (
              <button
                key={c.id}
                className={`pf-tab ${tab === c.id ? "pf-tab--active" : ""}`}
                onClick={() => setTab(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <h3 className="pf-h3">{activeCat.label}</h3>
          <p className="pf-catdesc">{activeCat.description}</p>

          <div className="pf-pubs">
            {activeCat.items.map((p, i) => (
              <div key={i} className={`pf-pub ${p.featured ? "pf-pub--featured" : ""}`}>
                <div className="pf-pub__thumb" />
                <div className="pf-pub__body">
                  <a href={p.links[0]?.href} className="pf-pub__title">
                    {p.title}
                  </a>
                  <div className="pf-pub__authors">{p.authors}</div>
                  <div className="pf-pub__venue">
                    {p.venue}
                    {p.award && <span className="pf-pub__award">, {p.award}</span>}
                  </div>
                  <div className="pf-pub__links">
                    {p.links.map((l, j) => (
                      <span key={l.label}>
                        {j > 0 && <span className="pf-links__sep">/</span>}
                        <a href={l.href}>{l.label}</a>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {activeProject && (
        <div className="pf-modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="pf-modal" onClick={(e) => e.stopPropagation()}>
            <button className="pf-modal__close" onClick={() => setActiveProject(null)}>
              ×
            </button>
            <div className="pf-modal__thumb" />
            <h3 className="pf-modal__title">{activeProject.title}</h3>
            <p className="pf-modal__desc">{activeProject.description}</p>
            <div className="pf-modal__tags">
              {activeProject.tags.map((t) => (
                <span key={t} className="pf-tag">
                  {t}
                </span>
              ))}
            </div>
            {activeProject.link && (
              <a href={activeProject.link} className="pf-modal__link">
                View project →
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const css = `
html, body { background: #ffffff; }
.pf-page { background: #ffffff; max-width: 900px; margin: 0 auto; padding: 3rem 1.5rem 5rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; color: #1a1a1a; line-height: 1.6; }

.pf-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 2.5rem; flex-wrap: wrap; }
.pf-headertext { flex: 1; min-width: 280px; }
.pf-name { color: #1a1a1a; font-size: 2.25rem; font-weight: 600; margin: 0 0 0.25rem; text-align: center; }
.pf-subtitle { text-align: center; font-size: 1.1rem; color: #555; margin-bottom: 1.25rem; }
.pf-bio { margin: 0 0 1rem; font-size: 1rem; }
.pf-links { text-align: center; margin-top: 1rem; }
.pf-links__item { color: #2563eb; text-decoration: none; }
.pf-links__item:hover { text-decoration: underline; }
.pf-links__sep { margin: 0 0.5rem; color: #999; }

.pf-photo { width: 170px; height: 170px; border-radius: 50%; overflow: hidden; background: #e5e5e5; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: #999; flex-shrink: 0; }
.pf-photo img { width: 100%; height: 100%; object-fit: cover; }

.pf-section { margin-top: 3.5rem; }
.pf-h2 { color: #1a1a1a; font-size: 1.6rem; font-weight: 600; margin-bottom: 1.25rem; }
.pf-h3 { color: #1a1a1a; font-size: 1.25rem; font-weight: 600; margin: 1.5rem 0 0.25rem; }
.pf-body { font-size: 1rem; }
.pf-catdesc { color: #666; margin-bottom: 1.25rem; }

.pf-exp { display: flex; gap: 2.5rem; flex-wrap: wrap; justify-content: center; }
.pf-exp__item { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
.pf-exp__logo { width: 48px; height: 48px; border-radius: 50%; background: #f0f0f0; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #666; }
.pf-exp__name { font-size: 0.85rem; color: #444; }

.pf-news { list-style: none; margin: 0; padding: 0; border-top: 1px solid #eee; }
.pf-news__item { padding: 0.6rem 0; border-bottom: 1px solid #eee; font-size: 0.95rem; }
.pf-news__date { font-weight: 600; }

.pf-tabs { display: flex; gap: 1.5rem; border-bottom: 1px solid #ddd; margin-bottom: 1.25rem; }
.pf-tab { background: none; border: none; padding: 0.5rem 0; font-size: 0.95rem; color: #666; font-family: inherit; cursor: pointer; border-bottom: 2px solid transparent; }
.pf-tab--active { color: #1a1a1a; font-weight: 600; border-bottom-color: #1a1a1a; }

.pf-pubs { display: flex; flex-direction: column; gap: 1.25rem; }
.pf-pub { display: flex; gap: 1.5rem; padding: 1rem; border-radius: 6px; }
.pf-pub--featured { background: #fdfbd4; }
.pf-pub__thumb { width: 110px; height: 80px; background: #eee; border-radius: 4px; flex-shrink: 0; }
.pf-pub__title { font-weight: 600; color: #2563eb; text-decoration: none; font-size: 1.05rem; }
.pf-pub__title:hover { text-decoration: underline; }
.pf-pub__authors { margin-top: 0.2rem; font-size: 0.9rem; }
.pf-pub__venue { margin-top: 0.2rem; font-size: 0.9rem; color: #666; }
.pf-pub__award { color: #b45309; }
.pf-pub__links { margin-top: 0.3rem; font-size: 0.9rem; }
.pf-pub__links a { color: #2563eb; text-decoration: none; }
.pf-pub__links a:hover { text-decoration: underline; }

.pf-projects { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.25rem; }
.pf-project { text-align: left; background: #fff; border: 1px solid #eee; border-radius: 8px; padding: 1rem; cursor: pointer; font-family: inherit; color: #1a1a1a; transition: box-shadow 0.15s ease, transform 0.15s ease; }
.pf-project:hover { box-shadow: 0 4px 14px rgba(0,0,0,0.08); transform: translateY(-2px); }
.pf-project__thumb { width: 100%; height: 100px; background: #f0f0f0; border-radius: 4px; margin-bottom: 0.75rem; }
.pf-project__title { font-weight: 600; font-size: 1rem; color: #1a1a1a; }
.pf-project__tagline { font-size: 0.85rem; color: #666; margin-top: 0.2rem; }

.pf-modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; padding: 1.5rem; z-index: 1000; }
.pf-modal { background: #fff; border-radius: 10px; padding: 2rem; max-width: 480px; width: 100%; max-height: 85vh; overflow-y: auto; position: relative; }
.pf-modal__close { position: absolute; top: 0.75rem; right: 0.9rem; background: none; border: none; font-size: 1.5rem; line-height: 1; cursor: pointer; color: #666; }
.pf-modal__thumb { width: 100%; height: 160px; background: #eee; border-radius: 6px; margin-bottom: 1.25rem; }
.pf-modal__title { font-size: 1.3rem; font-weight: 600; margin: 0 0 0.75rem; }
.pf-modal__desc { font-size: 0.95rem; color: #333; margin-bottom: 1rem; }
.pf-modal__tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.25rem; }
.pf-tag { background: #f0f0f0; color: #444; font-size: 0.75rem; padding: 0.25rem 0.6rem; border-radius: 999px; }
.pf-modal__link { color: #2563eb; text-decoration: none; font-weight: 600; }
.pf-modal__link:hover { text-decoration: underline; }

@media (max-width: 640px) {
  .pf-header { flex-direction: column-reverse; align-items: center; }
  .pf-pub { flex-direction: column; }
}
`;
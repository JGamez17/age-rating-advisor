/* eslint-disable @next/next/no-page-custom-font */
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

// ── Minimal shield SVG icon ──────────────────────────────────────────────────
const ShieldIcon = ({ size = 28, color = "currentColor" }) => (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
</svg>
);

// ── Feature card icons ───────────────────────────────────────────────────────
const StarIcon = () => (
<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
);
const FilterIcon = () => (
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
</svg>
);
const DashboardIcon = () => (
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
<rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
<rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
</svg>
);

// ── Animated counter hook ────────────────────────────────────────────────────
function useCountUp(target, duration = 1800, start = false) {
const [count, setCount] = useState(0);
useEffect(() => {
if (!start) return;
let startTime = null;
const step = (timestamp) => {
if (!startTime) startTime = timestamp;
const progress = Math.min((timestamp - startTime) / duration, 1);
setCount(Math.floor(progress * target));
if (progress < 1) requestAnimationFrame(step);
};
requestAnimationFrame(step);
}, [target, duration, start]);
return count;
}

// ── Intersection observer hook ───────────────────────────────────────────────
function useInView(threshold = 0.2) {
const ref = useRef(null);
const [inView, setInView] = useState(false);
useEffect(() => {
const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
if (ref.current) obs.observe(ref.current);
return () => obs.disconnect();
}, [threshold]);
return [ref, inView];
}

export default function Home() {

const [heroVisible, setHeroVisible] = useState(false);
const [statsRef, statsInView] = useInView(0.3);

const families  = useCountUp(10000, 1800, statsInView);
const apps      = useCountUp(500,   1800, statsInView);
const uptime    = useCountUp(99,    1500, statsInView);

useEffect(() => {
const t = setTimeout(() => setHeroVisible(true), 80);
return () => clearTimeout(t);
}, []);

return (
<>
<Head>
<title>PlayGuard — Smart Protection for Every Screen</title>
<meta name="description" content="PlayGuard gives parents real-time monitoring, age-based filtering, and community-driven app reviews — all in one place." />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
</Head>

  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --navy:   #0a0f1e;
      --navy2:  #111827;
      --teal:   #00c9a7;
      --teal2:  #00a88e;
      --slate:  #1e2d40;
      --muted:  #8b9ab0;
      --light:  #e8edf5;
      --white:  #ffffff;
      --card:   #141c2e;
      --radius: 14px;
    }
    html { scroll-behavior: smooth; }
    body { background: var(--navy); color: var(--white); font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; }

    /* ── NAV ── */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 18px 48px;
      background: rgba(10,15,30,0.85);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .nav-logo { display: flex; align-items: center; gap: 10px; font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.2rem; color: var(--white); text-decoration: none; }
    .nav-logo span { color: var(--teal); }
    .nav-links { display: flex; gap: 32px; }
    .nav-links a { color: var(--muted); font-size: .9rem; text-decoration: none; transition: color .2s; }
    .nav-links a:hover { color: var(--white); }
    .nav-cta { display: flex; align-items: center; gap: 16px; }
    .btn-ghost { background: none; border: none; color: var(--muted); font-family: 'DM Sans', sans-serif; font-size: .9rem; cursor: pointer; transition: color .2s; }
    .btn-ghost:hover { color: var(--white); }
    .btn-primary { background: var(--teal); color: var(--navy); font-family: 'DM Sans', sans-serif; font-size: .9rem; font-weight: 700; border: none; border-radius: 8px; padding: 10px 22px; cursor: pointer; transition: background .2s, transform .15s; }
    .btn-primary:hover { background: var(--teal2); transform: translateY(-1px); }

    /* ── HERO ── */
    .hero {
      min-height: 100vh;
      display: flex; align-items: center;
      padding: 120px 48px 80px;
      position: relative; overflow: hidden;
    }
    .hero-bg {
      position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse 70% 60% at 65% 50%, rgba(0,201,167,0.12) 0%, transparent 70%),
                  radial-gradient(ellipse 40% 40% at 10% 80%, rgba(0,201,167,0.06) 0%, transparent 60%);
    }
    .hero-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
      max-width: 1200px; margin: 0 auto; width: 100%; align-items: center;
      position: relative;
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(0,201,167,0.12); border: 1px solid rgba(0,201,167,0.3);
      border-radius: 100px; padding: 6px 14px;
      font-size: .8rem; color: var(--teal); font-weight: 500;
      margin-bottom: 20px;
    }
    .hero h1 {
      font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(2.4rem, 4.5vw, 3.6rem); line-height: 1.1;
      color: var(--white); margin-bottom: 20px;
    }
    .hero h1 em { font-style: normal; color: var(--teal); }
    .hero p { color: var(--muted); font-size: 1.05rem; line-height: 1.7; max-width: 460px; margin-bottom: 36px; }
    .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
    .btn-large { padding: 14px 30px; font-size: 1rem; border-radius: 10px; }
    .btn-outline { background: none; border: 1.5px solid rgba(255,255,255,0.2); color: var(--white); font-family: 'DM Sans', sans-serif; font-size: 1rem; font-weight: 500; border-radius: 10px; padding: 14px 30px; cursor: pointer; transition: border-color .2s, color .2s; }
    .btn-outline:hover { border-color: var(--teal); color: var(--teal); }

    /* ── PHONE MOCKUP ── */
    .phone-wrap { display: flex; justify-content: center; align-items: center; }
    .phone-outer {
      width: 240px; height: 480px; border-radius: 36px;
      background: var(--card);
      border: 2px solid rgba(0,201,167,0.25);
      box-shadow: 0 0 60px rgba(0,201,167,0.15), 0 40px 80px rgba(0,0,0,0.5);
      display: flex; flex-direction: column; overflow: hidden; position: relative;
    }
    .phone-notch {
      width: 80px; height: 20px; background: var(--navy);
      border-radius: 0 0 12px 12px; margin: 0 auto;
    }
    .phone-screen { flex: 1; padding: 14px 12px; display: flex; flex-direction: column; gap: 10px; }
    .phone-header { font-family: 'Syne', sans-serif; font-size: .75rem; font-weight: 700; color: var(--teal); padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.07); }
    .phone-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; background: rgba(255,255,255,0.04); border-radius: 8px; }
    .phone-app-name { font-size: .72rem; color: var(--light); }
    .phone-rating { font-size: .7rem; color: var(--teal); font-weight: 600; }
    .phone-badge { font-size: .6rem; padding: 2px 7px; border-radius: 100px; font-weight: 600; }
    .badge-safe { background: rgba(0,201,167,0.18); color: var(--teal); }
    .badge-caution { background: rgba(255,180,0,0.15); color: #f5b800; }
    .badge-flag { background: rgba(255,80,80,0.15); color: #ff5050; }
    .phone-stat-row { display: flex; gap: 8px; margin-top: 4px; }
    .phone-stat { flex: 1; background: rgba(0,201,167,0.08); border-radius: 8px; padding: 8px; text-align: center; }
    .phone-stat-val { font-family: 'Syne', sans-serif; font-size: .85rem; font-weight: 700; color: var(--teal); }
    .phone-stat-label { font-size: .58rem; color: var(--muted); margin-top: 2px; }
    .phone-bottom { height: 24px; display: flex; justify-content: center; align-items: center; }
    .phone-home { width: 40px; height: 4px; background: rgba(255,255,255,0.15); border-radius: 2px; }

    /* ── FADE IN ANIMATIONS ── */
    .fade-up { opacity: 0; transform: translateY(28px); transition: opacity .7s ease, transform .7s ease; }
    .fade-up.visible { opacity: 1; transform: translateY(0); }
    .delay-1 { transition-delay: .1s; }
    .delay-2 { transition-delay: .22s; }
    .delay-3 { transition-delay: .36s; }
    .delay-4 { transition-delay: .5s; }

    /* ── STATS BAND ── */
    .stats-band {
      background: var(--card);
      border-top: 1px solid rgba(255,255,255,0.06);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 48px 48px;
    }
    .stats-inner { max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: repeat(3,1fr); gap: 32px; text-align: center; }
    .stat-num { font-family: 'Syne', sans-serif; font-size: 2.6rem; font-weight: 800; color: var(--teal); }
    .stat-label { color: var(--muted); font-size: .9rem; margin-top: 4px; }

    /* ── FEATURES ── */
    .features { padding: 100px 48px; }
    .section-header { text-align: center; margin-bottom: 60px; }
    .section-eyebrow { font-size: .8rem; letter-spacing: .12em; text-transform: uppercase; color: var(--teal); font-weight: 600; margin-bottom: 12px; }
    .section-title { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 800; color: var(--white); margin-bottom: 14px; }
    .section-sub { color: var(--muted); font-size: 1rem; line-height: 1.7; max-width: 540px; margin: 0 auto; }
    .feature-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
    .feature-card {
      background: var(--card);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: var(--radius); padding: 32px 28px;
      transition: border-color .3s, transform .3s;
    }
    .feature-card:hover { border-color: rgba(0,201,167,0.35); transform: translateY(-4px); }
    .feature-icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(0,201,167,0.12); display: flex; align-items: center; justify-content: center; color: var(--teal); margin-bottom: 20px; }
    .feature-card h3 { font-family: 'Syne', sans-serif; font-size: 1.15rem; font-weight: 700; color: var(--white); margin-bottom: 10px; }
    .feature-card p { color: var(--muted); font-size: .92rem; line-height: 1.65; margin-bottom: 20px; }
    .feature-detail { display: flex; flex-direction: column; gap: 8px; }
    .detail-row { display: flex; justify-content: space-between; align-items: center; padding: 7px 10px; background: rgba(255,255,255,0.04); border-radius: 7px; font-size: .8rem; }
    .detail-label { color: var(--light); }
    .detail-chip { padding: 2px 9px; border-radius: 100px; font-size: .72rem; font-weight: 600; }
    .chip-safe { background: rgba(0,201,167,0.15); color: var(--teal); }
    .chip-mod  { background: rgba(255,180,0,0.12); color: #f5b800; }
    .chip-strict { background: rgba(100,180,255,0.12); color: #64b4ff; }
    .progress-bar-wrap { background: rgba(255,255,255,0.08); border-radius: 4px; height: 6px; overflow: hidden; }
    .progress-bar { height: 6px; background: var(--teal); border-radius: 4px; }

    /* ── HOW IT WORKS ── */
    .how { padding: 80px 48px; background: var(--card); }
    .steps { max-width: 860px; margin: 0 auto; display: grid; grid-template-columns: repeat(3,1fr); gap: 40px; text-align: center; }
    .step-num { width: 52px; height: 52px; border-radius: 50%; background: var(--teal); color: var(--navy); font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
    .step h3 { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; }
    .step p { color: var(--muted); font-size: .9rem; line-height: 1.65; }

    /* ── CTA BANNER ── */
    .cta-section { padding: 100px 48px; text-align: center; position: relative; overflow: hidden; }
    .cta-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,201,167,0.1) 0%, transparent 70%); pointer-events: none; }
    .cta-section h2 { font-family: 'Syne', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; margin-bottom: 16px; }
    .cta-section p { color: var(--muted); font-size: 1rem; max-width: 500px; margin: 0 auto 40px; line-height: 1.7; }
    .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

    /* ── FOOTER ── */
    .footer {
      background: var(--navy2); border-top: 1px solid rgba(255,255,255,0.07);
      padding: 60px 48px 36px;
    }
    .footer-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }
    .footer-brand p { color: var(--muted); font-size: .88rem; margin-top: 10px; line-height: 1.65; max-width: 240px; }
    .footer-col h4 { font-family: 'Syne', sans-serif; font-size: .85rem; font-weight: 700; color: var(--light); margin-bottom: 16px; }
    .footer-col a { display: block; color: var(--muted); font-size: .88rem; text-decoration: none; margin-bottom: 10px; transition: color .2s; }
    .footer-col a:hover { color: var(--teal); }
    .footer-bottom { max-width: 1100px; margin: 48px auto 0; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.07); display: flex; justify-content: space-between; align-items: center; }
    .footer-bottom p { color: var(--muted); font-size: .82rem; }

    /* ── RESPONSIVE ── */
    @media (max-width: 900px) {
      .nav { padding: 16px 24px; }
      .nav-links { display: none; }
      .hero { padding: 100px 24px 60px; }
      .hero-grid { grid-template-columns: 1fr; gap: 48px; }
      .phone-wrap { display: none; }
      .stats-band { padding: 40px 24px; }
      .stats-inner { grid-template-columns: repeat(3,1fr); gap: 16px; }
      .features { padding: 70px 24px; }
      .feature-grid { grid-template-columns: 1fr; }
      .how { padding: 60px 24px; }
      .steps { grid-template-columns: 1fr; gap: 32px; }
      .cta-section { padding: 70px 24px; }
      .footer { padding: 48px 24px 28px; }
      .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
      .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
    }
  `}</style>

  {/* ── NAV ── */}
  <nav className="nav">
    <a href="#" className="nav-logo">
      <ShieldIcon size={22} color="#00c9a7" />
      Play<span>Guard</span>
    </a>
    <div className="nav-links">
      <a href="#features">Features</a>
      <a href="#how">How It Works</a>
      <a href="https://github.com/JGamez17/PGApp" target="_blank" rel="noreferrer">GitHub</a>
    </div>
    <div className="nav-cta">
      <button className="btn-ghost">Sign In</button>
      <button className="btn-primary">Get Started</button>
    </div>
  </nav>

  {/* ── HERO ── */}
  <section className="hero">
    <div className="hero-bg" />
    <div className="hero-grid">
      <div>
        <div className={`hero-badge fade-up ${heroVisible ? "visible" : ""}`}>
          <ShieldIcon size={13} color="#00c9a7" /> Now available on iOS & Android
        </div>
        <h1 className={`fade-up delay-1 ${heroVisible ? "visible" : ""}`}>
          Keep Your Kids Safe Online with <em>Smart Monitoring</em>
        </h1>
        <p className={`fade-up delay-2 ${heroVisible ? "visible" : ""}`}>
          PlayGuard gives parents real-time monitoring, age-based filtering, and community-driven app reviews — all from a single dashboard built for modern families.
        </p>
        <div className={`hero-actions fade-up delay-3 ${heroVisible ? "visible" : ""}`}>
          <button className="btn-primary btn-large">Download Free</button>
          <a href="https://github.com/JGamez17/PGApp" target="_blank" rel="noreferrer">
            <button className="btn-outline">View on GitHub</button>
          </a>
        </div>
      </div>

      {/* Phone mockup */}
      <div className={`phone-wrap fade-up delay-4 ${heroVisible ? "visible" : ""}`}>
        <div className="phone-outer">
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="phone-header">🛡 PlayGuard · Dashboard</div>
            {[
              { name: "YouTube Kids", rating: "4.8★", badge: "Safe", cls: "badge-safe" },
              { name: "TikTok",       rating: "3.2★", badge: "Caution", cls: "badge-caution" },
              { name: "Roblox",       rating: "4.1★", badge: "Safe", cls: "badge-safe" },
              { name: "Discord",      rating: "2.9★", badge: "Flag", cls: "badge-flag" },
            ].map((app) => (
              <div key={app.name} className="phone-row">
                <span className="phone-app-name">{app.name}</span>
                <span className="phone-rating">{app.rating}</span>
                <span className={`phone-badge ${app.cls}`}>{app.badge}</span>
              </div>
            ))}
            <div className="phone-stat-row">
              <div className="phone-stat">
                <div className="phone-stat-val">2h 45m</div>
                <div className="phone-stat-label">Screen Time</div>
              </div>
              <div className="phone-stat">
                <div className="phone-stat-val">4</div>
                <div className="phone-stat-label">Apps Monitored</div>
              </div>
            </div>
          </div>
          <div className="phone-bottom"><div className="phone-home" /></div>
        </div>
      </div>
    </div>
  </section>

  {/* ── STATS ── */}
  <div className="stats-band" ref={statsRef}>
    <div className="stats-inner">
      <div>
        <div className="stat-num">{statsInView ? families.toLocaleString() : "0"}+</div>
        <div className="stat-label">Families Protected</div>
      </div>
      <div>
        <div className="stat-num">{statsInView ? apps : "0"}+</div>
        <div className="stat-label">Apps Reviewed</div>
      </div>
      <div>
        <div className="stat-num">{statsInView ? uptime : "0"}%</div>
        <div className="stat-label">Uptime Reliability</div>
      </div>
    </div>
  </div>

  {/* ── FEATURES ── */}
  <section className="features" id="features">
    <div className="section-header">
      <div className="section-eyebrow">What PlayGuard Offers</div>
      <h2 className="section-title">Three Key Features for Complete Protection</h2>
      <p className="section-sub">Everything parents need to ensure their children&apos;s digital safety and wellbeing — in one place.</p>
    </div>

    <div className="feature-grid">
      {/* Card 1 */}
      <div className="feature-card">
        <div className="feature-icon"><StarIcon /></div>
        <h3>Parent App Reviews & Ratings</h3>
        <p>Get real-time reviews from other parents about apps your child wants to download. Make informed decisions with community insights.</p>
        <div className="feature-detail">
          {[["TikTok", "3.2/5", "chip-mod"], ["YouTube Kids", "4.8/5", "chip-safe"], ["Roblox", "4.1/5", "chip-safe"]].map(([app, score, cls]) => (
            <div key={app} className="detail-row">
              <span className="detail-label">{app}</span>
              <span className={`detail-chip ${cls}`}>{score}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 2 */}
      <div className="feature-card">
        <div className="feature-icon"><FilterIcon /></div>
        <h3>Age-Based Filtering & Evolution</h3>
        <p>Smart filtering that adapts as your child grows. Automatically adjusts content restrictions based on age milestones.</p>
        <div className="feature-detail">
          {[["Ages 6–8", "Strict Mode", "chip-strict"], ["Ages 9–12", "Moderate", "chip-mod"], ["Ages 13+", "Guided", "chip-safe"]].map(([age, mode, cls]) => (
            <div key={age} className="detail-row">
              <span className="detail-label">{age}</span>
              <span className={`detail-chip ${cls}`}>{mode}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 3 */}
      <div className="feature-card">
        <div className="feature-icon"><DashboardIcon /></div>
        <h3>Unified Family Dashboard</h3>
        <p>One dashboard for parents and children to monitor screen time, app usage, and content consumption together.</p>
        <div className="feature-detail">
          <div className="detail-row" style={{ flexDirection: "column", alignItems: "flex-start", gap: 6 }}>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <span className="detail-label" style={{ fontSize: ".75rem" }}>Today&apos;s Screen Time</span>
              <span style={{ fontSize: ".75rem", color: "var(--teal)", fontWeight: 600 }}>2h 45m</span>
            </div>
            <div className="progress-bar-wrap" style={{ width: "100%" }}>
              <div className="progress-bar" style={{ width: "55%" }} />
            </div>
          </div>
          <div className="detail-row">
            <span className="detail-label">YouTube</span>
            <span className="detail-chip chip-mod">1h 20m</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Games</span>
            <span className="detail-chip chip-safe">1h 25m</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ── HOW IT WORKS ── */}
  <section className="how" id="how">
    <div className="section-header">
      <div className="section-eyebrow">Simple Setup</div>
      <h2 className="section-title">How PlayGuard Works</h2>
      <p className="section-sub">Powerful protection in three easy steps.</p>
    </div>
    <div className="steps">
      {[
        { n: "1", title: "Download & Setup", body: "Install PlayGuard on parent and child devices. Quick 5-minute setup with Firebase-powered authentication." },
        { n: "2", title: "Configure Settings", body: "Set age-appropriate filters and time limits. Customize based on your family&apos;s unique needs and values." },
        { n: "3", title: "Monitor & Adjust", body: "Use the unified dashboard to track usage in real time and make adjustments as your kids grow." },
      ].map((s) => (
        <div key={s.n} className="step">
          <div className="step-num">{s.n}</div>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  </section>

  {/* ── CTA ── */}
  <section className="cta-section">
    <div className="cta-bg" />
    <h2>Start Protecting Your Family Today</h2>
    <p>PlayGuard is a full-stack mobile app built with React Native, Expo, and Firebase — designed to keep kids safe and parents informed.</p>
    <div className="cta-buttons">
      <button className="btn-primary btn-large">Download Free</button>
      <a href="https://github.com/JGamez17/PGApp" target="_blank" rel="noreferrer">
        <button className="btn-outline">View Source on GitHub</button>
      </a>
    </div>
  </section>

  {/* ── FOOTER ── */}
  <footer className="footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <a href="#" className="nav-logo" style={{ textDecoration: "none" }}>
          <ShieldIcon size={20} color="#00c9a7" />
          Play<span style={{ color: "var(--teal)" }}>Guard</span>
        </a>
        <p>Keeping families safe in the digital world.</p>
      </div>
      <div className="footer-col">
        <h4>Product</h4>
        <a href="#features">Features</a>
        <a href="#how">How It Works</a>
        <a href="https://github.com/JGamez17/PGApp" target="_blank" rel="noreferrer">Download</a>
      </div>
      <div className="footer-col">
        <h4>Support</h4>
        <a href="#">Help Center</a>
        <a href="#">Contact</a>
        <a href="#">Privacy</a>
      </div>
      <div className="footer-col">
        <h4>Project</h4>
        <a href="https://github.com/JGamez17/PGApp" target="_blank" rel="noreferrer">GitHub (Mobile)</a>
        <a href="https://github.com/JGamez17/age-rating-advisor" target="_blank" rel="noreferrer">GitHub (Web)</a>
        <a href="https://linkedin.com/in/jpgamez/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 PlayGuard. Built by Jess Gamez.</p>
      <p style={{ color: "var(--teal)", fontSize: ".82rem" }}>React Native · Expo · Firebase · Next.js</p>
    </div>
  </footer>
</>

);
}
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, CirclePlay, Menu, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

function DashboardPreview() {
  return (
    <div className="dashboard-wrap">
      <div className="dashboard-glow" />
      <motion.div className="dashboard" initial={{ opacity: 0, y: 34, rotateX: 7 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .9, ease: "easeOut" }}>
        <div className="dash-top">
          <div className="window-dots"><i /><i /><i /></div>
          <span className="dash-brand"><span className="brand-mark mini"><Sparkles size={11} /></span> nova workspace</span>
          <div className="dash-avatar">JD</div>
        </div>
        <div className="dash-body">
          <aside className="dash-side">
            <div className="side-pill active"><span>◫</span> Overview</div>
            <div className="side-pill"><span>▦</span> Projects</div>
            <div className="side-pill"><span>◷</span> Activity</div>
            <div className="side-pill"><span>◎</span> Reports</div>
            <div className="side-label">WORKSPACE</div>
            <div className="side-pill"><span className="dot purple" /> Design team</div>
            <div className="side-pill"><span className="dot green" /> Marketing</div>
          </aside>
          <main className="dash-main">
            <div className="dash-heading">
              <div><div className="eyebrow">MONDAY, OCTOBER 26</div><h3>Good morning, Jamie <span>✦</span></h3><p>Here's what's happening with your team today.</p></div>
              <button className="dash-button">＋ New project</button>
            </div>
            <div className="stats-grid">
              <div className="stat-card"><span>Active projects</span><strong>12</strong><small className="up">↗ 18.2% <em>vs last month</em></small></div>
              <div className="stat-card"><span>Tasks completed</span><strong>248</strong><small className="up">↗ 12.4% <em>vs last month</em></small></div>
              <div className="stat-card"><span>Team capacity</span><strong>84%</strong><small className="neutral">On track <em>this week</em></small></div>
            </div>
            <div className="chart-card">
              <div className="chart-head"><div><b>Project velocity</b><p>Tasks completed over time</p></div><span className="period">Last 30 days⌄</span></div>
              <div className="chart-area">
                <div className="chart-y"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div>
                <svg viewBox="0 0 620 150" preserveAspectRatio="none" role="img" aria-label="Project velocity line chart">
                  <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#9182ff" stopOpacity=".3"/><stop offset="100%" stopColor="#9182ff" stopOpacity="0"/></linearGradient></defs>
                  {[15,45,75,105,135].map(y => <line key={y} x1="0" x2="620" y1={y} y2={y} stroke="#252a3a" strokeDasharray="3 5" />)}
                  <path d="M0 118 C35 112 38 91 75 98 S120 104 150 75 S200 92 230 67 S275 82 310 56 S360 75 390 43 S435 58 465 31 S515 48 545 20 S590 29 620 8 L620 150 L0 150Z" fill="url(#area)" />
                  <path d="M0 118 C35 112 38 91 75 98 S120 104 150 75 S200 92 230 67 S275 82 310 56 S360 75 390 43 S435 58 465 31 S515 48 545 20 S590 29 620 8" fill="none" stroke="#a99cff" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="465" cy="31" r="5" fill="#a99cff" stroke="#171b29" strokeWidth="3"/>
                </svg>
                <div className="chart-x"><span>Oct 1</span><span>Oct 7</span><span>Oct 14</span><span>Oct 21</span><span>Oct 30</span></div>
              </div>
            </div>
          </main>
        </div>
      </motion.div>
      <motion.div className="float-card float-one" animate={{ y: [0, -9, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><span className="float-icon"><Check size={15}/></span><div><b>Milestone reached!</b><small>Website redesign · just now</small></div></motion.div>
      <motion.div className="float-card float-two" animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}><span className="float-number">+28%</span><div><b>Team productivity</b><small>Compared to last month</small></div></motion.div>
    </div>
  );
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
 const reveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.8, 
    ease: "easeOut" // <-- String transition
  }
};
}
  return (
    <main>
      <nav className="navbar container">
        <a className="logo" href="#"><span className="brand-mark"><Sparkles size={17}/></span> nova<span className="logo-period">.</span></a>
        <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}><Menu size={22}/></button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#product" onClick={() => setMenuOpen(false)}>Product</a><a href="#features" onClick={() => setMenuOpen(false)}>Features</a><a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a className="nav-login" href="#login">Log in</a><a className="button button-small" href="#pricing">Start for free <ArrowUpRight size={15}/></a>
        </div>
      </nav>

      <section className="hero container" id="product">
        <motion.div className="hero-copy" {...reveal}>
          <div className="announcement"><span className="announcement-pulse"/> INTRODUCING NOVA 2.0 <ArrowUpRight size={13}/></div>
          <h1>Make room for<br/><span className="gradient-text">your next</span> big thing.</h1>
          <p className="hero-sub">The all-in-one workspace that brings your team's projects, people, and progress into perfect alignment.</p>
          <div className="hero-actions"><a href="#pricing" className="button">Get started for free <ArrowRight size={17}/></a><a href="#features" className="watch-link"><span><CirclePlay size={19}/></span> See how it works</a></div>
          <div className="social-proof"><div className="avatar-stack"><i>AM</i><i>KL</i><i>JD</i><i>SR</i></div><div><div className="stars">★★★★★</div><small>Loved by 12,000+ ambitious teams</small></div></div>
        </motion.div>
        <DashboardPreview/>
        <div className="hero-bottom"><span>BUILT FOR TEAMS THAT THINK AHEAD</span><div className="trust-logos"><b>Layers</b><b>◈ Sisyphus</b><b>◎ Circooles</b><b>△ Catalog</b><b>✳ Quotient</b></div></div>
      </section>

      <section className="section section-light" id="features">
        <div className="container">
          <motion.div className="section-heading centered" {...reveal}><div className="eyebrow dark-eyebrow">LESS CHAOS. MORE MOMENTUM.</div><h2>Everything clicks<br/>when it works <span className="gradient-text-light">together.</span></h2><p>Stop switching between tabs and start moving forward. Nova gives your best work one place to happen.</p></motion.div>
          <div className="feature-grid">
            <motion.article className="feature-card feature-large" {...reveal}><div className="feature-icon purple-icon"><Zap size={20}/></div><div className="feature-content"><h3>Move at the speed of thought.</h3><p>Bring plans, conversations, and tasks together. Less busywork means more time for the work that matters.</p><a href="#pricing">Explore workflows <ArrowUpRight size={15}/></a></div><div className="mini-flow"><div className="flow-node">✦ New idea</div><div className="flow-line"/><div className="flow-node">↗ Project plan</div><div className="flow-line"/><div className="flow-node flow-done"><Check size={13}/> Ready to ship</div></div></motion.article>
            <motion.article className="feature-card" {...reveal}><div className="feature-icon mint-icon">◉</div><h3>Clarity at every level.</h3><p>See the big picture without losing sight of the little details. Your priorities, always in focus.</p><div className="clarity-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></motion.article>
            <motion.article className="feature-card" {...reveal}><div className="feature-icon peach-icon">✳</div><h3>Better work, together.</h3><p>Keep everyone in sync with shared context, thoughtful updates, and fewer meetings.</p><div className="people-row"><span>AM</span><span>KL</span><span>JD</span><span>SR</span><b>+8 online</b></div></motion.article>
          </div>
        </div>
      </section>

      <section className="section dark-section" id="stories">
        <div className="container split-section">
          <motion.div className="split-copy" {...reveal}><div className="eyebrow">A CALMER WAY TO WORK</div><h2>Big goals.<br/><span className="gradient-text">Clear path.</span></h2><p>When your tools work as one, your team can too. Nova turns scattered work into shared momentum — so good ideas don't get stuck in the noise.</p><div className="check-list"><div><Check size={16}/> One source of truth for every project</div><div><Check size={16}/> Real-time progress, without the status meeting</div><div><Check size={16}/> The context your team needs, right on time</div></div><a href="#pricing" className="text-link">Discover the Nova difference <ArrowUpRight size={16}/></a></motion.div>
          <motion.div className="orbit-art" initial={{ opacity: 0, scale: .85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
            <div className="orbit-core"><span className="brand-mark big"><Sparkles size={29}/></span><b>One team.<br/>One direction.</b></div>
            <div className="orbit-chip chip-a"><span>✦</span> Ideas</div><div className="orbit-chip chip-b"><span>↗</span> Momentum</div><div className="orbit-chip chip-c"><span>◉</span> Focus</div><div className="orbit-chip chip-d"><span>✓</span> Results</div>
          </motion.div>
        </div>
      </section>

      <section className="stats-band"><div className="container stats-band-inner"><div><strong>12k<span>+</span></strong><small>Teams building better</small></div><div><strong>4.9<span>/5</span></strong><small>Average customer rating</small></div><div><strong>38<span>%</span></strong><small>Less time in meetings</small></div><div><strong>2.4<span>m</span></strong><small>Tasks moved forward</small></div></div></section>

      <section className="section pricing-section" id="pricing"><div className="container pricing-inner"><motion.div className="section-heading centered" {...reveal}><div className="eyebrow dark-eyebrow">SIMPLE, HONEST PRICING</div><h2>Start free. <span className="gradient-text-light">Grow freely.</span></h2><p>Everything you need to build momentum, with room to grow when you're ready.</p></motion.div><motion.div className="price-card" {...reveal}><div><div className="price-label">NOVA STARTER</div><h3>Make great work<br/>happen.</h3><p>For small teams ready to find their flow.</p><div className="price"><strong>$0</strong><span>/ forever</span></div><a href="mailto:hello@example.com" className="button price-button">Get started free <ArrowRight size={16}/></a><small className="no-card">No credit card required</small></div><div className="price-includes"><b>What's included</b><div><Check/> Unlimited projects</div><div><Check/> Up to 5 team members</div><div><Check/> Essential team analytics</div><div><Check/> 5 GB shared storage</div><div><Check/> Community support</div></div></motion.div></div></section>

      <section className="final-cta"><div className="container cta-inner"><div className="cta-spark"><Sparkles size={23}/></div><h2>Your next chapter<br/><span>starts here.</span></h2><p>Make space for better ideas, better teamwork, and better workdays.</p><a className="button cta-button" href="mailto:hello@example.com">Try Nova for free <ArrowRight size={17}/></a><small>Free forever plan · Set up in minutes</small></div></section>

      <footer className="footer"><div className="container footer-top"><a className="logo" href="#"><span className="brand-mark"><Sparkles size={16}/></span> nova<span className="logo-period">.</span></a><span>Make room for what matters.</span><div className="footer-links"><a href="#product">Product</a><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="mailto:hello@example.com">Contact</a></div></div><div className="container footer-bottom"><span>© 2026 Nova, Inc. All rights reserved.</span><span>Made for teams moving forward <ArrowUpRight size={13}/></span></div></footer>
    </main>
  );
}

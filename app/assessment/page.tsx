'use client';
import Link from 'next/link';
import {useState} from 'react';
export default function AssessmentPage(){const [m,setM]=useState(false);const s=`*{margin:0;padding:0}a{text-decoration:none;color:inherit}.hd{position:sticky;top:0;z-index:100;background:#1A2A4A;padding:clamp(12px,3vw,16px) clamp(16px,5vw,32px);display:flex;justify-content:space-between;align-items:center;height:clamp(64px,12vw,72px)}.lg{font-size:clamp(16px,4vw,24px);font-weight:700;color:#FFF}.nv{display:none;gap:clamp(8px,3vw,24px)}.nv a{color:#FFF;font-size:clamp(12px,2.5vw,14px)}.bt{background:#FFF;color:#1A2A4A;padding:clamp(8px,2vw,12px) clamp(16px,3vw,24px);border-radius:8px;font-weight:600;border:none;cursor:pointer}.hm{display:flex;flex-direction:column;gap:6px;background:0;border:0;cursor:pointer}.hm span{width:24px;height:3px;background:#FFF;border-radius:1.5px}.dw{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(26,42,74,0.95);z-index:50;padding:clamp(24px,5vw,32px);display:${m?'flex':'none'};flex-direction:column;overflow-y:auto}.dw a{color:#FFF;font-size:clamp(16px,4vw,20px);padding:clamp(8px,2vw,12px) 0;border-bottom:1px solid rgba(255,255,255,0.1)}.hr{background:linear-gradient(135deg,#1A2A4A 0%,#2A4060 100%);color:#FFF;padding:clamp(32px,8vw,64px) clamp(16px,5vw,32px);text-align:center;display:flex;flex-direction:column;justify-content:center}.hr h1{font-size:clamp(28px,8vw,48px);font-weight:700}.hr p{font-size:clamp(14px,3.5vw,16px);max-width:600px;margin:0 auto}.mn{padding:clamp(32px,8vw,64px) clamp(16px,5vw,32px);max-width:1440px;margin:0 auto}.sc{margin-bottom:clamp(32px,6vw,48px)}.sc h2{font-size:clamp(24px,6vw,36px);color:#1A2A4A;margin-bottom:clamp(16px,4vw,24px)}.sc p{font-size:clamp(14px,3vw,16px);color:#6B7280;line-height:1.6;margin-bottom:clamp(12px,3vw,16px)}.gd{display:grid;gap:clamp(16px,3vw,24px);margin-bottom:clamp(16px,3vw,24px)}@media(min-width:768px){.gd{grid-template-columns:repeat(2,1fr)}}@media(min-width:1024px){.gd{grid-template-columns:repeat(3,1fr)}}.cd{background:#FFF;border:1px solid #D8DEE8;border-radius:clamp(8px,2vw,12px);padding:clamp(16px,3vw,24px)}.cd h3{font-size:clamp(16px,3vw,18px);color:#1A2A4A;margin-bottom:clamp(8px,2vw,12px);font-weight:600}.cd p{font-size:clamp(13px,2.5vw,14px);color:#6B7280;line-height:1.6}.btn{background:#1A2A4A;color:#FFF;padding:clamp(8px,2vw,12px) clamp(16px,3vw,24px);border-radius:8px;font-weight:600;border:none;cursor:pointer;display:inline-block;margin-top:clamp(16px,4vw,24px);width:100%;text-align:center}.btn:hover{opacity:0.9}.ft{background:#1A2A4A;color:#FFF;padding:clamp(32px,8vw,48px) clamp(16px,5vw,32px)}.ftc{max-width:1440px;margin:0 auto;display:grid;gap:clamp(24px,5vw,32px);margin-bottom:clamp(24px,5vw,32px)}@media(min-width:768px){.ftc{grid-template-columns:repeat(2,1fr)}}@media(min-width:1024px){.nv{display:flex !important}.hm{display:none !important}.ftc{grid-template-columns:repeat(4,1fr)}}.fts h3{font-size:clamp(14px,3vw,16px);font-weight:600;margin-bottom:clamp(12px,3vw,16px)}.fts a{display:block;font-size:clamp(12px,2.5vw,14px);color:#FFF;padding:clamp(6px,1.5vw,8px) 0;opacity:0.9}.ftb{border-top:1px solid rgba(255,255,255,0.1);padding-top:clamp(16px,3vw,24px);text-align:center;font-size:clamp(12px,2.5vw,14px);opacity:0.8}.inf{background:#EFF6FF;border-left:4px solid #0EA5E9;padding:clamp(12px,3vw,16px);border-radius:8px;margin:clamp(16px,4vw,24px) 0}.inf p{font-size:clamp(13px,3vw,14px);color:#1A2A4A}`;return(
    <div style={{minHeight:'100vh',background:'#FAFAF8',fontFamily:"'Inter',Arial"}}>
      <style>{s}</style>
      <header className="hd">
        <Link href="/" className="lg">ROOTS-AI™</Link>
        <nav className="nv">
          <Link href="/">Home</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/about">About</Link>
        </nav>
        <Link href="/assessment" className="bt">Assessment</Link>
        <button className="hm" onClick={()=>setM(!m)}><span></span><span></span><span></span></button>
      </header>
      {m&&(<div className="dw"><Link href="/" onClick={()=>setM(false)}>Home</Link><Link href="/how-it-works" onClick={()=>setM(false)}>How It Works</Link><Link href="/platform" onClick={()=>setM(false)}>Platform</Link><Link href="/research" onClick={()=>setM(false)}>Research</Link><Link href="/about" onClick={()=>setM(false)}>About</Link><Link href="/assessment" onClick={()=>setM(false)}>Assessment</Link></div>)}

      <section className="hr">
        <h1>Biological Wellness Assessment</h1>
        <p>Answer 73 questions across 7 biological domains in about 10-12 minutes</p>
      </section>

      <main className="mn">
        <div className="sc">
          <h2>How It Works</h2>
          <p>Your ROOTS-AI assessment is a comprehensive evaluation that helps you understand patterns across seven interconnected biological domains. Each domain reveals important insights into your overall wellness.</p>
          <div className="inf"><p><strong>ℹ️</strong> Educational wellness indicators only. Not a medical diagnosis. For health concerns, consult your healthcare provider.</p></div>
        </div>

        <div className="sc">
          <h2>The Seven Biological Domains</h2>
          <div className="gd">
            <div className="cd"><h3>🔄 Metabolic Resistance</h3><p>Energy metabolism and how your body responds to diet and exercise.</p></div>
            <div className="cd"><h3>⚖️ Hunger & Satiety</h3><p>Your hunger signals, cravings, and post-meal satisfaction patterns.</p></div>
            <div className="cd"><h3>😴 Sleep Quality</h3><p>Sleep duration, continuity, and how rested you feel after sleep.</p></div>
            <div className="cd"><h3>🧬 Circadian Health</h3><p>Alignment of your daily rhythms with light, food, and activity timing.</p></div>
            <div className="cd"><h3>🧠 Stress Resilience</h3><p>Perceived stress levels and how well you recover from challenges.</p></div>
            <div className="cd"><h3>🛡️ Inflammation Markers</h3><p>Energy levels and signs of systemic inflammation patterns.</p></div>
            <div className="cd"><h3>⚡ Cellular Health</h3><p>Cognitive clarity, skin health, and cellular aging indicators.</p></div>
          </div>
        </div>

        <div className="sc">
          <h2>What You'll Receive</h2>
          <p>After completing the assessment, you'll get a personalized report with:</p>
          <div className="gd" style={{marginTop:'clamp(16px,4vw,24px)'}}>
            <div className="cd"><h3>📊 Domain Scores</h3><p>Detailed scores for all 7 biological domains.</p></div>
            <div className="cd"><h3>💡 Personalized Insights</h3><p>AI-assisted analysis of your wellness patterns.</p></div>
            <div className="cd"><h3>🎯 Recommendations</h3><p>Actionable strategies to support your wellness.</p></div>
          </div>
        </div>

        <div className="sc">
          <h2>Privacy & Security</h2>
          <p>Your data is completely private and secure:</p>
          <div style={{display:'flex',flexDirection:'column',gap:'clamp(8px,2vw,12px)',marginTop:'clamp(12px,3vw,16px)'}}>
            <p>✓ Enterprise-grade encryption</p>
            <p>✓ No third-party sharing</p>
            <p>✓ You control your data</p>
            <p>✓ Audit trails on all access</p>
          </div>
        </div>

        <Link href="/assessment/step-1" className="btn">Start Your Assessment Now →</Link>
      </main>

      <footer className="ft">
        <div className="ftc">
          <div className="fts"><h3>Product</h3><Link href="/how-it-works">How It Works</Link><Link href="/platform">Platform</Link><Link href="/example-report">Example Report</Link><Link href="/assessment">Assessment</Link></div>
          <div className="fts"><h3>Research</h3><Link href="/research">Research</Link><Link href="/pilot">Pilot Program</Link><Link href="/healthcare-professionals">Healthcare Professionals</Link></div>
          <div className="fts"><h3>Company</h3><Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link></div>
          <div className="fts"><h3>Legal</h3><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookies">Cookies</Link><Link href="/medical-disclaimer">Medical Disclaimer</Link></div>
        </div>
        <div className="ftb"><p>© 2026 ROOTS AI HEALTH SYSTEMS, Inc. All rights reserved.</p><p>ROOTS-AI™ provides educational wellness information and does not diagnose or treat medical conditions.</p></div>
      </footer>
    </div>
  );
}

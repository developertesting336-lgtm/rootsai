'use client';
import Link from 'next/link';
import {useState} from 'react';
export default function AssessmentStep7(){const [m,setM]=useState(false);const s=`*{margin:0;padding:0}a{text-decoration:none;color:inherit}.hd{position:sticky;top:0;z-index:100;background:#1A2A4A;padding:clamp(12px,3vw,16px) clamp(16px,5vw,32px);display:flex;justify-content:space-between;align-items:center;height:clamp(64px,12vw,72px)}.lg{font-size:clamp(16px,4vw,24px);font-weight:700;color:#FFF}.nv{display:none;gap:clamp(8px,3vw,24px)}.nv a{color:#FFF;font-size:clamp(12px,2.5vw,14px)}.bt{background:#FFF;color:#1A2A4A;padding:clamp(8px,2vw,12px) clamp(16px,3vw,24px);border-radius:8px;font-weight:600;border:none;cursor:pointer}.hm{display:flex;flex-direction:column;gap:6px;background:0;border:0;cursor:pointer}.hm span{width:24px;height:3px;background:#FFF;border-radius:1.5px}.dw{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(26,42,74,0.95);z-index:50;padding:clamp(24px,5vw,32px);display:${m?'flex':'none'};flex-direction:column;overflow-y:auto}.dw a{color:#FFF;font-size:clamp(16px,4vw,20px);padding:clamp(8px,2vw,12px) 0;border-bottom:1px solid rgba(255,255,255,0.1)}.mn{padding:clamp(32px,8vw,64px) clamp(16px,5vw,32px);max-width:1440px;margin:0 auto;min-height:calc(100vh-clamp(64px,12vw,72px))}.sc{margin-bottom:clamp(32px,6vw,48px)}.sc h2{font-size:clamp(24px,6vw,36px);color:#1A2A4A;margin-bottom:clamp(16px,4vw,24px)}.sc p{font-size:clamp(14px,3vw,16px);color:#6B7280;line-height:1.6;margin-bottom:clamp(12px,3vw,16px)}.frm{display:flex;flex-direction:column;gap:clamp(16px,3vw,24px);max-width:600px;margin:clamp(24px,6vw,32px) 0}.inp{padding:clamp(8px,2vw,12px);border:1px solid #D8DEE8;border-radius:8px;font-size:clamp(14px,3vw,16px);font-family:inherit}.btn{background:#1A2A4A;color:#FFF;padding:clamp(8px,2vw,12px) clamp(16px,3vw,24px);border-radius:8px;font-weight:600;border:none;cursor:pointer;display:inline-block}.btn:hover{opacity:0.9}.pg{text-align:center;font-size:clamp(12px,2.5vw,14px);color:#6B7280;margin-top:clamp(16px,4vw,24px)}.ft{background:#1A2A4A;color:#FFF;padding:clamp(32px,8vw,48px) clamp(16px,5vw,32px)}.ftc{max-width:1440px;margin:0 auto;display:grid;gap:clamp(24px,5vw,32px);margin-bottom:clamp(24px,5vw,32px)}@media(min-width:768px){.ftc{grid-template-columns:repeat(2,1fr)}}@media(min-width:1024px){.ftc{grid-template-columns:repeat(4,1fr)}}.fts h3{font-size:clamp(14px,3vw,16px);font-weight:600;margin-bottom:clamp(12px,3vw,16px)}.fts a{display:block;font-size:clamp(12px,2.5vw,14px);color:#FFF;padding:clamp(6px,1.5vw,8px) 0;opacity:0.9}.ftb{border-top:1px solid rgba(255,255,255,0.1);padding-top:clamp(16px,3vw,24px);text-align:center;font-size:clamp(12px,2.5vw,14px);opacity:0.8}`;return(
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

      <main className="mn">
        <div className="sc">
          <h2>Step 7 of 11: Inflammation Indicators</h2>
          <p>Assessing signs of systemic inflammation and immune function.</p>
          <form className="frm">
            <label style={{fontSize:'clamp(14px,3vw,16px)',color:'#1A2A4A',fontWeight:600}}>How would you rate your overall energy levels?<select className="inp" style={{marginTop:'8px'}}><option>Select an option</option><option>Very low, fatigued</option><option>Low, somewhat fatigued</option><option>Moderate</option><option>Good, energetic</option><option>Very good, highly energetic</option></select></label>
            <label style={{fontSize:'clamp(14px,3vw,16px)',color:'#1A2A4A',fontWeight:600}}>Do you experience frequent joint or muscle discomfort?<select className="inp" style={{marginTop:'8px'}}><option>Select an option</option><option>Yes, frequently</option><option>Yes, sometimes</option><option>Neutral</option><option>Rarely</option><option>Never</option></select></label>
            <div style={{display:'flex',gap:'clamp(12px,3vw,16px)',marginTop:'clamp(16px,4vw,24px)'}}>
              <Link href="/assessment/step-6" className="btn" style={{background:'#6B7280'}}>← Back</Link>
              <Link href="/assessment/step-8" className="btn">Next →</Link>
            </div>
          </form>
          <div className="pg">Step 7 of 11</div>
        </div>
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

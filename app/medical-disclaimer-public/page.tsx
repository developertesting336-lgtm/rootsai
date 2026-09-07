'use client';
import Link from 'next/link';
import {useState} from 'react';
export default function MedicalDisclaimerPage(){const [m,setM]=useState(false);const s=`*{margin:0;padding:0}a{text-decoration:none;color:inherit}.hd{position:sticky;top:0;z-index:100;background:#1A2A4A;padding:clamp(12px,3vw,16px) clamp(16px,5vw,32px);display:flex;justify-content:space-between;align-items:center;height:clamp(64px,12vw,72px)}.lg{font-size:clamp(16px,4vw,24px);font-weight:700;color:#FFF}.nv{display:none;gap:clamp(8px,3vw,24px)}.nv a{color:#FFF;font-size:clamp(12px,2.5vw,14px)}.bt{background:#FFF;color:#1A2A4A;padding:clamp(8px,2vw,12px) clamp(16px,3vw,24px);border-radius:8px;font-weight:600;border:none;cursor:pointer}.hm{display:flex;flex-direction:column;gap:6px;background:0;border:0;cursor:pointer}.hm span{width:24px;height:3px;background:#FFF;border-radius:1.5px}.dw{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(26,42,74,0.95);z-index:50;padding:clamp(24px,5vw,32px);display:${m?'flex':'none'};flex-direction:column;overflow-y:auto}.dw a{color:#FFF;font-size:clamp(16px,4vw,20px);padding:clamp(8px,2vw,12px) 0;border-bottom:1px solid rgba(255,255,255,0.1)}.hr{background:linear-gradient(135deg,#1A2A4A 0%,#2A4060 100%);color:#FFF;padding:clamp(32px,8vw,64px) clamp(16px,5vw,32px);text-align:center;display:flex;flex-direction:column;justify-content:center}.hr h1{font-size:clamp(28px,8vw,48px);font-weight:700}.hr p{font-size:clamp(14px,3.5vw,16px);max-width:600px;margin:0 auto}.mn{padding:clamp(32px,8vw,64px) clamp(16px,5vw,32px);max-width:1440px;margin:0 auto}.sc{margin-bottom:clamp(32px,6vw,48px)}.sc h2{font-size:clamp(24px,6vw,36px);color:#1A2A4A;margin-bottom:clamp(16px,4vw,24px)}.sc p{font-size:clamp(14px,3vw,16px);color:#6B7280;line-height:1.6;margin-bottom:clamp(12px,3vw,16px)}.ft{background:#1A2A4A;color:#FFF;padding:clamp(32px,8vw,48px) clamp(16px,5vw,32px)}.ftc{max-width:1440px;margin:0 auto;display:grid;gap:clamp(24px,5vw,32px);margin-bottom:clamp(24px,5vw,32px)}@media(min-width:768px){.ftc{grid-template-columns:repeat(2,1fr)}}@media(min-width:1024px){.nv{display:flex !important}.hm{display:none !important}.ftc{grid-template-columns:repeat(4,1fr)}}.fts h3{font-size:clamp(14px,3vw,16px);font-weight:600;margin-bottom:clamp(12px,3vw,16px)}.fts a{display:block;font-size:clamp(12px,2.5vw,14px);color:#FFF;padding:clamp(6px,1.5vw,8px) 0;opacity:0.9}.ftb{border-top:1px solid rgba(255,255,255,0.1);padding-top:clamp(16px,3vw,24px);text-align:center;font-size:clamp(12px,2.5vw,14px);opacity:0.8}`;return(
    <div style={{minHeight:'100vh',background:'#FAFAF8',fontFamily:"'Inter',Arial"}}>
      <style>{s}</style>
      <header className="hd">
        <Link href="/" className="lg">ROOTS-AI™</Link>
        <nav className="nv">
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/platform">Platform</Link>
          <Link href="/example-report">Example Report</Link>
          <Link href="/research">Research</Link>
          <Link href="/about">About</Link>
        </nav>
        <Link href="/assessment" className="bt">Start Assessment</Link>
        <button className="hm" onClick={()=>setM(!m)}><span></span><span></span><span></span></button>
      </header>
      {m&&(<div className="dw"><Link href="/" onClick={()=>setM(false)}>Home</Link><Link href="/how-it-works" onClick={()=>setM(false)}>How It Works</Link><Link href="/platform" onClick={()=>setM(false)}>Platform</Link><Link href="/example-report" onClick={()=>setM(false)}>Example Report</Link><Link href="/research" onClick={()=>setM(false)}>Research</Link><Link href="/about" onClick={()=>setM(false)}>About</Link><div style={{borderTop:'1px solid rgba(255,255,255,0.2)',margin:'16px 0'}}></div><Link href="/healthcare-professionals" onClick={()=>setM(false)}>Healthcare Professionals</Link><Link href="/pilot" onClick={()=>setM(false)}>Pilot Program</Link><Link href="/contact" onClick={()=>setM(false)}>Contact</Link><Link href="/blog" onClick={()=>setM(false)}>Blog</Link></div>)}
      <section className="hr">
        <h1>Medical Disclaimer</h1>
        <p>Important legal and health information</p>
      </section>
      <main className="mn">
        <div className="sc">
          <h2>Educational Purpose Only</h2>
          <p>ROOTS-AI assessments and reports are educational tools designed to promote wellness understanding. They are not intended to diagnose, treat, cure, mitigate, or prevent any medical disease or condition.</p>
        </div>
        <div className="sc">
          <h2>Not a Medical Device</h2>
          <p>ROOTS-AI is not a medical device and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for any health concerns or before making changes to your healthcare regimen.</p>
        </div>
        <div className="sc">
          <h2>Individual Variations</h2>
          <p>Wellness assessments reflect general patterns based on responses provided. Results may not apply to individual circumstances due to variations in biology, lifestyle, genetics, and other factors. Professional medical evaluation is necessary for accurate diagnosis and treatment planning.</p>
        </div>
        <div className="sc">
          <h2>No Emergency Service</h2>
          <p>ROOTS-AI should never be used in place of emergency medical services. If you experience a medical emergency, please contact your local emergency services immediately.</p>
        </div>
        <div className="sc">
          <h2>Professional Consultation</h2>
          <p>This platform is intended to complement, not replace, professional medical care. Use ROOTS-AI insights as a starting point for conversations with your healthcare provider about your biological wellness and health optimization strategies.</p>
        </div>
      </main>
      <footer className="ft">
        <div className="ftc">
          <div className="fts"><h3>Product</h3><Link href="/how-it-works">How It Works</Link><Link href="/platform">Platform</Link><Link href="/example-report">Example Report</Link><Link href="/assessment">Start Assessment</Link></div>
          <div className="fts"><h3>Research</h3><Link href="/research">Research</Link><Link href="/pilot">Pilot Program</Link><Link href="/healthcare-professionals">Healthcare Professionals</Link></div>
          <div className="fts"><h3>Company</h3><Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link></div>
          <div className="fts"><h3>Legal</h3><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookies">Cookies</Link><Link href="/medical-disclaimer">Medical Disclaimer</Link><Link href="/ai-disclaimer">AI Disclaimer</Link></div>
        </div>
        <div className="ftb"><p>© 2026 ROOTS AI HEALTH SYSTEMS, Inc. All rights reserved.</p><p>ROOTS-AI™ provides educational wellness information and does not diagnose or treat medical conditions.</p><p>Build: v1.0.0</p></div>
      </footer>
    </div>
  );
}

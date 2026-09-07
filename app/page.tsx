'use client';
import Link from "next/link";
import {useState} from 'react';

export default function HomePage() {
  const [m,setM]=useState(false);
  const s=`*{margin:0;padding:0}a{text-decoration:none;color:inherit}.hd{position:sticky;top:0;z-index:100;background:#1A2A4A;padding:clamp(12px,3vw,16px) 16px;display:flex;justify-content:space-between;align-items:center;height:clamp(64px,12vw,72px)}@media(min-width:768px){.hd{padding-left:24px;padding-right:24px}}@media(min-width:1024px){.hd{padding-left:40px;padding-right:40px}}@media(min-width:1440px){.hd{padding-left:120px;padding-right:120px}}.lg{font-size:clamp(16px,4vw,24px);font-weight:700;color:#FFF}.nv{display:none;gap:clamp(8px,3vw,24px)}.nv a{color:#FFF;font-size:clamp(12px,2.5vw,14px)}.bt{background:#FFF;color:#1A2A4A;padding:clamp(8px,2vw,12px) clamp(16px,3vw,24px);border-radius:8px;font-weight:600;border:none;cursor:pointer}.hm{display:flex;flex-direction:column;gap:6px;background:0;border:0;cursor:pointer}.hm span{width:24px;height:3px;background:#FFF;border-radius:1.5px}.dw{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(26,42,74,0.95);z-index:50;padding:clamp(24px,5vw,32px);display:${m?'flex':'none'};flex-direction:column;overflow-y:auto}.dw a{color:#FFF;font-size:clamp(16px,4vw,20px);padding:clamp(8px,2vw,12px) 0;border-bottom:1px solid rgba(255,255,255,0.1)}.hr{background:linear-gradient(135deg,#1A2A4A 0%,#2A4060 100%);color:#FFF;padding:clamp(32px,8vw,64px) 16px;text-align:center;display:flex;flex-direction:column;justify-content:center}.hr h1{font-size:clamp(28px,8vw,48px);font-weight:700}.hr p{font-size:clamp(14px,3.5vw,16px);max-width:600px;margin:0 auto}.tr{background:#F3F4F6;padding:clamp(16px,4vw,24px) 16px;text-align:center}.tr p{font-size:clamp(12px,2.5vw,14px);color:#6B7280}.tr p:first-child{color:#000;font-weight:700}.mn{padding:clamp(32px,8vw,64px) 16px;max-width:1440px;margin:0 auto}.sc{margin-bottom:clamp(32px,6vw,48px)}.sc h2{font-size:clamp(24px,6vw,36px);color:#000;margin-bottom:clamp(16px,4vw,24px);text-align:center}.sc p{font-size:clamp(14px,3vw,16px);color:#6B7280;line-height:1.6;margin-bottom:clamp(12px,3vw,16px)}.gd{display:grid;gap:clamp(16px,3vw,24px);margin-bottom:clamp(16px,3vw,24px);grid-template-columns:1fr}@media(min-width:768px){.gd{grid-template-columns:1fr}.hd{padding-left:24px;padding-right:24px}.hr{padding-left:24px;padding-right:24px}.tr{padding-left:24px;padding-right:24px}.mn{padding-left:24px;padding-right:24px}.dm{padding-left:24px;padding-right:24px}.cta{padding-left:24px;padding-right:24px}.ft{padding-left:24px;padding-right:24px}}@media(min-width:1024px){.gd{grid-template-columns:repeat(3,1fr)}.hd{padding-left:40px;padding-right:40px}.hr{padding-left:40px;padding-right:40px}.tr{padding-left:40px;padding-right:40px}.mn{padding-left:40px;padding-right:40px}.dm{padding-left:40px;padding-right:40px}.cta{padding-left:40px;padding-right:40px}.ft{padding-left:40px;padding-right:40px}}.gd{grid-template-columns:1fr}.cd{background:#FFF;border:1px solid #D8DEE8;border-radius:clamp(8px,2vw,12px);padding:clamp(16px,3vw,24px);text-align:center}.cd h3{display:none}.cd p{font-size:clamp(13px,2.5vw,14px);line-height:1.6;text-align:center;font-weight:700}.cd:nth-child(1) p{color:#000}.cd:nth-child(2) p,.cd:nth-child(3) p,.cd:nth-child(4) p,.cd:nth-child(5) p,.cd:nth-child(6) p{color:#000}.dm{background:#FAFAF8;color:#1A2A4A;padding:clamp(32px,8vw,64px) 16px}.dm h2{color:#000}.dm>div>div:last-child{font-size:clamp(14px,3vw,16px);color:#6B7280;text-align:center;margin-top:clamp(16px,3vw,24px)}.dg{display:grid;gap:clamp(16px,3vw,24px);grid-template-columns:1fr;justify-content:center;width:fit-content;margin:0 auto}@media(min-width:768px){.dg{grid-template-columns:repeat(2,1fr);width:fit-content;margin:0 auto}}@media(min-width:1024px){.dg{grid-template-columns:repeat(4,1fr);width:fit-content;margin:0 auto}}@media(min-width:1440px){.dg{grid-template-columns:repeat(4,1fr);width:fit-content;margin:0 auto}}.db{background:#FFF;border:1px solid #D8DEE8;border-radius:clamp(8px,2vw,12px);padding:clamp(16px,3vw,24px)}.db h3{font-size:clamp(16px,3vw,18px);color:#000;margin-bottom:clamp(8px,2vw,12px);font-weight:700}.db p{font-size:clamp(13px,2.5vw,14px);color:#6B7280;line-height:1.6}.cta{background:rgba(255,255,255,0.05);padding:clamp(32px,8vw,64px) 16px;text-align:center}.cta h2{font-size:clamp(24px,6vw,36px);color:#000;margin-bottom:clamp(16px,4vw,24px);font-weight:700}.cta p{font-size:clamp(14px,3vw,16px);color:#6B7280;line-height:1.6;margin-bottom:clamp(16px,4vw,24px)}.ctab{background:#1A2A4A;color:#FFF;padding:clamp(8px,2vw,12px) clamp(16px,3vw,24px);border-radius:8px;font-weight:600;border:none;cursor:pointer;display:inline-block}.ft{background:#1A2A4A;color:#FFF;padding:clamp(32px,8vw,48px) 16px}.ftc{max-width:1440px;margin:0 auto;display:grid;gap:clamp(24px,5vw,32px);margin-bottom:clamp(24px,5vw,32px)}@media(min-width:768px){.ftc{grid-template-columns:repeat(2,1fr)}}@media(min-width:1440px){.hd{padding-left:120px;padding-right:120px}.hr{padding-left:120px;padding-right:120px}.tr{padding-left:120px;padding-right:120px}.mn{padding-left:120px;padding-right:120px}.dm{padding-left:120px;padding-right:120px}.cta{padding-left:120px;padding-right:120px}.ft{padding-left:120px;padding-right:120px}}@media(min-width:1024px){.nv{display:flex !important}.hm{display:none !important}.ftc{grid-template-columns:repeat(4,1fr)}}.fts h3{font-size:clamp(14px,3vw,16px);font-weight:600;margin-bottom:clamp(12px,3vw,16px)}.fts a{display:block;font-size:clamp(12px,2.5vw,14px);color:#FFF;padding:clamp(6px,1.5vw,8px) 0;opacity:0.9}.ftb{border-top:1px solid rgba(255,255,255,0.1);padding-top:clamp(16px,3vw,24px);text-align:center;font-size:clamp(12px,2.5vw,14px);opacity:0.8}.cta2{display:flex;flex-direction:column;gap:clamp(12px,3vw,16px);margin-bottom:clamp(16px,4vw,24px)}@media(min-width:640px){.cta2{flex-direction:row;justify-content:center}}.btn1{background:#FFF;color:#1A2A4A;padding:clamp(8px,2vw,12px) clamp(16px,3vw,24px);border-radius:8px;font-weight:600;border:none;cursor:pointer;text-align:center}.btn2{background:transparent;color:#FFF;border:2px solid #FFF;padding:clamp(8px,2vw,12px) clamp(16px,3vw,24px);border-radius:8px;font-weight:600;cursor:pointer;text-align:center}.how{padding:clamp(32px,8vw,64px) 16px;max-width:1440px;margin:0 auto}.how h2{font-size:clamp(24px,6vw,36px);color:#000;margin-bottom:clamp(16px,4vw,24px);text-align:center;font-weight:700}.how p{font-size:clamp(14px,3vw,16px);color:#6B7280;line-height:1.6;margin-bottom:clamp(32px,6vw,48px);text-align:center}.steps{display:grid;gap:clamp(16px,3vw,24px);grid-template-columns:1fr}@media(min-width:768px){.steps{grid-template-columns:repeat(2,1fr)}.how{padding-left:24px;padding-right:24px}}@media(min-width:1024px){.steps{grid-template-columns:repeat(4,1fr)}.how{padding-left:40px;padding-right:40px}}.step{background:#FFF;border:1px solid #D8DEE8;border-radius:clamp(8px,2vw,12px);padding:clamp(16px,3vw,24px);text-align:center}.step h3{font-size:clamp(18px,3vw,20px);color:#000;font-weight:700;margin-bottom:clamp(8px,2vw,12px)}.step p{font-size:clamp(13px,2.5vw,14px);color:#6B7280;line-height:1.6}.report{padding:clamp(32px,8vw,64px) 16px;max-width:1440px;margin:0 auto;text-align:center}.report h2{font-size:clamp(24px,6vw,36px);color:#000;margin-bottom:clamp(32px,6vw,48px);font-weight:700}.report-box{background:#FFF;border:1px solid #D8DEE8;border-radius:clamp(8px,2vw,12px);padding:clamp(32px,5vw,48px);margin-bottom:clamp(32px,6vw,48px)}.report-box p{font-size:clamp(14px,3vw,16px);color:#6B7280;line-height:1.6;margin-bottom:clamp(12px,2vw,16px)}.report-box p:last-child{color:#9CA3AF}@media(min-width:768px){.report{padding-left:24px;padding-right:24px}}@media(min-width:1024px){.report{padding-left:40px;padding-right:40px}}@media(min-width:1440px){.how{padding-left:120px;padding-right:120px}.report{padding-left:120px;padding-right:120px}}.pl{background:#F3F4F6;padding:clamp(32px,8vw,64px) 16px;text-align:center}.pl h2{font-size:clamp(24px,6vw,36px);color:#000;margin-bottom:clamp(16px,4vw,24px);font-weight:700}.pl p{font-size:clamp(14px,3vw,16px);color:#6B7280;line-height:1.6;margin-bottom:clamp(16px,4vw,24px)}@media(min-width:768px){.pl{padding-left:24px;padding-right:24px}}@media(min-width:1024px){.pl{padding-left:40px;padding-right:40px}}@media(min-width:1440px){.pl{padding-left:120px;padding-right:120px}}`;

  return (
    <div style={{minHeight:'100vh',background:'#FAFAF8',fontFamily:"'Inter',Arial"}}>
      <style>{s}</style>

      <section className="hr">
        <h1>Decode the Biology Before You Fight the Weight</h1>
        <p>ROOTS-AI™ turns a structured assessment into governed biological intelligence—helping you understand patterns in metabolism, hunger, sleep, circadian timing, stress, inflammation-related signals and perceived biological resistance.</p>
        <div className="cta2">
          <button className="btn1" style={{opacity:0.5,cursor:'not-allowed'}} onClick={(e)=>e.preventDefault()} disabled>Start Your Assessment</button>
          <Link href="/example-report" className="btn2">View Example Report</Link>
        </div>
      </section>

      <section className="tr">
        <p><strong>Educational wellness platform — Not a diagnosis</strong></p>
        <p style={{marginTop:'clamp(8px,2vw,12px)'}}>Designed to support informed conversations with healthcare professionals</p>
      </section>

      <main className="mn">
        <div className="sc">
          <h2>What You Get</h2>
          <div className="gd">
            <div className="cd"><p>Beyond a number on the scale — see the pattern behind the struggle.</p></div>
            <div className="cd"><p>Seven biological domains — one connected view.</p></div>
            <div className="cd"><p>Deterministic scores — AI assists with explanation, not calculation.</p></div>
            <div className="cd"><p>Your report — 19 transparent sections with your answers and limitations.</p></div>
            <div className="cd"><p>Private by design — controlled access, versioning and audit.</p></div>
            <div className="cd"><p>Educational, not diagnostic — designed to support informed conversations and realistic next steps.</p></div>
          </div>
        </div>

        <div className="dm">
          <div style={{maxWidth:'1440px',margin:'0 auto'}}>
            <h2 style={{fontSize:'clamp(24px,6vw,36px)',fontWeight:700,marginBottom:'clamp(16px,4vw,24px)',textAlign:'center'}}>Seven Connected Domains</h2>
            <p style={{fontSize:'clamp(14px,3vw,16px)',color:'#6B7280',textAlign:'center',marginBottom:'clamp(24px,5vw,32px)',lineHeight:1.6}}>Your biology is interconnected. Understanding each domain helps reveal the full picture.</p>
            <div className="dg">
              <div className="db"><h3>Metabolic Resistance™</h3><p>Self-reported resistance to expected weight change and activity-related metabolic context.</p></div>
              <div className="db"><h3>Hunger & Satiety Signals™</h3><p>Hunger, craving, fullness and post-meal response patterns.</p></div>
              <div className="db"><h3>Sleep Recovery Index™</h3><p>Sleep duration, continuity and perceived restoration.</p></div>
              <div className="db"><h3>Circadian Health Score™</h3><p>Alignment of light, screen, meal and sleep timing.</p></div>
              <div className="db"><h3>Stress Load™</h3><p>Perceived tension, cognitive activation and stress-linked eating.</p></div>
              <div className="db"><h3>Inflammation Burden Index™</h3><p>Non-specific symptom burden; not a laboratory or clinical inflammation measure.</p></div>
              <div className="db"><h3>Biological Safety Signals™</h3><p>Perceived energy, appetite drive and resistance signals.</p></div>
            </div>
          </div>
        </div>

      </main>

      <section className="how">
        <h2>From Answers to Biological Intelligence</h2>
        <p>ROOTS-AI™ follows a controlled sequence so that interpretation never replaces the underlying data.</p>
        <div className="steps">
          <div className="step"><h3>1. Complete the 73-question assessment</h3><p>Validation normalizes approved responses and preserves N/A.</p></div>
          <div className="step"><h3>2. Deterministic rules calculate seven domains and derived indicators</h3><p>Rules select drivers, confidence and eligible content.</p></div>
          <div className="step"><h3>3. Governed AI turns approved explanation objects into clear language</h3></div>
          <div className="step"><h3>4. The web and PDF reports render from the same immutable report record</h3></div>
        </div>
      </section>

      <section className="report">
        <h2>See What Your Biological Report Looks Like</h2>
        <div className="report-box">
          <p><strong>Sample Report Preview</strong></p>
          <p>ROOTS Biological State™: 61/100 — Strained.</p>
          <p>Key Drivers: Stress Load, Sleep Recovery and Metabolic Resistance.</p>
          <p><em>This is a questionnaire summary, not a medical risk probability.</em></p>
          <p><em>The example does not represent a real person or a clinical result.</em></p>
          <Link href="/example-report" className="ctab" style={{marginTop:'clamp(16px,3vw,24px)',display:'inline-block'}}>View Example Report</Link>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Begin?</h2>
        <p>Answer 73 questions in about 10-12 minutes and get your personalized biological intelligence report.</p>
        <button className="ctab" style={{opacity:0.5,cursor:'not-allowed'}} onClick={(e)=>e.preventDefault()} disabled>Start Your Assessment Now</button>
      </section>

      <section className="pl">
        <h2>Join the ROOTS-AI™ Free Beta</h2>
        <p>The beta explores whether a structured, non-diagnostic assessment can help you understand self-reported patterns involving weight resistance, energy, sleep, stress and appetite.</p>
        <Link href="/pilot" className="ctab">Check Eligibility</Link>
      </section>

    </div>
  );
}

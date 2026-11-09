"use client";

import { useEffect, useRef, useState } from "react";
import { Accessibility, Mail, Menu, Minus, Pause, Play, Plus, RotateCcw, X } from "lucide-react";

export function SiteFrame({children,current}:{children:React.ReactNode;current?:string}) {
  const [fontScale,setFontScale]=useState(1);
  const [contrast,setContrast]=useState<"default"|"high"|"dark">("default");
  const [toolsOpen,setToolsOpen]=useState(false);
  const [mobileOpen,setMobileOpen]=useState(false);
  const [speaking,setSpeaking]=useState(false);
  const [paused,setPaused]=useState(false);
  const contentRef=useRef<HTMLElement>(null);
  useEffect(()=>()=>window.speechSynthesis?.cancel(),[]);
  const stopSpeech=()=>{window.speechSynthesis?.cancel();setSpeaking(false);setPaused(false)};
  const readPage=()=>{if(!("speechSynthesis" in window)||!contentRef.current)return;stopSpeech();const speech=new SpeechSynthesisUtterance(contentRef.current.innerText);speech.rate=.95;speech.onend=stopSpeech;speech.onerror=stopSpeech;window.speechSynthesis.speak(speech);setSpeaking(true)};
  const pauseSpeech=()=>{if(paused)window.speechSynthesis.resume();else window.speechSynthesis.pause();setPaused(!paused)};
  const nav=[['About','about'],['Membership','about#membership'],['Scholarship','scholarship'],['Chapters','chapters'],['Resources','resources'],['Pins & cords','pins-and-cords']];
  return <div className={`site-shell contrast-${contrast}${fontScale>=1.4?" text-enlarged":""}`} style={{"--font-scale":fontScale} as React.CSSProperties}>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <div className="utility-bar"><p>Working for an <strong>aDAPtable</strong> world</p><button type="button" onClick={()=>setToolsOpen(!toolsOpen)} aria-expanded={toolsOpen} aria-controls="accessibility-panel"><Accessibility aria-hidden="true" size={18}/> Accessibility tools</button></div>
    {toolsOpen&&<section id="accessibility-panel" className="accessibility-panel" aria-label="Accessibility preferences">
      <div className="tool-group"><span>Text size</span><button type="button" aria-label="Decrease text size" onClick={()=>setFontScale(Math.max(.9,+(fontScale-.1).toFixed(1)))} disabled={fontScale<=.9}><Minus aria-hidden="true" size={18}/></button><output aria-live="polite" aria-label="Current text size">{Math.round(fontScale*100)}%</output><button type="button" aria-label="Increase text size" onClick={()=>setFontScale(Math.min(2,+(fontScale+.1).toFixed(1)))} disabled={fontScale>=2}><Plus aria-hidden="true" size={18}/></button></div>
      <fieldset className="contrast-options"><legend>Color contrast</legend>{(["default","high","dark"] as const).map(mode=><button type="button" key={mode} className={contrast===mode?"selected":""} onClick={()=>setContrast(mode)} aria-pressed={contrast===mode}>{mode==="default"?"Standard":mode==="high"?"High contrast":"Dark"}</button>)}</fieldset>
      <div className="tool-group speech-tools"><span>Read aloud</span>{!speaking?<button type="button" onClick={readPage}><Play aria-hidden="true" size={17}/> Start</button>:<><button type="button" onClick={pauseSpeech}>{paused?<Play aria-hidden="true" size={17}/>:<Pause aria-hidden="true" size={17}/>} {paused?"Resume":"Pause"}</button><button type="button" onClick={stopSpeech}><X aria-hidden="true" size={17}/> Stop</button></>}</div>
      <button type="button" className="reset-button" onClick={()=>{setFontScale(1);setContrast("default");stopSpeech()}}><RotateCcw aria-hidden="true" size={17}/> Reset preferences</button>
    </section>}
    <header className="site-header"><a className="brand" href="" aria-label="Delta Alpha Pi home"><img className="brand-logo" src="dapi-logo.png" alt=""/><span><strong>Delta Alpha Pi</strong><small>International Honor Society</small></span></a><button type="button" className="menu-button" onClick={()=>setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-controls="primary-navigation" aria-label={mobileOpen?"Close navigation":"Open navigation"}>{mobileOpen?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}</button><nav id="primary-navigation" aria-label="Primary navigation" className={mobileOpen?"nav-open":""}>{nav.map(([label,href])=><a key={label} href={href} aria-current={current===label.toLowerCase()?"page":undefined}>{label}</a>)}<a className="nav-contact" href="contact" aria-current={current==="contact"?"page":undefined}>Contact</a></nav></header>
    <main id="main-content" ref={contentRef}>{children}</main>
    <footer><div className="footer-brand"><img className="footer-logo" src="dapi-logo.png" alt="Delta Alpha Pi Honor Society logo"/><div><strong>Delta Alpha Pi</strong><p>International Honor Society</p></div></div><div><h2>Questions? We’re here to help.</h2><a href="mailto:dapihonor@msn.com"><Mail aria-hidden="true" size={17}/> dapihonor@msn.com</a><p>5540 Montauk Lane<br/>Bethlehem, PA 18017</p></div><div><h2>Explore</h2><a href="about">About DAPi</a><a href="scholarship">Scholarship</a><a href="chapters">Chapters</a><a href="resources">Resources</a></div><p className="copyright">© 2026 Delta Alpha Pi International Honor Society · Logo copyright 2004 of DAPi</p></footer>
  </div>;
}

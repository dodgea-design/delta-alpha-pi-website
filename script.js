(function(){
  const body=document.body, tools=document.querySelector('#accessibility-panel');
  let scale=Number(localStorage.getItem('dapi-font')||1), speaking=false;
  const apply=()=>{document.documentElement.style.setProperty('--font-scale',scale);document.querySelector('#font-output').textContent=Math.round(scale*100)+'%';localStorage.setItem('dapi-font',scale)};
  apply();
  document.querySelector('#tools-toggle')?.addEventListener('click',e=>{const open=tools.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open)});
  document.querySelector('#font-down')?.addEventListener('click',()=>{scale=Math.max(.9,+(scale-.1).toFixed(1));apply()});
  document.querySelector('#font-up')?.addEventListener('click',()=>{scale=Math.min(2,+(scale+.1).toFixed(1));apply()});
  document.querySelectorAll('[data-contrast]').forEach(b=>b.addEventListener('click',()=>{body.classList.remove('contrast-high','contrast-dark');if(b.dataset.contrast!=='standard')body.classList.add('contrast-'+b.dataset.contrast);document.querySelectorAll('[data-contrast]').forEach(x=>x.setAttribute('aria-pressed',x===b));localStorage.setItem('dapi-contrast',b.dataset.contrast)}));
  const saved=localStorage.getItem('dapi-contrast');if(saved&&saved!=='standard')document.querySelector('[data-contrast="'+saved+'"]')?.click();
  document.querySelector('#read-page')?.addEventListener('click',()=>{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(document.querySelector('main').innerText);u.rate=.95;u.onend=()=>speaking=false;speechSynthesis.speak(u);speaking=true});
  document.querySelector('#stop-reading')?.addEventListener('click',()=>{speechSynthesis.cancel();speaking=false});
  document.querySelector('#reset-tools')?.addEventListener('click',()=>{scale=1;apply();document.querySelector('[data-contrast="standard"]')?.click();speechSynthesis.cancel()});
  document.querySelector('.menu')?.addEventListener('click',e=>{const nav=document.querySelector('.nav'),open=nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open)});
  const search=document.querySelector('#chapter-search');search?.addEventListener('input',()=>{const q=search.value.toLowerCase();document.querySelectorAll('.state').forEach(s=>s.hidden=!s.textContent.toLowerCase().includes(q))});
})();

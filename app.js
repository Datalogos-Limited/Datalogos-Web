/* Datalogos corporate site content feed and navigation. */
const posts = [
  {category:'DATA & AI GOVERNANCE', title:'The importance of data governance for AI success', summary:'Why AI programmes need clear ownership, usable data rules and accountable decisions before they scale.', date:'17 SEPTEMBER 2026 · AIDENTITY', href:'https://docs.google.com/document/d/1BbENMvugpuRJfNajw5EBF9R-M9oRXSbmEPjT0FgRQ8w/edit?usp=drivesdk'},
  {category:'AI CONTROL', title:'Orchestrational governance: the new architecture of AI trust', summary:'A practical look at connecting policy, context and enforcement when AI systems can call tools and take action.', date:'29 MAY 2026 · AIDENTITY', href:'https://docs.google.com/document/d/1TbPhyKexJBRA1dbEJB4NXznagki_-8Vs9WUj4ikWkVA/edit?usp=drivesdk'},
  {category:'DATA STRATEGY', title:'Data solutions for business transformation', summary:'Connect data strategy to operating change, business outcomes and the way teams make decisions.', date:'22 NOVEMBER 2024 · AIDENTITY', href:'https://docs.google.com/document/d/1RUHLSoNafg-jooYiXS1-Oq0Ah_kW62Es6hvmR0q1Gqc/edit?usp=drivesdk'}
];
const grid=document.querySelector('#blog-grid');
if(grid){grid.innerHTML=posts.map(post=>`<article class="insight-card"><div class="insight-visual" aria-hidden="true"><div class="visual-lines"></div></div><span>${post.category}</span><h3>${post.title}</h3><p>${post.summary}</p><a href="${post.href}" target="_blank" rel="noopener">${post.date} <span>↗</span></a></article>`).join('');}
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#primary-nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open)});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Open navigation')}));
document.querySelector('#year').textContent=new Date().getFullYear();

(() => {
  'use strict';
  const data = window.AIM_DATA;
  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const labels = {process:'判断与动作',vision:'视觉与注意力',static:'静态与提速',tracking:'跟枪与动态',body:'动作与复位',tension:'合理用力',equipment:'灵敏度与外设',practice:'训练与实战',mindset:'心态与修正'};
  const all = [...data.principles, ...data.sources];
  const byId = id => all.find(x => x.id === id);
  const fmt = n => `${Math.floor((n || 0) / 60)}:${String(Math.floor((n || 0) % 60)).padStart(2,'0')}`;
  let saved;
  try { saved = new Set(JSON.parse(localStorage.getItem('aim-atlas-saved-v1') || '[]')); } catch { saved = new Set(); }
  const state = {author:data.authors[0].id,view:'map',selected:data.principles[0].id,category:'all',query:'',type:'all',onlySaved:false,page:1,zoom:1};
  const currentAuthor = () => data.authors.find(a => a.id === state.author);
  const currentPrinciples = () => data.principles.filter(p => p.author === state.author);
  const saveButton = item => `<button class="save-btn ${saved.has(item.id)?'saved':''}" data-save="${esc(item.id)}" aria-pressed="${saved.has(item.id)}" aria-label="${saved.has(item.id)?'取消收藏':'收藏'}：${esc(item.title)}">${saved.has(item.id)?'★':'☆'}</button>`;
  const sourceLinks = refs => refs.map(r => `<a class="source-link" href="${esc(r.url || `https://www.bilibili.com/video/${r.bvid}/?t=${r.time || 0}`)}" target="_blank" rel="noopener noreferrer"><span class="play-icon" aria-hidden="true">▶</span><span>${esc(r.label || data.sources.find(s=>s.bvid===r.bvid)?.title || r.bvid)}<small>${r.time ? `从 ${fmt(r.time)} 开始 · ` : ''}打开 B 站原视频 ↗</small></span></a>`).join('');
  const details = item => (item.details || []).filter(Boolean).map(p=>`<p>${esc(p)}</p>`).join('');
  const caveats = item => {const c=item.caveats;return c && (Array.isArray(c)?c.length:true)?`<h3>适用范围与限定</h3>${(Array.isArray(c)?c:[c]).map(p=>`<p>${esc(p)}</p>`).join('')}`:'';};
  let toastTimer;
  function toast(s){$('#toast').textContent=s;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2200);}
  function renderAuthors(){
    $('#authors').innerHTML=data.authors.map(a=>`<button class="author-tab ${a.id===state.author?'active':''}" data-author="${a.id}" aria-pressed="${a.id===state.author}"><span class="avatar ${a.color}">${esc(a.initial)}</span>${esc(a.name)}<span class="status">${a.read} 条已读</span></button>`).join('');
    const a=currentAuthor();
    $('#author-summary').innerHTML=`<div><h2>${esc(state.view==='compare'?'同一个问题，两种教学侧重':a.intro)}</h2><p>${esc(state.view==='compare'?'并列阅读共同点与限定；下方内容是对原教学的归纳。':a.description)}</p>${a.evolution&&state.view!=='compare'?'<button class="evolution-link" data-evolution>2023—2026 · 查看观点演变 ↗</button>':''}</div><div class="stat"><div><strong>${state.view==='compare'?data.principles.length:currentPrinciples().length}</strong> 个主题</div><div><strong>${state.view==='compare'?data.sources.length:a.read}</strong> 条已读<br>字幕 / 转写</div></div>`;
    $('#nav-count').textContent=all.length;
  }
  function setView(view){
    state.view=view;
    document.querySelector('.work-head').hidden=view==='training';
    $('#author-summary').hidden=view==='training';
    if(location.hash!=='#'+view)history.replaceState(null,'','#'+view);
    ['map','library','compare','training'].forEach(v=>$('#'+v+'-view').hidden=v!==view);
    document.querySelectorAll('[data-view]').forEach(b=>{if(b.hasAttribute('data-jump'))return;b.classList.toggle('active',b.dataset.view===view);b.setAttribute('aria-pressed',String(b.dataset.view===view));});
    renderAuthors();
    if(view==='library')renderLibrary();
    if(view==='compare')renderCompare();
    if(view==='map'){renderMap();fitMap();}
  }
  function renderMap(){
    const list=currentPrinciples();
    if(!list.some(p=>p.id===state.selected))state.selected=list[0].id;
    const leftCount=Math.ceil(list.length/2);
    const positions=list.map((p,i)=>{const left=i<leftCount;const index=left?i:i-leftCount;const count=left?leftCount:list.length-leftCount;return {x:left?28:576,y:35+index*(480/Math.max(count-1,1)),left};});
    const lines=positions.map((pos,i)=>{const y=pos.y+44.5;return `<path class="${list[i].id===state.selected?'selected':''}" d="M ${pos.left?310:520} 335 C ${pos.left?280:550} 335, ${pos.left?285:545} ${y}, ${pos.left?254:576} ${y}"/>`;}).join('');
    const a=currentAuthor();
    $('#map-canvas').innerHTML=`<svg class="map-lines" viewBox="0 0 830 650" aria-hidden="true">${lines}</svg><div class="map-root"><small>AIM PHILOSOPHY</small><strong>${esc(a.name)}</strong><span>${esc(a.eyebrow)}</span></div>${list.map((p,i)=>`<button class="map-node ${p.color || 'orange'} ${p.id===state.selected?'selected':''}" style="left:${positions[i].x}px;top:${positions[i].y}px" data-node="${esc(p.id)}" aria-pressed="${p.id===state.selected}"><span class="node-title"><span class="color-dot"></span>${esc(p.title)}<span class="node-no">${String(i+1).padStart(2,'0')}</span></span><p>${esc(p.caption || p.summary)}</p></button>`).join('')}`;
    renderDetail();
  }
  function renderDetail(){
    const p=byId(state.selected);
    $('#detail-panel').innerHTML=`<div class="panel-kicker"><span>主题笔记 / ${String(currentPrinciples().indexOf(p)+1).padStart(2,'0')}</span>${saveButton(p)}</div><h3>${esc(p.title)}</h3><p class="detail-lead">${esc(p.summary)}</p><p class="detail-copy">${esc(p.details?.[0] || '')}</p><div class="detail-rule"></div><span class="pill">根据原教学归纳</span><p class="source-label">回到来源 · ${p.sourceRefs.length} 个位置</p>${sourceLinks(p.sourceRefs.slice(0,3))}<button class="detail-action" data-open="${esc(p.id)}">展开完整笔记与限定 <span>↗</span></button>`;
  }
  function applyZoom(){
    const canvas=$('#map-canvas');canvas.style.zoom=state.zoom;$('#zoom-reset').textContent=`${Math.round(state.zoom*100)}%`;
    $('#zoom-out').disabled=state.zoom<=.6;$('#zoom-in').disabled=state.zoom>=1.3;
  }
  function fitMap(){state.zoom=Math.max(.6,Math.min(1,Math.floor(($('#map-viewport').clientWidth-16)/830*100)/100));applyZoom();}
  function renderLibrary(){
    const ps=currentPrinciples();
    const cats=[...new Set(ps.map(p=>p.category))];
    $('#category-filters').innerHTML=`<button data-category="all" class="${state.category==='all'?'active':''}">全部主题</button>${cats.map(c=>`<button data-category="${esc(c)}" class="${state.category===c?'active':''}">${esc(labels[c] || ps.find(p=>p.category===c)?.title || c)}</button>`).join('')}`;
    const terms=state.query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    const items=all.filter(x=>x.author===state.author && (state.type==='all'||x.kind===state.type) && (!state.onlySaved||saved.has(x.id)) && (state.category==='all'||x.category===state.category||x.categories?.includes(state.category))).filter(x=>{const text=[x.title,x.summary,...(x.details||[]),x.bvid||'',...(x.claims||[]).map(c=>c.text)].join(' ').toLocaleLowerCase();return terms.every(t=>text.includes(t));});
    const pages=Math.max(1,Math.ceil(items.length/12));state.page=Math.min(state.page,pages);
    $('#result-count').textContent=`${currentAuthor().name} · ${items.length} 条${state.onlySaved?'收藏':''}资料${state.query?` · 搜索「${state.query}」`:''}`;
    $('#library-grid').innerHTML=items.length?items.slice((state.page-1)*12,state.page*12).map(x=>`<article class="library-card"><div class="card-meta"><span class="kind">${x.kind==='principle'?'观点卡片':esc(x.readStatus || '完整字幕已读')}</span>${saveButton(x)}</div><h3>${esc(x.title)}</h3><p>${esc(x.summary || '全文字幕已纳入阅读范围。此条保留原视频索引，尚未单独编写内容摘要。')}</p><div class="card-footer"><span>${x.kind==='principle'?`${x.sourceRefs.length} 处原视频依据`:`${fmt(x.duration)} · 原视频`}</span><button class="card-open" data-open="${esc(x.id)}">${x.kind==='principle'?'阅读笔记':'查看资料'} ↗</button></div></article>`).join(''):`<div class="empty"><strong>还没有匹配的资料</strong>${state.onlySaved?'点亮卡片上的 ☆，把想复习的内容存到这里。':'换一个关键词，或减少筛选条件。'}<button data-clear>清除筛选</button></div>`;
    $('#pagination').innerHTML=items.length>12?`<button data-page="${state.page-1}" ${state.page===1?'disabled':''}>← 上一页</button><span>${state.page} / ${pages}</span><button data-page="${state.page+1}" ${state.page===pages?'disabled':''}>下一页 →</button>`:'';
    $('#saved-filter').setAttribute('aria-pressed',String(state.onlySaved));
  }
  function renderCompare(){
    const categories=['process','vision','static','tracking','body','practice','mindset'];
    if(data.authors.length<2){$('#compare-view').innerHTML='<p class="compare-intro">第二位作者的资料仍在整理，完成原字幕阅读后再作对照。</p>';return;}
    const rows=categories.map(c=>({category:c,ps:data.authors.map(a=>data.principles.filter(p=>p.author===a.id&&p.category===c))})).filter(row=>row.ps.every(ps=>ps.length));
    $('#compare-view').innerHTML=`<p class="compare-intro">选取双方都有资料支持的主题。教学侧重不同，不代表彼此对立；具体阶段、任务和发表时间仍需一并阅读。</p><div class="compare-grid">${rows.map(row=>`<div class="compare-row"><h3>${esc(labels[row.category])}</h3>${row.ps.map((ps,i)=>`<div><h4>${esc(data.authors[i].name)}</h4>${ps.map(p=>`<p>${esc(p.summary)}</p><button data-open="${esc(p.id)}">${esc(p.title)} · 查看依据 ↗</button>`).join('')}</div>`).join('')}</div>`).join('')}</div><div class="compare-note">共同的阅读重点：动作口诀需要放回具体任务。尤其留意后期课程对早期讲法的修正，以及训练软件和实战之间的条件差异。这里的并列归纳不代表作者互相评价或认可。</div>`;
  }
  function openReader(id){
    const x=byId(id);if(!x)return;
    const a=data.authors.find(a=>a.id===x.author);
    let body=`<p class="eyebrow">${esc(a.name)} / ${x.kind==='principle'?'主题笔记':'视频资料'}</p><h2>${esc(x.title)}</h2>`;
    if(x.kind==='principle')body+=`<p class="lead">${esc(x.summary)}</p>${details(x)}${caveats(x)}<h3>原视频与时间位置</h3>${sourceLinks(x.sourceRefs)}`;
    else{
      body+=`<span class="pill">${esc(x.readStatus || '完整字幕已读')} · ${fmt(x.duration)}</span><p class="lead">${esc(x.summary || '本条已完成字幕阅读；暂未独立编写摘要。')}</p>`;
      if(x.claims?.length)body+=`<h3>阅读要点</h3>${x.claims.map(c=>`<p>${esc(c.text)}${c.qualification?`<br><small>${esc(c.qualification)}</small>`:''}</p>${sourceLinks([{bvid:x.bvid,time:c.start,label:`原文语境 ${fmt(c.start)}${c.end?`–${fmt(c.end)}`:''}`}])}`).join('')}`;
      const related=data.principles.filter(p=>p.author===x.author&&p.sourceRefs.some(r=>r.bvid===x.bvid));
      if(related.length)body+=`<h3>关联主题</h3>${related.map(p=>`<button class="detail-action" data-open="${esc(p.id)}">${esc(p.title)} ↗</button>`).join('')}`;
      body+=`<h3>核对画面与完整语境</h3><a class="primary-link" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">打开原视频 ↗</a><p>文本阅读无法替代手部动作、准星轨迹等画面演示。此页只保存整理后的笔记与公开来源链接。</p>`;
    }
    $('#reader-body').innerHTML=body;showDialog();
  }
  function showDialog(){if(!$('#reader').open)$('#reader').showModal();$('#reader').scrollTop=0;}
  function openEvolution(){
    const a=data.authors.find(a=>a.evolution);
    if(!a)return;
    $('#reader-body').innerHTML=`<p class="eyebrow">${esc(a.name)} / 观点演变</p><h2>从分解步骤，走向持续判断</h2><p class="lead">早期课程是训练工具；较新的补充帮助理解这些工具的适用边界。</p>${a.evolution.map(e=>`<section class="timeline-entry"><span class="pill">${esc(e.period)}</span><h3>${esc(e.title)}</h3><p>${esc(e.text)}</p>${sourceLinks(e.sourceRefs)}</section>`).join('')}<p>后期的整体解释并不意味着减速、微调和确认都不再重要，而是提醒：不要把术语变成脱离具体任务的机械命令。</p>`;
    showDialog();
  }
  function openScope(){
    $('#reader-body').innerHTML=`<p class="eyebrow">ABOUT THIS STUDY</p><h2>一份可以追溯的瞄准笔记</h2><p class="lead">先准确理解作者，再把观点带回自己的练习。</p><p>本站是独立研究整理，非作者官方页面。思维导图的主题划分和观点对照由整理者归纳，均非作者逐字原话。点击观点可回到相应原视频及时间位置。</p><table class="scope-table"><thead><tr><th>作者</th><th>已读字幕 / 转写</th><th>本次目录</th></tr></thead><tbody>${data.authors.map(a=>`<tr><td><a href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">${esc(a.handle)} ↗</a></td><td>${a.read} 条</td><td>${a.catalog} 条</td></tr>`).join('')}</tbody></table>${data.authors.map(a=>`<h3>${esc(a.name)}</h3><p>${esc(a.scope)}</p>`).join('')}<h3>怎样理解“已读”</h3><p>已通读完整可用字幕或转录文本，并据此整理；不等于逐帧观看视频，也不保证自动字幕没有识别错误。克礼无明的 58 条资料中有 2 条使用本地语音转写，其余使用站内字幕。只列入目录的内容不计入已读数量。</p><p>演示性的动作、医学解释和哲学阐释有各自的证据限制；没有把经验性的效果数字整理成普遍承诺。对于前后发生变化的讲法，优先保留较新课程的明确限定。</p><h3>使用方法</h3><p>思维导图看体系，资料库搜索问题，观点对照查看同一主题。收藏保存在当前浏览器，清理浏览器数据后会丢失；不会发送到服务器。</p><p>整理更新：${esc(data.updated)}</p>`;
    showDialog();
  }
  document.addEventListener('click',e=>{
    const b=e.target.closest('button');if(!b)return;
    if(b.dataset.view){setView(b.dataset.view);if(b.hasAttribute('data-jump')||b.closest('.topbar'))$('#study').scrollIntoView({block:'start'});}
    if(b.dataset.author){state.author=b.dataset.author;state.category='all';state.page=1;state.selected=currentPrinciples()[0].id;renderAuthors();if(state.view==='map'){renderMap();fitMap();}else if(state.view==='library')renderLibrary();}
    if(b.dataset.node){state.selected=b.dataset.node;renderMap();applyZoom();const node=document.querySelector(`[data-node="${state.selected}"]`);node?.focus({preventScroll:true});}
    if(b.dataset.open)openReader(b.dataset.open);
    if(b.hasAttribute('data-evolution'))openEvolution();
    if(b.dataset.save){const id=b.dataset.save;saved.has(id)?saved.delete(id):saved.add(id);try{localStorage.setItem('aim-atlas-saved-v1',JSON.stringify([...saved]));toast(saved.has(id)?'已收藏，资料库中可筛选查看':'已取消收藏');}catch{toast('浏览器暂不支持保存；本次打开期间仍可使用收藏');}if(state.view==='map')renderDetail();if(state.view==='library')renderLibrary();}
    if(b.dataset.category){state.category=b.dataset.category;state.page=1;renderLibrary();}
    if(b.dataset.page){state.page=Number(b.dataset.page);renderLibrary();$('#library-view').scrollIntoView({block:'start'});}
    if(b.hasAttribute('data-clear')){state.query='';state.type='all';state.category='all';state.onlySaved=false;state.page=1;$('#search').value='';$('#type-filter').value='all';renderLibrary();}
  });
  $('#search').addEventListener('input',e=>{state.query=e.target.value;state.page=1;renderLibrary();});
  $('#type-filter').addEventListener('change',e=>{state.type=e.target.value;state.page=1;renderLibrary();});
  $('#saved-filter').addEventListener('click',()=>{state.onlySaved=!state.onlySaved;state.page=1;renderLibrary();});
  $('#zoom-out').addEventListener('click',()=>{state.zoom=Math.max(.6,Math.round((state.zoom-.1)*100)/100);applyZoom();});
  $('#zoom-in').addEventListener('click',()=>{state.zoom=Math.min(1.3,Math.round((state.zoom+.1)*100)/100);applyZoom();});
  $('#zoom-reset').addEventListener('click',fitMap);
  $('#scope-btn').addEventListener('click',openScope);$('#scope-btn-bottom').addEventListener('click',openScope);
  $('#close-reader').addEventListener('click',()=>$('#reader').close());
  $('#reader').addEventListener('click',e=>{if(e.target===$('#reader')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!$('#reader').open){e.preventDefault();setView('library');$('#search').focus();}});
  let resizeTimer;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{if(state.view==='map')fitMap();},120);});
  const initialView=['map','library','compare','training'].includes(location.hash.slice(1))?location.hash.slice(1):null;
  renderAuthors();setView(initialView||'map');
  if(initialView)window.addEventListener('load',()=>$('#study').scrollIntoView({block:'start',behavior:'instant'}),{once:true});
})();

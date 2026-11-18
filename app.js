/*
 * 6S DIGITAL WORKSPACE — STATIC GITHUB PAGES EDITION
 * To publish changes for everyone, edit DEFAULT_LINKS below and redeploy.
 * UI edits, favorites, import/export are stored locally in each browser.
 */
'use strict';

const DEFAULT_LINKS = [
  // WEB & APLIKASI (6)
  { id:'web-culture', type:'web', name:'6S Culture', category:'Informasi', description:'Portal informasi, dokumentasi, dan publikasi budaya kerja 6S.', url:'https://6sculture.blogspot.com/', icon:'globe', starred:false },
  { id:'web-zone', type:'web', name:'View Smart Zone & Object', category:'Monitoring', description:'Akses aplikasi untuk melihat data smart zone, objek, dan checkpoint 6S.', url:'https://script.google.com/macros/s/AKfycbwPUVRqip3RQRB4v9vsz4ztcCyiTzKBpPoqnCA8lmDBgczS0DeXhIpEhyATlAcPEEs1_A/exec', icon:'grid', pairId:'sheet-master', starred:true },
  { id:'web-awareness', type:'web', name:'Dashboard Awareness', category:'Awareness', description:'Dashboard untuk memantau kegiatan dan pelaksanaan awareness 6S.', url:'https://script.google.com/macros/s/AKfycbwzOkoWWtE_5uqYZRIpN2gaFMaO4FrE6DR4Lm_9LN5KxgAJmqum8TU-7HlH8MbPg4qh/exec', icon:'trending', pairId:'sheet-attendance', starred:true },
  { id:'web-audit', type:'web', name:'Audit System', category:'Audit', description:'Aplikasi salinan sistem audit untuk pencatatan dan pemantauan audit 6S.', url:'https://script.google.com/macros/s/AKfycbw3O7vqIfqZy9Sj9Lcr1LVj93cnd_aK3gn0UYKo29B2AUaR8OFR3bS0gAxb2AGjETiKsw/exec', icon:'shield', starred:false },
  { id:'web-mentoring', type:'web', name:'Web Catatan Mentoring', category:'Mentoring', description:'Mini aplikasi untuk mencatat pelaksanaan, hasil, dan tindak lanjut mentoring.', url:'https://script.google.com/macros/s/AKfycbyztA00HSCV75AxLmjdpfz_DiPKrQQz-w9FkMEtFTK3jXhGZLLUrkuUilmhjlRdyuzFSQ/exec', icon:'book', pairId:'sheet-mentoring-db', starred:true },
  { id:'web-pic', type:'web', name:'Web PIC Photo', category:'Dokumentasi', description:'Aplikasi untuk mengelola dokumentasi foto PIC dan aktivitas area 6S.', url:'https://script.google.com/macros/s/AKfycbwgAvgFqb9xwv2L9fdL8v4O6uOUh_8oquejsz4SJGwE0LnDJVBEoAyzqnb02UqBy8n0Cw/exec', icon:'image', pairId:'sheet-pic-db', starred:false },

  // SHEET DATABASE (9)
  { id:'sheet-training', type:'sheet', name:'Schedule & Penilaian Training 6S', category:'Training', description:'Schedule & Database Training 6S untuk jadwal dan penilaian kegiatan pelatihan.', url:'https://docs.google.com/spreadsheets/d/1O8ByYPcvLjNBmCQ9vM4XdYzD33J1fGOKNpgJhRJJSFM/edit?usp=sharing', icon:'calendar', starred:false },
  { id:'sheet-master', type:'sheet', name:'Database Master Zone', category:'Monitoring', description:'6S Smart Zone Database Setup REV02 — data master zone dan checkpoints aplikasi.', url:'https://docs.google.com/spreadsheets/d/1GMazTgWSmaK6qmsNqNd9attbIjaHSEgWlxnjlz9l9m8/edit?usp=sharing', icon:'database', pairId:'web-zone', starred:false },
  { id:'sheet-layout', type:'sheet', name:'Zone Paperwork Tim', category:'Layout', description:'Master Layout dan Checkpoint — referensi paperwork, area, dan checkpoint tim.', url:'https://docs.google.com/spreadsheets/d/1-yJQqn9W9S7-JqL-vDObHcxNoknnUkrCXqVLPrXOFF8/edit?usp=drivesdk', icon:'clipboard', starred:false },
  { id:'sheet-project', type:'sheet', name:'6S Project', category:'Project', description:'Spreadsheet untuk daftar kegiatan dan progres pekerjaan project 6S.', url:'https://docs.google.com/spreadsheets/d/1AzS6d2iXU-_zLNT3qazR5PULi37b3kTwFDVpe95eePo/edit?usp=sharing', icon:'activity', starred:false },
  { id:'sheet-attendance', type:'sheet', name:'Database Awareness: Absen & Post-Test', category:'Awareness', description:'Database absensi peserta dan hasil post-test kegiatan 6S Awareness.', url:'https://docs.google.com/spreadsheets/d/1IoQOzwfOmjdd8pk7zalrTKW8O5p6Uwk9AqScAsEnHEc/edit?usp=sharing', icon:'users', pairId:'web-awareness', starred:false },
  { id:'sheet-feedback', type:'sheet', name:'Feed Forward 6S Awareness', category:'Awareness', description:'Database feed forward, catatan masukan, dan tindak lanjut kegiatan awareness.', url:'https://docs.google.com/spreadsheets/d/1uiVKKHCuATFh1Es4CLoPmg4ImfKkLMXshzCKIJrJO40/edit?usp=sharing', icon:'trending', starred:false },
  { id:'sheet-mentoring-schedule', type:'sheet', name:'Schedule Mentoring', category:'Mentoring', description:'Jadwal pelaksanaan mentoring 6S beserta informasi sesi.', url:'https://docs.google.com/spreadsheets/d/1vuq_KGxEUCSjdsF3mfxaPbrJtHFEXKs3C1Qp5P8Uk6Q/edit?gid=1022139092#gid=1022139092', icon:'calendar', starred:false },
  { id:'sheet-mentoring-db', type:'sheet', name:'Database Web Catatan Mentoring', category:'Mentoring', description:'Mini App Catatan Mentoring — database sumber untuk aplikasi catatan mentoring.', url:'https://docs.google.com/spreadsheets/d/1paFjhEuT8CjfuWmrLGnuxpF_yNgslGRYVvdLOta0YsQ/edit?usp=sharing', icon:'book', pairId:'web-mentoring', starred:false },
  { id:'sheet-pic-db', type:'sheet', name:'Database Web PIC Photo', category:'Dokumentasi', description:'Database_Photo PIC — data dokumentasi foto dari aplikasi PIC 6S.', url:'https://docs.google.com/spreadsheets/d/1azav1pZln8GUgVk964MyhR4H3yT-EIoBHMUQTvMJ5PQ/edit?gid=273331019#gid=273331019', icon:'image', pairId:'web-pic', starred:false }
];

const STORAGE_KEY = '6s-digital-workspace-links-v1';
const ALLOWED_ICONS = new Set(['globe','grid','database','trending','shield','book','image','calendar','clipboard','activity','users','link','monitor','star','external','edit','trash']);
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const cloneDefaults = () => DEFAULT_LINKS.map(link => ({...link}));
const state = { links:loadLinks(), tab:'web', query:'', category:'Semua', favoriteOnly:false, sort:'default', editId:null };
let toastTimeout;
let pendingConfirm = null;

function validateUrl(raw) {
  try {
    const withProtocol = /^https?:\/\//i.test(raw.trim()) ? raw.trim() : `https://${raw.trim()}`;
    const parsed = new URL(withProtocol);
    if (!['http:','https:'].includes(parsed.protocol) || !parsed.hostname || /\s/.test(withProtocol)) return null;
    return parsed.href;
  } catch { return null; }
}
function safeText(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function cleanLink(item) {
  if (!item || typeof item !== 'object') return null;
  const url = validateUrl(String(item.url || ''));
  const name = String(item.name || '').trim().slice(0,80);
  if (!name || !url || !['web','sheet'].includes(item.type)) return null;
  return {
    id:String(item.id || `custom-${makeId()}`).slice(0,90),
    type:item.type, name, url,
    category:String(item.category || 'Lainnya').trim().slice(0,28) || 'Lainnya',
    description:String(item.description || 'Tautan workspace 6S.').trim().slice(0,180) || 'Tautan workspace 6S.',
    icon:ALLOWED_ICONS.has(item.icon) ? item.icon : (item.type==='web'?'monitor':'database'),
    pairId:item.pairId ? String(item.pairId).slice(0,90) : undefined,
    starred:Boolean(item.starred)
  };
}
function loadLinks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return cloneDefaults();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length > 500) return cloneDefaults();
    const valid = parsed.map(cleanLink).filter(Boolean);
    const deduped = [...new Map(valid.map(link => [link.id,link])).values()];
    return deduped;
  } catch { return cloneDefaults(); }
}
function saveLinks() {
  try { localStorage.setItem(STORAGE_KEY,JSON.stringify(state.links)); }
  catch { showToast('Browser ini membatasi penyimpanan lokal.'); }
}
function makeId() { return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`; }
function icon(name, cls='icon') { return `<svg class="${cls}" aria-hidden="true"><use href="#i-${ALLOWED_ICONS.has(name)?name:'link'}"></use></svg>`; }
function domain(url) { try { return new URL(url).hostname.replace(/^www\./,''); } catch { return 'tautan eksternal'; } }
function count(type) { return state.links.filter(link=>link.type===type).length; }

function updateStats() {
  $('#stat-total').textContent = state.links.length.toString().padStart(2,'0');
  $('#stat-web').textContent = count('web').toString().padStart(2,'0');
  $('#stat-sheet').textContent = count('sheet').toString().padStart(2,'0');
  $('#stat-favorites').textContent = state.links.filter(link=>link.starred).length.toString().padStart(2,'0');
  $('#nav-web-count').textContent = count('web');
  $('#nav-sheet-count').textContent = count('sheet');
  $('.hero-status').innerHTML = '<span class="live-dot"></span> '+state.links.length+' link workspace tersedia';
}
function renderPinned() {
  const starred = state.links.filter(link=>link.starred);
  $('#pinned-links').innerHTML = starred.length
    ? starred.map(link=>`<a class="pinned-link" href="${safeText(link.url)}" target="_blank" rel="noopener noreferrer" title="Buka ${safeText(link.name)}">${icon(link.type==='sheet'?'database':'link','icon icon-sm')}<span class="pinned-title">${safeText(link.name)}</span></a>`).join('')
    : '<div class="pinned-empty">Belum ada favorit. Klik ikon bintang pada kartu.</div>';
}
function renderFilters() {
  const categories = ['Semua',...new Set(state.links.filter(link=>link.type===state.tab).map(link=>link.category))];
  if (!categories.includes(state.category)) state.category='Semua';
  $('#category-filters').innerHTML = categories.map(category=>`<button type="button" class="filter-pill ${category===state.category?'is-active':''}" data-category="${safeText(category)}" aria-pressed="${category===state.category}">${safeText(category)}</button>`).join('');
}
function getVisibleLinks() {
  const query = state.query.toLocaleLowerCase('id');
  let links = state.links.filter(link=>link.type===state.tab && (state.category==='Semua'||link.category===state.category) && (!state.favoriteOnly||link.starred) && [link.name,link.category,link.description,domain(link.url)].some(value=>value.toLocaleLowerCase('id').includes(query)));
  if (state.sort==='name') links.sort((a,b)=>a.name.localeCompare(b.name,'id'));
  else if (state.sort==='favorites') links.sort((a,b)=>Number(b.starred)-Number(a.starred));
  return links;
}
function linkCard(link,index) {
  const pair = state.links.find(item=>item.id===link.pairId);
  const categoryName = link.type==='web'?'WEB APP':'GOOGLE SHEET';
  return `<article class="link-card" style="animation-delay:${Math.min(index,12)*35}ms">
    <div class="card-top"><div class="card-icon ${link.type==='web'?'variant-dark':''}">${icon(link.icon)}</div>
      <div class="card-top-actions">
        <button type="button" class="card-action ${link.starred?'is-favorite':''}" data-action="star" data-id="${safeText(link.id)}" title="${link.starred?'Hapus dari favorit':'Tambahkan ke favorit'}" aria-label="${link.starred?'Hapus dari favorit':'Tambahkan ke favorit'} ${safeText(link.name)}" aria-pressed="${link.starred}">${icon('star')}</button>
        <button type="button" class="card-action" data-action="edit" data-id="${safeText(link.id)}" title="Edit tautan" aria-label="Edit ${safeText(link.name)}">${icon('edit')}</button>
        <button type="button" class="card-action" data-action="delete" data-id="${safeText(link.id)}" title="Hapus tautan" aria-label="Hapus ${safeText(link.name)}">${icon('trash')}</button>
      </div>
    </div>
    ${pair?`<button class="related-link" type="button" data-action="related" data-id="${safeText(pair.id)}" title="Lihat ${safeText(pair.name)}">${pair.type==='sheet'?'↗ DATABASE':'↗ APLIKASI'}</button>`:''}
    <span class="card-type">${categoryName} <span aria-hidden="true">·</span> ${safeText(link.category.toUpperCase())}</span>
    <h3 class="card-title">${safeText(link.name)}</h3>
    <p class="card-desc">${safeText(link.description)}</p>
    <div class="card-bottom"><div class="card-domain">${icon('globe')}<span title="${safeText(domain(link.url))}">${safeText(domain(link.url))}</span></div>
      <a class="open-link" href="${safeText(link.url)}" target="_blank" rel="noopener noreferrer" aria-label="Buka ${safeText(link.name)} di tab baru">Buka Link ${icon('external')}</a></div>
  </article>`;
}
function render() {
  const title = state.tab==='web'?'Web & Aplikasi':'Sheet Database';
  $('#crumb-current').textContent=title;
  $('#library-title').textContent=title;
  $('#library-subtitle').textContent=state.tab==='web'?'Akses langsung ke seluruh aplikasi dan dashboard 6S.':'Database, schedule, laporan, dan lembar kerja 6S dalam satu tempat.';
  $$('.nav-item').forEach(button=>{const active=button.dataset.tab===state.tab;button.classList.toggle('is-active',active);active?button.setAttribute('aria-current','page'):button.removeAttribute('aria-current');});
  $('#favorites-only').classList.toggle('is-active',state.favoriteOnly);
  $('#favorites-only').setAttribute('aria-pressed',String(state.favoriteOnly));
  updateStats();renderPinned();renderFilters();
  const visible = getVisibleLinks();
  $('#result-count').textContent = visible.length;
  $('#link-grid').innerHTML=visible.map(linkCard).join('');
  $('#empty-state').hidden=visible.length!==0;
}
function switchTab(tab) {
  if (!['web','sheet'].includes(tab)) return;
  state.tab=tab;state.category='Semua';state.favoriteOnly=false;state.query='';
  $('#search-input').value='';render();
}
function showToast(message) {
  const node=$('#toast');node.textContent=message;node.classList.add('is-visible');
  clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>node.classList.remove('is-visible'),3100);
}
function openEditDialog(id=null) {
  state.editId=id;
  const item=state.links.find(link=>link.id===id);
  $('#dialog-title').textContent=item?'Edit Link':'Tambah Link';
  $('#submit-label').textContent=item?'Simpan Perubahan':'Simpan Link';
  $('#link-form').reset();$('#form-error').hidden=true;
  $('#link-name').value=item?.name||'';
  $('#link-url').value=item?.url||'';
  $('#link-type').value=item?.type||state.tab;
  $('#link-category').value=item?.category||'';
  $('#link-description').value=item?.description||'';
  $('#link-dialog').showModal();
  $('#link-name').focus();
}
function closeEditDialog() { $('#link-dialog').close();state.editId=null; }
function submitLink(e) {
  e.preventDefault();
  const name=$('#link-name').value.trim();
  const url=validateUrl($('#link-url').value);
  const type=$('#link-type').value;
  const error=$('#form-error');
  if (!name || !url || !['web','sheet'].includes(type)) {error.textContent='Isi nama dan URL yang valid (http atau https).';error.hidden=false;return;}
  const original=state.links.find(link=>link.id===state.editId);
  const link={
    id:original?.id||`custom-${makeId()}`,name,url,type,
    category:$('#link-category').value.trim().slice(0,28)||'Lainnya',
    description:$('#link-description').value.trim().slice(0,180)||'Tautan workspace 6S.',
    icon:original?.icon || (type==='web'?'monitor':'database'),
    pairId:original?.pairId,starred:original?.starred||false
  };
  if (original) state.links=state.links.map(item=>item.id===original.id?link:item);
  else state.links.push(link);
  state.tab=type;state.category='Semua';state.favoriteOnly=false;state.query='';$('#search-input').value='';
  saveLinks();closeEditDialog();render();
  showToast(original?'Tautan berhasil diperbarui.':'Tautan berhasil ditambahkan.');
}
function confirmAction(title,message,callback) {
  $('#confirm-title').textContent=title;
  $('#confirm-message').textContent=message;
  pendingConfirm=callback;
  $('#confirm-dialog').showModal();
}
function closeConfirm() {$('#confirm-dialog').close();pendingConfirm=null;}
function exportLinks() {
  const text=JSON.stringify({version:1,exportedAt:new Date().toISOString(),links:state.links},null,2);
  const blob=new Blob([text],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const anchor=document.createElement('a');anchor.href=url;anchor.download='6s-workspace-links.json';document.body.appendChild(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);
  showToast('Daftar link berhasil diexport.');
}
async function importLinks(file) {
  if (!file) return;
  try {
    if (file.size>1000000) throw new Error('Ukuran file terlalu besar.');
    const parsed=JSON.parse(await file.text());
    const items=Array.isArray(parsed)?parsed:parsed.links;
    if (!Array.isArray(items) || !items.length || items.length>500) throw new Error('Format file tidak valid.');
    const valid=items.map(cleanLink).filter(Boolean);
    if (valid.length!==items.length) throw new Error('Ada tautan yang tidak valid dalam file.');
    const unique=[...new Map(valid.map(link=>[link.id,link])).values()];
    confirmAction('Import daftar link?',`Tindakan ini akan mengganti ${state.links.length} link yang tersimpan di browser ini dengan ${unique.length} link dari file.`,()=>{state.links=unique;saveLinks();state.category='Semua';state.query='';$('#search-input').value='';render();showToast('Daftar link berhasil diimport.');});
  } catch(err) {showToast(err.message||'File JSON tidak dapat dibaca.');}
  finally {$('#import-file').value='';}
}
function handleGridClick(e) {
  const trigger=e.target.closest('[data-action]');if (!trigger) return;
  const id=trigger.dataset.id,action=trigger.dataset.action;
  const link=state.links.find(item=>item.id===id);
  if (!link) return;
  if (action==='star') {link.starred=!link.starred;saveLinks();render();showToast(link.starred?'Ditambahkan ke favorit.':'Dihapus dari favorit.');}
  if (action==='edit') openEditDialog(id);
  if (action==='related') {switchTab(link.type);state.query=link.name;$('#search-input').value=link.name;render();$('#library').scrollIntoView({behavior:'smooth',block:'start'});}
  if (action==='delete') confirmAction('Hapus tautan?',`“${link.name}” akan dihapus dari daftar pada browser ini.`,()=>{state.links=state.links.filter(item=>item.id!==id);saveLinks();state.category='Semua';render();showToast('Tautan berhasil dihapus.');});
}
function init() {
  const date=new Date();
  $('#copyright-year').textContent=date.getFullYear();
  $('#today-label').textContent=new Intl.DateTimeFormat('id-ID',{weekday:'short',day:'numeric',month:'short',year:'numeric',timeZone:'Asia/Jakarta'}).format(date);
  $$('.nav-item').forEach(button=>button.addEventListener('click',()=>switchTab(button.dataset.tab)));
  $('#top-add-link').addEventListener('click',()=>openEditDialog());
  $('#hero-explore').addEventListener('click',()=>$('#library').scrollIntoView({behavior:'smooth'}));
  $('#search-input').addEventListener('input',event=>{state.query=event.target.value.trim();render();});
  $('#favorites-only').addEventListener('click',()=>{state.favoriteOnly=!state.favoriteOnly;render();});
  $('#sort-select').addEventListener('change',event=>{state.sort=event.target.value;render();});
  $('#category-filters').addEventListener('click',event=>{const button=event.target.closest('[data-category]');if(!button)return;state.category=button.dataset.category;render();});
  $('#link-grid').addEventListener('click',handleGridClick);
  $('#reset-filter').addEventListener('click',()=>{state.query='';state.category='Semua';state.favoriteOnly=false;$('#search-input').value='';render();});
  $('#close-dialog').addEventListener('click',closeEditDialog);
  $('#cancel-dialog').addEventListener('click',closeEditDialog);
  $('#link-form').addEventListener('submit',submitLink);
  $('#confirm-cancel').addEventListener('click',closeConfirm);
  $('#confirm-ok').addEventListener('click',()=>{const callback=pendingConfirm;closeConfirm();if(callback)callback();});
  $('#link-dialog').addEventListener('close',()=>{state.editId=null;});
  $('#confirm-dialog').addEventListener('close',()=>{pendingConfirm=null;});
  const toggle=$('#tools-toggle');const menu=$('#tools-popover');
  toggle.addEventListener('click',()=>{menu.hidden=!menu.hidden;toggle.setAttribute('aria-expanded',String(!menu.hidden));});
  document.addEventListener('click',event=>{if(!event.target.closest('.tool-menu-wrap')){menu.hidden=true;toggle.setAttribute('aria-expanded','false');}});
  $('#export-btn').addEventListener('click',()=>{menu.hidden=true;toggle.setAttribute('aria-expanded','false');exportLinks();});
  $('#import-btn').addEventListener('click',()=>{menu.hidden=true;toggle.setAttribute('aria-expanded','false');$('#import-file').click();});
  $('#import-file').addEventListener('change',event=>importLinks(event.target.files[0]));
  $('#restore-btn').addEventListener('click',()=>{menu.hidden=true;toggle.setAttribute('aria-expanded','false');confirmAction('Reset workspace?', 'Semua edit, link tambahan, dan favorit di browser ini akan kembali ke 15 tautan bawaan.',()=>{state.links=cloneDefaults();state.tab='web';state.category='Semua';state.query='';state.favoriteOnly=false;state.sort='default';$('#search-input').value='';$('#sort-select').value='default';saveLinks();render();showToast('Workspace berhasil direset.');});});
  document.addEventListener('keydown',event=>{
    if (event.key==='/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName) && !$('#link-dialog').open && !$('#confirm-dialog').open) {event.preventDefault();$('#search-input').focus();}
    if(event.key==='Escape' && !menu.hidden){menu.hidden=true;toggle.setAttribute('aria-expanded','false');}
  });
  render();
}

window.addEventListener('DOMContentLoaded',init);

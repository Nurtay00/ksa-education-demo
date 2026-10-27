const icons={home:'<path d="M3 11 12 3l9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',book:'<path d="M4 5a3 3 0 0 1 3-3h5v18H7a3 3 0 0 0-3 3z"/><path d="M20 5a3 3 0 0 0-3-3h-5v18h5a3 3 0 0 1 3 3z"/>',award:'<circle cx="12" cy="8" r="5"/><path d="m8.5 12-1 9 4.5-2 4.5 2-1-9"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.3 2.2c-.9.4-1.1 1-1.1 1.8M12 17h.01"/>',bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>'};
document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=`<svg viewBox="0 0 24 24">${icons[el.dataset.icon]}</svg>`});

const courses=[
 {id:'digital',category:'dentistry',cover:'cover-blue',symbol:'3D',label:'Цифровая стоматология',title:'Цифровой протокол: от сканирования до постоянной конструкции',hours:20,lessons:14,level:'Средний'},
 {id:'emergency',category:'medicine',cover:'cover-rust',symbol:'+',label:'Безопасность пациента',title:'Неотложная помощь в стоматологической практике',hours:24,lessons:16,level:'Базовый'},
 {id:'implant',category:'dentistry',cover:'cover-sage',symbol:'Ⅱ',label:'Имплантология',title:'Планирование имплантации: клинический минимум',hours:18,lessons:11,level:'Продвинутый'},
 {id:'endo',category:'dentistry',cover:'cover-violet',symbol:'✦',label:'Эндодонтия',title:'Современная эндодонтия: от диагностики до обтурации',hours:18,lessons:12,level:'Средний'},
 {id:'infection',category:'medicine',cover:'cover-ochre',symbol:'◎',label:'Инфекционный контроль',title:'Безопасная клиника: стерилизация и контроль рисков',hours:12,lessons:9,level:'Базовый'},
 {id:'clinic',category:'management',cover:'cover-slate',symbol:'K',label:'Управление клиникой',title:'Сервис и коммуникация с пациентом',hours:16,lessons:10,level:'Для руководителей'},
];

const courseArt={digital:'<path d="M8 9V4h5M27 4h5v5M32 27v5h-5M13 32H8v-5M13 12l7-4 7 4v12l-7 4-7-4zM13 12l7 4 7-4M20 16v12"/>',emergency:'<path d="M14 5h9v9h9v9h-9v9h-9v-9H5v-9h9z"/>',implant:'<path d="M12 14c-4-6-4-11 0-12 3-1 4 1 6 1s4-2 7-1c5 1 5 7 1 12M11 14h16M13 18h12M14 22h10M15 26h8M16 30h6M18 34h2"/>',endo:'<path d="M19 8c-6-6-14-5-14 4 0 6 3 9 4 16 1 6 4 7 6 0l3-7h2l3 7c2 7 5 6 6 0 1-7 4-10 4-16 0-9-8-10-14-4zM19 9v11"/>',infection:'<path d="m19 3 13 5v10c0 7-7 13-13 16C13 31 6 25 6 18V8zM12 18l5 5 10-11"/>',clinic:'<path d="M6 33V5h24v28M3 33h30M15 33V23h6v10M11 10h3M22 10h3M11 16h3M22 16h3"/>'};
courses.forEach(c=>c.symbol=`<svg viewBox="0 0 38 38" aria-hidden="true">${courseArt[c.id]}</svg>`);
function card(c){return `<article class="course-card" role="button" tabindex="0" aria-label="Открыть курс: ${c.title}" data-course="${c.id}" data-category="${c.category}"><div class="card-cover ${c.cover}"><span>${c.label}</span><b>${c.symbol}</b></div><div class="course-card-content"><div class="meta">${c.level}</div><h3>${c.title}</h3><p>Практические материалы, клинические кейсы и итоговый контроль знаний.</p><div class="card-bottom"><span>${c.lessons} уроков</span><span>·</span><b>${c.hours} ч обучения</b><span class="card-arrow">↗</span></div></div></article>`}
document.getElementById('dashboardCards').innerHTML=courses.slice(0,3).map(card).join('');
const catalog=document.getElementById('catalogCards');catalog.innerHTML=courses.map(card).join('');

const learning=[{...courses[3],progress:67,status:'Продолжить обучение'},{...courses[0],progress:28,status:'Продолжить обучение'},{...courses[1],progress:100,status:'Курс завершён'}];
document.getElementById('learningList').innerHTML=learning.map(c=>`<article class="learning-item"><div class="learning-cover ${c.cover}">${c.symbol}</div><div class="learning-info"><small>${c.label} · ${c.hours} часов</small><h3>${c.title}</h3><p>${c.progress===100?'Сертификат доступен':'Следующий урок: клинический разбор и практическое задание'}</p><div class="progress"><i style="width:${c.progress}%"></i></div></div><div class="learning-action"><button class="${c.progress===100?'outline-button':'primary-button compact'}" data-course="${c.id}">${c.progress===100?'Открыть сертификат':c.status} <span>→</span></button></div></article>`).join('');

const titles={dashboard:['Личный кабинет','Обзор обучения'],catalog:['Библиотека знаний','Каталог курсов'],learning:['Персональный кабинет','Моё обучение'],certificates:['Профессиональное портфолио','Сертификаты'],calendar:['Расписание','Календарь обучения'],course:['Учебный модуль','Просмотр курса']};
let previousPage='dashboard';
function showPage(name){
 if(name==='course') previousPage=document.querySelector('.page.active')?.id.replace('page-','')||'dashboard';
 document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===`page-${name}`));
 document.querySelectorAll('.nav-item[data-page]').forEach(n=>n.classList.toggle('active',n.dataset.page===name));
 document.getElementById('eyebrow').textContent=titles[name][0];document.getElementById('pageTitle').textContent=titles[name][1];
 document.getElementById('sidebar').classList.remove('open');window.scrollTo({top:0,behavior:'smooth'});
}
document.addEventListener('click',e=>{const page=e.target.closest('[data-page]');if(page){e.preventDefault();showPage(page.dataset.page)}const course=e.target.closest('[data-course]');if(course){e.preventDefault();openCourse(course.dataset.course)}});
document.getElementById('menuButton').onclick=()=>document.getElementById('sidebar').classList.toggle('open');
document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.course-card')){e.preventDefault();openCourse(e.target.dataset.course)}});
document.getElementById('courseBack').onclick=()=>showPage(previousPage==='course'?'dashboard':previousPage);

function openCourse(id){
 const c=courses.find(x=>x.id===id)||courses[3];
document.getElementById('courseView').innerHTML=`<div class="course-detail-hero"><div><span class="kicker"><i></i>${c.label} · ${c.level}</span><h1>${c.title}</h1><p>Курс объединяет доказательный подход, пошаговые клинические протоколы и разбор реальных ситуаций. После завершения уроков и итогового теста вы получите сертификат KSA.</p><div class="detail-meta"><span>◷ ${c.hours} зачётных часов</span><span>▤ ${c.lessons} уроков</span><span>✓ Итоговая аттестация</span></div></div><div class="course-detail-art ${c.cover}">${c.symbol}</div></div><div class="course-workspace"><div><div class="lesson-player"><div><button class="play-button" id="playLesson">▶</button><b>Диагностика и планирование лечения</b><small>Урок 4 · 18 минут</small></div></div><div class="lesson-content"><span class="panel-kicker">О текущем уроке</span><h2>Клиническое мышление и выбор протокола</h2><p>На этом уроке лектор показывает, как перейти от первичной диагностики к обоснованному плану лечения. Изучите материал, разберите клинический случай и проверьте понимание темы с помощью вопросов к уроку.</p><button class="primary-button compact" id="completeLesson">Отметить урок пройденным <span>✓</span></button></div></div><aside class="curriculum"><h3>Программа курса</h3>${[1,2,3].map((m)=>`<div class="module"><div class="module-title"><span>Модуль ${m}</span><span>${m===1?'3/3':m===2?'1/4':'0/3'}</span></div>${[1,2,3].map((l)=>`<div class="lesson ${m===1||m===2&&l===1?'done':''} ${m===2&&l===2?'active':''}"><i>${m===1||m===2&&l===1?'✓':'▶'}</i><span>${['Основы и диагностика','Клинический протокол','Практический разбор'][l-1]}</span></div>`).join('')}</div>`).join('')}<div class="module"><div class="module-title"><span>Итоговый тест</span><span>🔒</span></div></div></aside></div>`;
 showPage('course');
 document.getElementById('playLesson').onclick=()=>showToast('Видео открыто','В демо включён режим просмотра урока');
 document.getElementById('completeLesson').onclick=()=>showToast('Урок завершён','Прогресс курса обновлён');
}

document.querySelectorAll('.filter').forEach(f=>f.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));f.classList.add('active');filterCourses()});
document.getElementById('courseSearch').addEventListener('input',filterCourses);
function filterCourses(){const cat=document.querySelector('.filter.active').dataset.filter;const q=document.getElementById('courseSearch').value.toLowerCase();catalog.querySelectorAll('.course-card').forEach((el,i)=>{const c=courses[i];el.style.display=(cat==='all'||c.category===cat)&&c.title.toLowerCase().includes(q)?'block':'none'})}

const days=[];for(let i=28;i<=30;i++)days.push({n:i,f:true});for(let i=1;i<=31;i++)days.push({n:i,t:i===27,e:i===6?'Вебинар · 19:00':i===18?'Срок задания':i===27?'LIVE · 18:00':i===30?'Итоговый тест':''});for(let i=1;i<=8;i++)days.push({n:i,f:true});document.getElementById('calendarGrid').innerHTML=days.slice(0,35).map(d=>`<div class="${d.f?'faded':''} ${d.t?'today':''}"><b>${d.n}</b>${d.e?`<span class="event-chip">${d.e}</span>`:''}</div>`).join('');

function showToast(title,text){const t=document.getElementById('toast');t.querySelector('b').textContent=title;t.querySelector('p').textContent=text;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2600)}
document.getElementById('downloadCertificate').onclick=()=>showToast('Сертификат подготовлен','В полной версии начнётся загрузка PDF');

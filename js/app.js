// Lógica da página: filtros, busca, expansão de linhas e contador.
// Depende de DATA, definido em data.js (carregado antes deste arquivo).
(function(){

  const CATS = [...new Set(DATA.map(d => d.cat))];

  // ---------- STATE ----------
  let activeCat = "Todas";
  let query = "";

  // ---------- RENDER FILTERS ----------
  const filtersEl = document.getElementById('filters');
  function renderFilters(){
    const cats = ["Todas", ...CATS];
    filtersEl.innerHTML = cats.map(c =>
      `<button class="filter-btn${c === activeCat ? ' active' : ''}" data-cat="${c}">${c}</button>`
    ).join('');
    filtersEl.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCat = btn.dataset.cat;
        renderFilters();
        renderRows();
      });
    });
  }

  // ---------- RENDER ROWS ----------
  const rowsEl = document.getElementById('rows');
  const emptyEl = document.getElementById('empty');
  const matchLineEl = document.getElementById('matchLine');
  const footCountEl = document.getElementById('footCount');

  function getFiltered(){
    return DATA.filter(item => {
      const matchCat = activeCat === "Todas" || item.cat === activeCat;
      const q = query.trim().toLowerCase();
      const matchQuery = !q ||
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.cat.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }

  function renderRows(){
    const filtered = getFiltered();

    matchLineEl.innerHTML = `<b>${filtered.length}</b> de ${DATA.length} tarefas correspondem ao filtro atual`;
    footCountEl.textContent = `${DATA.length} fichas no catálogo`;

    if(filtered.length === 0){
      rowsEl.innerHTML = '';
      emptyEl.style.display = 'block';
      return;
    }
    emptyEl.style.display = 'none';

    rowsEl.innerHTML = filtered.map((item, i) => `
      <div class="row" data-index="${i}">
        <span class="cat">${item.cat}</span>
        <div>
          <div class="row-head">
            <h3>${item.title}</h3>
            <span class="toggle">+</span>
          </div>
          <p class="desc">${item.desc}</p>
          <div class="example">
            <span class="tag">Exemplo de uso</span>
            ${item.example}
          </div>
        </div>
      </div>
    `).join('');

    rowsEl.querySelectorAll('.row').forEach(row => {
      row.addEventListener('click', () => {
        const isOpen = row.classList.contains('open');
        row.classList.toggle('open');
        row.querySelector('.toggle').textContent = isOpen ? '+' : '–';
      });
    });
  }

  // ---------- SEARCH ----------
  document.getElementById('search').addEventListener('input', (e) => {
    query = e.target.value;
    renderRows();
  });

  // ---------- COUNTER ----------
  (function(){
    const el = document.getElementById('counter');
    const target = DATA.length;
    const duration = 900;
    const start = performance.now();
    function tick(now){
      const p = Math.min(1, (now - start) / duration);
      el.textContent = Math.floor(p * target).toLocaleString('pt-BR');
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString('pt-BR');
    }
    requestAnimationFrame(tick);
  })();

  // ---------- INIT ----------
  renderFilters();
  renderRows();

})();

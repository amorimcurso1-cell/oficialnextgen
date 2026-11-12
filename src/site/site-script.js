// @ts-nocheck
export function runSite(){
document.querySelectorAll('video').forEach((v)=>{v.muted=true;v.loop=true;v.playsInline=true;});
// de cima (palco): parado na capa. de baixo (vitrine): rodando.
document.querySelectorAll('.palco video').forEach((v)=>{v.pause();v.currentTime=0;});
document.querySelectorAll('.vitrine video').forEach((v)=>{const p=v.play();if(p)p.catch(()=>{});});

// ===== troque aqui =====
const CHECKOUT_LANCAMENTO = 'https://pay.hub.la/0cUHHmyRy4HV44dk71bS'; // link da Hubla com R$ 29,90
const CHECKOUT_NORMAL = 'https://pay.hub.la/IgAt7LcSXawQIGGUsCdC';     // link da Hubla com R$ 97 (entra sozinho depois de 26/11)
const PACOTE = 'https://pay.hub.la/GiQDmFj4MdJwn9m3FqLN';              // link do pacote R$ 67
// datas reais (horário de Brasília)
const LANCAMENTO = new Date('2026-11-19T00:00:00-03:00');
const FIM_PRECO = new Date('2026-11-26T23:59:59-03:00');
// =======================

const $$ = (s) => document.querySelectorAll(s);
const set = (s, v) => $$(s).forEach((e) => (e.textContent = v));
const dois = (n) => String(n).padStart(2, '0');

function fase(agora) {
  if (agora < LANCAMENTO) return {alvo: LANCAMENTO, rotulo: 'até o lançamento do GTA 6', curto: 'GTA 6 em', preco: '29,90'};
  if (agora < FIM_PRECO) return {alvo: FIM_PRECO, rotulo: 'pro preço de lançamento acabar', curto: 'R$ 29,90 acaba em', preco: '29,90'};
  return {alvo: null, preco: '97'};
}

function precos(p) {
  const lanc = p === '29,90';
  set('[data-preco]', p);
  set('[data-preco-linha]', 'R$ ' + p);
  set('[data-preco-grande]', 'R$ ' + p);
  set('[data-preco-btn]', 'R$ ' + p);
  $$('[data-preco-de]').forEach((e) => (e.style.display = lanc ? '' : 'none'));
  set('[data-preco-texto]', lanc ? 'R$ 29,90 só na semana do lançamento' : 'R$ 97, pagamento único');
  set('[data-ps]', lanc ? 'R$ 29,90 só até 26/11. Depois volta pra R$ 97. E cada dia que passa é um dia a menos de vantagem.' : 'O preço de lançamento acabou, mas o GTA 6 vai render cortes por anos. Quanto antes você começar, maior a vantagem.');
  $$('[data-checkout]').forEach((a) => (a.href = lanc ? CHECKOUT_LANCAMENTO : CHECKOUT_NORMAL));
  $$('[data-pacote]').forEach((a) => (a.href = PACOTE));
}

// teste: ?agora=2026-11-20T10:00:00-03:00
const TESTE = new URLSearchParams(location.search).get('agora');
const desvio = TESTE ? new Date(TESTE) - new Date() : 0;
function tique() {
  const agora = new Date(Date.now() + desvio);
  const f = fase(agora);
  precos(f.preco);
  if (!f.alvo) {
    $$('.relogio, [data-rotulo]').forEach((e) => (e.style.display = 'none'));
    set('[data-relogio-curto]', '');
    set('[data-rotulo-curto]', '');
    set('[data-selo]', 'O GTA 6 já saiu · a onda de cortes começou');
    set('[data-frase]', 'já lançou.');
    return;
  }
  let s = Math.max(0, Math.floor((f.alvo - agora) / 1000));
  const d = Math.floor(s / 86400); s -= d * 86400;
  const h = Math.floor(s / 3600); s -= h * 3600;
  const m = Math.floor(s / 60); s -= m * 60;
  set('[data-d]', dois(d)); set('[data-h]', dois(h)); set('[data-m]', dois(m)); set('[data-s]', dois(s));
  set('[data-rotulo]', f.rotulo);
  set('[data-rotulo-curto]', f.curto);
  set('[data-relogio-curto]', `${d}d ${dois(h)}h ${dois(m)}m`);
  if (agora < LANCAMENTO) set('[data-frase]', d >= 2 ? `lança em ${d} dias.` : d === 1 ? 'lança amanhã.' : 'lança hoje.');
  else { set('[data-frase]', 'já lançou.'); set('[data-selo]', 'O GTA 6 saiu · a onda de cortes é agora'); }
}
tique();
setInterval(tique, 1000);

// toque no corte da vitrine: liga/desliga o som (só um tocando com som por vez)
$$('.fone.grande').forEach((f) => f.addEventListener('click', () => {
  const v = f.querySelector('video');
  const ligar = v.muted;
  $$('.fone.grande video').forEach((o) => { o.muted = true; o.parentElement.querySelector('.som').textContent = '🔇'; });
  if (ligar) { v.muted = false; v.currentTime = 0; v.play(); f.querySelector('.som').textContent = '🔊'; }
}));

// entrada suave ao rolar
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('ok'), io.unobserve(e.target))), {threshold: 0.15});
$$('.aparece').forEach((e) => io.observe(e));

}

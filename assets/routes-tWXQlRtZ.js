import{n as e,r as t,t as n}from"./index-BEQajc1z.js";var r=t(e()),i=`
:root{
  --bg:#050407; --bg2:#0B090F; --card:rgba(255,255,255,.035); --linha:rgba(255,255,255,.08); --linha2:rgba(255,255,255,.14);
  --tx:#F5F1F4; --tx2:#A9A0AD; --tx3:#6E6573;
  --rosa:#FF3D9A; --laranja:#FF8A3C; --ciano:#46E3F0; --amarelo:#FFD84D; --violeta:#9B5CFF;
  --por:linear-gradient(95deg,#FFB35C 0%,#FF5E7A 38%,#FF3D9A 62%,#9B5CFF 100%);
  --max:1160px; --ease:cubic-bezier(.16,1,.3,1);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--tx);font:400 17px/1.65 Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
body:after{content:"";position:fixed;inset:0;pointer-events:none;z-index:100;opacity:.05;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
img,video{display:block;max-width:100%}
a{color:inherit}
.wrap{max-width:var(--max);margin:0 auto;padding:0 22px}
section{padding:130px 0;position:relative}
h1,h2,h3{font-family:'Inter Tight',sans-serif;font-weight:500;letter-spacing:-.04em;line-height:1;text-wrap:balance}
h1{font-size:clamp(42px,6.6vw,92px);font-weight:500;letter-spacing:-.05em;line-height:.98}
h2{font-size:clamp(34px,5.2vw,68px);margin-bottom:22px}
h3{font-size:20px;font-weight:600;letter-spacing:-.02em;line-height:1.25;margin-bottom:8px}
.g{background:linear-gradient(95deg,#fff 0%,#FFC2DD 35%,#FF7FB6 60%,rgba(255,140,190,.35) 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.kicker{display:inline-flex;align-items:center;gap:10px;font:500 12px/1 'JetBrains Mono',monospace;letter-spacing:.24em;text-transform:uppercase;color:var(--tx2);margin-bottom:26px}
.kicker:before{content:"";width:22px;height:1px;background:var(--por)}
.lead{font-size:clamp(18px,1.9vw,20px);color:var(--tx2);max-width:640px}
.mut{color:var(--tx2)}
.centro{text-align:center}.centro .lead{margin-left:auto;margin-right:auto}.centro .kicker:after{content:"";width:22px;height:1px;background:var(--por)}

/* botão */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:12px;color:#120810;background:#fff;text-decoration:none;font:600 17px/1 'Inter Tight',sans-serif;letter-spacing:-.01em;padding:20px 34px;border-radius:999px;box-shadow:0 0 0 1px rgba(255,255,255,.4),0 18px 60px -14px rgba(255,61,154,.75),0 0 90px -30px rgba(255,138,60,.9);transition:transform .35s var(--ease),box-shadow .35s var(--ease);overflow:hidden;isolation:isolate}
.btn:before{content:"";position:absolute;inset:0;z-index:-1;background:var(--por);opacity:0;transition:opacity .35s var(--ease)}
.btn:hover{transform:translateY(-2px);color:#fff}
.btn:hover:before{opacity:1}
.btn:after{content:"→";font-family:Inter;transition:transform .35s var(--ease)}
.btn:hover:after{transform:translateX(4px)}
.sub-btn{margin-top:12px;font-size:14px;color:var(--tx3)}

/* topo */
.barra{position:fixed;left:0;right:0;top:14px;z-index:30;pointer-events:none}
.barra .wrap{display:flex;align-items:center;justify-content:space-between;gap:14px;max-width:820px;padding:9px 9px 9px 22px;border-radius:999px;background:rgba(14,11,18,.62);backdrop-filter:blur(18px) saturate(1.4);-webkit-backdrop-filter:blur(18px) saturate(1.4);border:1px solid var(--linha);pointer-events:auto}
.marca{font:700 15px/1 'Inter Tight',sans-serif;letter-spacing:-.02em}
.marca span{background:var(--por);-webkit-background-clip:text;background-clip:text;color:transparent}
.mini-relogio{display:flex;align-items:center;gap:12px;font:500 12.5px/1 'JetBrains Mono',monospace;color:var(--tx2)}
.mini-relogio b{color:var(--tx);font-weight:600}
.mini-relogio a{background:#fff;color:#120810;text-decoration:none;padding:10px 16px;border-radius:999px;font:600 13px/1 'Inter Tight',sans-serif}

/* hero */
.hero{min-height:100vh;padding:150px 0 0;overflow:hidden;position:relative;isolation:isolate}
.hero-bg{position:absolute;inset:0;z-index:-2}
.hero-bg video{width:100%;height:100%;object-fit:cover;opacity:.28;filter:saturate(1.2) blur(2px);transform:scale(1.06)}
.hero-bg:after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 70% 55% at 50% 38%,rgba(5,4,7,.35),rgba(5,4,7,.92) 75%),linear-gradient(180deg,rgba(5,4,7,.55) 0%,rgba(5,4,7,.2) 40%,var(--bg) 92%)}
.aurora{position:absolute;inset:-20% -10% auto;height:120%;z-index:-1;pointer-events:none;background:radial-gradient(40% 35% at 18% 70%,rgba(255,138,60,.22),transparent 70%),radial-gradient(38% 32% at 82% 64%,rgba(155,92,255,.22),transparent 70%),radial-gradient(30% 25% at 50% 92%,rgba(255,61,154,.25),transparent 70%);filter:blur(10px)}
.selo{display:inline-flex;gap:10px;align-items:center;border:1px solid var(--linha2);background:rgba(255,255,255,.04);backdrop-filter:blur(8px);color:var(--tx);padding:9px 16px 9px 12px;border-radius:999px;font:500 12px/1 'JetBrains Mono',monospace;letter-spacing:.12em;text-transform:uppercase;margin-bottom:34px}
.selo:before{content:"";width:7px;height:7px;border-radius:50%;background:#ff3b3b;box-shadow:0 0 0 4px rgba(255,59,59,.18),0 0 14px #ff3b3b;animation:pisca 1.6s infinite}
@keyframes pisca{50%{opacity:.35}}
.hero h1 .l2{display:block;color:var(--tx2);font-weight:600}
.relogio{display:inline-flex;justify-content:center;gap:4px;margin:42px 0 12px;padding:8px;border-radius:22px;background:rgba(255,255,255,.035);border:1px solid var(--linha);backdrop-filter:blur(10px)}
.relogio div{min-width:92px;padding:14px 10px 12px;border-radius:15px;position:relative}
.relogio div+div:before{content:"";position:absolute;left:-2px;top:22%;bottom:22%;width:1px;background:var(--linha)}
.relogio b{display:block;font:600 clamp(34px,4.6vw,50px)/1 'Inter Tight',sans-serif;letter-spacing:-.04em;color:var(--tx);font-variant-numeric:tabular-nums}
.relogio span{font:500 10.5px/1 'JetBrains Mono',monospace;letter-spacing:.22em;color:var(--tx3);text-transform:uppercase}
.rotulo-relogio{font:500 12px/1 'JetBrains Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:var(--tx3)}
.preco-hero{font:500 14.5px/1.5 Inter,sans-serif;color:var(--tx3);margin-top:18px;text-align:center}

/* palco dos celulares */
.palco{position:relative;margin-top:80px;height:560px;perspective:1600px}
.palco .fone{position:absolute;left:50%;bottom:-60px;width:250px;transform-origin:bottom center}
.palco .fone:nth-child(1){transform:translateX(-50%) translateX(-270px) rotateY(18deg) rotateZ(-6deg) scale(.88)}
.palco .fone:nth-child(2){transform:translateX(-50%);z-index:2;width:270px}
.palco .fone:nth-child(3){transform:translateX(-50%) translateX(270px) rotateY(-18deg) rotateZ(6deg) scale(.88)}
.palco:after{content:"";position:absolute;left:0;right:0;bottom:-2px;height:180px;background:linear-gradient(transparent,var(--bg));z-index:3;pointer-events:none}
.fone{aspect-ratio:9/19;border-radius:42px;padding:10px;background:linear-gradient(145deg,#2b2630,#0d0b10 40%,#1c1820);box-shadow:0 0 0 1px rgba(255,255,255,.12) inset,0 0 0 1px #000,0 50px 120px -30px rgba(0,0,0,.9),0 30px 90px -40px rgba(255,61,154,.55);position:relative}
.fone .tela{position:relative;width:100%;height:100%;border-radius:33px;overflow:hidden;background:#000}
.fone .tela:before{content:"";position:absolute;left:50%;top:10px;width:30%;height:22px;transform:translateX(-50%);background:#000;border-radius:20px;z-index:2}
.fone .tela:after{content:"";position:absolute;inset:0;background:linear-gradient(125deg,rgba(255,255,255,.12),transparent 35%);pointer-events:none}
.fone video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.fone .som{position:absolute;right:14px;bottom:14px;z-index:3;background:rgba(0,0,0,.55);backdrop-filter:blur(6px);border-radius:999px;padding:7px 10px;font-size:13px;line-height:1}
.legenda-demo{position:relative;z-index:4;margin-top:-40px;font:500 12px/1.5 'JetBrains Mono',monospace;letter-spacing:.06em;color:var(--tx3);text-align:center}

/* vitrine */
.vitrine{display:grid;grid-template-columns:repeat(3,1fr);gap:34px;margin-top:64px;max-width:900px;margin-left:auto;margin-right:auto}
.vitrine figure{margin:0}
.vitrine .fone{cursor:pointer;transition:transform .5s var(--ease)}
.vitrine .fone:hover{transform:translateY(-8px)}
.vitrine figcaption{margin-top:18px;font:500 12px/1.5 'JetBrains Mono',monospace;letter-spacing:.06em;color:var(--tx3);text-transform:uppercase}
.vitrine figcaption b{color:var(--tx);font-weight:600}
.nota{font-size:12.5px;color:var(--tx3);margin-top:14px;line-height:1.6}

/* moldura com borda degradê */
.vidro{position:relative;background:var(--card);border-radius:24px;border:1px solid var(--linha);backdrop-filter:blur(10px)}
.vidro.brilho:before{content:"";position:absolute;inset:-1px;border-radius:inherit;padding:1px;background:linear-gradient(140deg,rgba(255,179,92,.55),rgba(255,61,154,.25) 35%,transparent 60%,rgba(155,92,255,.45));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}

/* lead */
.lead-sec .grande-txt{font:500 clamp(26px,3.3vw,40px)/1.25 'Inter Tight',sans-serif;letter-spacing:-.025em;color:var(--tx);max-width:960px}
.lead-sec .grande-txt em{font-style:normal;color:var(--tx2)}
.lead-sec .grande-txt .apaga{color:var(--tx3)}

/* passos */
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:64px}
.card{padding:30px 26px 28px;border-radius:24px;background:var(--card);border:1px solid var(--linha);transition:border-color .4s,transform .5s var(--ease)}
.card:hover{border-color:var(--linha2);transform:translateY(-4px)}
.card .n{font:300 56px/1 'Inter Tight',sans-serif;letter-spacing:-.05em;background:linear-gradient(180deg,#fff,rgba(255,255,255,.2));-webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:34px}
.card p{color:var(--tx2);font-size:15px;line-height:1.6}
.cards.tres{grid-template-columns:repeat(3,1fr)}

.lista{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:48px}
.lista li{padding:24px 26px;border-radius:20px;background:var(--card);border:1px solid var(--linha);font-size:15.5px;color:var(--tx2)}
.lista b{display:block;color:var(--tx);font:600 18px/1.3 'Inter Tight',sans-serif;letter-spacing:-.015em;margin-bottom:6px}

/* dois formatos */
.formatos{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:64px}
.formato{padding:40px 36px;overflow:hidden}
.formato .tag{display:inline-block;font:500 11px/1 'JetBrains Mono';letter-spacing:.2em;text-transform:uppercase;margin-bottom:28px;color:var(--tx2)}
.formato .forma{height:120px;margin-bottom:30px;display:flex;align-items:flex-end;gap:10px}
.formato.curto .forma i{width:44px;aspect-ratio:9/16;border-radius:9px;background:linear-gradient(180deg,rgba(70,227,240,.35),rgba(70,227,240,.05));border:1px solid rgba(70,227,240,.4)}
.formato.curto .forma i:nth-child(2){height:100%;width:auto}
.formato.longo .forma i{flex:0 0 220px;aspect-ratio:16/9;border-radius:10px;background:linear-gradient(180deg,rgba(255,138,60,.35),rgba(255,138,60,.05));border:1px solid rgba(255,138,60,.45);position:relative}
.formato.longo .forma i:after{content:"";position:absolute;left:10px;right:10px;bottom:10px;height:3px;border-radius:3px;background:linear-gradient(90deg,var(--laranja) 38%,rgba(255,255,255,.2) 38%)}
.formato h3{font-size:26px}
.formato ul{list-style:none;margin-top:22px;display:grid;gap:10px;color:var(--tx2);font-size:15.5px}
.formato li{padding-left:22px;position:relative}
.formato li:before{content:"";position:absolute;left:0;top:.7em;width:10px;height:1px;background:var(--por)}

/* estilos */
.estilos{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-top:56px}
.est{aspect-ratio:9/16;border-radius:20px;overflow:hidden;position:relative;border:1px solid var(--linha);background:radial-gradient(circle at 70% 25%,rgba(155,92,255,.35),transparent 50%),radial-gradient(circle at 20% 90%,rgba(255,138,60,.25),transparent 50%),linear-gradient(180deg,#17111f,#08070b)}
.est .t{position:absolute;left:6px;right:6px;top:58%;text-align:center;transform:translateY(-50%)}
.est .nome{position:absolute;left:0;right:0;bottom:12px;text-align:center;font:500 10px/1 'JetBrains Mono';letter-spacing:.16em;text-transform:uppercase;color:var(--tx2)}
.e1{font:900 17px/1.05 'Inter Tight';text-transform:uppercase;color:#fff;-webkit-text-stroke:4px #000;paint-order:stroke fill}.e1 em{font-style:normal;color:var(--amarelo)}
.e2{font:900 19px/1.05 'Inter Tight';text-transform:uppercase;-webkit-text-stroke:4px #000;paint-order:stroke fill}.e2 i{font-style:normal;color:#3DFF6E}.e2 u{text-decoration:none;color:#FF5A5A}
.e3{font:800 12px/1.3 Inter;color:rgba(255,255,255,.5);-webkit-text-stroke:3px #000;paint-order:stroke fill}.e3 em{font-style:normal;color:var(--amarelo)}.e3 b{color:#fff}
.e4 span{display:inline-block;font:900 12px/1 'Inter Tight';text-transform:uppercase;color:#fff;background:rgba(0,0,0,.8);padding:5px 7px;border-radius:7px;margin:2px}.e4 span.on{background:var(--rosa)}
.e5{font:600 14px/1.2 Inter;color:#fff;text-shadow:0 2px 8px #000}
.e6{font:900 17px/1.05 'Inter Tight';text-transform:uppercase;color:#fff;-webkit-text-stroke:4px #000;paint-order:stroke fill}.e6 em{font-style:normal;color:var(--amarelo)}.e6 .emo{display:block;font-size:26px;-webkit-text-stroke:0;margin-bottom:4px}

/* dinheiro */
.prova{display:grid;grid-template-columns:1.1fr 1fr;gap:56px;align-items:center;margin-top:56px;padding:56px}
.grande{font:600 clamp(80px,12vw,168px)/.85 'Inter Tight',sans-serif;letter-spacing:-.06em;background:linear-gradient(180deg,#fff 30%,rgba(255,255,255,.35));-webkit-background-clip:text;background-clip:text;color:transparent}
.grande em{font-style:normal;background:var(--por);-webkit-background-clip:text;background-clip:text;color:transparent}
.grande small{display:block;font:500 12px/1.6 'JetBrains Mono';letter-spacing:.16em;text-transform:uppercase;color:var(--tx2);-webkit-text-fill-color:var(--tx2);margin-top:22px}

/* custo */
.conta{max-width:720px;margin:56px auto 0;display:grid;gap:10px}
.linha-conta{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:22px 28px;border-radius:20px;background:var(--card);border:1px solid var(--linha);text-align:left}
.linha-conta b{font:600 20px/1.2 'Inter Tight';letter-spacing:-.02em}
.linha-conta .mut{font-size:14.5px;margin-top:4px}
.linha-conta b.g{font-size:30px}
.linha-conta.nao{background:transparent;border-style:dashed}
.linha-conta.nao b{text-decoration:line-through;text-decoration-thickness:1px;color:var(--tx3);font-weight:500}
.mais{display:grid;place-items:center;font:300 26px/1 'Inter Tight';color:var(--tx3);height:20px}

/* oferta */
.oferta{max-width:620px;margin:64px auto 0;padding:52px 46px;text-align:center;box-shadow:0 40px 140px -50px rgba(255,61,154,.55)}
.oferta .tag-of{display:inline-block;font:500 11px/1 'JetBrains Mono';letter-spacing:.2em;text-transform:uppercase;color:#120810;background:var(--por);padding:8px 12px;border-radius:999px;margin-bottom:30px}
.oferta ul{list-style:none;text-align:left;display:grid;gap:16px;margin:0 0 36px;padding-bottom:34px;border-bottom:1px solid var(--linha)}
.oferta li{display:grid;grid-template-columns:22px 1fr;gap:12px;font-size:15.5px;color:var(--tx2)}
.oferta li:before{content:"";width:18px;height:18px;margin-top:3px;border-radius:50%;background:var(--por);-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M10 0a10 10 0 100 20 10 10 0 000-20zm-1.5 14.2L4.3 10l1.4-1.4 2.8 2.8 5.8-5.8 1.4 1.4-7.2 7.2z'/%3E%3C/svg%3E") center/contain no-repeat}
.oferta li b{color:var(--tx);font-weight:600}
.preco s{font:500 20px/1 'Inter Tight';color:var(--tx3)}
.preco strong{display:block;font:600 96px/1 'Inter Tight';letter-spacing:-.06em;color:var(--tx);margin:10px 0 8px}
.preco small{font:500 12px/1 'JetBrains Mono';letter-spacing:.14em;text-transform:uppercase;color:var(--tx3)}
.oferta .relogio{margin:26px 0 8px;transform:scale(.82)}
.combo{margin-top:30px;padding:20px 22px;border-radius:18px;background:rgba(255,255,255,.03);border:1px solid var(--linha);font-size:14.5px;color:var(--tx2);text-align:left}
.combo a{color:var(--tx);font-weight:600;text-decoration:none;border-bottom:1px solid var(--rosa);white-space:nowrap}

.garantia{display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:center;max-width:620px;margin:16px auto 0;padding:26px 30px}
.escudo{width:66px;height:66px;border-radius:50%;display:grid;place-items:center;font:300 30px/1 'Inter Tight';color:var(--tx);border:1px solid var(--linha2);background:radial-gradient(circle at 30% 25%,rgba(70,227,240,.25),transparent 70%)}
.garantia p{color:var(--tx2);font-size:15px}

.aviso{max-width:720px;margin:0 auto;padding:30px 34px}
.aviso p{color:var(--tx2);font-size:15.5px}

/* faq */
.faq{max-width:760px;margin:56px auto 0;border-top:1px solid var(--linha)}
.faq details{border-bottom:1px solid var(--linha);padding:24px 4px}
.faq summary{cursor:pointer;font:500 19px/1.35 'Inter Tight';letter-spacing:-.015em;list-style:none;display:flex;justify-content:space-between;gap:18px}
.faq summary::-webkit-details-marker{display:none}
.faq summary:after{content:"+";font:300 26px/1 Inter;color:var(--tx3);transition:transform .3s var(--ease)}
.faq details[open] summary:after{transform:rotate(45deg)}
.faq p{margin-top:12px;color:var(--tx2);font-size:15.5px;max-width:640px}

.fecho{text-align:center;overflow:hidden;isolation:isolate;padding:170px 0}
.fecho .aurora{inset:auto -10% 0;height:90%;-webkit-mask:linear-gradient(transparent,#000 40%,#000 60%,transparent);mask:linear-gradient(transparent,#000 40%,#000 60%,transparent)}
.ps{max-width:560px;margin:36px auto 0;font-size:15px;color:var(--tx3)}
.ps b{color:var(--tx2)}
footer{padding:40px 0 60px;text-align:center;color:var(--tx3);font-size:12.5px;border-top:1px solid var(--linha)}
footer a{color:var(--tx2)}

.aparece{opacity:0;transform:translateY(26px);filter:blur(6px);transition:opacity 1s var(--ease),transform 1s var(--ease),filter 1s var(--ease)}
.aparece.ok{opacity:1;transform:none;filter:none}
@media (prefers-reduced-motion:reduce){.aparece{opacity:1;transform:none;filter:none;transition:none}}

@media (max-width:900px){
  section{padding:90px 0}
  .cards,.cards.tres{grid-template-columns:1fr 1fr}
  .lista{grid-template-columns:1fr}
  .formatos{grid-template-columns:1fr}
  .estilos{grid-template-columns:repeat(3,1fr)}
  .prova{grid-template-columns:1fr;padding:36px 26px;gap:26px;text-align:center}
  .vitrine{grid-template-columns:1fr;max-width:280px}
  .palco{height:440px;margin-top:56px}
  .palco .fone{width:190px}
  .palco .fone:nth-child(2){width:206px}
  .palco .fone:nth-child(1){transform:translateX(-50%) translateX(-130px) rotateY(18deg) rotateZ(-6deg) scale(.82)}
  .palco .fone:nth-child(3){transform:translateX(-50%) translateX(130px) rotateY(-18deg) rotateZ(6deg) scale(.82)}
}
@media (max-width:560px){
  .hero{padding-top:120px}
  .cards,.cards.tres{grid-template-columns:1fr}
  .relogio div{min-width:66px;padding:12px 4px 10px}
  .garantia{grid-template-columns:1fr;text-align:center;justify-items:center}
  .mini-relogio .txt{display:none}
  .btn{width:100%;font-size:16px;padding:19px 22px}
  .barra{top:10px}
  .barra .wrap{margin:0 10px;padding-left:16px}
  .marca{font-size:14px}
  .oferta{padding:40px 22px}
  .preco strong{font-size:58px}
  .formato{padding:32px 24px}
  .formato.longo .forma i{flex-basis:180px}
  .linha-conta{padding:20px}
}

/* moldura do hero (estilo referência) */
.hero{padding:96px 0 0;min-height:auto}
.quadro{position:relative;margin:0 auto;max-width:1240px;min-height:min(780px,88vh);border-radius:32px;border:1px solid var(--linha);overflow:hidden;isolation:isolate;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:110px 24px 120px;background:#08070b}
.quadro .hero-bg{position:absolute;inset:0;z-index:-3}
.blob{position:absolute;border-radius:50%;filter:blur(70px);z-index:-2;pointer-events:none}
.blob.b1{width:52%;height:70%;right:-8%;top:-18%;background:radial-gradient(circle,rgba(255,170,205,.55),rgba(255,61,154,.18) 55%,transparent 70%)}
.blob.b2{width:40%;height:55%;left:-10%;bottom:-25%;background:radial-gradient(circle,rgba(255,179,92,.35),transparent 65%)}
.blob.b3{width:30%;height:40%;right:12%;bottom:-20%;background:radial-gradient(circle,rgba(155,92,255,.35),transparent 65%)}
.fios{position:absolute;inset:0;z-index:-1;pointer-events:none}
.no{position:absolute;display:flex;align-items:center;gap:12px;font:500 13px/1.3 Inter;color:var(--tx)}
.no i{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.06);border:1px solid var(--linha2);backdrop-filter:blur(6px);font-style:normal;font-size:14px}
.no small{display:block;font:500 11px/1.3 'JetBrains Mono';color:var(--tx3);letter-spacing:.04em}
.no span:before{content:"• ";color:var(--tx2)}
.n1{left:4%;top:56%}.n2{left:4%;bottom:15%}.n3{right:4%;top:56%;flex-direction:row-reverse;text-align:right}.n4{right:4%;bottom:15%;flex-direction:row-reverse;text-align:right}
.play{position:absolute;top:34px;left:50%;transform:translateX(-50%);width:46px;height:46px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.08);border:1px solid var(--linha2);backdrop-filter:blur(6px);text-decoration:none;font-size:13px;padding-left:3px}
.feixes{position:absolute;left:50%;bottom:0;transform:translateX(-50%);display:flex;gap:46px;z-index:-1}
.feixes i{width:1.5px;background:linear-gradient(transparent,rgba(255,255,255,.75));animation:feixe 3.4s var(--ease) infinite}
.feixes i:nth-child(1){height:90px;animation-delay:.2s}.feixes i:nth-child(2){height:150px}.feixes i:nth-child(3){height:110px;animation-delay:.9s}.feixes i:nth-child(4){height:60px;animation-delay:1.4s}
@keyframes feixe{0%,100%{opacity:.25;transform:translateY(12px)}50%{opacity:1;transform:none}}
.rolar{position:absolute;left:22px;bottom:22px;display:flex;align-items:center;gap:10px;font:500 12px/1 Inter;color:var(--tx2);background:rgba(255,255,255,.05);border:1px solid var(--linha);padding:6px 14px 6px 6px;border-radius:999px;text-decoration:none}
.rolar b{width:24px;height:24px;border-radius:50%;display:grid;place-items:center;background:#fff;color:#000;font-size:12px}
.canto{position:absolute;right:26px;bottom:24px;text-align:left;font:500 13px/1 Inter;color:#FFC2DD}
.canto .tr{display:flex;gap:6px;margin-top:12px}.canto .tr i{width:28px;height:2px;background:rgba(255,255,255,.15);border-radius:2px}.canto .tr i:first-child{background:#fff}
.botoes{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:36px}
.btn2{display:inline-flex;align-items:center;gap:10px;padding:20px 28px;border-radius:999px;border:1px solid var(--linha2);background:rgba(255,255,255,.04);color:var(--tx);text-decoration:none;font:500 16px/1 'Inter Tight'}
.btn2:hover{background:rgba(255,255,255,.08)}
.hero .lead{margin:22px auto 0;font-size:18px}
.palco-wrap{max-width:1240px;margin:0 auto}
/* letreiro cromado (estilo referência) */
.letreiro{position:relative;overflow:hidden;height:clamp(120px,19vw,250px);margin-top:40px;border-bottom:1px solid var(--linha)}
.letreiro span{position:absolute;left:50%;top:0;transform:translateX(-50%);white-space:nowrap;font:700 clamp(150px,24vw,330px)/.86 'Inter Tight',sans-serif;letter-spacing:-.02em;color:transparent;
 background:linear-gradient(180deg,rgba(255,255,255,.95) 0%,rgba(255,255,255,.12) 18%,rgba(255,255,255,.55) 30%,rgba(30,28,34,.9) 46%,rgba(255,255,255,.35) 60%,rgba(10,10,12,1) 78%);-webkit-background-clip:text;background-clip:text;filter:drop-shadow(0 0 1px rgba(255,255,255,.4)) drop-shadow(0 -10px 40px rgba(255,61,154,.12))}
.letreiro:after{content:"";position:absolute;left:0;right:0;bottom:0;height:40%;background:linear-gradient(transparent,var(--bg))}
.reflexo{height:110px;background:radial-gradient(60% 100% at 50% 0%,rgba(255,255,255,.06),transparent 70%)}
@media (max-width:900px){.selo{font-size:10.5px;letter-spacing:.06em;padding:8px 12px 8px 10px}.palco{overflow:hidden}.rolar{display:none}.no{display:none}.quadro{padding:100px 18px 110px;border-radius:24px;min-height:auto}.canto{display:none}.hero{padding-top:84px}.hero .wrap.q{padding:0 10px}}
`,a=`

<div class="barra"><div class="wrap">
  <div class="marca" style="white-space:nowrap">Sistema de <span>Cortes</span></div>
  <div class="mini-relogio"><span class="txt" data-rotulo-curto="">GTA 6 em</span> <b data-relogio-curto="">6d 13h 05m</b> <a href="#oferta">R$ <span data-preco="">27,98</span></a></div>
</div></div>

<!-- 1 · TOPO -->
<header class="hero">
  <div class="wrap q" style="max-width:1284px">
  <div class="quadro">
    <div class="hero-bg"><video src="/__l5e/assets-v1/38503a41-d4dc-484c-bf95-321aabfcbef0/live.mp4" poster="/__l5e/assets-v1/69046240-1631-4180-a932-867eaba93ba1/live.jpg" autoplay="" muted="" loop="" playsinline=""></video></div>
    <div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div>
    <svg class="fios" viewBox="0 0 1240 780" preserveAspectRatio="none" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="1">
      <path d="M0 455 H90 C140 455 150 430 190 410 L300 360"></path><path d="M0 655 H90 C140 655 160 640 200 625 L320 600"></path>
      <path d="M1240 455 H1150 C1100 455 1090 430 1050 410 L940 360"></path><path d="M1240 655 H1150 C1100 655 1080 640 1040 625 L920 600"></path>
    </svg>
    <div class="no n1"><i>✂</i><div><span>Cortes verticais</span><small>10 a 75 s · 1080×1920</small></div></div>
    <div class="no n2"><i>▤</i><div><span>Vídeo longo</span><small>8 a 15 min · capítulos</small></div></div>
    <div class="no n3"><i>Aa</i><div><span>Legenda</span><small>6 estilos · palavra a palavra</small></div></div>
    <div class="no n4"><i>⤢</i><div><span>Zoom</span><small>automático nas reações</small></div></div>
    <a class="play" href="#exemplos" aria-label="Ver cortes de exemplo">▶</a>
    <div class="selo" data-selo="">Lançamento do GTA 6 · 19 de novembro</div>
    <h1 class="centro">O jogo mais clipado da história<br><span class="g" data-frase="">lança em 6 dias.</span></h1>
    <p class="lead centro">Seus cortes vão estar prontos? O Claude assiste a live inteira, escolhe os melhores momentos e entrega os cortes com legenda, título e zoom. Você não edita nada.</p>
    <div class="relogio" aria-live="polite">
      <div><b data-d="">06</b><span>dias</span></div>
      <div><b data-h="">13</b><span>horas</span></div>
      <div><b data-m="">05</b><span>min</span></div>
      <div><b data-s="">21</b><span>seg</span></div>
    </div>
    <div class="rotulo-relogio" data-rotulo="">até o lançamento do GTA 6</div>
    <div class="botoes"><a class="btn2" href="#exemplos">Ver cortes reais ↗</a><a class="btn" data-checkout="" href="https://pay.herospark.com/sistema-de-cortes-552244">Quero meus cortes prontos</a></div>
    <p class="preco-hero"><span data-preco-texto="">R$ 27,98 só na semana do lançamento</span> · acesso na hora</p>
    <div class="feixes"><i></i><i></i><i></i><i></i></div>
    <a class="rolar" href="#exemplos"><b>↓</b>Role pra ver</a>
    <div class="canto">GTA 6 · cortes<div class="tr"><i></i><i></i><i></i><i></i></div></div>
  </div>
  </div>
  <div class="palco-wrap">
  <div class="palco aparece ok">
    <div class="fone"><div class="tela"><video src="/__l5e/assets-v1/dc7388a4-1c3f-4298-9658-9291a7eb17b9/corte1.mp4" poster="/__l5e/assets-v1/ae2d9eab-bae2-47c1-83a7-41b4d21e6b70/corte1.jpg" muted="" loop="" playsinline=""></video></div></div>
    <div class="fone"><div class="tela"><video src="/__l5e/assets-v1/93728b48-087e-4954-a3c9-bc219f5f3398/corte2.mp4" poster="/__l5e/assets-v1/07d19cc2-9eb7-410f-a1e6-2e3f5ece1e1b/corte2.jpg" muted="" loop="" playsinline=""></video></div></div>
    <div class="fone"><div class="tela"><video src="/__l5e/assets-v1/4e99f45a-8baa-4b54-8655-fffae788ea35/corte3.mp4" poster="/__l5e/assets-v1/efb15cd5-c7df-4b7d-98b2-20508976fbbb/corte3.jpg" muted="" loop="" playsinline=""></video></div></div>
  </div>
  <p class="legenda-demo">Cortes reais, feitos pelo Sistema de Cortes · 1 live → cortes prontos + vídeo longo</p>
  </div>
</header>

<!-- 1b · STREAMERS -->
<section class="streamers" id="exemplos">
  <div class="wrap centro">
    <div class="kicker">Feito com o Sistema de Cortes</div>
    <h2>Clipe os <span class="g">maiores streamers.</span></h2>
    <p class="lead">Câmera em cima, jogo embaixo, legenda que acompanha a fala e título que prende. Toque num corte pra ouvir.</p>
    <div class="vitrine">
      <figure class="aparece ok"><div class="fone grande"><div class="tela"><video src="/__l5e/assets-v1/dc7388a4-1c3f-4298-9658-9291a7eb17b9/corte1.mp4" poster="/__l5e/assets-v1/ae2d9eab-bae2-47c1-83a7-41b4d21e6b70/corte1.jpg" autoplay="" muted="" loop="" playsinline=""></video><span class="som">🔇</span></div></div><figcaption>Legenda <b>destaque</b> · título <b>caixa</b></figcaption></figure>
      <figure class="aparece ok"><div class="fone grande"><div class="tela"><video src="/__l5e/assets-v1/93728b48-087e-4954-a3c9-bc219f5f3398/corte2.mp4" poster="/__l5e/assets-v1/07d19cc2-9eb7-410f-a1e6-2e3f5ece1e1b/corte2.jpg" autoplay="" muted="" loop="" playsinline=""></video><span class="som">🔇</span></div></div><figcaption>Legenda <b>beasty</b> · título <b>faixas</b></figcaption></figure>
      <figure class="aparece ok"><div class="fone grande"><div class="tela"><video src="/__l5e/assets-v1/4e99f45a-8baa-4b54-8655-fffae788ea35/corte3.mp4" poster="/__l5e/assets-v1/efb15cd5-c7df-4b7d-98b2-20508976fbbb/corte3.jpg" autoplay="" muted="" loop="" playsinline=""></video><span class="som">🔇</span></div></div><figcaption>Legenda <b>caixa</b> · título <b>marca</b></figcaption></figure>
    </div>
    <p class="nota" style="max-width:640px;margin:22px auto 0">Cortes de exemplo feitos a partir de vídeos de reação ao trailer do GTA 6 dos canais Cortes do Casimito, IShowSpeed e Paulinho o LOKO. Os criadores não têm relação com este produto. Para postar cortes, tenha autorização do criador ou participe de um programa de cortes.</p>
  </div>
</section>

<!-- 2 · LEAD -->
<section class="lead-sec">
  <div class="wrap">
    <div style="max-width:860px">
      <div class="kicker">Dia 19</div>
      <h2>Milhões de pessoas vão procurar <span class="g">a mesma coisa.</span></h2>
      <p class="lead">Reação de streamer. Primeira missão. A fuga que deu errado. O bug que ninguém esperava. Quem estiver postando esses cortes primeiro pega uma onda de views que não volta.</p>
      <p class="lead" style="margin-top:16px">O problema: cortar na mão leva horas. Assistir a live, achar o momento, recortar, legendar palavra por palavra, ajustar pro vertical. Quando você termina o primeiro corte, outras 200 pessoas já postaram o mesmo momento.</p>
    </div>
  </div>
</section>

<!-- 3 · VIRADA + COMO FUNCIONA -->
<section>
  <div class="wrap">
    <div class="centro">
      <div class="kicker">A virada</div>
      <h2>Na corrida dos cortes, ganha <span class="g">quem chega primeiro.</span></h2>
      <p class="lead">Não quem edita melhor. Por isso o trabalho pesado fica com o Claude.</p>
    </div>
    <div class="cards">
      <div class="card aparece ok"><div class="n">01</div><h3>Você coloca a live na pasta</h3><p>Live, podcast, reação ou gameplay narrado. O arquivo fica no seu computador.</p></div>
      <div class="card aparece ok"><div class="n">02</div><h3>O Claude assiste tudo</h3><p>Transcreve palavra por palavra, acha os picos de grito, risada e reação, e dá nota pra cada momento.</p></div>
      <div class="card aparece ok"><div class="n">03</div><h3>Você aprova a lista</h3><p>Tira, troca ou pede mais. Nada é renderizado sem o seu ok.</p></div>
      <div class="card aparece ok"><div class="n">04</div><h3>Os cortes saem prontos</h3><p>Com legenda, título, zoom nas reações e o texto de cada post já escrito.</p></div>
    </div>
    <p class="centro mut" style="margin-top:28px">Tudo no seu computador. Sem crédito por corte, sem limite de vídeo, sem marca d'água.</p>
  </div>
</section>

<!-- 4 · DOIS FORMATOS -->
<section>
  <div class="wrap">
    <div class="centro">
      <div class="kicker">Um sistema, dois formatos</div>
      <h2>Shorts pro alcance. <span class="g">Vídeo longo pra receita.</span></h2>
    </div>
    <div class="formatos">
      <div class="formato curto vidro aparece ok">
        <span class="tag">Cortes verticais</span><div class="forma"><i></i><i></i><i></i></div>
        <h3>Reels, TikTok e Shorts</h3>
        <p class="mut">10 a 75 segundos, 1080×1920.</p>
        <ul><li>Começa no gancho, termina no desfecho</li><li>Câmera em cima e jogo embaixo, rosto ou centro</li><li>Zoom automático nas reações</li><li>Título, legenda do post e ideia de capa</li></ul>
      </div>
      <div class="formato longo vidro brilho aparece ok">
        <span class="tag">Compilação 16:9</span><div class="forma"><i></i></div>
        <h3>YouTube, 8 a 15 minutos</h3>
        <p class="mut">Os melhores momentos de uma ou várias lives.</p>
        <ul><li>Gancho com o melhor momento no começo</li><li>Capítulos na tela e na descrição</li><li>A partir de 8 min, o YouTube libera anúncio no meio</li><li>Descrição do YouTube pronta pra colar</li></ul>
      </div>
    </div>
  </div>
</section>

<!-- 5 · ESTILOS + BENEFÍCIOS -->
<section>
  <div class="wrap">
    <div class="kicker">Cara de canal grande</div>
    <h2>6 estilos de legenda. <span class="g">4 de título.</span></h2>
    <p class="lead">Os mesmos estilos dos canais de cortes que viralizam. Você escolhe ou pede pra ver todos aplicados no seu vídeo.</p>
    <div class="estilos aparece ok">
      <div class="est"><div class="t e1">ele <em>fugiu</em></div><div class="nome">destaque</div></div>
      <div class="est"><div class="t e2"><i>que</i> <u>isso</u></div><div class="nome">beasty</div></div>
      <div class="est"><div class="t e3"><b>e aí ele</b> <em>pulou</em> do prédio</div><div class="nome">karaokê</div></div>
      <div class="est"><div class="t e4"><span>olha</span><span class="on">isso</span></div><div class="nome">caixa</div></div>
      <div class="est"><div class="t e5">ninguém esperava</div><div class="nome">minimal</div></div>
      <div class="est"><div class="t e6"><span class="emo">😱</span>que <em>susto</em></div><div class="nome">emoji</div></div>
    </div>
    <ul class="lista">
      <li><div><b>Cortes em minutos, não em horas.</b> <span>Enquanto a maioria edita o primeiro, você já postou o quinto.</span></div></li>
      <li><div><b>Os momentos certos.</b> <span>Começa no gancho, sem "então, tipo assim", e termina no desfecho.</span></div></li>
      <li><div><b>Sua marca em cima.</b> <span>Se quiser: seu logo no canto, música de fundo que abaixa na fala, efeito sonoro nos zooms e volume igual em todos os vídeos.</span></div></li>
      <li><div><b>Pronto pra postar.</b> <span>Título, legenda do post e capa de cada corte já vêm escritos.</span></div></li>
    </ul>
  </div>
</section>

<!-- 6 · DINHEIRO -->
<section>
  <div class="wrap">
    <div class="kicker">O GTA 5 é de 2013. E continua pagando.</div>
    <h2>Agora imagina <span class="g">o GTA 6.</span></h2>
    <div class="prova vidro brilho aparece">
      <div class="grande">3,7<em>mi</em><small>views num vídeo de GTA 5<br>postado há menos de 2 meses</small></div>
      <div>
        <p class="lead">Um vídeo de compilação de GTA 5, postado em setembro deste ano, passou de 3,7 milhões de visualizações. No YouTube, vídeo longo de jogo paga em média uns <b>US$ 3 a cada mil views</b>: uma estimativa de <b>US$ 7 mil a US$ 18 mil</b>, com um jogo de 13 anos atrás.</p>
        <p class="nota">Estimativa com base na média de pagamento do YouTube para canais de jogos. Vídeo longo paga bem mais que Short. O que você ganha depende do formato, do canal e da constância. Não é promessa de ganho.</p>
      </div>
    </div>
    <div class="cards tres">
      <div class="card aparece"><h3>Programas de cortes</h3><p>Criadores e marcas pagam clipadores por visualização ou por corte publicado, com regras e crédito.</p></div>
      <div class="card aparece"><h3>Canal próprio</h3><p>Shorts pra crescer, compilação longa pra monetizar no YouTube.</p></div>
      <div class="card aparece"><h3>Cortes como serviço</h3><p>Streamer, podcast e professor que grava live e não tem tempo de editar. Você vende o pacote semanal; o sistema entrega.</p></div>
    </div>
  </div>
</section>

<!-- 7 · CUSTO -->
<section>
  <div class="wrap centro">
    <div class="kicker">Quanto custa entrar no jogo</div>
    <h2>Duas coisas. <span class="g">Só isso.</span></h2>
    <div class="conta">
      <div class="linha-conta"><div style="text-align:left"><b>Claude Pro</b><div class="mut">A assinatura do Claude. Se você já usa IA, talvez já tenha.</div></div></div>
      <div class="linha-conta"><div style="text-align:left"><b>Sistema de Cortes</b><div class="mut">Pagamento único. Pra sempre.</div></div><b class="g" data-preco-linha="">R$ 27,98</b></div>
      <div class="linha-conta nao"><div style="text-align:left"><b>Mensalidade de ferramenta de corte</b></div></div>
      <div class="linha-conta nao"><div style="text-align:left"><b>Crédito acabando no meio da live</b></div></div>
      <div class="linha-conta nao"><div style="text-align:left"><b>Editor cobrando por corte</b></div></div>
    </div>
  </div>
</section>

<!-- 8 · OFERTA -->
<section id="oferta">
  <div class="wrap">
    <div class="centro"><div class="kicker">A oferta</div><h2>Tudo que você <span class="g">leva hoje.</span></h2></div>
    <div class="oferta vidro brilho aparece"><div class="oferta-in"><span class="tag-of">Preço de lançamento</span>
      <ul>
        <li><div><b>Sistema de Cortes</b> (plugin pro Claude): cortes verticais + compilação longa, todos os estilos e as atualizações</div></li>
        <li><div><b>Versão pro Codex</b>, se você usa ChatGPT</div></li>
        <li><div><b>Guia de instalação</b> passo a passo: 10 minutos, sem programar</div></li>
        <li><div><b>Bônus:</b> guia "Como ganhar dinheiro com cortes do GTA 6": onde postar, como achar campanhas, como montar o canal</div></li>
      </ul>
      <div class="preco"><s data-preco-de="">De R$ 97,98</s><strong data-preco-grande="">R$ 27,98</strong><small data-preco-sub="">pagamento único · acesso na hora</small></div>
      <div style="margin-top:22px"><a class="btn" data-checkout="" href="https://pay.herospark.com/sistema-de-cortes-552244">Garantir por <span data-preco-btn="" style="white-space:nowrap">R$ 27,98</span></a></div>
      <div class="relogio" style="margin-top:22px;transform:scale(.8)">
        <div><b data-d="">06</b><span>dias</span></div><div><b data-h="">13</b><span>horas</span></div><div><b data-m="">05</b><span>min</span></div><div><b data-s="">21</b><span>seg</span></div>
      </div>
      <div class="rotulo-relogio" data-rotulo="">até o lançamento do GTA 6</div>
      <div class="combo"><b>Aproveite a promoção de lançamento!</b><br>Garanta agora o acesso completo por <b>R$ 27,98</b> até 26/11. Depois, o preço pode passar para <b>R$ 97,98</b>. Não deixe para depois!</div>
    </div></div>
    <div class="garantia vidro aparece">
      <div class="escudo">7</div>
      <div><h3>7 dias de garantia</h3><p>Instala, corta a sua primeira live e, se não gostar, devolvemos 100% do valor. Sem pergunta.</p></div>
    </div>
  </div>
</section>

<!-- 9 · ADMISSÃO -->
<section style="padding-top:20px">
  <div class="wrap">
    <div class="aviso vidro aparece">
      <h3>O que o Sistema de Cortes NÃO faz</h3>
      <p>Ele não baixa vídeo do YouTube nem da Twitch. Você usa o arquivo da live, sua ou com autorização do criador, como fazem os programas de cortes sérios. É isso que protege o seu canal de cair.</p>
    </div>
  </div>
</section>

<!-- 10 · FAQ -->
<section>
  <div class="wrap">
    <div class="centro"><div class="kicker">Perguntas</div><h2>Antes de <span class="g">você entrar.</span></h2></div>
    <div class="faq">
      <details><summary>Preciso saber editar ou programar?</summary><p>Não. Você conversa com o Claude em português, como num chat.</p></details>
      <details><summary>Funciona no meu computador?</summary><p>Windows ou Mac, com o app do Claude para computador, o Node.js (instalação de 2 minutos, explicada no guia) e uns 3 GB livres.</p></details>
      <details><summary>Preciso pagar o Claude?</summary><p>Sim, o plano Pro ou superior. O sistema roda dentro dele. Se você usa ChatGPT, tem a versão pro Codex.</p></details>
      <details><summary>Serve só pra GTA?</summary><p>Não. Qualquer live, podcast, aula ou entrevista. O GTA é só a maior onda do momento.</p></details>
      <details><summary>Posso cortar live de qualquer streamer?</summary><p>Só com autorização dele ou por um programa de cortes. O guia explica como achar campanhas que pagam e como dar o crédito.</p></details>
      <details><summary>Quanto tempo leva?</summary><p>Uma live de 1 hora leva de 15 a 40 minutos pra transcrever, rodando sozinha. Cada corte renderiza em poucos minutos; a compilação longa, de 20 minutos a 1 hora, dependendo do computador.</p></details>
      <details><summary>E se eu não gostar?</summary><p>Você tem 7 dias de garantia. Pede o reembolso e recebe 100% de volta.</p></details>
    </div>
  </div>
</section>

<!-- 11 · FECHO -->
<section class="fecho">
  <div class="aurora"></div>
  <div class="wrap">
    <h2>Você pode assistir a onda passar <br><span class="g">ou estar com os cortes prontos.</span></h2>
    <div style="margin-top:30px"><a class="btn" data-checkout="" href="https://pay.herospark.com/sistema-de-cortes-552244">Quero entrar antes do lançamento</a></div>
    <p class="ps"><b>P.S.</b> <span data-ps="">R$ 27,98 só até 26/11. Depois, o preço pode passar para R$ 97,98. E cada dia que passa é um dia a menos de vantagem.</span></p>
  </div>
</section>

<div class="letreiro" aria-hidden="true"><span>Cortes</span></div><div class="reflexo"></div>
<footer style="border-top:0">
  <div class="wrap">
    Sistema de Cortes · Ghost Labs · Suporte: <a href="mailto:amorim.curso1@gmail.com">amorim.curso1@gmail.com</a><br>
    GTA e Grand Theft Auto são marcas da Rockstar Games/Take-Two. Este produto não tem relação com elas.
  </div>
</footer>

`;function o(){document.querySelectorAll(`video`).forEach(e=>{e.muted=!0,e.loop=!0,e.playsInline=!0}),document.querySelectorAll(`.palco video`).forEach(e=>{e.pause(),e.currentTime=0}),document.querySelectorAll(`.vitrine video`).forEach(e=>{let t=e.play();t&&t.catch(()=>{})});let e=new Date(`2026-11-19T00:00:00-03:00`),t=new Date(`2026-11-26T23:59:59-03:00`),n=e=>document.querySelectorAll(e),r=(e,t)=>n(e).forEach(e=>e.textContent=t),i=e=>String(e).padStart(2,`0`);function a(n){return n<e?{alvo:e,rotulo:`até o lançamento do GTA 6`,curto:`GTA 6 em`,preco:`27,98`}:n<t?{alvo:t,rotulo:`pro preço de lançamento acabar`,curto:`R$ 27,98 acaba em`,preco:`27,98`}:{alvo:null,preco:`97,98`}}function o(e){let t=e===`27,98`;r(`[data-preco]`,e),r(`[data-preco-linha]`,`R$ `+e),r(`[data-preco-grande]`,`R$ `+e),r(`[data-preco-btn]`,`R$ `+e),n(`[data-preco-de]`).forEach(e=>e.style.display=t?``:`none`),r(`[data-preco-texto]`,t?`R$ 27,98 só na semana do lançamento`:`R$ 97,98, pagamento único`),r(`[data-ps]`,t?`R$ 27,98 só até 26/11. Depois, o preço pode passar para R$ 97,98. E cada dia que passa é um dia a menos de vantagem.`:`A promoção de lançamento terminou. O acesso continua disponível por R$ 97,98, em pagamento único.`),n(`[data-checkout]`).forEach(e=>e.href=t?`https://pay.herospark.com/sistema-de-cortes-552244`:`https://pay.hub.la/IgAt7LcSXawQIGGUsCdC`)}let s=new URLSearchParams(location.search).get(`agora`),c=s?new Date(s)-new Date:0;function l(){let t=new Date(Date.now()+c),s=a(t);if(o(s.preco),!s.alvo){n(`.relogio, [data-rotulo]`).forEach(e=>e.style.display=`none`),r(`[data-relogio-curto]`,``),r(`[data-rotulo-curto]`,``),r(`[data-selo]`,`O GTA 6 já saiu · a onda de cortes começou`),r(`[data-frase]`,`já lançou.`);return}let l=Math.max(0,Math.floor((s.alvo-t)/1e3)),u=Math.floor(l/86400);l-=u*86400;let d=Math.floor(l/3600);l-=d*3600;let f=Math.floor(l/60);l-=f*60,r(`[data-d]`,i(u)),r(`[data-h]`,i(d)),r(`[data-m]`,i(f)),r(`[data-s]`,i(l)),r(`[data-rotulo]`,s.rotulo),r(`[data-rotulo-curto]`,s.curto),r(`[data-relogio-curto]`,`${u}d ${i(d)}h ${i(f)}m`),t<e?r(`[data-frase]`,u>=2?`lança em ${u} dias.`:u===1?`lança amanhã.`:`lança hoje.`):(r(`[data-frase]`,`já lançou.`),r(`[data-selo]`,`O GTA 6 saiu · a onda de cortes é agora`))}l(),setInterval(l,1e3),n(`.fone.grande`).forEach(e=>e.addEventListener(`click`,()=>{let t=e.querySelector(`video`),r=t.muted;n(`.fone.grande video`).forEach(e=>{e.muted=!0,e.parentElement.querySelector(`.som`).textContent=`🔇`}),r&&(t.muted=!1,t.currentTime=0,t.play(),e.querySelector(`.som`).textContent=`🔊`)}));let u=new IntersectionObserver(e=>e.forEach(e=>e.isIntersecting&&(e.target.classList.add(`ok`),u.unobserve(e.target))),{threshold:.15});n(`.aparece`).forEach(e=>u.observe(e))}var s=n();function c(){return(0,r.useEffect)(()=>{o()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`style`,{dangerouslySetInnerHTML:{__html:i}}),(0,s.jsx)(`div`,{dangerouslySetInnerHTML:{__html:a}})]})}export{c as component};
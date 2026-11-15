const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const html = fs.readFileSync(process.argv[2] || path.join(__dirname, '..', 'index.html'), 'utf8');
const code = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].at(-1)[1];
let passed = 0;
for (const blocked of [false, true]) {
  const elements = new Map();
  function element(id) {
    const set = new Set(id === 'mobileMenu' ? ['hidden'] : []);
    return { listeners: {}, attrs: {}, classList: {add:x=>set.add(x),remove:x=>set.delete(x),contains:x=>set.has(x),toggle:x=>set.has(x)?set.delete(x):set.add(x)},
      addEventListener(name, fn) {this.listeners[name]=fn;}, setAttribute(k,v){this.attrs[k]=String(v);},
      querySelectorAll(){return [];}, focus(){this.focused=true;} };
  }
  const anchor = element('anchor'); anchor.getAttribute=()=> '#research';
  const doc = {documentElement:element('html'), listeners:{}, getElementById(id){if(!elements.has(id)) elements.set(id,element(id)); return elements.get(id);},
    addEventListener(name,fn){this.listeners[name]=fn;}, querySelectorAll(s){return s.startsWith('a[')?[anchor]:[];},querySelector(){return {getBoundingClientRect(){return {top:200};}};}};
  let scroll;
  const win = {matchMedia:()=>({matches:true}),addEventListener(){},pageYOffset:0,scrollTo(v){scroll=v;}};
  vm.runInNewContext(code,{document:doc,window:win,localStorage:{getItem(){if(blocked)throw Error('blocked');return null;},setItem(){if(blocked)throw Error('blocked');}}, IntersectionObserver:class{observe(){} unobserve(){}}});
  assert.equal(doc.documentElement.classList.contains('dark'),true); passed++;
  elements.get('darkModeToggle').listeners.click();
  assert.equal(doc.documentElement.classList.contains('dark'),false); passed++;
  elements.get('mobileMenuButton').listeners.click();
  assert.equal(elements.get('mobileMenu').classList.contains('hidden'),false); passed++;
  doc.listeners.keydown({key:'Escape'});
  assert.equal(elements.get('mobileMenu').classList.contains('hidden'),true);
  assert.equal(elements.get('mobileMenuButton').attrs['aria-expanded'],'false');
  assert.equal(elements.get('mobileMenuButton').focused,true); passed++;
  anchor.listeners.click.call(anchor,{preventDefault(){}});
  assert.equal(scroll.behavior,'auto'); passed++;
}
console.log(JSON.stringify({passed}));

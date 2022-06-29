// 1. Promise.allSettled() - ждет выполнения всех промисов

let urls = [
        'https://api/test',
        'https://api/test2'
    ];
  
  Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => {
      console.log('Все запросы отработали, можно выполнить действие …')
  });
// 2. Nullish Coalescing Operator ?? (null или undefined)

let a = 0 
console.log(a || null) // null
console.log(a ?? null) // 0

// 3. Optional Chaining Operator(?)

const obj = { body: { a: 1, b: 2 } }
const value = obj.body?.a

// 4. Numeric Separators 
console.log(50000 == 50_000) // true
console.log(50000 === 50_000) // true
console.log(50000 === 5_0_0_0_0) // true

// 4. import.meta
const res = await fetch(new URL("./image.jpg", import.meta.url));
const blob = await res.blob();
const size = import.meta.scriptElement.dataset.size || 300;

// 5. export *
import * as moduleName from "module";
export * as nameModule from "module";
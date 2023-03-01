function  add (...args) {
  let res = args.reduce((a,b)=>a+b)
  const adder = (...args1) => add(res,...args1)
  adder.run = () =>console.log(res);
  return adder
}
add(1,2,3).run() //6
add(1)(2)(3).run() //6
add(1,2,3)(5).run() //11
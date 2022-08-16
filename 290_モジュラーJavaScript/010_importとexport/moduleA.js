//htmlのscript type moduleにしないとimportができない
export let publicVal = 0;

export function publicFn(){console.log('public fn')};

//呼び出しはdefaultVal
export default 1;

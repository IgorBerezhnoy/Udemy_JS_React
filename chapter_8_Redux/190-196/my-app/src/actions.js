export let inc = () => ({type: 'INC'});
export let dec = () => ({type: 'DEC'});
export let rand = () => ({type: 'RAND', payload: Math.floor(Math.random() * 10)});

export const actions = {inc, dec, rand};
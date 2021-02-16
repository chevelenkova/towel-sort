module.exports = function towelSort (a) {
  if(a==undefined) return[]
  let b =[]
  
  for(let i=0;i<a.length;i++){
  i%2 ?  b.push([].concat(a[i].reverse())) : b.push([].concat(a[i])) 
  }
  return b.flat()
  }

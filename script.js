let h2 = document.querySelector('h2');
let btn = document.querySelector('button');

const arr = ['CSK', 'MI', 'RCB', 'RR', 'KKR', 'GT', 'SRH', 'DL', 'PBKS', 'LGS']

btn.addEventListener('click', function () {
  let randomTeam = arr[Math.floor(Math.random() * arr.length)]
  h2.innerHTML = `${randomTeam}🎉🎉`
})
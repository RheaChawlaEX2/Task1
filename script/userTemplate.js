
export function userTemplate(picture, head, first, last) {
  return `<div style="display:flex;gap:5px;margin-bottom:5px;"><img  src="${picture}" /> <div><span>${head} </span><span>${first} </span><span>${last} </span></div></div>`;
}

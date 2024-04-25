function getElementWidth(content, padding, border){
    let content1 = Number(parseFloat(content, 10))
    let padding1 = Number(parseFloat(padding, 10))
    let border1 = Number(parseFloat(border, 10))
    totalWidth = content1 + padding1 + padding1 + border1 + border1;
return totalWidth
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 

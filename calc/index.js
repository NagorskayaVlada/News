send.addEventListener("click", fnc);
function fnc(){
    if(isNaN(parseInt(i.value)) || isNaN(parseInt(h.value))){
      alert('Введите верные данные');
      return;
    }
    I.value = ((1 + parseInt(i.value)) / (1 + parseInt(h.value))) - 1 + ' %';
}
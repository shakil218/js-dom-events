function handledOnClicked (){
  const handleStatus = document.getElementById('handle-status');
  handleStatus.innerText = `Handled by function attached on onclick attribute.`;
}

document.getElementById('btn-eventListener').addEventListener('click',function(){
  const handleStatus = document.getElementById('handle-status');
  handleStatus.innerText = `Text updated by addEventListener.`;
})




document.getElementById('btn-update').addEventListener('click',function(){
  const inputField = document.getElementById('input-field')
  const inputText = inputField.value;
  
  const p = document.getElementById('input-text-display');
  p.innerText = inputText;
  inputField.value = '';
})
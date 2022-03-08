//Fichier back

document.body.addEventListener('keydown', function(event){
    const listel = document.createElement("li");
    listel.innerHTML = event.code.substr(-1);
    document.querySelector('#liste').appendChild(listel);
    this.value='';
}, true)
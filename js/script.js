var liste = document.getElementById('liste-commentaire');
var btn = document.getElementById('commenter');
btn.addEventListener('click', function(){
    var pseudo = document.getElementById('pseudo'),
        coms = document.getElementById('coms');
    if(pseudo.value.length>0 && coms.value.length>0){
        var li = document.createElement('li');
        li.className = "commentaire-item";
        var h5 = document.createElement('h5');
        var nom = document.createTextNode(pseudo.value);
        var div = document.createElement('div');
        var commentaire = document.createTextNode(coms.value);
        var hr = document.createElement('hr');

        h5.appendChild(nom);
        div.appendChild(commentaire);
        
        li.appendChild(h5);
        li.appendChild(div);
        li.appendChild(hr);
        liste.appendChild(li);
        pseudo.value = "";
        coms.value = "";
    }
}, false);
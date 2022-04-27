function madlibs(){
  var adjectif = document.getElementById("Adjectif").value
  var couleur = document.getElementById("Couleur").value
  var animale = document.getElementById("Animale").value
  var sport = document.getElementById("Sport").value
  var personne = document.getElementById("Personne").value

  var text = "Mon ami " + personne + " est très " + adjectif + " il a des souliers très cool de couleur " + couleur + " j'espère que son " + animale + " ne vas pas les manger! " +  "Quand il jouera au " + sport + " il n'aurait rien a porter!";
  
  var text2 = document.getElementById("affichetext");
  text2.innerHTML = text
}
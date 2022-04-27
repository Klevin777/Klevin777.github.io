function soumet(){
j = 0 

  var nom = document.getElementById("txtNom").value
  if (nom == ""){
    erreur = ("Vous devez entrer votre nom!")
    var erreur2 = document.getElementById("erreur")
    erreur2.innerHTML = erreur
  }
  
  var checkvariable = document.getElementsByName("variable");
  var messagevariable = "";
     
        if (checkvariable[0].checked && nom != "") {
        messagevariable += " " + checkvariable[0].value;
          j = j + 1 
          var q1 = ("Bonne réponse!")
var qu1 = document.getElementById("bon");
qu1.innerHTML = q1
              }
  else if (nom != "") {
    rep1 = ("La bonne reponse est ParseInt :(")
    var repo = document.getElementById("mauvais");
    repo.innerHTML = rep1
  }

  
          
  
  var checkvalise = document.getElementsByName("charAt");
    var valisechoisi = "";
        if (checkvalise[0].checked && !checkvalise[1].checked && nom != "") {
            valisechoisi = checkvalise[0].value;
          j = j + 1
          var q2 = ("Bonne réponse!");
          var qu2 = document.getElementById("bonne");
          qu2.innerHTML = q2
              }
  else if (nom !="") {
    rep2 = ("La bonne reponse est charAt :(")
    var repo2 = document.getElementById("mauvais2");
    repo2.innerHTML = rep2
  }
      
          
  
var optionvraifaux = document.getElementById("selvraioufaux").value;
        if (optionvraifaux == "vrai" && nom !=""){
         j = j + 1 
          var q3 = ("Bonne réponse!");
          var qu3 = document.getElementById("bonne1");
          qu3.innerHTML = q3
            }
  else if (nom !=""){
    rep3 = ("La bonne reponse est vrai :(")
    var repo3 = document.getElementById("mauvais3");
    repo3.innerHTML = rep3
  }


 if (nom != ""){
var score = (nom + " votre resultat est" + " " + j  + " sur 3")
var score2 = document.getElementById("affichescore");
score2.innerHTML = score}
  
}
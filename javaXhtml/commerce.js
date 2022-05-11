//Déclaration de la fonction qui permettra de calculer le total, afficher le reçu et affiche la monnaie à rendre selon les valeurs que le client donne
  
function calculprix(){

  //variable pour accéder aux valeurs qui sont choisi pour l'utilisateur
  
var optionquantite = document.getElementById("selquantite").value
var checkpanier = document.getElementsByName("souliers")
var checkquantite = document.getElementsByName("quantite")
var checkprovince = document.getElementsByName("province")
var checklivraison =  document.getElementsByName("livraison")
var optionquantite2 = document.getElementById("selquantite2").value
var optionquantite3 = document.getElementById("selquantite3").value
var optionquantite4 = document.getElementById("selquantite4").value

 //Prix donné aux checkbox selectionnés

checkpanier[0].value = 150
checkpanier[1].value = 50
checkpanier[2].value = 165
checkpanier[3].value = 160
checkpanier[4].value = 120

  //loop for pour continuer à augmenter le prix si l'utilisateur continue a augmenter leur quantité de soulieurs
  
var couttotal = 0
  for (var i=0; i < checkpanier.length; i++) {
    if (checkpanier[i].checked) {
        couttotal += parseInt(checkpanier[i].value)*checkquantite[i].value;
    }


}

//Condition if pour les taxes selon la province ou le client vit
  
  
  
  if (checkprovince[0].checked){
    var taxes = 1.13
  }
  else if (checkprovince[1].checked){
   taxes = 1.15
  }

//Condition if pour le prix de la livraison selon la rapidité que l'utilisateur demande 

  
  if (checklivraison[0].checked){
    var livraison = 15
  }
  else if (checklivraison[1].checked){
    var livraison = 40
  }
// affiche un message d'erreur si aucune province est choisi ou si aucun mode de livraison est choisi

  
  if (!checkprovince[0].checked && !checkprovince[1].checked){
   var erreurprovince = ("Vous devez choisir une province!")
   var erreurprovince2 = document.getElementById("erreurprovince")
  erreurprovince2.innerHTML = erreurprovince
  }

  if (!checklivraison[0].checked && !checklivraison[1].checked){
    var erreurlivraison = ("Vous devez choisir un mode de livraison!")
    var erreurlivraison2 = document.getElementById("erreurlivraison")
    erreurlivraison2.innerHTML = erreurlivraison
  }

  //Calcul le prix total et arrondi le résultat à deux décimales

var total = (couttotal+livraison)*taxes
var total2 = total.toFixed(2)

//Affiche le cout total dans html
  
var affichetotal = ("Votre total est " + total2 + " $")
var affichetotal2 = document.getElementById("prixtotal")
affichetotal2.innerHTML= affichetotal
  

//Tableau pour l'affichage des étoiles dans le reçu
  
var afficheetoile = ["******************************"
    ]
var afficheetoile2 = document.getElementById("etoiles")
  afficheetoile2.innerHTML= afficheetoile

 //Varibles pour la quantité de souliers 
  
var jordan = checkquantite[0].value
var skechers = checkquantite[1].value
var retro4 = checkquantite[2].value
var ultraboost = checkquantite[3].value
var airforce = checkquantite[4].value

  //Conditions pour l'affichage des souliers dans le reçu

  if(jordan > 0){
    var recujordan = (checkquantite[0].value + " Air jordan 1")
    
  }
  if (skechers > 0){
    var rskechers = (checkquantite[1].value + " Skechers")
  
  }
  if (retro4 > 0) {
    var rretro4 = (checkquantite[2].value + " retro4")
    
  }
  if (ultraboost > 0){
    var rultraboost = (checkquantite[3].value + " Adidas ultraboost ")
  }
  if (airforce > 0){
    var rairforce = (checkquantite[4].value + " Air force 1" )
  }

  if (jordan == 0){
    var recujordan = ("")
  }
  if (skechers == 0){
    var rskechers = ("")
  }
  if (retro4 == 0){
    var rretro4 = ("")
  }
  if (ultraboost == 0){
    var rultraboost = ("")
  }
  if (airforce == 0){
    var rairforce = ("")
  }
    //Affichage des éléments dans le reçu
  
affichequantite = ("Items achetés: " + recujordan + " " + rskechers + " " + rretro4 + " " + rultraboost + " " + rairforce )
affichequantite2 = document.getElementById("quantiterecu")
affichequantite2.innerHTML= affichequantite
    
  
  
   

affichesoustotal = ("Sous total des items " + couttotal + " $")
affichesoustotal2 = document.getElementById("soustotal")
affichesoustotal2.innerHTML = affichesoustotal

var taxesrecu = couttotal * (taxes - 1)
var taxesrecu2 = taxesrecu.toFixed(2)
affichetaxesrecu = ("Taxes      " + taxesrecu2 + " $")
affichetaxesrecu2 = document.getElementById("taxes")
affichetaxesrecu2.innerHTML = affichetaxesrecu

var k = parseInt(couttotal) + parseFloat(taxesrecu2)
var k2 = k.toFixed(2)

affichetotalrecu = ("Sous-total " + k2 + "$")
affichetotalrecu2 = document.getElementById("recutotal")
affichetotalrecu2.innerHTML = affichetotalrecu

affichelivraison = ("Livraison " + livraison + " $")
affichelivraison2 = document.getElementById("livraison")
affichelivraison2.innerHTML = affichelivraison

prixfinal = ("Total " + total2 + " $" )
prixfinal2 = document.getElementById("prixfinal")
prixfinal2.innerHTML = prixfinal

//Condition si la valeur de l'argent donné n'est pas un nombre
  
var argent = document.getElementById("txtargent").value
if ((argent * 0) != 0){
  alert("Ceci n'est pas un nombre!")
  }

//Affichage de la remise de l'argent au client si ils donnent plus que le montant total
  
  if (argent > total2){
    var argentrestant = argent - total2
  
var argentdonne = parseInt(argentrestant/100)
affiche100 =( argentdonne)
affiche1002 = document.getElementById("billets100")
affiche1002.innerHTML = affiche100
argentrestant = argentrestant%100
  
argentdonne = parseInt(argentrestant/50)
affiche50 = ( argentdonne)
affiche502 = document.getElementById("billets50")
affiche502.innerHTML = affiche50
argentrestant = argentrestant%50
  
argentdonne = parseInt(argentrestant/20)
affiche20 = ( argentdonne)
affiche202 = document.getElementById("billets20")
affiche202.innerHTML = affiche20
argentrestant = argentrestant%20
  
argentdonne = parseInt(argentrestant/10)
affiche10 = ( argentdonne)
affiche102 = document.getElementById("billets10")
affiche102.innerHTML = affiche10 
argentrestant = argentrestant%10
  
argentdonne = parseInt(argentrestant/5)
affiche5 = ( argentdonne)
affiche52 = document.getElementById("billets5")
affiche52.innerHTML = affiche5
argentrestant = argentrestant%5
  
argentdonne = parseInt(argentrestant/1)
affiche1 = ( argentdonne)
affiche12 = document.getElementById("sous1")
affiche12.innerHTML = affiche1
argentrestant = argentrestant%1

argentdonne = parseInt(argentrestant/0.25)
affiche25 = ( argentdonne)
affiche252 = document.getElementById("sous25")
affiche252.innerHTML = affiche25 
argentrestant = argentrestant%0.25

argentdonne = parseInt(argentrestant/0.10)
affiche010 = ( argentdonne)
affiche0102 = document.getElementById("sous10")
affiche0102.innerHTML = affiche010
argentrestant = argentrestant%0.10
  
argentdonne = parseInt(argentrestant/0.05)
affiche05 = ( argentdonne)
affiche052 = document.getElementById("sous05")
affiche052.innerHTML = affiche05
argentrestant = argentrestant% 0.05

  }
  
//condition si le montant d'argent que le client donne n'est pas assez
  
  if (parseFloat(argent) < total2 && argent != ""){
    alert("Vous n'avez pas assez d'argent!")
  }
  if (argent = total2){
    affichemerci = "Merci pour votre achat!"
    affichemerci2 = document.getElementById("merci")
    affichemerci2.innerHTML = affichemerci
  }
  
}




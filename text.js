var familiaNome =[
    "Família","Pai","Mãe","Irmã","Budy",
];

var familiaFotos =[
    "https://i.postimg.cc/x1ST4H43/familia.jpg",
    "https://i.postimg.cc/PrD5yK2q/paiM-e.webp",
    "https://i.postimg.cc/2jM5ngdJ/m-e.webp",
   "https://i.postimg.cc/CKch52Lc/1669686680725.jpg",
   "https://i.postimg.cc/ZR0TdLW4/budy.jpg",


];
  
   
var i=0;
function proximo(){
  
    //Se passar do número totalda família, reinicia as imagens e nome dos membros.
    var numeroFamilia=5;
    if(i>=numeroFamilia){
        i=0;
    }

document.getElementById("membrosFamiliaImagem").src=familiaFotos[i];
document.getElementById("membrosFamiliaNome").innerHTML= familiaNome[i];
document.getElementById("audio").play();
i++;

}
function stop(){
    document.getElementById("audio").pause();
}

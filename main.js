// Arrays
// É uma coleção de valores que podemos armazenar na mesma variável.
// nome_variavel = [valor1, valor2,valor3,...] cada item fica armazenado em um índice que começa pelo 0.
var motivos = [
    "Melhora o bem-estar e o sono",
    "Aumenta a imunidade",
    "Desacelera o envelhecimento da pele",
    "Intestino regulado",
    "Melhora a memória"
];

var imagensProAlbum = [
    "./agua2.jpg",
    "./agua3.png",
    "./agua1.jpg",
    "./agua4.jpg",
    "./agua5.webp"
]

var indice = 0;

function proximoSlide(){
    document.getElementById("buttonComecar").innerHTML = "Próximo";
    document.getElementById("textoMotivos").innerHTML = motivos[indice];
    document.getElementById("foto").src = imagensProAlbum[indice];
    
    if(indice == 4){
        indice = 0;
    }else{
        indice++;
    }

}
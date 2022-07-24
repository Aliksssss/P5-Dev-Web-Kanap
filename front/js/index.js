 // recuperation de l'API //
 
 function getProducts (){
    return(
    fetch("http://localhost:3000/api/products")

    .then(function (res) {
        return res.json();
    })

    .then(function (data) {
       return data;
    }) 

    .catch(function (error){
        return error;
    })

    )

}
 // permet d'attendre le resultat du fetch avant affichage du produit sur la page // 
 async function init (){
     let products = await getProducts();
     console.log (products);
     buildHtml()
 }

 function buildHtml (){
    console.log("coucou")
 }






 
 



    init()



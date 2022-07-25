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

     for (let i = 0; i < products.length; i++) {

        // cree chaque bloc avec une seule fonction 




        console.log("Kanap name");
        //console.log (products[i].name);
     }


    
     //products.map((product) => console.log(product.name));
     // seconde facon de faire la boucle 
     

 }


    // structure HTML 

  function buildHtml (){

    let section = document.getElementById ("items");
    
    let productLink = document.createElement ("a");
    section.appendChild(productLink)
    productLink.href = "./product.html?id=42"

    let productArticle = document.createElement ("article");
    productLink.appendChild(productArticle)

    let productImg = document.createElement ("img");
    productArticle.appendChild(productImg)
    productImg.src = ".../product01.jpg"
    productImg.alt = "Lorem ipsum dolor sit amet, Kanap name1"

    
    let productName = document.createElement ("h3");
    productArticle.appendChild(productName)
    productName.innerHTML = " hello "
    productName.className = "productName"
  

    let productDescription = document.createElement ("p");
    productArticle.appendChild(productDescription)
    productDescription.innerHTML = "description"
    productDescription.className = "productDescription"

    // insertion des classes html & liens 


    
    console.log()
 }






 
 



    init()



$(document).ready(function () {
    $.ajax({

        //URL de la requête
        url: "https://api.spaceflightnewsapi.net/v3/articles",

        // méthode d'envoi
        method: "GET",

        //Format de réponse
        dataType: "json",
    })

        //En cas de succés 
        .done(function (response) {
            console.log(response);
            

            function populateArticle(response, i) {
                $(".article").append('<div class="article_corps"></div>');
                //image
                $(".article .article_corps:last").html('<img src="'+response[i].imageUrl+'" alt="">');
              //  $(".article .article_corps:last img").attr('src',response[i].imageUrl);
                //titre
                $(".article .article_corps:last").prepend('<h3></h3>');
                $(".article .article_corps:last h3").text(response[i].title);
                //paragraphe
                $(".article .article_corps:last").append('<p></p>');
                $(".article .article_corps:last p").text(response[i].summary);

            
                
            }

            if (response) {
                for (var i = 0; i < 7; i++) {
                    populateArticle(response, i);

                }
            }


        }) // fin done

        //en cas d'échec
        .fail(function (error) {
            alert("La requête a échouée" + JSON.stringify(error));
        })

        //code effectué en cas de succés et d'échec
        .always(function () {
            alert("requête effectuée");
        })

       /* $.ajax({

            //URL de la requête
            url: "https://zenquotes.io/api/quotes/",
    
            // méthode d'envoi
            method: "GET",
    
            //Format de réponse
            dataType: "json",
        })
    
            //En cas de succés 
            .done(function (response) {
                //let dataJson = JSON.stringify(response);
                //$(".article_corps h3").text(response[1].q);
                //$(".article_corps p").text(response[1].a);
                //console.log(response);
                //console.log(response[1]["q"]);
    
                function populateArticleTitre(response, i) {
                    $(".article").append('<div class="article_corps"></div>');
                    $(".article .article_corps:last").append('<p></p>');
                    $(".article .article_corps:last p").last().text(response[i].q)
                }
    
                if (response) {
                    for (var i = 0; i < 7; i++) {
                        populateArticleTitre(response, i);
    
                    }
                }
    
    
            }) // fin done
    
            //en cas d'échec
            .fail(function (error) {
                alert("La requête a échouée" + JSON.stringify(error));
            })
    
            //code effectué en cas de succés et d'échec
            .always(function () {
                alert("requête effectuée");
            }) */







        /* function addApiImg(){
            $.ajax({

                //URL de la requête
                url:  "https://api.thecatapi.com/v1/images/search",
        
                // méthode d'envoi
                method: "GET",
        
                //Format de réponse
                dataType: "json",
            })
        
                //En cas de succés 
                .done(function (response) {
                    
                    function populateArticleImg(response, i) {
                        $(".article").append('<div class="article_corps"></div>');
                        $(".article .article_corps:last").append('<img>');
                        $(".article .article_corps:last img").last().text(response[i].q)
                    }
        
                    if (response) {
                        for (var i = 0; i < 7; i++) {
                            populateArticleImg(response, i);
                        }
                    }
        
        
                }) // fin done
        
                //en cas d'échec
                .fail(function (error) {
                    alert("La requête a échouée" + JSON.stringify(error));
                })
        
                //code effectué en cas de succés et d'échec
                .always(function () {
                    alert("requête effectuée");
                })


        } */




}); // fin ready function


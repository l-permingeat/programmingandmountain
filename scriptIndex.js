$(document).ready(function () {

    actualiser();

    //Bouton actualiser pour remplir le feed
    function actualiser() {
        $('.refresh').click(function () {
            apiJquery();
        });
    }

    function apiJquery() {
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
                if (response) {
                    for (var i = 0; i < 7; i++) {
                        populateArticle(response, i);
                    }
                }
            }) // fin done

            //en cas d'échec
            .fail(function (error) {
                //alert("La requête a échouée" + JSON.stringify(error));
                $(".main_marge").prepend('<h1></h1>');
                $(".main_marge h1").text("La requête a échouée");
                //$(".main_marge h1").delay(5000).fadeOut('slow');
                $(".main_marge h1").delay(5000).fadeOut('slow', function () {
                    $(".main_marge h1").remove()
                });
            })

            //code effectué en cas de succés et d'échec
            .always(function () {
                //alert("requête effectuée");
            })

    }//fin function apiJquery


    // En attente
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 15,
        autoplay: true,
        autoWidth: true,
    })

    function populateArticle(response, i) {
        //créer une classe article_corps
        $(".article").append('<div class="article_corps"></div>');
        //image
        $(".article .article_corps:last").html('<img src="' + response[i].imageUrl + '" alt="">');
        //  $(".article .article_corps:last img").attr('src',response[i].imageUrl);
        //titre
        $(".article .article_corps:last").prepend('<h3></h3>');
        $(".article .article_corps:last h3").text(response[i].title);
        //paragraphe
        $(".article .article_corps:last").append('<p></p>');
        $(".article .article_corps:last p").text(response[i].summary);
    }

}); // fin ready function //







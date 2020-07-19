$(function () {

    $(".goToUB04").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        //grab the id of the person
        const id = $(this).data("id");
        console.log(id)
        window.open("ub04form/"+id , "_blank")
        
    })

});

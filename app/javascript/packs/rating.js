  document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector("#modal");
    const closeButton = document.querySelector("#modal-close");
    const productId = document.querySelector("#product_id");
    document.addEventListener("click", function(event) {
      if (event.target.matches(".modal-link")) {
        event.preventDefault();
        const id = event.target.dataset.id;
        productId.value = id;
        var img = "assets/"+id+".jpeg"
        $("#product-img").html('<img src = '+img+'/>')
        modal.style.display = "flex";
      }
    });
    closeButton.addEventListener("click", function(event) {
      modal.style.display = "none";
      parent.location.reload();
    });
  });

  $(document).on("submit", "form", function(event) {
      event.preventDefault(); 
      var form = $(this);
      var product_id = $('#product_id').val();
      var stars = $("input[type='radio'][name='stars']:checked").val();
      if (typeof stars === 'undefined') {
        $("#rating-alert").html("Please provide rating!")
      }
      else {
            $.ajax({
                url: form.attr("action"),
                type: form.attr("method"),
                data: {"rating": { product_id: product_id, stars: stars } },
                success: function(response) {
                    $("#rating-alert").html("Rating submitted successfully");
                    form[0].reset();
                },
                error: function(xhr, status, error) {
                    $("#rating-alert").html("Error submitting rating: " + error);
                }
            });
            alert("Rating submitted successfully")
            const modal = document.querySelector("#modal");
            modal.style.display = "none";
            parent.location.reload();
        }
  });

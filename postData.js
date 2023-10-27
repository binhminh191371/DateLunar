$(document).ready(function () {
  $("#myForm").submit(function (event) {
    var formData = $(this).serialize();

    $.ajax({
      url: "https://proxy.cors.sh/https://boiduong.online/test.php",
      type: "POST",
      data: formData,
      contentType: "application/x-www-form-urlencoded",
      headers: {
        "x-cors-api-key": "temp_90ce16c533dd852f10bb251d099b4a11",
      },

      success: function (response){
        console.log(response);
      },
      error: function (xhr, status) {
        console.log(xhr, status);
      },
    });
    event.preventDefault();
  });
});

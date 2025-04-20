$(document).ready(function () {
  // Filter cars by type
  $("#car-type-filter").on("change", function () {
    const selectedType = $(this).val();
    $(".car-card").each(function () {
      const carType = $(this).data("type");
      if (selectedType === "All" || selectedType === carType) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
  // Book Now with rent calculation
  $(".book-btn").on("click", function () {
    const carCard = $(this).closest(".car-card");
    const carName = carCard.find(".card-title").text();
    const pricePerDay = carCard.data("price");
    const start = new Date($("#start-date").val());
    const end = new Date($("#end-date").val());
    if (isNaN(start) || isNaN(end) || start > end) {
      alert("❌ Please enter a valid date range.");
      return;
    }
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    const total = days * pricePerDay;
    // Fill modal
    $("#carName").val(carName);
    $("#bookingStartDate").val($("#start-date").val());
    $("#bookingEndDate").val($("#end-date").val());
    alert("✅ Total Rent for " + days + " days: ₹" + total);
    $("#bookingModal").modal("show");
  });
  // Confirm booking
  $("#bookingForm").submit(function (e) {
    e.preventDefault();
    const name = $("#userName").val();
    const email = $("#userEmail").val();
    const car = $("#carName").val();
    const start = $("#bookingStartDate").val();
    const end = $("#bookingEndDate").val();
    alert(`🎉 Booking Confirmed!\n\nName: ${name}\nEmail: ${email}\nCar: ${car}\nFrom: ${start} To: ${end}`);
    $("#bookingModal").modal("hide");
  });
});

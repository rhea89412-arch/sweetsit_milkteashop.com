// Order button interaction
document.getElementById("orderBtn").addEventListener("click", function() {
    alert("Thank you for choosing SweetSip! Redirecting to order page...");
    // You can redirect to an order page here
    // window.location.href = "order.html";
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if(name && message) {
        alert("Thank you, " + name + "! Your message has been received.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

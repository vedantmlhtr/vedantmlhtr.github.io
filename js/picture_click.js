document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("me");
  let clickCount = 0;

  image.addEventListener("click", () => {
    clickCount++;
    
    if (clickCount >= 10) {
      image.src = "images/me3.JPG";
    }
  });
});

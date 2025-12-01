document.querySelectorAll(".colorSwatches").forEach(group => {//get all elements 3andn colorswatches tag
  group.addEventListener("click", e => {//clickable
    const swatch = e.target.closest(".swatch");//bit shoof ayya swatch li nkabas
    if (!swatch) return;

    const img = swatch.closest(".productCard")?.querySelector(".productImage");
    if (img && swatch.dataset.image) img.src = swatch.dataset.image;//bitghayer l active image

    group.querySelectorAll(".swatch").forEach(s => s.classList.remove("isActive"));//bit taffe l image l abel
    swatch.classList.add("isActive"); //bi dawe 3al pellet l selected
  });
});
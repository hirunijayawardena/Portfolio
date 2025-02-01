function scrollCarousel(direction) {
    const container = document.querySelector(".carousel");
    container.scrollBy({ left: direction * 300, behavior: 'smooth' });
    setTimeout(updateButtons, 50); // Delay to update button visibility after scrolling
}

function updateButtons() {
    const container = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    
    prevBtn.style.display = container.scrollLeft > 0 ? "block" : "none";
    nextBtn.style.display = container.scrollLeft + container.clientWidth < container.scrollWidth ? "block" : "none";
}
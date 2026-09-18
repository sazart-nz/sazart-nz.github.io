document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".grid a img");

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close image">&times;</button>
    <div class="lightbox-content">
        <img src="" alt="">
        <p class="lightbox-title"></p>
    </div>
`;
    document.body.appendChild(lightbox);

    const largeImage = lightbox.querySelector("img");
    const imageTitle = lightbox.querySelector(".lightbox-title");

    galleryImages.forEach(function (image) {
        image.parentElement.addEventListener("click", function (event) {
            event.preventDefault();
            largeImage.src = this.href;
            largeImage.alt = image.alt;

const caption = image.closest("div").querySelector("p");
imageTitle.textContent = caption ? caption.textContent : image.alt;

lightbox.classList.add("open");
        });
    });

    function closeLightbox() {
        lightbox.classList.remove("open");
        largeImage.src = "";
    }

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });
});

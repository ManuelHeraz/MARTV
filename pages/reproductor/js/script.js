const modalBtn = document.querySelector('.yt-modal-btn');
const modal = document.querySelector('.modal-bg');

modalBtn.addEventListener('click', ()=> {
    modal.innerHTML = `
    <div class="modal">
        <iframe src="https://www.youtube.com/embed/YYHkPjdI860?si=PbtgWgKOdxm2_6iM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`
    ;

    modal.computedStyleMap.display = "flex";

    setTimeout(() => {
        modal.computedStyleMap.opacity = "1";
    }, 50);
});

modal.addEventListener('click', () => {
    modal.innerHTML = ' ';
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 450);
});
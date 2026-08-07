
(function () {
  var CONFIG = {
    imageSrc: "assets/workshop.png",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdmggRkrj0MqYESKu8jrxE2wvJgOVPNMf7uGNv5CQBslZ79NQ/viewform?usp=header"
  };

  function init() {
    // Inject CSS
    var style = document.createElement("style");
    style.textContent = `
      .poster-popup-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.75);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        z-index: 9999;
      }
      .poster-popup-overlay.hidden {
        display: none;
      }
      .poster-popup-content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        max-width: 90vw;
      }
      .poster-popup-image {
        max-width: 500px;
        width: 90vw;
        max-height: 75vh;
        object-fit: contain;
        border-radius: 6px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5);
      }
      .poster-popup-close {
        position: absolute;
        top: -40px;
        right: -10px;
        background: none;
        border: none;
        color: #fff;
        font-size: 32px;
        cursor: pointer;
        line-height: 1;
      }
      .poster-popup-register {
        background: #1a7a8a;
        color: #fff;
        padding: 14px 40px;
        border-radius: 30px;
        font-size: 18px;
        font-weight: 600;
        text-decoration: none;
        transition: background 0.2s;
      }
      .poster-popup-register:hover {
        background: #146370;
      }
    `;
    document.head.appendChild(style);

    // Inject HTML
    var overlay = document.createElement("div");
    overlay.id = "posterPopupOverlay";
    overlay.className = "poster-popup-overlay";
    overlay.innerHTML = `
      <div class="poster-popup-content">
        <button class="poster-popup-close" id="posterPopupClose" aria-label="Close">&times;</button>
        <img src="${CONFIG.imageSrc}" alt="Event Poster" class="poster-popup-image">
        <a href="${CONFIG.registerLink}" target="_blank" rel="noopener noreferrer" class="poster-popup-register">Register now!</a>
      </div>
    `;
    document.body.prepend(overlay);

    // Behavior
    var closeBtn = document.getElementById("posterPopupClose");
    closeBtn.addEventListener("click", function () {
      overlay.classList.add("hidden");
    });
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        overlay.classList.add("hidden");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

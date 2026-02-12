const menus = document.querySelectorAll(".menu");
menus.forEach((menu) => {
  const btns = menu.querySelectorAll(".btn");
  const boxActive = menu.querySelector(".box-active");
  if (!boxActive) {
    return;
  }

  function run(btn) {
    if (menu.closest(".container")?.classList.contains("container-3")) {
      const center = btn.offsetLeft + btn.offsetWidth / 2;
      boxActive.style.left = center + "px";
    } else {
      boxActive.style.width = btn.offsetWidth + "px";
      boxActive.style.left = btn.offsetLeft + "px";
    }
  }


  const activeBtn = menu.querySelector(".btn.active");
  if (activeBtn) {
    run(activeBtn);
  }
  
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      menu.querySelector(".active")?.classList.remove("active");
      btn.classList.add("active");
      run(btn);
    });
  });
});

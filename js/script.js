const filters = document.querySelector(".rin .filters");

if (filters) {
  const filterBtn = document.querySelectorAll(".filter-btn li");
  const indicator = document.querySelector(".filter-btn .indicator");

  filterBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      width = 0;
      width = e.target.clientWidth;
      positionX = e.x;
      console.log(e);

      indicator.style.width = `${width}px`;
      indicator.style.left = `${positionX}px`;

      // $(btn).addClass("active").siblings().removeClass("active");
    });
  });
}

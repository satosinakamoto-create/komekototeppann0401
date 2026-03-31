(() => {
  const slider = document.querySelector(".hero-slider");
  if (!slider) return;

  const radios = Array.from(slider.querySelectorAll("input.slider-radio"));
  const btns = slider.querySelectorAll(".slider-btn");

  const getIndex = () => {
    const index = radios.findIndex((r) => r.checked);
    return index >= 0 ? index : 0;
  };
  const setIndex = (i) => {
    const next = (i + radios.length) % radios.length;
    radios[next].checked = true;
  };

  // prev/next
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dir = Number(btn.dataset.dir); // -1 or 1
      setIndex(getIndex() + dir);
      restartAutoplay();
    });
  });

  // autoplay（不要ならこのブロックごと削除）
  let timer = null;
  const intervalMs = 4500;

  const startAutoplay = () => {
    stopAutoplay();
    timer = window.setInterval(() => setIndex(getIndex() + 1), intervalMs);
  };
  const stopAutoplay = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
  };
  const restartAutoplay = () => {
    if (!timer) return;
    startAutoplay();
  };

  // hoverで止める（スマホは無視される）
  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  // 操作したら止める/再開したいならここ調整
  radios.forEach((r) => r.addEventListener("change", restartAutoplay));

  // 最初だけ開始
  startAutoplay();
})();

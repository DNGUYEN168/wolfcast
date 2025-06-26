window.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("progressBar") as HTMLProgressElement;
  const wrapper = document.getElementById("loadingBar")!;

  let progress = 0;
  const interval = setInterval(() => {
    progress += 1;
    bar.value = progress;

    if (progress >= bar.max) {
      clearInterval(interval);
      wrapper.style.opacity = "0";
      wrapper.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        wrapper.style.display = "none";
      }, 500);
    }
  }, 30);
});

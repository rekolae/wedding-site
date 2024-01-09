export default function blurBackground(enable: boolean) {
  const mainContent = document.getElementById("main-content");
  const navHeader = document.getElementById("nav-header");
  const footer = document.getElementById("footer");

  const blur = "blur-sm";

  if (mainContent != null) {
    enable
      ? mainContent.classList.replace("blur-none", blur)
      : mainContent.classList.replace(blur, "blur-none");
  }

  if (navHeader != null) {
    enable
      ? navHeader.classList.replace("blur-none", blur)
      : navHeader.classList.replace(blur, "blur-none");
  }

  if (footer != null) {
    enable
      ? footer.classList.replace("blur-none", blur)
      : footer.classList.replace(blur, "blur-none");
  }
}

import './sw.installer.js';

// const version = document.getElementById('version');
// const url = "https://api.github.com/repos/ioucyf/prints.byy.design/commits/main";

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // console.log("Latest commit SHA:", data.sha);
//     // version.textContent = data.sha;
//   })
//   .catch(error => console.error("Error fetching commit:", error));

function isIOS() {
  return (
    /iPad|iPhone|iPod/.test(navigator?.userAgent) ||
    (navigator?.platform === 'MacIntel' && navigator?.maxTouchPoints > 1)
  );
}

if (isIOS()) {
  const smallPrint = document.querySelector('small.print');
  smallPrint.classList.add('ios');
}

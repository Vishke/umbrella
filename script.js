function openMessage() {
    console.log('cliked')
    createToast();
}

function createToast() {
    const toastWrapper = document.createElement("div");
    const toast = document.createElement("div");
    const image = document.createElement("img");
    const toastContainer = document.getElementById("toast-container");
    toastWrapper.classList.add("toast-wrapper");
    toast.classList.add("toast");
    toast.classList.add("slideInLeft");
    toastWrapper.setAttribute('id', 'id-toast');
    toast.innerHTML = "Check our new product!";
    image.src = "assets/clear-white-18dp.svg";
    image.setAttribute('id','id-img');
    toastWrapper.appendChild(toast);
    toastContainer.appendChild(toastWrapper);
    toast.appendChild(image);
    const timeout = setTimeout(() => {
        removeToast(toast);
    }, 5000);
    image.addEventListener('click', () => removeToast(toast,timeout));
}
function removeToast(toast, timeout) {
	toast.remove();
  if (timeout) {
  	clearTimeout(timeout);
  }
}

const nav = document.querySelector('.nav-content');

function toggle() { 
nav.classList.toggle('active');
}


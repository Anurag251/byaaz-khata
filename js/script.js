// rin filter
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

// add-owner-form
const addOwnerForm = document.querySelector(".add-owner-form");
const loginSignUpPage = document.querySelector(".login-sign-up-page");

if (addOwnerForm || loginSignUpPage) {
  // shrink label
  const formInputLabel = document.querySelectorAll(".group .form-input-label");
  const formInput = document.querySelectorAll(".group #formInput");

  formInput.forEach((input, idx) => {
    input.addEventListener("change", (e) => {
      value = e.target.value;
      if (value !== "") {
        formInputLabel[idx].classList.add("shrink");
      } else {
        formInputLabel[idx].classList.remove("shrink");
      }
    });
  });

  // wizard form
  const inputGroups = document.querySelectorAll(".input-groups");
  const innerGroup = document.querySelector(".inner-group");
  const nextBtn = document.querySelectorAll("#next-btn");
  const prevBtn = document.querySelectorAll("#prev-btn");

  let dividedValue = [];
  let groupHeight = [280, 480, 400];
  let listOfValue = [];
  let lastValue = 0;

  inputGroups.forEach((inputGroup, idx) => {
    innerGroup.style.width = `${idx + 1}00%`;

    let length = idx + 1;
    let divide = 100 / length;

    listOfValue[idx] = divide;

    //dynamic Height
    // let group = inputGroups[idx].querySelectorAll(".group");

    // groupHeight[idx] = parseInt(group.length) * 130;
  });

  // console.log(groupHeight);

  lastValue = listOfValue.slice(-1).pop();

  dividedValue[0] = 0;

  for (let i = 0; i < inputGroups.length; i++) {
    dividedValue[i + 1] = dividedValue[i] + lastValue;

    target = inputGroups[i].getAttribute("id");

    if (target === "errorOccered") {
      innerGroup.style.transform = `translateX(-${dividedValue[i]}%)`;
    }
  }

  nextBtn.forEach((nBtn, idx) => {
    let newIdx = idx + 1;
    nBtn.addEventListener("click", (e) => {
      e.preventDefault();
      innerGroup.style.transform = `translateX(-${dividedValue[newIdx]}%)`;
      innerGroup.style.height = `${groupHeight[idx + 1]}px`;

      console.log(groupHeight[idx + 1]);
    });
  });

  prevBtn.forEach((pBtn, idx) => {
    pBtn.addEventListener("click", (e) => {
      e.preventDefault();
      innerGroup.style.transform = `translateX(-${dividedValue[idx]}%)`;
      innerGroup.style.height = `${groupHeight[idx]}px`;

      console.log(groupHeight[idx]);
    });
  });

  // uploadImage
  const uploadImageBtn = document.querySelector("#uploadImageBtn");
  const uploadImage = document.querySelector(".uploadImage");
  const imageShow = document.querySelector("#imageShow");
  const fileName = document.querySelector("#fileName");

  if (uploadImageBtn) {
    uploadImageBtn.addEventListener("click", () => {
      uploadImage.click();
    });

    uploadImage.addEventListener("change", (e) => {
      let file = e.target.files[0];
      fileName.innerHTML = file.name;
      fileName.classList.add("active");

      let fileReader = new FileReader();

      fileReader.onload = () => {
        let fileUrl = fileReader.result;

        imageShow.classList.add("active");

        imageShow.innerHTML = `<img src="${fileUrl}" alt="">`;
      };

      fileReader.readAsDataURL(file);
    });
  }
}

// button click animation
const button = document.querySelectorAll("button");

button.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.classList.add("animate");
  });

  btn.addEventListener("mouseup", () => {
    btn.classList.remove("animate");
  });

  btn.addEventListener("mouseout", () => {
    btn.classList.remove("animate");
  });
});

// image upload button
let imageUploadCheck = document.querySelector("#imageUpload");
let imageUpload = document.querySelectorAll("#imageUpload");
let forceToClick = document.querySelectorAll(".forceToClick");

if (imageUploadCheck) {
  imageUpload.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      forceToClick[idx].click();
    });
  });
}

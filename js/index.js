const $inputPass = document.getElementById("input-pass"),
  $inputIcon = document.getElementById("input-icon");

$inputIcon.addEventListener("click", () => {
  if ($inputPass.type === "password") {
    $inputPass.type = "text";

    //add icon
    $inputIcon.classList.add("ri-eye-line");

    //remove icon
    $inputIcon.classList.remove("ri-eye-off-line");
  } else {
    $inputPass.type = "password";

    //add icon
    $inputIcon.classList.add("ri-eye-off-line");

    //add icon
    $inputIcon.classList.remove("ri-eye-line");
  }
});

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2000, // Chờ 5 giây trước khi chuyển sang slide tiếp theo
  },
});

// swiper.el.addEventListener("mouseenter", function () {
//   swiper.autoplay.stop();
// });

// swiper.el.addEventListener("mouseleave", function () {
//   swiper.autoplay.start();
// });
//-----------------------------------------------------LOG IN-----------------------------------------------------------

// const loginForm = document.getElementById("form-login");
// const usernameInput = document.querySelector("input[type=text][placeholder='Tên đăng nhập']");
// const passwordInput = document.querySelector("input[type=password][placeholder='Mật khẩu']");
//  loginForm.addEventListener("submit", function(event){
// // SubmitEvent.addEventListener("click", (e) =>{
//   event.preventDefault(); 

//   const username = usernameInput.value;
//   const password = passwordInput.value;


//   if (username === "admin" && password === "password") {
//     alert("Đăng nhập thành công!");
//   window.location.href = "blog.html";

//   } else {
//     alert("Tên đăng nhập hoặc mật khẩu không đúng!");
//   }
// });
// Lắng nghe sự kiện click vào nút Đăng Nhập
// window.onload = function() {
//   var button = document.getElementById('#btn-login');
//   if (button) {
//     button.addEventListener('click', function(event) {
//       event.preventDefault(); // Ngăn chặn form submit mặc định của trình duyệt

//       // Lấy giá trị tên đăng nhập và mật khẩu từ form
//       var username = document.getElementById("us").value;
//       var password = document.getElementById("pw").value;

//       // Kiểm tra nếu tên đăng nhập và mật khẩu hợp lệ
//       if (username === "ad" && password === "012") {
//         // Nếu hợp lệ, chuyển hướng sang trang khác
//         alert("đăng nhập thành công!");
//         window.location.href = "intr.html";
//       } else {
//         // Nếu không hợp lệ, hiển thị thông báolỗi       
//        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
//       }
//     });
//   } else {
//     console.error("Element with ID 'btn-login' not found");
//   }
// };
// Lấy giá trị tên đăng nhập và mật khẩu từ form
// var button = document.getElementById('btn-login');
// button.addEventListener('click', function (event) {
//   event.preventDefault(); // Ngăn chặn form submit mặc định của trình duyệt
//   var username = document.getElementById("us").value;
//   var password = document.getElementById("pw").value;

//   // Kiểm tra nếu tên đăng nhập và mật khẩu hợp lệ
//   if (username === "ad" && password === "012") {
//     // Nếu hợp lệ, chuyển hướng sang trang khác
//     alert("đăng nhập thành công!");
//     window.location.href = "intr.html";
//   } else {
//     // Nếu không hợp lệ, hiển thị thông báo lỗi       
//     alert("Tên đăng nhập hoặc mật khẩu không đúng!");
//   }
// });
function Login(event) {
  event.preventDefault(); // Ngăn chặn form submit mặc định của trình duyệt
  var username = document.getElementById("us").value;
  var password = document.getElementById("pw").value;

  // Kiểm tra nếu tên đăng nhập và mật khẩu hợp lệ
  if (username === "ad" && password === "012") {
    // Nếu hợp lệ, chuyển hướng sang trang khác
    alert("đăng nhập thành công!");
    window.location.href = "blog.html";
  } else {
    // Nếu không hợp lệ, hiển thị thông báo lỗi       
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
  }};
  ///--------------------------
  
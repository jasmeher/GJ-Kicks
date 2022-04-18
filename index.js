// VARIABLES AND ARRAY DECLARATION

const companyNames = ["nike", "adidas", "ua"];
var randomNum;
var selectedCompany;
var selectedShoes;
var selectedLogo;
var arrayLength;
var i = 0;
var storeShoeColor;
var intervalId;
var running = false;
var w = window.innerWidth;

const shoesNike = [
  "Images/shoes-nike.png",
  "Images/shoes-nike-2.png",
  "Images/shoes-nike-3.png",
  "Images/shoes-nike-4.png",
  "Images/shoes-nike-5.png",
  "Images/shoes-nike-6.png",
  "Images/shoes-nike-7.png",
];

const shoesAdidas = [
  "Images/shoes-adidas.png",
  "Images/shoes-adidas-2.png",
  "Images/shoes-adidas-3.png",
  "Images/shoes-adidas-5.png",
  "Images/shoes-adidas-6.png",
  "Images/shoes-adidas-7.png",
  "Images/shoes-adidas-4.png",
];

const shoesUa = [
  "Images/shoes-ua.png",
  "Images/shoes-ua-2.png",
  "Images/shoes-ua-3.png",
  "Images/shoes-ua-4.png",
  "Images/shoes-ua-5.png",
  "Images/shoes-ua-6.png",
  "Images/shoes-ua-7.png",
];

const nikeLogoArray = [
  "Images/nike-logo.png",
  "Images/nike-logo-2.png",
  "Images/nike-logo-red.png",
  "Images/nike-logo-yellow.png",
  "Images/nike-logo-red.png",
  "Images/nike-logo-yellow.png",
  "Images/nike-logo.png",
];

const adidasLogoArray = [
  "Images/adidas-logo-blue.png",
  "Images/adidas-logo-brown.png",
  "Images/adidas-logo-red.png",
  "Images/adidas-logo-lime.png",
  "Images/adidas-logo-pink.png",
  "Images/adidas-logo-2.png",
  "Images/adidas-logo.png",
];

const uaLogoArray = [
  "Images/ua-logo-red.png",
  "Images/ua-logo-lime.png",
  "Images/ua-logo-2.png",
  "Images/ua-logo-lime.png",
  "Images/ua-logo-2.png",
  "Images/ua-logo-red.png",
  "Images/ua-logo.png",
];

const promoShoes = [
  "url('Images/get-the-shoes-you-want.webp') no-repeat center center",
  "url('Images/get-the-shoes-you-want-2.jpg') no-repeat center center",
  "url('Images/get-the-shoes-you-want-3.webp') no-repeat center center",
  "url('Images/get-the-shoes-you-want-nike-4.jpg') no-repeat bottom center",
  "url('Images/get-the-shoes-you-want-nike-5.jpg') no-repeat center center",
];

const logoPromo = [
  "Images/nike-logo.png",
  "Images/ua-logo.png",
  "Images/adidas-logo.png",
  "Images/nike-logo.png",
  "Images/nike-logo.png",
];

const customShoesArray = [
  "Images/nike-jordan-1-custom-blank.png",
  "Images/nike-jordan-1-custom-gta-sa.png",
  "Images/nike-jordan-1-custom-gta-vc.png",
  "Images/nike-jordan-1-custom-gta-vc-2.png",
  "Images/nike-jordan-1-custom-gta-vc-3.png",
  "Images/vans-custom-shoe.png",
];

const tips = [
  "TIP: Best viewed on Desktop",
  "FACT: All the photos used here are copyrighted to the respective copyright holders. THEY ARE NOT MINE",
  "FACT: The logo is made by my bro!",
  "FACT: I am available for Hiring!",
  "FACT: My mother supports me a lot in the stuff I do!",
];

// FUNCTIONS

function customShoes() {
  if (running != true) {
    intervalId = setInterval(() => {
      randomNum = Math.floor(Math.random() * customShoesArray.length);
      document.getElementById("custom-shoe-showcase").src =
        customShoesArray[randomNum];
      console.log("Executed");
    }, 200);
  }
  running = true;
}

function randomTip() {
  randomNum = Math.floor(Math.random() * tips.length);
  document.getElementById("tips").innerHTML = tips[randomNum];
}

function stopCustomShoes() {
  if (running == false) {
    customShoes();
    return;
  }
  if (running == true) {
    running = false;
    clearInterval(intervalId);
    console.log("Stopped");
    return;
  }
}

function randomPromo() {
  randomNum = Math.floor(Math.random() * promoShoes.length);
  document.getElementById("promo-part-2").style.background =
    promoShoes[randomNum];
  document.getElementById("promo-part-2").style.backgroundSize = "cover";
  document.getElementById("logo-promo-img").src = logoPromo[randomNum];
  console.log(promoShoes[randomNum]);
}

function companySelector() {
  //RANDOMLY SELECTING A COMPANY
  randomNum = Math.floor(Math.random() * companyNames.length);
  selectedCompany = companyNames[randomNum];
  console.log(selectedCompany);
}

function shoesListSelector() {
  //CHECKING WHICH COMPANY IS SELECTED AND THEN SHOWING ITS SHOWS ARRAY AND CHANGING THE INFO BASED ON IT
  if (selectedCompany == "nike") {
    document.getElementById("company-logo").src = "Images/nike-logo.png";
    selectedLogo = nikeLogoArray;
    Logos();
    selectedShoes = shoesNike;
    document.getElementById("shoes").src = selectedShoes[0];
    arrayLength = selectedShoes.length;
    shoesShowcase();
    document.getElementById("company-name").innerHTML = "NIKE";
    document.getElementById("product-name").innerHTML = "Phantom GT2 Elite FG";
    document.getElementById("real-price").innerHTML = "$288.71";
    document.getElementById("discounted-price").innerHTML = "$250.00";
  }

  if (selectedCompany == "adidas") {
    document.getElementById("company-logo").src = "Images/adidas-logo.png";
    selectedLogo = adidasLogoArray;
    Logos();
    selectedShoes = shoesAdidas;
    document.getElementById("shoes").src = selectedShoes[0];
    arrayLength = selectedShoes.length;
    shoesShowcase();
    document.getElementById("company-name").innerHTML = "ADIDAS";
    document.getElementById("product-name").innerHTML = "MARIMEKKO BRYONY";
    document.getElementById("real-price").innerHTML = "$118.00";
    document.getElementById("discounted-price").innerHTML = "$90.00";
  }

  if (selectedCompany == "ua") {
    document.getElementById("company-logo").src = "Images/ua-logo.png";
    selectedLogo = uaLogoArray;
    Logos();
    selectedShoes = shoesUa;
    document.getElementById("shoes").src = selectedShoes[0];
    arrayLength = selectedShoes.length;
    shoesShowcase();
    document.getElementById("company-name").innerHTML = "UNDER ARMOUR";
    document.getElementById("product-name").innerHTML =
      "UA Flow Velociti Wind Running Shoes";
    document.getElementById("real-price").innerHTML = "$160.00";
    document.getElementById("discounted-price").innerHTML = "$100.00";
  }
}

function shoesShowcase() {
  for (i = 0; i < arrayLength; i++) {
    (function (i) {
      setTimeout(function () {
        document.getElementById("shoes").src = selectedShoes[i];
      }, 250 * (i + 1));
    })(i);
  }
}

function Logos() {
  for (i = 0; i < selectedLogo.length; i++) {
    (function (i) {
      setTimeout(function () {
        document.getElementById("company-logo").src = selectedLogo[i];
      }, 250 * (i + 1));
    })(i);
  }
}

function randomImgPosition(range) {
  var randomPos = Math.floor(Math.random() * range);
  return randomPos;
}

function setImgPosition() {
  $("#cta-1").css({
    top: randomImgPosition(40) + "rem",
    left: randomImgPosition(50) + "rem",
    zIndex: randomImgPosition(17),
  });
  $("#cta-2").css({
    top: randomImgPosition(49) + "rem",
    left: randomImgPosition(69) + "rem",
    zIndex: randomImgPosition(16),
  });
  $("#cta-3").css({
    top: randomImgPosition(48) + "rem",
    left: randomImgPosition(78) + "rem",
    zIndex: randomImgPosition(15),
  });
  $("#cta-4").css({
    top: randomImgPosition(47) + "rem",
    left: randomImgPosition(87) + "rem",
    zIndex: randomImgPosition(14),
  });
  $("#cta-5").css({
    top: randomImgPosition(46) + "rem",
    left: randomImgPosition(96) + "rem",
    zIndex: randomImgPosition(13),
  });
  $("#cta-6").css({
    top: randomImgPosition(45) + "rem",
    left: randomImgPosition(105) + "rem",
    zIndex: randomImgPosition(12),
  });
  $("#cta-7").css({
    top: randomImgPosition(44) + "rem",
    left: randomImgPosition(124) + "rem",
    zIndex: randomImgPosition(11),
  });
  $("#cta-8").css({
    top: randomImgPosition(43) + "rem",
    left: randomImgPosition(83) + "rem",
    zIndex: randomImgPosition(10),
  });
  $("#cta-9").css({
    top: randomImgPosition(42) + "rem",
    left: randomImgPosition(92) + "rem",
    zIndex: randomImgPosition(9),
  });
  $("#cta-10").css({
    top: randomImgPosition(41) + "rem",
    left: randomImgPosition(91) + "rem",
    zIndex: randomImgPosition(8),
  });
  $("#cta-11").css({
    top: randomImgPosition(40) + "rem",
    left: randomImgPosition(130) + "rem",
    zIndex: randomImgPosition(7),
  });
  $("#cta-12").css({
    top: randomImgPosition(69) + "rem",
    left: randomImgPosition(99) + "rem",
    zIndex: randomImgPosition(6),
  });
  $("#cta-13").css({
    top: randomImgPosition(68) + "rem",
    left: randomImgPosition(98) + "rem",
    zIndex: randomImgPosition(5),
  });
  $("#cta-14").css({
    top: randomImgPosition(67) + "rem",
    left: randomImgPosition(97) + "rem",
    zIndex: randomImgPosition(4),
  });
  $("#cta-15").css({
    top: randomImgPosition(66) + "rem",
    left: randomImgPosition(146) + "rem",
  });
  $("#cta-16").css({
    top: randomImgPosition(65) + "rem",
    left: randomImgPosition(155) + "rem",
  });
  $("#cta-17").css({
    top: randomImgPosition(64) + "rem",
    left: randomImgPosition(94) + "rem",
  });
}

function changeShoeColor(id, target) {
  storeShoeColor = document.getElementById(target).src;
  document.getElementById(target).src = document.getElementById(id.id).src;
  console.log(target);
}

function defaultColor(target) {
  document.getElementById(target).src = storeShoeColor;
}

//PACE OPTIONS
paceOptions = {
  ajax: true,
  document: true,
  eventLag: false,
};

// ON PACE DONE FUNCTION

Pace.on("done", function () {
  $(".loader-wrapper")
    .addClass("animate-circle") // adding a animation class to loader wrapper
    .css("clip-path", "circle(100%)"); //changing the clip-path to "circle(100%)"
  $(".logo-wrapper").css("border", "0").fadeOut(500); //Fade out of the logo
  $(".tip").fadeOut(500);

  companySelector();
  shoesListSelector();
  randomPromo();
  setImgPosition();

  //SELECTING THE PRODUCT INFO ELEMENTS AND ADDING SIMPLE ANIMATION USING GSAP

  let landingPageTimeline = new TimelineMax();

  landingPageTimeline
    .from("#company-name", { duration: 0.5, delay: 1.8, y: 100 })
    .from("#product-name", { duration: 0.5, y: 200 })
    .from("#real-price", { duration: 0.5, y: 100 })
    .from("#discounted-price", { duration: 0.5, y: 100 }, "-=0.3")
    .from(".cta-bttn", { duration: 0.5, y: 100 }, "-=0.1")
    .to("#ball", 1, { y: 10, ease: Linear }, "-=4")
    .to(
      "#ball",
      1,
      {
        y: -10,
        ease: Linear,
        repeat: -1,
        yoyo: true,
      },
      "-=4"
    );
});

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".logo-container", 3, { y: -90 })
  .to(".shoes-container", 3, { y: -100 }, "-=3")
  .to(".navbar-cs", 3, { opacity: 0.9 })
  .to(".info-product", 3, { y: -120 }, "-=3")
  .to("#about", 3, { top: 0, duration: 4, delay: 2 }, "-=3")
  .fromTo(".promo-part-2", { height: 0 }, { height: "100vh", duration: 3.5 })
  .fromTo(".logo-promo", { x: 500 }, { x: 0, duration: 3.5 })
  .fromTo(".text-promo", { x: -700 }, { x: 0, duration: 3 })
  .fromTo(
    ".para-promo",
    { opacity: 0 },
    { opacity: 1, duration: 2, delay: 0.8 }
  )
  .fromTo(
    "#promo-para-2",
    { opacity: 0 },
    { opacity: 1, duration: 2, delay: 1 }
  )
  .fromTo(".cta-promo", { x: -500 }, { x: 0, duration: 4 })
  .to("#custom-shoes", 3, { top: 0, duration: 5, delay: 5 })
  .call(stopCustomShoes)
  .call(customShoes)
  .to("#cta-section", 3, { top: 0, delay: 10 })
  .call(stopCustomShoes)
  .to("#cta-section", 3, {
    backgroundColor: "#1c1c1c",
    duration: 5,
    delay: 0.7,
  })
  .to(
    ".navbar-cs",
    3,
    { backgroundColor: "#1c1c1c", opacity: 1, duration: 5, delay: 3 },
    "-=5"
  )
  .to(".outline-logo", 3, { filter: "invert(1)", duration: 5, delay: 3 }, "-=5")
  .from(".cta", 3, { y: 900, duration: 3 })
  .fromTo(
    ".overlay",
    3,
    { opacity: 0 },
    { opacity: 0.8, delay: 3, duration: 3 }
  )
  .to(
    ".navbar-cs",
    3,
    { backgroundColor: "#121416", opacity: 1, duration: 5, delay: 3 },
    "-=5"
  )

  .from(".promo-text-container", { y: 700, duration: 4 })
  .to(".promo-text-h2", { opacity: 1, duration: 4, fontSize: "6rem" })
  .to(".promo-text-h2", { opacity: 0.5, duration: 2, fontSize: "5rem" })
  .to(".promo-text-h2-2", {
    opacity: 1,
    duration: 7,
    delay: 3,
    fontSize: "6rem",
  })
  .to(".promo-text-h2-2", { opacity: 0.5, duration: 2, fontSize: "5rem" })

  .to("#product-list", { top: 0, duration: 4, delay: 7 })
  .to(
    ".navbar-cs",
    3,
    {
      opacity: 1,
      backgroundColor: "#bebebe",
      delay: 7,
      duration: 4,
    },
    "-=3"
  )
  .to(
    ".outline-logo",
    3,
    { filter: "invert(0)", duration: 5, delay: 3 },
    "-=5"
  );

let scene = new ScrollMagic.Scene({
  triggerElement: "main",
  duration: "400%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("main")
  .addTo(controller);

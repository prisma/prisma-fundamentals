remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (!urlParams.get("section")) {
  window.location = "/training/index.html?section=schema";
}

remark.create({
  sourceUrl: "./sections/" + urlParams.get("section") + "/slides.md",
  highlightStyle: "material-palenight",
  highlightLines: "true",
  highlightSpans: "true",
});

function adjustLogoPostion() {
  var logo = document.getElementById("logo");
  var slide = document.getElementsByClassName("remark-slide")[0];

  var spaceWidth =
    document.body.clientWidth - slide.getBoundingClientRect().width;

  if (spaceWidth < 0) {
    spaceWidth = 0;
  }

  var offsetWidth = spaceWidth / 2 / 2 - logo.getBoundingClientRect().width / 2;

  if (spaceWidth / 2 <= logo.getBoundingClientRect().width) {
    logo.style.right = "2rem";
    logo.style.top = "3rem";
    logo.style.bottom = "auto";
  } else {
    logo.style.right = offsetWidth + "px";
    logo.style.bottom = "3rem";
    logo.style.top = "auto";
  }

  logo.style.display = "inherit";
}

(function () {
  var interval = setInterval(function () {
    var slide = document.getElementsByClassName("remark-slide")[0];
    if (slide) {
      adjustLogoPostion();
      clearInterval(interval);
    }
  }, 200);
})();

addEventListener("resize", adjustLogoPostion);

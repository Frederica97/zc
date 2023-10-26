"use strict";

var ad_01 = document.getElementById("01");
var ad_02 = document.getElementById("02");
var ad_03 = document.getElementById("03");
var ad_04 = document.getElementById("04");
var ad_05 = document.getElementById("05");
var ad_06 = document.getElementById("06");
var ad_07 = document.getElementById("07");
var ad_08 = document.getElementById("08");
var ad_09 = document.getElementById("09");
var ad_10 = document.getElementById("10");
var ad_11 = document.getElementById("11");
var ad_12 = document.getElementById("12");
var ad_13 = document.getElementById("13");
var ad01 = document.getElementById("Container-AD01");
var ad02 = document.getElementById("Container-AD02");
var ad01_set = [ad_01, ad_02, ad_03, ad_04, ad_05, ad_06];
var ad02_set = [ad_07, ad_08, ad_09, ad_10, ad_11, ad_12, ad_13];

function hoverAD01(element) {
  if (element) {
    element.addEventListener('mouseover', function () {
      var pattern = "";

      for (var i = 0; i < ad01_set.length; i++) {
        if (ad01_set[i] == element) {
          pattern += " 30fr";
          element.classList.add('still01');
        } else {
          pattern += " 1fr";
          ad01_set[i].classList.remove('still01');
        }
      }

      if (ad01) {
        ad01.style.gridTemplateColumns = pattern;
        ad01.style.transition = "all 1s";
      }
    }, false);
  }
}

function hoverAD02(element) {
  if (element) {
    element.addEventListener('mouseover', function () {
      var pattern = "";

      for (var i = 0; i < ad02_set.length; i++) {
        if (ad02_set[i] == element) {
          pattern += " 38fr";
          element.classList.add('still02');
        } else {
          pattern += " 1fr";
          ad02_set[i].classList.remove('still02');
        }
      }

      if (ad02) {
        ad02.style.gridTemplateColumns = pattern;
        ad02.style.transition = "all 1s";
      }
    }, false);
  }
}

function setHeight() {
  var stillImage01 = document.getElementsByClassName("still01");
  var AD01Width = stillImage01[0].clientWidth;
  var AD01Set = ad01.getElementsByClassName("gallery-image-wrap-AD");
  var newHeight01 = String(AD01Width * (9 / 16) + "px");

  for (var i = 0; i < AD01Set.length; i++) {
    ad01_set[i].style.height = newHeight01;
  }

  var stillImage02 = document.getElementsByClassName("still02");
  var AD02Width = stillImage02[0].clientWidth;
  var AD02Set = ad02.getElementsByClassName("gallery-image-wrap-AD");
  var newHeight02 = String(AD02Width * (9 / 16) + "px");

  for (var _i = 0; _i < AD02Set.length; _i++) {
    ad02_set[_i].style.height = newHeight02;
  }
}

function refreshAD01() {
  hoverAD01(ad_01);
  hoverAD01(ad_02);
  hoverAD01(ad_03);
  hoverAD01(ad_04);
  hoverAD01(ad_05);
  hoverAD01(ad_06);
  hoverAD02(ad_07);
  hoverAD02(ad_08);
  hoverAD02(ad_09);
  hoverAD02(ad_10);
  hoverAD02(ad_11);
  hoverAD02(ad_12);
  hoverAD02(ad_13);
  setHeight();
}

window.addEventListener('resize', setHeight);
refreshAD01();
setHeight();
const changeImage = function (image, classType) {
  let x = document.querySelectorAll(`img[class='${classType}']`);
  x.forEach((img) => (img.src = image));
};

const showDirectory = function (nextDirID, divID, parentClass = null) {
  var div = document.getElementById(divID);
  var currDirectory = document.getElementById(nextDirID);
  if (parentClass != null) {
    var children = document.querySelector("." + parentClass).children;
    for (var i = 0; i < children.length; i++) {
      let classList = children[i].classList;
      let tagName = children[i].tagName;
      if (tagName === "DIV" && classList.contains("show")) {
        classList.remove("show");
      } else if ((tagName = "DIV" && classList.contains("active"))) {
        classList.remove("active");
      }
    }
  }
  div.classList.add("active");
  currDirectory.classList.add("show");
};

const resetDirectory = function (nextDirID) {
  var children = document.querySelector("#" + nextDirID).children;
  for (var i = 0; i < children.length; i++) {
    let classList = children[i].classList;
    if (classList.contains("active")) {
      classList.remove("active");
    } else if (classList.contains("hide") && !children[i].id) {
      classList.remove("hide");
    } else if (classList.contains("show")) {
      classList.remove("show");
      classList.add("hide");
      let childDirectoryName = children[i].id;
      resetDirectory2(childDirectoryName);
    }
  }
};
const resetDirectory2 = function (nextDirID) {
  var children = document.querySelector("#" + nextDirID).children;
  for (var i = 0; i < children.length; i++) {
    let classList = children[i].classList;
    if (classList.contains("active")) {
      classList.remove("active");
    } else if (classList.contains("show")) {
      classList.remove("show");
      classList.add("hide");
      let childDirectoryName = children[i].id;
      resetDirectory2(childDirectoryName);
    }
  }
};
const checkDirectory = function (nextDirID, divID, parentClass = null) {
  showDirectory(nextDirID, divID, parentClass);
  resetDirectory(nextDirID);
};

const newDirectory = function (divID, parentID, nextDirID) {
  var children = document.querySelector("#" + parentID).children;
  for (var i = 0; i < children.length; i++) {
    let tagName = children[i].tagName;
    let classList = children[i].classList;
    if (
      tagName === "DIV" &&
      children[i].id != nextDirID &&
      children[i].id != divID
    ) {
      classList.add("hide");
    } else {
      classList.remove("hide");
    }
  }
  showDirectory(nextDirID, divID);
  resetDirectory(nextDirID);
};

changeImage("docset.png", "docset"); //   "https://stateca.sharepoint.com/:i:/r/sites/Extranet/STP/G/staff/Shared%20Documents/TIMOTHY%20SIMANHADI/docset.png?csf=1&web=1&e=3PVW2L";
changeImage("folder.png", "folder"); //   "https://stateca.sharepoint.com/:i:/r/sites/Extranet/STP/G/staff/Shared%20Documents/TIMOTHY%20SIMANHADI/folder.png?csf=1&web=1&e=g0DQnc";
changeImage("excel.png", "excel"); //   "https://stateca.sharepoint.com/:i:/r/sites/Extranet/STP/G/staff/Shared%20Documents/TIMOTHY%20SIMANHADI/excel.png?csf=1&web=1&e=aciksB";
changeImage("pdf.png", "pdf"); //   "https://stateca.sharepoint.com/:i:/r/sites/Extranet/STP/G/staff/Shared%20Documents/TIMOTHY%20SIMANHADI/pdf.png?csf=1&web=1&e=EnNISd";
changeImage("word.png", "word"); //   "https://stateca.sharepoint.com/:i:/r/sites/Extranet/STP/G/staff/Shared%20Documents/TIMOTHY%20SIMANHADI/word.png?csf=1&web=1&e=40bKPB";

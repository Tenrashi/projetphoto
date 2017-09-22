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


 document
  .getElementsByClassName("close")[0]
  .onclick = function() {
    modal.style.display = "none";
}

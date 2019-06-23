window.onload = function() {
    var oMenu = document.getElementById("menu");
    var aH2 = oMenu.getElementsByTagName('h2');
    var aU1 = oMenu.getElementsByTagName('ul');
    for (var i=0; i<aH2.length; i++) {
        aH2[i].index = i;
        aH2[i].onclick = function() {
            for (var i=0; i<aU1.length; i++) {
                if (i == this.index) {
                    if (aU1[this.index].style.display == 'block') {
                        aU1[this.index].style.display = 'none';
                        aH2[this.index].className = "active11";
                    }
                    else {
                        aU1[this.index].style.display = 'block';
                        aH2[this.index].className = "active";
                    }
                }
                else {
                    aU1[i].style.display = 'none';
                    aH2[i].className = "active11";
                }
            }
        };
    }
}
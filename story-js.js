//이야기



//human1-.onclick = function(){	bodyy.style.position = "relative";}

//스크롤 작용
window.onscroll = function(){
        var t =document.documentElement.scrollTop + document.body.scrollTop;
        moniter.innerHTML = t


        if (t > 600) {
            trash.style.animation = "trmove 3s forwards";
            person1.style.animation = "permove 4s forwards";

        }
        else{
            trash.style.animation = "";
            person1.style.animation = "";
        }

        if (t > 1500) {
            run.style.animation = "runn 4s forwards";
            run.style.opacity = "0%";
        }
        else{
           run.style.animation = "";
            run.style.opacity = "";
        }
        
         if (t > 4500) {
            mouth.style.animation = "mouth 0.5s  linear, mouthh 0.1s infinite linear alternate";
        }
        else{
           mouth.style.animation = "";
        }

         if (t > 5200) {
            xxx.style.transform = "scale(1.2)";
            xxx.style.opacity = "100%";

        }

        if (t > 5500) {
            text5.style.opacity = "100%";

        }

    }

//스크롤시 다른 링크로 이동

   $(window).scroll(function() {
        var scrolltop = $(document).scrollTop();
        console.log(scrolltop);
        var height = $(document).height();
        console.log(height);
        var height_win = $(window).height();
        console.log(height_win);
        
        
     if (Math.round( $(window).scrollTop()) == $(document).height() - $(window).height()) {
        
       var url = "https://jjoohee.github.io/misfortune/";
		$(location).attr('href',url);
        
    }
});

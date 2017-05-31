var ul = document.querySelector('ul');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
};

var x = 0;
var player = 0;
var player1 = 0;
var player2 = 0;
$("li").addClass("li1");

function pexeso(element) {
    $(element).click(function() {
        if (x === 0) {
            $("li").children().hide();
        };
        $(this).children().show();
        if ($(this)[0].className === x){
            $(element).css({"opacity": "0", "transition": "0.8s"});
            if (player%2 === 0) {
                player1 += 1;
            };
            if (player%2 === 1) {
                player2 += 1;
            };
            player += 1;
        };
        if (x !== 0) {
            $("li").children().delay(600).fadeOut(200);
            $(".active").removeClass("active");
        };
        if (x === 0) {
            x = $(element)[0].className;
            $(this).addClass("active");
        }
        else {
            x = 0;
            $(".active").removeClass("active");
            player += 1;
        };
        if (player%2 === 0) {
            $(".player1").css("font-size", "30px");
            $(".player2").css("font-size", "20px");
            $("li").removeClass("li2");
            $("li").addClass("li1");
        }
        else {
            $(".player2").css("font-size", "30px");
            $(".player1").css("font-size", "20px");
            $("li").removeClass("li1");
            $("li").addClass("li2");
        };
        $(".player1").text("player 1:    " + player1);
        $(".player2").text("player 2:    " + player2);
    });
};

pexeso(".img1");
pexeso(".img2");
pexeso(".img3");
pexeso(".img4");
pexeso(".img5");
pexeso(".img6");
pexeso(".img7");
pexeso(".img8");
pexeso(".img9");
pexeso(".img10");
pexeso(".img11");
pexeso(".img12");
pexeso(".img13");
pexeso(".img14");
pexeso(".img15");
pexeso(".img16");
pexeso(".img17");
pexeso(".img18");
pexeso(".img19");
pexeso(".img20");
pexeso(".img21");
pexeso(".img22");
pexeso(".img23");
pexeso(".img24");
pexeso(".img25");
pexeso(".img26");
pexeso(".img27");
pexeso(".img28");
pexeso(".img29");
pexeso(".img30");
pexeso(".img31");
pexeso(".img32");
pexeso(".img33");
pexeso(".img34");
pexeso(".img35");
pexeso(".img36");
pexeso(".img37");
pexeso(".img38");
pexeso(".img39");
pexeso(".img40");
pexeso(".img41");
pexeso(".img42");
pexeso(".img43");
pexeso(".img44");
pexeso(".img45");
pexeso(".img46");
pexeso(".img47");
pexeso(".img48");

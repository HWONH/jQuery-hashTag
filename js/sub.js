$(document).ready(function(){
    var $arr_red=[
        ["red_01.jpg", "redShot_01"],
        ["red_02.jpg", "redShot_02"],
        ["red_03.jpg", "redShot_03"],
    ];
    var $arr_blue=[
        ["blue_01.jpg", "blueShot_01"],
        ["blue_02.jpg", "blueShot_02"],
        ["blue_03.jpg", "blueShot_03"],
        ["blue_04.jpg", "blueShot_04"],
    ];
    var $arr_black=[
        ["black_01.jpg", "blackShot_01"],
        ["black_02.jpg", "blackShot_02"],
        ["black_03.jpg", "blackShot_03"],
    ];

    var $box=`
        <div class="box">
            <p></p>
        </div>
    `;

    // url 창으로부터 # 포함 이후의 문구를 가져와서 저장
    var $hash=location.hash;
    console.log($hash);
    // #RED/#BLUE/#BLACK라는 문자형 데이터로부터 #이라는 문자를 제거
    var $ch_hash=$hash.replace("#", "");
    console.log($ch_hash);
    $("body").attr("id", $ch_hash);
    $("section h1 span").text($ch_hash);

    // else if문으로 작성해도 되나, 나중에 수정에 용이하도록 각각 if문으로 작성하는 것이 편리하다
    if($ch_hash=="RED"){
        for(i=0;i<$arr_red.length;i++){
            $("section .box_group").append($box);
        }
        $("section .box_group .box").each(function(index){
            $(this).css("background-image", "url(img/"+$arr_red[index][0]+")");
            $(this).find("p").text($arr_red[index][1]);
        });
    }
    if($ch_hash=="BLUE"){
        for(i=0;i<$arr_blue.length;i++){
            $("section .box_group").append($box);
        }
        $("section .box_group .box").each(function(index){
            $(this).css("background-image", "url(img/"+$arr_blue[index][0]+")");
            $(this).find("p").text($arr_blue[index][1]);
        });
    }
    if($ch_hash=="BLACK"){
        for(i=0;i<$arr_black.length;i++){
            $("section .box_group").append($box);
        }
        $("section .box_group .box").each(function(index){
            $(this).css("background-image", "url(img/"+$arr_black[index][0]+")");
            $(this).find("p").text($arr_black[index][1]);
        });
    }

    // seb.html 내부에서 자체 메뉴를 클릭 시 화면 변경
    // attr() 메서는 문서상에 존재하는 속성에 대한 값을 가져온다(절대경로를 가져오는 prop() 메서드와는 달리 존재값만 반환)
    // 페이지 이동이 아닌 hash tag만 변경되므로 return false;가 필요 없다
    $("header nav ul li a").click(function(){
        var $self_hash=$(this).attr("href");
        console.log($self_hash);
        var $ch_self_hash=$self_hash.replace("#", "");
        $("body").attr("id", $ch_self_hash);
        $("section h1 span").text($ch_self_hash);

        // 컨텐츠 이미지가 들어올 공간을 모두 비운다(.box_group의 하위 요소들을 모두 비운다)
        $("section .box_group").empty();

        if($ch_self_hash=="RED"){
            for(i=0;i<$arr_red.length;i++){
                $("section .box_group").append($box);
            }
            $("section .box_group .box").each(function(index){
                $(this).css("background-image", "url(img/"+$arr_red[index][0]+")");
                $(this).find("p").text($arr_red[index][1]);
            });
        }
        if($ch_self_hash=="BLUE"){
            for(i=0;i<$arr_blue.length;i++){
                $("section .box_group").append($box);
            }
            $("section .box_group .box").each(function(index){
                $(this).css("background-image", "url(img/"+$arr_blue[index][0]+")");
                $(this).find("p").text($arr_blue[index][1]);
            });
        }
        if($ch_self_hash=="BLACK"){
            for(i=0;i<$arr_black.length;i++){
                $("section .box_group").append($box);
            }
            $("section .box_group .box").each(function(index){
                $(this).css("background-image", "url(img/"+$arr_black[index][0]+")");
                $(this).find("p").text($arr_black[index][1]);
            });
        }
    });
    $(document).on("click","section .box_group .box", function(){
        // 현재 페이지 정보가 필요 (body 태그 id 추출)
        // 몇번째 박스(인덱스)를 클릭했는가에 대한 정보
        var $body_id=$("body").attr("id"); // RED, BLUE, BLACK
        var $box_index=$(this).index(); // 0, 1, 2

        $(".dark_bg").addClass("active");
        $(".popup").addClass("active");
        if($body_id=="RED"){
            $(".popup .popup_img").css("background-image", "url(img/"+$arr_red[$box_index][0]+")")
            $(".popup h3").text($arr_red[$box_index][1]);
        }
        if($body_id=="BLUE"){
            $(".popup .popup_img").css("background-image", "url(img/"+$arr_blue[$box_index][0]+")")
            $(".popup h3").text($arr_blue[$box_index][1]);
        }
        if($body_id=="BLACK"){
            $(".popup .popup_img").css("background-image", "url(img/"+$arr_black[$box_index][0]+")")
            $(".popup h3").text($arr_black[$box_index][1]);
        }
    })

    /* 
    // 다음과 같이 작성할 경우, 우선수위가 밀려 이벤트가 발생하지 않으므로, 위와 같이 선언해준다
    $("section .box_group .box").click(function(){
        // 현재 페이지 정보가 필요 (body 태그 id 추출)
        // 몇번째 박스(인덱스)를 클릭했는가에 대한 정보
        var $body_id=$("body").attr("id"); // RED, BLUE, BLACK
        var $box_index=$(this).index(); // 0, 1, 2

        $(".dark_bg").addClass("active");
        $(".popup").addClass("active");
        if($body_id=="RED"){
            $(".popup .popup_img").css("background-image", "url(img/"+$arr_red[$box_index][0]+")")
            $(".popup h3").text($arr_red[$box_index][1]);
        }
        if($body_id=="BLUE"){
            $(".popup .popup_img").css("background-image", "url(img/"+$arr_blue[$box_index][0]+")")
            $(".popup h3").text($arr_blue[$box_index][1]);
        }
        if($body_id=="BLACK"){
            $(".popup .popup_img").css("background-image", "url(img/"+$arr_black[$box_index][0]+")")
            $(".popup h3").text($arr_black[$box_index][1]);
        }
    });
     */

    $(".dark_bg, .popup .close").click(function(){
        $(".dark_bg").removeClass("active");
        $(".popup").removeClass("active");
    });
});
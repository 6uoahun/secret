// 태그들 찾기
// textarea, button, ul
// let 변수명 =>특수문자 _, $만 사용가능!

let input = document.getElementById("memo-input");
let button = document.getElementById("save-memo");
let list = document.getElementById("memo-list");

// 버튼 클릭했을 때 input에 적힌 글자 가져와서
// li 태그 생성하고 ul태그에 추가
button.addEventListener("click", function(){

    // .innerText → 정적인 글자 가져올 때!
    // .value → 동적인 글자 가져올 때!
    let memo = input.value;

    // 만약에 memo에 아무것도 없는게 아니라면
    if(memo != ""){ // null vs emptyString       null vs 0
        let li = document.createElement("li");
        li.innerText = memo;
        li.style.cursor = "pointer";
        li.style.backgroundColor = "lightblue";
        
        // span 태그 생성!
        let span = document.createElement("span");
        span.innerText = new Date().toLocaleString(); // 현재 날짜/시간
        span.style.float = "right";
        span.style.color = "darkblue";

        li.appendChild(span); // span을 li에 추가


        list.appendChild(li); // list 태그에 자식노드로 추가!

        // li 태그를 삭제하고 싶다! 부모노드.removeChild();
        li.addEventListener("click", function(){
            // allert => 버튼이 "확인" 하나 뿐
            // confirm => 버튼이 "확인", "취소" 두 가지
            let ok = confirm("비밀은 증거를 남기지 않는 것."); // 사용자가 확인을 누르면 true, false

            if(ok == true){
                li.parentNode.removeChild(li);
                
            }

            li.parentNode.removeChild(li);

            li.style.transitionDuration = "10";
        });


        // textarea 글자 지우기
        input.value = ""
    }
});


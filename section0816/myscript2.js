/* myscript2.js */

function getID() {
    // alert();

    // <input type="text" name="uid" id="uid">에 접근해 보자

    // 1) <form>의 컨트롤 요소 접근시 id 사용(추천)
    // alert(document.getElementById("uid")); > [object HTMLInputElement]
    // alert(document.getElementById("uid").value); > 실제값

    // 2) tag name 접근
    // 본문에서 <input> 태그들 접근
    // alert(document.getElementsByTagName("input")); > [object HTMLCollection]
    // <input> 태그들 중에서 0번째 접근
    // alert(document.getElementsByTagName("input")[0]); > [object HTMLInputElement]
    // alert(document.getElementsByTagName("input")[0].value); > 실제 값

    // 3) <form>의 컨트롤 요소 접근시 name 사용(비추)
    // alert(document.memfrm.uid.value);
    // alert(document.getElementsByName("uid")); > [object NodeList]
    // alert(document.getElementsByName("uid")[0].value); > 실제값

    // 4) 스타일 접근
    // alert(document.getElementsByClassName("line")); > [object HTMLCollection]


} // getID end

function setID() {
    // <input type="text" name="uid" id="uid" class="line">에 값 대입하기
    let str=document.getElementById("uid").value;

    // 1) id접근(추천)
    document.getElementById("uid").value=str;

    // 2) tag name 접근
    // document.getElementsByTagName("input")[0].value=str;

    // 3) name 접근
    // document.getElementsByName("uid")[0].value=str;
    
} // setID end


function validate() {
    // 회원가입 폼에 대한 유효성 검사

    // 1) 아이디 글자 갯수 8-12 사이인지 확인
    // 위의 조건을 만족하지 않으면
    // -> 경고창(alert)
    // -> ID를 다시 입력할 수 있도록 id=uid에서 커서를 생성해 주고(focus)
    // -> 서버로 전송하는 것을 차단
    let uid=document.getElementById("uid").value;
    uid=uid.trim(); // 맨 앞과 뒤의 공백 제거
    if(!(uid.length>=8 && uid.length<=12)) {
        alert("아이디는 8글자 이상, 12글자 미만이어야 합니다.");
        document.getElementById("uid").focus();
        return false;
    }

    // 2) 비밀번호 글자수가 5-10 사이인지 확인
    let upw=document.getElementById("upw").value;
    upw=upw.trim(); // 맨 앞과 뒤의 공백 제거
    if(!(upw.length>=5 && upw.length<=10)) {
        alert("비밀번호는 5글자 이상, 10글자 미만이어야 합니다.");
        document.getElementById("upw").focus();
        return false;
    }

    // 3) 주민번호 앞칸이 숫자형 글자 갯수 6인지 확인
    let jumin1=document.getElementById("jumin1").value;
    jumin1=jumin1.trim(); // 맨 앞과 뒤의 공백 제거
    if(jumin1.length!=6 || isNaN(jumin1)==true){
        alert("주민번호 앞번호는 숫자로 6글자를 정확히 입력해주세요.");
        document.getElementById("jumin1").value="";
        document.getElementById("jumin1").focus();
        return false;
    }

    // 4) 약관동의에 체크했는지
    if(document.getElementById("agree").checked==false){
        alert("약관에 동의해주셔야 회원가입을 할 수 있습니다.");
        return false;
    }

    alert("회원 가입 폼을 서버로 전송합니다.")
    return true; // <form name=memfrm>폼을 서버로 전송

} // validate() end

function validate2() {
    // <form = id=memfrm></form>
    let frm=document.getElementById("memfrm");
    // alert(frm); // [object HTMLFormElement]

    // <form action=ok2.jsp></form>와 동일한 기능의 자바스크립트 속성
    frm.action="ok2.jsp";

    frm.submit();

    // <input type=reset>와 동일한 기능의 자바스크립드 함수
    // 폼양식 내에 있는 폼컨트롤 요소가 가지고 있던 최초의 상태로 복귀
    // frm.reset();

} // validate2() end
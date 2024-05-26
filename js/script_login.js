let $name=document.getElementById('name');
let $nameMes=document.getElementById('nameMes');

let $phone=document.getElementById('phone');
let $phMes=document.getElementById('phMes');

let $idArea=document.getElementById('idArea');
let $idMes=document.getElementById('idMes');

let $email=document.getElementById('email');
let $eMes=document.getElementById('eMes');

let $pwArea=document.getElementById('pwArea');
let $pwMes=document.getElementById('pwMes');

let $pwArea2=document.getElementById('pwArea2');
let $pwMes2=document.getElementById('pwMes2');


//이름
let regName=/^[가-힣a-zA-Z]+$/; 
$name.addEventListener('blur',function(){
    if(regName.test($name.value)){    //name과 regName vlaue 값이 같으면
        $nameMes.innerHTML=""
    }else{
        $nameMes.innerHTML="이름을 입력해주세요."
        $nameMes.style.color='tomato'
        $name.value=''
    }
}) 

//핸드폰번호
let regPhone=/(^01[01]{1})([0-9]{4})[0-9]{4}$/;
$phone.addEventListener('blur',function(){
    if(!regPhone.test($phone.value)){
        $phMes.innerHTML="전화번호를 다시 입력해주세요."
        $phMes.style.color='tomato'
    }else{
        $phMes.innerHTML="사용가능한 전화번호입니다."
        $phMes.style.color='green'
    }
})

//아이디
let regid=/^[a-z]+[a-z0-9]{5,19}$/g; //영문자로 시작하는 영문자 또는 숫자 6~20자 
$idArea.addEventListener('blur',function(){  
    if(!regid.test($idArea.value)){ 
        $idMes.innerHTML="아이디를 다시 입력해주세요."
        $idMes.style.color='tomato'
    }else{
        $idMes.innerHTML="사용가능한 아이디입니다."
        $idMes.style.color='green'
    }
})

//이메일
let regemail=/^[a-zA-Z0-9]([-_.]?\w+)*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,3}$/; //[a-zA-Z0-9]으로 시작하고 ([-_.]?\w+)*
$email.addEventListener('blur',function(){
    if(!regemail.test($email.value)){ 
        $eMes.innerHTML="이메일을 다시 입력해주세요."
        $eMes.style.color='tomato'
    }else{
        $eMes.innerHTML="사용가능한 아이디입니다."
        $eMes.style.color='green'
    }
})

//비밀번호
let regPw=/^.*(?=^.{8,12}$)(?=.*\d)(?=.*[!”#$%’()*+,-./:;<=>?@^_|~]).*$/;    
$pwArea.addEventListener('blur',function(){    
    if(!regPw.test($pwArea.value)){ 
        $pwMes.innerHTML="비밀번호를 다시 입력해주세요."
        $pwMes.style.color='tomato'
    }else{
        $pwMes.innerHTML="사용 가능한 비밀번호입니다."
        $pwMes.style.color='green'
    }
})

$pwArea2.addEventListener('blur',function(){    
    if(($pwArea.value==$pwArea2.value)&&(!$pwArea2.value=='')){  
        $pwMes2.innerHTML="비밀번호가 일치합니다."
        $pwMes2.style.color='green'
    }else{
        if(($pwArea.value=='')||($pwArea2.value=='')){ 
            $pwArea2.value=''
        }else{
            $pwMes2.innerHTML='비밀번호가 일치하지 않습니다.'
            $pwMes2.style.color='tomato'
            $pwArea2.value=''
        }
    }
})

document.getElementById('submit').onclick=function(){
    if($name.value==''){
        alert('이름을 입력하세요.'); 
        return false;
    }else{
        if($phone.value==''){
            alert('번호를 입력하세요.'); 
            return false;
        }else{
            if($idArea.value==''){   //idArea value값이 비어있을 경우
                alert('아이디를 입력하세요');  // alert 창을 나타내
                return false;
            }else{
                if($email.value==''){
                    alert('이메일을 입력하세요.'); 
                    return false;
                }else{
                    if($pwArea.value==''){ //비밀번호가 비어있으면
                        alert('비밀번호를 입력하세요');  // alert 창을 나타내
                        return false;
                    }else{
                        if($pwArea.value !=$pwArea2.value){  //비번, 비번 확인이 일치하지않으면
                            alert('비밀번호가 일치하지 않습니다.'); 
                            return false;
                        }else{
                            location.href = '../sub/join.html';
                        }
                    }
                }
            }
        }
    }
}
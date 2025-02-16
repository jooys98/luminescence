//      이벤트 : 1. 마우스 커서에 따른 이미지 움직임  
//             2. 빛의 움직임 
//             3. 마우스커서 뗴면 초기화  

//  var + 변수명  : 변수 선언 // = 하나만 있으면 같다는 뜻이 아니라 대입한다는 뜻
// document.querySelectorAll() :html 문서 내에서 () 안의 요소들을 모두 선택한다는 뜻 
//element.querySelectorAll() : 특정한 요소 객체 내에서만 선택
//var : 같은 변수명 , 다른 대입 가능 / let : 같은 변수명 같은 대입 

var link = document.querySelectorAll('.link');
var containers = document.querySelectorAll('.container');
//이름이 container 인 클래스들을 containers 라는 변수에 모두 묶어놓음 (리스트?,배열 그런 느낌)

link.forEach(container => {


    containers.forEach(container => {
        // foreach(): ()안의 배열을 순회하는 메서드 
        // ==>{} : {} 안의 내용을 실행한다는 뜻 (익명 함수)
        //containers 변수 안의 .container css를 모두 묶어놓고, 
        //container 객체들을 순회하며 {}안의 기능들을 모두 적용시킨다는 뜻 

        var overlay = container.querySelector('.overlay');
        //querySelector(): ()안의 내용을 가져와서 앞에 있는 객체에게 적용시킨다는 뜻 
        //css 의 .overlay 를 가져와서 모든 container 에게 실핼시킴
        //js에서 선언한 'overlay' 변수는 css .overlay 를 가져와 
        //container 객체들에게 적용시킨다
        //입체적인 카드의 반짝임을 구현 

        container.addEventListener('mousemove', function (e) {
            //e: 이벤트 객체 (마우스의 움직임 정보를 담은 함수이다)
            //각 컨테이너에 마우스를 움직일떄 실행될 이벤트
            //addEventListener('이벤트 타입',실행 함수) :
            //이벤트가 실행됨과 동시에 함수도 실행됨
            //mousemove : 마우스가 움직일때 발생하는 이벤트 
            //function (e) :마우스의 좌표를 함수로 표현


            var x = e.offsetX
            //이벤트 대상에서의 마우스의 x좌표 위치 반환값을 var x로 선언
            //마우스 양옆 (가로)
            var y = e.offsetY //마우스 위 아래 (세로)
            var rotateX = 4 / 30 * y - 20
            // rotateX : x축을 기준으로 회전한다는 뜻 
            //회전률이 마우스커서에 있기 때문에 var 변수로 정의함 
            var rotateY = -1 / 5 * x + 20

            // 마우스 좌표 설정값 
            //마우스 커서에 따라 움직이게 만든걸 수학으로 구현했다는데 뭔소린지 모르겠음

            overlay.style.backgroundPosition = `${x / 5 + y / 5}%;`;
            // overlay의 배경 위치를 마우스의 x,y좌표에 따라 변하게 한다 (입체적 효과)

            overlay.style.filter = `opacity(${x / 200}) brightness(1.2)`;
            // overlay의 투명도 효과(opacity)를 마우스의 x좌표에 따라 조절 , 밝기는 고정값
            overlay.style.transform = `translateY(${(y / 5) - 50}px)`;
            //y좌표에 따라 위아래로 움직임
            overlay.style.transform = `translateX(${(x / 5) - 50}px)`;
            //x좌표에 따라 양옆으로 움직임
            container.style.transform = ` perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            //마우스의 위치에 따라 회전시킨다    
        });

        container.addEventListener('mouseout', function () {
            overlay.style = 'filter : opacity(0)';
            container.style = 'transform : perspective(350px) rotateY(0deg) rotateX(0deg)'
            //컨테이너에서 마우스가 나가면 다시 초기화 되는 이벤트 

        });

    });

}); 
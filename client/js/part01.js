


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]


// 네비게이션에게 이벤트를 건다
// 핸들러를 연결한다
// 이벤트 객체에서 타겟을 찾는다


const navigation = getNode('.navigation');
const visualImage = getNode('.visual img');
// const list = getNodes('.navigation > li');



console.log();

//유사배열을 배열로 만드는 함수
function makeArray(arrayLike) {
  return Array.from(arrayLike)
}


// 내가 선택한 li에 is-active 클래스를 넣기
// 내가 선택하지 않은(모든li) li에게 is-active 클래스를 제거해

// 선택한 대상의  data-index값을 가져오기

// 비주얼 안에있는 이미지를 가져온다.
// 이미지의 scr 속성에 접근한다.
// src의 값을 index로 바꾼다.

// alt 변경


// 지금 네비게이션의 자식요소들을 유사배열로 불러온다음에 forEach가 안되는 상태여서 makeArray 사용해서 진짜배열로 만들고 거기에 forEach써서 is-active를 제거
function handler(e) {
  
  let target = e.target.closest('li'); //closest를 통해 e.target에 가장 근접한 'li'를 캐치하도록 하는..
  if (!target) return;

  let list = makeArray(navigation.children); //유사배열 중에서도 forEach가 포함되지 않아서 Array로 형변환 필요
  let index = attr(target, 'data-index');


  // Array.from(list)
  // let arr = [...list]
  // Array.prototype.slice.call(list)
  
/*   let arr = Array.from[list]; == [...list],Array.prototype.slice.call(list)
  arr.forEach((item)=>{
    item.classList.remove('is-active');
    })
 */


  //[li,li,li,li]
  list.forEach(item=>removeClass(item,'is-active')) //순환하면서 list의 is-active를 다 지워주고


  // attr(visualImage, 'src', `./assets/part01/visual${index}.jpg`);
  attr(visualImage, 'src', `./assets/part01/${data[index-1].src}`);
  attr(visualImage, 'alt', data[index - 1].alt);
  // console.log(index);


  // list.forEach((item)=> {
  //   console.log(item);
  // })


  addClass(target, 'is-active'); //선택된 list에만 is-active를 추가

  // console.log(target);
}


navigation.addEventListener('click', handler);















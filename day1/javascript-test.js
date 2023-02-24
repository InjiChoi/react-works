// 1.variable
let name = "hong";
let age = 30;
let height = 178.3;

let info = `이름: ${name}, 나이: ${age}, 키: ${height}`;
// console.log(info);

// let res = 20 || 20;
// console.log(res);

// let a = 0;
// b = 10;
// a ?? b;
// a || b;

// var val1 = 10;
// var val2 = 20;
// const val3 = 30;

// 2.function ----------------------------
function sum(x, y) {
  return x + y;
}

const sum2 = function (x, y) {
  // 함수 표현식
  return x + y;
};

const sum3 = (x, y) => x + y; // 화살표 함수
const sum4 = (x, y) => {
  return x + y;
};

// console.log(sum(10, 20));
// console.log(sum2(10, 20));
// console.log(sum3(10, 20));

// 3.array --------------------------------
let arr1 = [];
let arr2 = new Array();
let arr3 = [10, 20, 30];
let arr4 = [100, 200, 300];

let totarr = [...arr3, ...arr4]; // 배열 합치기: 전개연산자
// console.log(totarr); // [10, 20, 30, 100, 200, 300]

arr3.push(40); // 배열에 값 추가
console.log(arr3); // [10, 20, 30, 40]

let d = arr3.pop(); // 배열의 마지막 값 제거
console.log(arr3); // [10, 20, 30]
console.log(d); // 40

arr4.splice(1, 1); // 배열의 특정 위치의 값 제거 (1번째 인덱스부터 1개 삭제)
console.log(arr4); // [100, 300]
// delete: 배열의 특정 위치의 값을 제거하고 undefined로 채움 (영역이 남아있음)

arr4.splice(1, 1, 400, 500); // 배열의 특정 위치의 값 제거 후 추가
console.log(arr4); // [100, 400]
// splice: 배열의 특정 위치의 값을 제거하고 추가

let subarr = totarr.slice(2, 5);
console.log(subarr); // [30, 100, 200]

let arr5 = [1, 2];
let arr6 = arr5.concat([3, 4]); // concat: 원래 있는 배열은 건드리지 않고 새로운 배열을 만들어서 반환
console.log(arr6);

// 4. array method ------------------------
let arr = [10, 20, 30];
arr.forEach(function (item, index, array) {
  console.log(`data: ${item}, index: ${index}, array: ${array}`);
  // data: 10, index: 0, array: 10,20,30
  // data: 20, index: 1, array: 10,20,30
  // data: 30, index: 2, array: 10,20,30
});

let tot = 0;
arr.forEach(function (item) {
  tot += item;
});
console.log(tot); // 60

let users = [
  { id: 1, name: "hong", age: 20 },
  { id: 2, name: "song", age: 30 },
  { id: 3, name: "park", age: 40 },
]; // 객체{} 배열[]

// let user = users.find(function (item) {
//   return item.name == "park";
// });
let user = users.find((item) => item.name == "park");
console.log(user); // {id: 3, name: "park"}

let user2 = users.find((item) => item.age == 20);
console.log(user2);

let subusers = users.filter((item) => item.age == 20);
console.log(subusers); // [{id: 1, name: "hong"}]

let result = arr.map((item) => item + item * 0.1);
console.log(result); // [11, 22, 33]

let narr = [1, 2, 3, 4, 5];
let res = narr.reduce((sum, current) => sum + current, 0); // current: item과 같음 / 0: 초기화된 값
console.log(res); // 15

let obj = { name2: "hong", age2: 20, height2: 178.3 };
let { name2, age2 } = obj;
console.log(name2, age2); // hong 20

let obj2 = { ...obj, age2: 40 }; // ...obj: obj의 모든 속성을 가져옴 / 기존 속성값 변경
console.log(obj2); // {name2: "hong", age2: 40, height2: 178.3}

let obj3 = { ...obj, weight: 70 }; // 없는 속성을 추가
console.log(obj3); // {name2: "hong", age2: 20, height2: 178.3, weight: 70}

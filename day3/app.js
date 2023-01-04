let age = 17;
age = 18;

console.log(age)

const name = '전찬하';
console.log(name);

let catAge = 5;
let catName = "jibok";
catName = 'mdol';
catName = `cute jibok`;
catName = `cute jibok's age is ${catAge+1}`

console.log(catName)

if(1>0){
  console.log('참참참')
}

console.log(1>0) //true
console.log(1<0) //false
// boolean : 참 / 거짓

// null: 값이 없다! 의도적으로 알려주는 것
// undefined : 값이 아직 지정되지 않았다 (개발자의 실수일 확률 높음)

// 참조 데이터 타입
const arr = [1,2,3]
arr[0] = 10
console.log(arr)

const student = {
  name: '개씹겸',
  age: 18,
};
console.log(student["name"])
console.log(student.name)

// 전역변수 vs 지역변수
var global = "전역변수";
if(global === "전역변수"){
  var global = "지역변수";
  console.log(global);
}
console.log(global);

console.log(2/3)
console.log(2%3)
console.log(2**3)
console.log(2+"살")

// 증감연산자
let num = 10;
num++;
console.log(num);

const num1 = 10;
const num2 = 20;

console.log(num1>num2);
console.log(num1<=num2);
console.log(num1===num2);
console.log(num1=="10");
console.log(num1==="10");

// != !===
console.log(num1 != num2);

//논리 연산자
// AND, OR, NOT
// &&, ||, !
console.log(true&&false); //false
console.log(true||false); //true

console.log(typeof null) // object
console.log(typeof undefined) // undefined

console.log(null + 120) // 120
console.log(undefined + 120) // NaN

console.log(!null === true) // true
console.log(!undefined) // true
// 거짓같은 값 (Falsy, falsey)
// null: 아무런 값도 없음 / undefined: 원시값 / NaN: 숫자가 아님

console.log(true && true && "야호"); // 야호
console.log(false || false || "집에 갈래"); // 집에 갈래
console.log(true && false && "집에 가자~"); // false
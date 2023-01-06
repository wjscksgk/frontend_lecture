// console.log(alert("hi"))
// console.log(confirm("hi"))
// console.log(prompt("hi"))

const userAge = Number(prompt("당신의 나이는?"))
console.log(userAge)

isNaN() // 자동으로 들어오는 데이터를 형변환(Number) 해버려서 결과값 예측안됨
Number.isNaN() // 데이터 건드리지 않고 isNaN

if(userAge > 20){
  alert("성인이시군요!")
}else{
  alert("학생이군요!")
}
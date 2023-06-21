//lvl 76
let total = 0
let sp = []
function addNums(a){
    sp = a.split(', ')
    for(let i in sp){
        total += Number(sp[i])
    }
    return total
}
console.log(addNums('1, 2, 3')) //6
console.log(addNums('5, 8, 9, 6, 7')) //41
//lvl 77
let sp0 = []
function isPrefix(a, b){
    sp = b.split('')
    sp0 = []
    for(let i in sp){
        if(i != sp.length - 1){
            sp0[i] = sp[i]
        }
    }
    return a.includes(sp0.join(''))
}
console.log(isPrefix('insomnia', 'in-')) //true
console.log(isPrefix('important', 'un-')) //false
function isSuffix(a, b){
    sp = b.split('')
    sp0 = []
    for(let i in sp){
        if(i != 0){
            sp0[i] = sp[i]
        }
    }
    return a.includes(sp0.join(''))
}
console.log(isSuffix('arahnofoby', '-foby')) //true
console.log(isSuffix('biology', '-hood')) //false
//lvl 78
let arr = []
let tArr = []
function toArray(a){
    tArr = []
    arr = []
    sp = []
    sp0 = []
    for(let i in a){
        sp[sp.length] = i
        sp0[sp0.length] = a[i]
    }
    for(let i = 0; i<sp.length; i++){
        arr = []
        arr[0] = sp[i]
        arr[1] = sp0[i]
        tArr[tArr.length] = arr
    }
    return tArr
}
console.log(toArray({a: 'b', c: 'd'}))
//lvl 79
function together(a){
    tArr = []
    for(let i in a){
        sp = a[i]
        for(let i in sp){
            tArr[tArr.length] = sp[i]
        }
    }
    return tArr
}
console.log(together([[1], [2,3], [4]])) //[1, 2, 3, 4]
console.log(together([[6, 9], [3]])) //[6, 9, 3]
//lvl 80
function count(a){
    tArr = []
    sp = String(a).split('')
    for(let i in sp){
        if(isNaN(Number(sp[i])) === false){
            tArr[tArr.length] = Number(sp[i])
        }
    }
    return tArr.length
}
console.log(count(384))
console.log(count(-2398))
//Тесты
// 1)
//что выведет в консоли функция call
const person1 = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
//Ответ: 'Alex = 24'


// 2)
//получите доступ к методу call и запустите его
const person2 = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
person2.call()

// 3)
//выведите в консоли все ключи из обьекта с помощью for
const person3 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
for(let i in person3){
    console.log(i)
}

// 4)
//выведите в консоли все значения из обьекта с помощью for
const person4 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
for(let i in person4){
    console.log(person4[i])
}

// 5)
//преобразуйте обьект ниже в массив
const person5 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
console.log(toArray(person5))

// 6)
//преобразуйте обьект ниже в строку
const person6 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
console.log(JSON.stringify(person6))

// 7)
//преобразуйте обьект ниже в конструктор функции
let obj7 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
function Me(){
    this.name = 'Alex'
    this.age = 24
    this.isMarried = false
    this.hasCar = false
    this.hasJob = true
    this.job = 'Programmer'
    this.childs = ['Hanz', 'Marry']
    this.awards = {itMaster: 'Legend rang', driver: 'Fast man'}
}

// 8)
//перечисли встроенные конструкторы javascript
//1) new 2) get 3) set

// 9)
//создайте новый обьект используя конструктор ниже
function Person9(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
let obj10 = new Person9('Turgut', 13, 'none')
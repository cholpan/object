// this || method ||

// this - ключевые слово, которое мы можем обращаться к родительному элементу 

// console.log(this);

// console.log(this === window);

// b =  "JS7"
// a = "JS8";

// window.a = "JavaScript"

// console.log(window.a);
// console.log( window.b);

// const obj = {
//     name:  'Umar'
// }

// obj.age = "18";

// console.log(obj);



//



// const car = {
//     name: "Mersedes-Benz",
//     model:"E211",
//     price:15000,

//     byCar: function(sum){
//         if (this.price< sum){
//             return  'да вы можете купить это авто ${this.name} ${
//                 this.model}' 
//             }. ' И у вас сдача   ${sum - this.price}$';
//         }
//         return 'Вы не можете купить это авто потому что у вас не хватает ' ${this.price- sum}$';
//     },
// };
// console.log(car.byCar(10000));



// const game ={
//     name: "PUBG",
//     price: 1000,
//     isActive: true,
//     quantityUsers:10000,
//     leavel:70,
//     total:345,
//     getSum:function(){
// const values = Object.values(this);
// const filteredValues = values.filter((el)=> typeof el === "number");
// return filteredValues.reduce((acc,el)=> acc + el);
//     },
// };

// console.log(game.getSum());



const user = {
    name:"Erlan",
    changeName: function(newName){
     this.name = newName;
    },
};

user.changeName("Baiel");
console.log(user);
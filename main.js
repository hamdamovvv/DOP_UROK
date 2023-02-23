// const para = document.querySelector("p")
// para.addEventListener("click", updateName)
//
// function updateName() {
//     let name = prompt("Изменить имя")
//     para.textContent = "Player 1:" + name
// }
//
// let message
// message = "Hello"
//
// alert(message)

// let year = prompt("Сколько тебе лет?")
//
// if (year < 3 ) {
//     alert("Здравствуй малыш")
// } else if ( year < 18) {
//     alert("Привет")
// } else if (year < 30) {
//     alert("Здравствуйте")
// } else {
//     alert("Какой необычный возраст")
// }


// let number1 = Number(prompt("Введите первое число"))
// let operation = prompt("Выберите действие \n+\n-\n*\n/")
// let number2 = Number(prompt("Введите второе число"))
//
// const calc = () => {
//     let result
//     (isNaN(number1) || isNaN(number2))?
//         alert("Введите только числа!") :
//         true
//
//     switch (operation) {
//         case "+":
//             result = number1 + number2
//             break
//         case "-":
//             result = number1 - number2
//             break
//         case "*":
//             result = number1 * number2
//             break
//         case "/":
//             (number2 === 0) ? result = "Ошибка" : result = number1 / number2
//             break
//         default:
//             alert("Выберите правильное действие")
//     }
//     alert(result)
// }
// calc()
//
// class Cars {
//     constructor(options) {
//         this.model = options.model
//         this.color = options.color
//         this.wheels = options.wheels
//         this.price = options.price
//     }
//     start() {
//         console.log("Машина заведена")
//     }
//
// }
//
//
// class Toyota extends Cars {
//     constructor(options) {
//         super(options);
//     }
// }
//
//
//
// const toyota = new Toyota({
//         model: "Camry 3.5",
//         color: "Green",
//         wheels: 4,
//         price: "20000$"
//     }
// )
//
//
// class Volvo extends Cars{
//     constructor(options) {
//         super(options);
//     }
// }
//
//
// const volvo = new Volvo({
//     model: "Truck",
//     color: "Black",
//     wheels: 12,
//     price: "50000$"
// })
//
// class Lamborghini extends Cars {
//     constructor(options) {
//         super(options);
//     }
// }
//
//
// const lamborghini = new Lamborghini({
//     model: "Aventador",
//     color: "Orange",
//     wheels: 4,
//     price: "80000$"
// })
//
// lamborghini.start()
// volvo.start()
// toyota.start()

class Light
{
    constructor(selector) {
        this.$element = document.getElementById(selector)
    }
}


class Circle extends Light
{
    constructor(options) {
        super(options.selector)
        this.$element.style.backgroundColor = options.color
        this.$element.textContent = options.text
    }
}

let color = prompt("Выберите цвет светофора").toLowerCase()
if (color === "красный") {
    const red = new Circle({
        selector: "red",
        color: "red",
        text: "stop"
    })
} else if(color === "желтый") {
    const yellow = new Circle({
        selector: "yellow",
        color: "yellow",
        text: "wait"

    })
} else if(color === "зеленый") {
    const green = new Circle({
        selector: "green",
        color: "green",
        text: "go"

    })
} else {
    alert("Вы должны ввести цвет светофора: красный, желтый, зеленый")
}
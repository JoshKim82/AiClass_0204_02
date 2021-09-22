let 일과 = [
1,
2,
3,
4,
5,
6,
7,
8
]
let 시간 = [
600,
100,
200,
400,
100,
600,
300,
200
]
basic.forever(function () {
    for (let index = 0; index <= 7; index++) {
        basic.showNumber(일과[index])
        basic.pause(시간[index])
    }
})

var wine = 100

while (wine >= 1) {
    console.log("Still greater than 0 ", wine);
    wine -= 1
    if (wine === 0) {
        console.log("I am equal to zero now.")
        break;
    }
}
console.log("The value of wine is ", wine)
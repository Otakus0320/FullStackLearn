const calculateBmi = (height: number, weight: number): string => {
    height /= 100;
    let bmi: number = weight / (height * height)
    if (bmi >= 18.5 || bmi <= 24){
        return "Normal Range"
    }else {
        return "Abnormal Range"
    }

}

console.log(calculateBmi(180, 74));
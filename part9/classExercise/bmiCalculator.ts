const calculateBmi = (height: number, weight: number): string => {
    height /= 100;
    const bmi: number = weight / (height * height);
    if (bmi >= 18.5 || bmi <= 24){
        return "Normal Range";
    }else if (bmi >= 24){
        return "Overweight";
    }else {
        return "Over Light";
    }
};

const height: number = Number(process.argv[2]);
const weight: number = Number(process.argv[3]);
console.log(calculateBmi(height, weight));
interface Result {
    periodLength: number,
    trainingDays: number,
    target: number,
    average: number,
    success: boolean,
    rating: number,
    ratingDescription: string
}

const calculateExercises = (time: Array<number>, target: number): Result => {
    let sum: number = time.reduce((acc: number, currentValue: number) => acc + currentValue, 0);
    let trainingDays: number = time.reduce((acc: number, currentValue:number) => acc + (currentValue ? 1 : 0), 0);
    let length: number = time.length;
    let avg: number = sum / length;
    let success: boolean = avg > target;
    let rating: number;
    let ratingDescription: string;
    if (sum <= target) {
        rating = 0;
        ratingDescription = "Keep going"
    }else if(sum == target) {
        rating = 1;
        ratingDescription = "Success"
    }else{
        rating = 2;
        ratingDescription = "Nice job"
    }
    return {
        periodLength: length,
        trainingDays: trainingDays,
        target: target,
        average: avg,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription
    }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))
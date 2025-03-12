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
    const sum: number = time.reduce((acc: number, currentValue: number) => acc + currentValue, 0);
    const trainingDays: number = time.reduce((acc: number, currentValue:number) => acc + (currentValue ? 1 : 0), 0);
    const length: number = time.length;
    const avg: number = sum / length;
    const success: boolean = avg >= target;
    let rating: number;
    let ratingDescription: string;
    if (sum <= target) {
        rating = 0;
        ratingDescription = "Keep going";
    }else if(sum == target) {
        rating = 1;
        ratingDescription = "Success";
    }else{
        rating = 2;
        ratingDescription = "Nice job";
    }
    return {
        periodLength: length,
        trainingDays: trainingDays,
        target: target,
        average: avg,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription
    };
};

const args = process.argv.slice(2);
const time: Array<number> = args.slice(1).map(arg => Number(arg));
const target: number = Number(args[0]);
console.log(calculateExercises(time, target));
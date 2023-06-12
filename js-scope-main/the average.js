function computeAverageMarks(marks) {
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    return totalMarks / marks.length;
}

function determineGrade(average) {
    if (average < 60) {
        return 'F';
    } else if (average < 70) {
        return 'D';
    } else if (average < 80) {
        return 'C';
    } else if (average < 90) {
        return 'B';
    } else {
        return 'A';
    }
}

const studentMarks = [80, 77, 88, 95, 68];
const averageMarks = computeAverageMarks(studentMarks);
const grade = determineGrade(averageMarks);

console.log(`Average Marks: ${averageMarks}`);
console.log(`Grade: ${grade}`);
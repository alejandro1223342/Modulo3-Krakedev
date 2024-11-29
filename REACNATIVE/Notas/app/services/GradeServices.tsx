let grades = [{ subject: "Matematicas", grade: 9.5 }, { subject: "Fisica", grade: 9.2 }];



//Metodo que me permite agregar elementos al arreglo

export const saveGrade = (grade: any) => {

    grades.push(grade);

    console.log("Arreglo", grades);

}

export const getGrades = () => {
    return grades;

}
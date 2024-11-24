const students = [
  {
    name: "Matheus",
    tests: [5, 8]
  },
  {
    name: "Lorena",
    tests: [9, 7]
  }
]

function sumTests() {
  for (let student of students) {
    let result = 0
    for (let index = 0; index < student.tests.length; index++) {
      result = student.tests[index] + result
      console.log(student.tests[index])
    }
    console.log(result)
    const average = result / 2
    if (average >= 7) {
      alert("A média do(a) aluno(a) " + student.name + " é: " + average
        + "\nParabéns, " + student.name + "! Você foi aprovado(a) no concurso!"
      )
    } else {
      alert("A média do(a) aluno(a) " + student.name + " é: " + average
        + "\nNão foi dessa vez, " + student.name + "! Tente novamente!"
      )

    }
  }
}

sumTests()

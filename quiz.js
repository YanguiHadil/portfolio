function submitQuiz() {
    const answers = {
        q1: "c",
        q2: "b",
        q3: "a",
        q4: "a",
        q5: "a",
        q6: "b",
        q7: "b",
        q8: "b",
        q9: "b",
        q10: "a"
    };

    let score = 0;
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    for (let [key, value] of formData.entries()) {
        if (value === answers[key]) {
            score++;
        }
    }

    const result = document.getElementById('result');
    result.textContent =` Votre score est : ${score} /10`;
}
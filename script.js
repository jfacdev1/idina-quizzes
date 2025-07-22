// Example lesson data (replace with parsed content from your sources)
const lessons = [
  {
    title: "Leçon 1: Les Animaux",
    content: "Le chat, le chien, le cheval... [i]"
  },
  {
    title: "Leçon 2: Les Plantes",
    content: "L'arbre, la fleur, l'herbe... [j]"
  }
];

// Example quiz data
const quizQuestions = [
  {
    question: "Comment dit-on 'cat' en français?",
    options: ["Le chat", "Le chien", "Le cheval"],
    answer: 0,
    citation: "[i]"
  },
  {
    question: "Quelle est la traduction de 'tree'?",
    options: ["La fleur", "L'arbre", "L'herbe"],
    answer: 1,
    citation: "[j]"
  }
];

// Section switching
function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Render lessons
function renderLessons() {
  const container = document.getElementById('lesson-content');
  container.innerHTML = lessons.map(lesson =>
    `<h3>${lesson.title}</h3><p>${lesson.content}</p>`
  ).join('');
}

// Render quiz
function renderQuiz() {
  const form = document.getElementById('quiz-form');
  form.innerHTML = quizQuestions.map((q, idx) => `
    <div>
      <p>${q.question} <span class="citation">${q.citation}</span></p>
      ${q.options.map((opt, i) =>
        `<label>
          <input type="radio" name="q${idx}" value="${i}"> ${opt}
        </label>`
      ).join('<br>')}
    </div>
  `).join('<hr>');
  form.innerHTML += `<button type="submit">Submit</button>`;
  form.onsubmit = function(e) {
    e.preventDefault();
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      const selected = form.querySelector(`input[name="q${idx}"]:checked`);
      if (selected && parseInt(selected.value) === q.answer) score++;
    });
    document.getElementById('quiz-result').textContent =
      `You scored ${score} out of ${quizQuestions.length}!`;
  };
}

// Initial render
renderLessons();
renderQuiz();

function checkExercise(exerciseId) {
  const exercise = document.getElementById(exerciseId);
  const inputs = exercise.querySelectorAll('.input-blank');
  let correct = 0;
  let total = inputs.length;
  inputs.forEach(input => {
    const answer = input.getAttribute('data-answer').trim().toLowerCase();
    const user = input.value.trim().toLowerCase();
    if (user === answer) {
      input.style.borderColor = '#4CAF50';
      input.style.background = '#e8f5e9';
      correct++;
    } else {
      input.style.borderColor = '#f44336';
      input.style.background = '#ffebee';
    }
  });
  const result = exercise.querySelector('.result');
  if (correct === total) {
    result.textContent = 'Bravo ! Toutes les réponses sont correctes.';
    result.style.color = '#4CAF50';
  } else {
    result.textContent = `Vous avez ${correct} bonne(s) réponse(s) sur ${total}.`;
    result.style.color = '#f44336';
  }
}

// Add placeholder and title for accessibility
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.input-blank').forEach(input => {
    input.setAttribute('placeholder', 'Réponse...');
    input.setAttribute('title', 'Entrez votre réponse ici');
  });
});

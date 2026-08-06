(() => {
  "use strict";

  const questions = Array.isArray(window.LABEL_QUESTIONS) ? window.LABEL_QUESTIONS : [];
  const byId = (id) => document.getElementById(id);

  const els = {
    startScreen: byId("start-screen"),
    gameScreen: byId("game-screen"),
    resultsScreen: byId("results-screen"),
    playerName: byId("player-name"),
    gameLength: byId("game-length"),
    difficulty: byId("difficulty"),
    timerToggle: byId("timer-toggle"),
    startButton: byId("start-button"),
    questionCount: byId("question-count"),
    difficultyBadge: byId("difficulty-badge"),
    progressBar: byId("progress-bar"),
    scoreValue: byId("score-value"),
    streakValue: byId("streak-value"),
    timerWrap: byId("timer-wrap"),
    timerValue: byId("timer-value"),
    productName: byId("product-name"),
    productCategory: byId("product-category"),
    servingsLine: byId("servings-line"),
    servingSize: byId("serving-size"),
    calorieValue: byId("calorie-value"),
    nutrientRows: byId("nutrient-rows"),
    questionTopic: byId("question-topic"),
    questionHeading: byId("question-heading"),
    answerList: byId("answer-list"),
    feedbackBox: byId("feedback-box"),
    feedbackIcon: byId("feedback-icon"),
    feedbackTitle: byId("feedback-title"),
    feedbackText: byId("feedback-text"),
    nextButton: byId("next-button"),
    resultsIcon: byId("results-icon"),
    resultsTitle: byId("results-title"),
    resultsMessage: byId("results-message"),
    finalScore: byId("final-score"),
    finalAccuracy: byId("final-accuracy"),
    finalStreak: byId("final-streak"),
    playAgainButton: byId("play-again-button"),
    changeSettingsButton: byId("change-settings-button"),
    liveRegion: byId("live-region")
  };

  const state = {
    roundQuestions: [],
    index: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    correct: 0,
    answered: false,
    timed: false,
    secondsLeft: 20,
    timerId: null,
    playerName: ""
  };

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  }

  function showScreen(screen) {
    [els.startScreen, els.gameScreen, els.resultsScreen].forEach((item) => item.classList.add("is-hidden"));
    screen.classList.remove("is-hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function buildRound() {
    const chosenDifficulty = els.difficulty.value;
    const available = chosenDifficulty === "mixed"
      ? questions
      : questions.filter((question) => question.difficulty === chosenDifficulty);

    const requestedLength = els.gameLength.value === "all"
      ? available.length
      : Number.parseInt(els.gameLength.value, 10);

    state.roundQuestions = shuffle(available).slice(0, Math.min(requestedLength, available.length));
  }

  function resetState() {
    clearTimer();
    state.index = 0;
    state.score = 0;
    state.streak = 0;
    state.bestStreak = 0;
    state.correct = 0;
    state.answered = false;
    state.timed = els.timerToggle.checked;
    state.playerName = els.playerName.value.trim();
  }

  function startGame() {
    if (!questions.length) {
      els.liveRegion.textContent = "The question bank could not be loaded.";
      return;
    }

    resetState();
    buildRound();

    if (!state.roundQuestions.length) {
      els.liveRegion.textContent = "No questions are available for those settings.";
      return;
    }

    showScreen(els.gameScreen);
    renderQuestion();
  }

  function renderQuestion() {
    clearTimer();
    state.answered = false;

    const question = state.roundQuestions[state.index];
    const total = state.roundQuestions.length;
    const currentNumber = state.index + 1;

    els.questionCount.textContent = `Question ${currentNumber} of ${total}`;
    els.difficultyBadge.textContent = question.difficultyLabel;
    els.progressBar.style.width = `${(currentNumber / total) * 100}%`;
    els.scoreValue.textContent = String(state.score);
    els.streakValue.textContent = String(state.streak);

    els.productName.textContent = question.product;
    els.productCategory.textContent = question.category;
    els.servingsLine.textContent = question.servings;
    els.servingSize.textContent = question.servingSize;
    els.calorieValue.textContent = String(question.calories);
    els.questionTopic.textContent = question.topic;
    els.questionHeading.textContent = question.question;

    els.nutrientRows.replaceChildren(...question.nutrients.map((nutrient) => {
      const row = document.createElement("div");
      row.className = `nutrient-row${nutrient[3] ? " indent" : ""}`;

      const left = document.createElement("span");
      left.innerHTML = `${escapeHtml(nutrient[0])} <strong>${escapeHtml(nutrient[1])}</strong>`;

      const right = document.createElement("strong");
      right.textContent = nutrient[2];

      row.append(left, right);
      return row;
    }));

    els.answerList.replaceChildren(...question.choices.map((choice, choiceIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-button";
      button.dataset.answerIndex = String(choiceIndex);

      const key = document.createElement("span");
      key.className = "answer-key";
      key.textContent = String(choiceIndex + 1);

      const text = document.createElement("span");
      text.textContent = choice;

      button.append(key, text);
      button.addEventListener("click", () => answerQuestion(choiceIndex));
      return button;
    }));

    els.feedbackBox.className = "feedback-box is-hidden";
    els.nextButton.classList.add("is-hidden");
    els.nextButton.textContent = state.index === total - 1 ? "See results" : "Next question";

    if (state.timed) {
      startTimer();
    } else {
      els.timerWrap.classList.add("is-hidden");
    }

    requestAnimationFrame(() => els.questionHeading.focus({ preventScroll: true }));
    els.liveRegion.textContent = `Question ${currentNumber} of ${total}. ${question.question}`;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function startTimer() {
    state.secondsLeft = 20;
    els.timerWrap.classList.remove("is-hidden", "is-urgent");
    els.timerValue.textContent = String(state.secondsLeft);

    state.timerId = window.setInterval(() => {
      state.secondsLeft -= 1;
      els.timerValue.textContent = String(state.secondsLeft);
      els.timerWrap.classList.toggle("is-urgent", state.secondsLeft <= 5);

      if (state.secondsLeft <= 0) {
        clearTimer();
        answerQuestion(-1);
      }
    }, 1000);
  }

  function clearTimer() {
    if (state.timerId !== null) {
      window.clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  function answerQuestion(selectedIndex) {
    if (state.answered) return;

    state.answered = true;
    clearTimer();

    const question = state.roundQuestions[state.index];
    const isCorrect = selectedIndex === question.answer;
    const buttons = [...els.answerList.querySelectorAll(".answer-button")];

    buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === question.answer) button.classList.add("is-correct");
      if (index === selectedIndex && !isCorrect) button.classList.add("is-wrong");
      if (index !== question.answer && index !== selectedIndex) button.classList.add("is-dimmed");
    });

    if (isCorrect) {
      state.correct += 1;
      state.streak += 1;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
      const timeBonus = state.timed ? Math.max(0, state.secondsLeft) * 2 : 0;
      const streakBonus = Math.max(0, state.streak - 1) * 20;
      state.score += 100 + timeBonus + streakBonus;

      els.feedbackBox.className = "feedback-box is-correct";
      els.feedbackIcon.textContent = "✓";
      els.feedbackTitle.textContent = state.streak >= 3 ? `Correct — ${state.streak}-question streak!` : "Correct!";
    } else {
      state.streak = 0;
      els.feedbackBox.className = "feedback-box is-wrong";
      els.feedbackIcon.textContent = selectedIndex === -1 ? "⏱" : "✕";
      els.feedbackTitle.textContent = selectedIndex === -1 ? "Time's up!" : "Not quite.";
    }

    els.feedbackText.textContent = question.explanation;
    els.scoreValue.textContent = String(state.score);
    els.streakValue.textContent = String(state.streak);
    els.nextButton.classList.remove("is-hidden");
    els.nextButton.focus();

    const resultAnnouncement = isCorrect ? "Correct." : "Incorrect.";
    els.liveRegion.textContent = `${resultAnnouncement} ${question.explanation}`;
  }

  function nextQuestion() {
    if (!state.answered) return;

    if (state.index < state.roundQuestions.length - 1) {
      state.index += 1;
      renderQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    clearTimer();
    const total = state.roundQuestions.length;
    const accuracy = Math.round((state.correct / total) * 100);
    const leadIn = state.playerName ? `${state.playerName}, you` : "You";

    let icon = "🥄";
    let title = "Label Rookie";
    let message = `${leadIn} made a strong start. Watch the serving size first, then follow the numbers across the label.`;

    if (accuracy >= 90) {
      icon = "🏆";
      title = "Nutrition Label Legend!";
      message = `${leadIn} caught the serving-size traps and decoded the labels like a pro.`;
    } else if (accuracy >= 70) {
      icon = "🔎";
      title = "Label Detective!";
      message = `${leadIn} found the important clues. One more round could put you in legend territory.`;
    } else if (accuracy >= 50) {
      icon = "💡";
      title = "Label Learner!";
      message = `${leadIn} are building solid label-reading skills. Keep an eye on servings per container.`;
    }

    els.resultsIcon.textContent = icon;
    els.resultsTitle.textContent = title;
    els.resultsMessage.textContent = message;
    els.finalScore.textContent = String(state.score);
    els.finalAccuracy.textContent = `${accuracy}%`;
    els.finalStreak.textContent = String(state.bestStreak);

    showScreen(els.resultsScreen);
    els.resultsTitle.focus({ preventScroll: true });
    els.liveRegion.textContent = `Round complete. Score ${state.score}. Accuracy ${accuracy} percent.`;
  }

  function playAgain() {
    resetState();
    buildRound();
    showScreen(els.gameScreen);
    renderQuestion();
  }

  function changeSettings() {
    clearTimer();
    showScreen(els.startScreen);
    els.startButton.focus();
  }

  function handleKeydown(event) {
    if (!els.gameScreen.classList.contains("is-hidden")) {
      if (!state.answered && /^[1-4]$/.test(event.key)) {
        const index = Number.parseInt(event.key, 10) - 1;
        const button = els.answerList.querySelector(`[data-answer-index="${index}"]`);
        if (button) button.click();
      } else if (state.answered && event.key === "Enter") {
        event.preventDefault();
        nextQuestion();
      }
    }
  }

  els.startButton.addEventListener("click", startGame);
  els.nextButton.addEventListener("click", nextQuestion);
  els.playAgainButton.addEventListener("click", playAgain);
  els.changeSettingsButton.addEventListener("click", changeSettings);
  document.addEventListener("keydown", handleKeydown);
})();

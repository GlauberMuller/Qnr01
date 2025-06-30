const questions = [
  // Saúde Mental
  { text: "Com que frequência você sente estresse excessivo no ambiente de trabalho?", options: ["Nunca", "Às vezes", "Frequentemente", "Sempre"] },
  { text: "Você se sente apoiado(a) psicologicamente pela liderança?", options: ["Totalmente", "Parcialmente", "Pouco", "Nada"] },
  { text: "Como você avaliaria seu nível de motivação no trabalho?", options: ["Muito alto", "Moderado", "Baixo", "Muito baixo"] },
  { text: "Há abertura para conversar sobre saúde mental na sua empresa?", options: ["Total", "Parcial", "Pouca", "Nenhuma"] },
  { text: "Já presenciou ou sofreu assédio psicológico no trabalho?", options: ["Nunca", "Raramente", "Às vezes", "Frequentemente"] },
  { text: "Como você lida com cobranças e metas desafiadoras?", options: ["Com tranquilidade", "Com leve estresse", "Com muita ansiedade", "De forma negativa"] },

  // Saúde Física e Ergonomia
  { text: "Seu ambiente de trabalho oferece mobiliário ergonômico adequado?", options: ["Sim, totalmente", "Sim, em parte", "Não muito", "Nada"] },
  { text: "Já sentiu dores corporais causadas pela sua função?", options: ["Nunca", "Raramente", "Frequentemente", "Sempre"] },
  { text: "Sua empresa realiza treinamentos sobre riscos físicos?", options: ["Sim, regularmente", "Ocasionalmente", "Raramente", "Nunca"] },
  { text: "Os EPIs fornecidos são confortáveis e eficazes?", options: ["Sim", "Mais ou menos", "Pouco", "Nada"] },
  { text: "Há pausas regulares durante sua jornada para descanso?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
  { text: "Você sente que há risco de acidente no seu local de trabalho?", options: ["Nenhum", "Baixo", "Médio", "Alto"] },

  // Inclusão e Diversidade
  { text: "Como você percebe a diversidade (raça, gênero, idade) na sua equipe?", options: ["Muito diversa", "Moderadamente", "Pouco", "Nada diversa"] },
  { text: "A empresa promove ações voltadas à inclusão LGBTQIA+?", options: ["Sim", "Algumas vezes", "Raramente", "Nunca"] },
  { text: "Você já presenciou comportamentos preconceituosos no ambiente de trabalho?", options: ["Nunca", "Raramente", "Às vezes", "Frequentemente"] },
  { text: "A empresa respeita nomes sociais e pronomes?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
  { text: "Há canais seguros para denúncias de discriminação?", options: ["Sim, bem definidos", "Mais ou menos", "Pouco claros", "Não existem"] },
  { text: "A liderança valoriza e respeita as diferenças individuais?", options: ["Sempre", "Na maioria das vezes", "Raramente", "Nunca"] },

  // Família e Equilíbrio
  { text: "A empresa respeita a necessidade de conciliar trabalho e vida familiar?", options: ["Totalmente", "Moderadamente", "Pouco", "Nada"] },
  { text: "Há flexibilidade de horários em casos familiares importantes?", options: ["Sim", "Às vezes", "Raramente", "Nunca"] },
  { text: "Como você avalia o apoio da empresa em licenças (maternidade, paternidade, adoção)?", options: ["Excelente", "Bom", "Regular", "Ruim"] },
  { text: "Já se sentiu pressionado(a) a trabalhar em horários que afetam sua família?", options: ["Nunca", "Raramente", "Às vezes", "Frequentemente"] },
  { text: "Existem ações de apoio a cuidadores (pais, avós etc.)?", options: ["Sim", "Poucas", "Muito poucas", "Nenhuma"] },

  // Identidade e Gênero
  { text: "Você se sente livre para expressar sua identidade de gênero no trabalho?", options: ["Totalmente", "Moderadamente", "Pouco", "Nada"] },
  { text: "A empresa tem políticas claras sobre respeito à diversidade?", options: ["Sim", "Parcialmente", "Muito poucas", "Não tem"] },
  { text: "O RH está preparado para lidar com questões de gênero e sexualidade?", options: ["Totalmente", "Mais ou menos", "Pouco", "Nada"] },
  { text: "Já viu ações afirmativas voltadas para grupos historicamente excluídos?", options: ["Sim, várias", "Algumas", "Poucas", "Nenhuma"] },

  // Avaliação de Riscos e NR 01
  { text: "Você conhece os principais riscos ocupacionais da sua função?", options: ["Sim, totalmente", "Mais ou menos", "Pouco", "Nada"] },
  { text: "Sua empresa realiza análise preliminar de riscos?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
  { text: "Os treinamentos da NR 01 são suficientes e atualizados?", options: ["Sim", "Parcialmente", "Pouco", "Não"] },
  { text: "Há clareza nos protocolos em caso de emergência?", options: ["Total", "Moderada", "Pouca", "Nenhuma"] },
  { text: "Como você avalia o plano de ação da CIPA (se houver)?", options: ["Ótimo", "Bom", "Regular", "Ruim"] },
  { text: "Você conhece seus direitos e deveres quanto à segurança do trabalho?", options: ["Totalmente", "Mais ou menos", "Pouco", "Nada"] },
  { text: "Há supervisão regular do ambiente físico por parte do SESMT?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
  { text: "Existe um Programa de Gerenciamento de Riscos ativo?", options: ["Sim", "Mais ou menos", "Muito pouco", "Não"] }
];

let currentQuestion = 0;
const responses = new Array(questions.length);
const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz");
const questionText = document.getElementById("questionText");
const optionsList = document.getElementById("optionsList");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const results = document.getElementById("results");
const summary = document.getElementById("summary");
const restartBtn = document.getElementById("restartBtn");
const exportBtn = document.getElementById("exportBtn");

startBtn.addEventListener("click", () => {
  startBtn.parentElement.classList.add("hidden");
  quiz.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = `${currentQuestion + 1}. ${q.text}`;
  optionsList.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="option" value="${idx}" ${responses[currentQuestion] === idx ? 'checked' : ''}> ${opt}</label>`;
    optionsList.appendChild(li);
  });
}

nextBtn.addEventListener("click", () => {
  saveResponse();
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResults();
  }
});

prevBtn.addEventListener("click", () => {
  saveResponse();
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});

function saveResponse() {
  const selected = document.querySelector("input[name='option']:checked");
  if (selected) {
    responses[currentQuestion] = parseInt(selected.value);
  }
}

function showResults() {
  quiz.classList.add("hidden");
  results.classList.remove("hidden");
  let total = responses.reduce((acc, val) => acc + (val ?? 0), 0);
  summary.innerHTML = `Pontuação total: <strong>${total}</strong> de ${questions.length * 3}`;
}

restartBtn.addEventListener("click", () => {
  location.reload();
});

exportBtn.addEventListener("click", () => {
  const wb = XLSX.utils.book_new();
  const data = questions.map((q, i) => ({
    Pergunta: q.text,
    Resposta: q.options[responses[i]] || "Não respondida"
  }));
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, "Respostas");
  XLSX.writeFile(wb, "avaliacao_ocupacional.xlsx");
});


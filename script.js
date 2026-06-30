document.addEventListener('DOMContentLoaded', () => {
  const commitLabel = document.getElementById('commit-hash');

  if (commitLabel) {
    fetch('https://api.github.com/repos/andressaalmada/Portif-lio-Algoritmo-Programa-o/commits/main')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao consultar commits');
        }
        return response.json();
      })
      .then((data) => {
        const hash = data.sha ? data.sha.slice(0, 7) : 'indisponível';
        commitLabel.textContent = hash;
      })
      .catch(() => {
        commitLabel.textContent = 'indisponível';
      });
  }
});

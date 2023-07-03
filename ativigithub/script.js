function fetchUserData(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        displayUserData(data);
      })
      .catch(error => {
        console.error(error);
        displayErrorMessage('Erro ao obter as informações do usuário.');
      });
  }
  
  function fetchRepositories(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data => {
        displayRepositoryLink(data);
      })
      .catch(error => {
        console.error(error);
        displayErrorMessage('Erro ao obter os repositórios do usuário.');
      });
  }
  
  function displayUserData(user) {
    var userCard = document.getElementById('user-card');
    userCard.innerHTML = `
      <img class="avatar" src="${user.avatar_url}" alt="Avatar">
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>Username: ${user.login}</p>
        <p>Repositórios: ${user.public_repos}</p>
        <p>Seguidores: ${user.followers}</p>
        <p>Seguindo: ${user.following}</p>
      </div>
    `;
  }
  
  function displayRepositoryLink(repositories) {
    var repoLink = document.getElementById('repo-link');
    var username = document.getElementById('username').value;
    repoLink.innerHTML = `
      <a href="https://github.com/${username}/repositories" target="_blank">Ver Repositórios</a>
    `;
  }
  
  function displayErrorMessage(message) {
    var userCard = document.getElementById('user-card');
    userCard.innerHTML = `<p>${message}</p>`;
  }
  
  function searchUser() {
    var username = document.getElementById('username').value;
    if (username) {
      fetchUserData(username);
      fetchRepositories(username);
    }
  }
  
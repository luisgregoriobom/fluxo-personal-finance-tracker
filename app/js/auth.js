function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) return setMsg("Preencha tudo");

  const users = getUsers();

  if (users.find((u) => u.username === username)) {
    return setMsg("Usuário já existe");
  }

  users.push({ username, password });
  saveUsers(users);

  setMsg("Usuário criado!");
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const users = getUsers();

  const user = users.find(
    (u) => u.username === username && u.password === password,
  );

  if (!user) return setMsg("Login inválido");

  localStorage.setItem("loggedUser", username);

  window.location.href = "../index/index.html";
}

function setMsg(msg) {
  document.getElementById("msg").textContent = msg;
}

function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "../login/login.html";
}

function getStorageKey() {
  const user = localStorage.getItem("loggedUser");
  return `fluxo_transactions_${user}`;
}

function save() {
  localStorage.setItem(getStorageKey(), JSON.stringify(transactions));
}

function load() {
  const d = localStorage.getItem(getStorageKey());
  transactions = d ? JSON.parse(d) : [];
}

export function isLogin() {
  if (localStorage.getItem('token')) {
    return true;
  }
  return false;
}

export function login(userName) {
  localStorage.setItem('token', userName);
}

export function logOut() {
  localStorage.removeItem('token');
}

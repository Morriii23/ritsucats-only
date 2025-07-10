
function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const errorMsg = document.getElementById('errorMessage');
  if (input === 'fuckmeplzritsu') {
    window.location.href = 'day01.html';
  } else {
    errorMsg.textContent = '密码错误，哥哥说不能偷看♡';
  }
}

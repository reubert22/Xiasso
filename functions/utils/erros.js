function loginErros(code) {
  switch (code) {
    case 'auth/email-already-exists':
      return { code: 400, message: "O endereço de email já está sendo usado por outra conta" }
    case 'auth/invalid-password':
      return { code: 400, message: "A senha deve ser uma sequência com pelo menos 6 caracteres" }
    default:
      return { code: 500, message: "Falha no sistema, tente novamente mais tarde" }
  }
}

module.exports.loginErros = loginErros;

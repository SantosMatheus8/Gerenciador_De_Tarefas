function realizaCadastro()
{
   let nome = document.getElementById("inputNome").value
   let email = document.getElementById("inputEmail").value
   let senha = document.getElementById("inputSenha").value
   let confirmaSenha = document.getElementById("inputConfirmaSenha").value
   if(senha != confirmaSenha) alert("A SENHA DEVE SER IGUAL NOS DOIS CAMPOS")
   else alert("CADASTRO REALIZADO COM SUCESSO\n" + "Nome : " + nome + "\n" + "Email : " + email + "\n" + "Senha : " + senha + "\n")
}
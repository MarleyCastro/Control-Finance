      const form = document.getElementById('formUsuario');

      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const salario = document.getElementById('salario').value;
        const senha = document.getElementById('senha').value;

        const novoUsuario = {
          nome: nome,
          funcao: email,
          salario: salario 
        };

        const usuarios = JSON.parse(localStorage.getItem('dbfunc')) ?? [];
        usuarios.push(novoUsuario);
        localStorage.setItem('dbfunc', JSON.stringify(usuarios));

        window.location.href = 'index.html';
      });
      

      
      
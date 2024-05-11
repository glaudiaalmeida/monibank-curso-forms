    const cpf = '876351000';
    let soma = 0;
    let multiplicador = 10;

    const arrayCpf = cpf.split('');
    
   for (let tamanho = 0; tamanho < 9; tamanho++) {
    soma += arrayCpf[tamanho] * multiplicador;
    multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
     soma = 0;
    }

console.log(soma)
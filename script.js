const btnGenerator = document.querySelector('#gerarPDF')

btnGenerator.addEventListener('click', () => {

    // Conteúdo do PDF
    const content = document.querySelector('#content')

    // Configuração do arquivo final PDF
    const options = {
        margin: [50, 30, 0, 0],
        filename: 'arquivo.pdf',
        html2canvas: {scale: 1},
        jsPDF: { unit: 'mm', format: 'a5', orientation: 'portrait'}
    }  

    // Gerar e baixar o PDF
    html2pdf().set(options).from(content).save()
})
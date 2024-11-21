$(document).ready(function(){
    $('header button').click(function(){ 
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
            e.preventDefault()
            const enderecoNovaImagem = $('#endereco-imagem-nova').val()
            const novoItem = $('<li style="display: none"></li>');
            $('<img />', {
                src: enderecoNovaImagem
            }).appendTo(novoItem);
            $('<div class="overlay-imagem-link"></div>')
            .append(
                `<a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>`
            )
            .appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000)
            $('#endereco-imagem-nova').val('')
    })

})
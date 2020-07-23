$(document).ready(function () {
  $('#table_id').DataTable({
    "bProcessing": true,
    "bFilter": true,
    language: {
      "sProcessing": "Procesando...",
      "sLengthMenu": "Mostrar _MENU_ registros",
      "sZeroRecords": "No se encontraron resultados",
      "sEmptyTable": "Ningún dato disponible en esta tabla",
      "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
      "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
      "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
      "sInfoPostFix": "",
      "sSearch": "Buscar:",
      "sUrl": "",
      "sInfoThousands": ",",
      "sLoadingRecords": "Cargando...",
      "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
      },
      "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
      },
      "buttons": {
        "copy": "Copiar",
        "colvis": "Visibilidad"
      }
    }
  }
  )
});

$(document).ready(function() {
  $('#table_id').on('click', '.delete-book', function() {
    var book_id = $(this).data('id');
    $('#DeleteModalBook').modal('show');
    $('.book_id').val(book_id);
    $('#myFormBook').attr('action',"/catalog/book/"+book_id+"/delete");
  })
});

$(document).ready(function() {
  $('#table_id').on('click', '.delete-author', function() {
    var author_id = $(this).data('id');
    $('#DeleteModalAuthor').modal('show');
    $('.author_id').val(author_id);
    $('#myFormAuthor').attr('action',"/catalog/author/"+author_id+"/delete");
  })
});


$(document).ready(function() {
  $('#table_id').on('click', '.delete-genre', function() {
    var genre_id = $(this).data('id');
    $('#DeleteModalGenre').modal('show');
    $('.genre_id').val(genre_id);
    $('#myFormGenre').attr('action',"/catalog/genre/"+genre_id+"/delete");
  })
});

$(document).ready(function() {
  $('#table_id').on('click', '.delete-val', function() {
    var val_id = $(this).data('id');
    $('#DeleteModalVal').modal('show');
    $('.val_id').val(val_id);
    $('#myFormVal').attr('action',"/catalog/bookinstance/"+val_id+"/delete");
  })
});
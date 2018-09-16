$.ajax({
    type: "GET",
    url: "/",
    dataType: 'JSON',
   contentType: 'application/json; charset=utf-8',
    success: function(data){
        console.log(data)
        mytable = document.createElement('table')
        mytable.setAttribute('class', 'table table-striped')
        mytable.id = 'info-table'
        $(mytable).append('<thead><th>Column 1</th> <th>Column 2</th> <th>Column 3</th> <th>Column 4</th> <th>Column 5</th> <th>Column 6</th> <th>Column 7</th> <th>Column 8</th> <th>Column 9</th> <th>Colum 10</th></thead>')
        $(mytable).append('<tbody id="info"></tbody>')
        $('#viorTableDiv').append(mytable) 
        for (i = 0; i < (data.length); i ++) {
          var newRow = document.createElement('tr');
          newRow.id = data[i].id;
          var table=document.getElementById('info-table').getElementsByTagName('tbody')[0];
          table.appendChild(newRow);
          $(newRow).append('<td>Column 1'+data[i].id+'</td>');
          $(newRow).append('<td>Column 2</td>');
          $(newRow).append('<td>Column 3</td>');
          $(newRow).append('<td>Column 4</td>');
          $(newRow).append('<td>Column 5</td>');
          $(newRow).append('<td>Column 6</td>');
          $(newRow).append('<td>Column 7</td>');
          $(newRow).append('<td>Column 8</td>');
          $(newRow).append('<td>Column 9</td>');
          $(newRow).append('<td>Column 10</td>');
       }
    }
})
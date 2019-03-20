const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
    .goto('https://www.combinacionganadora.com/quiniela/2018-2019/jornada-45/')
    .evaluate(function() {
        var encuentros = [];
        $('table.matchTable tr').each(function(){
            item = {};
            item['encuentro'] = $(this).children().eq(0).text();
            item['local'] = $(this).find('td:nth-child(2)').text();
            item['visitante'] = $(this).find('td:nth-child(8)').text();
            encuentros.push(item);
        })
        return encuentros;
    })
    .end()
    .then(function(resultado) {
        for(encuentro in resultado) {
            console.log("Equipo local: " +resultado[encuentro].local+" Equipo visitante: "+resultado[encuentro].visitante);

        }
    })
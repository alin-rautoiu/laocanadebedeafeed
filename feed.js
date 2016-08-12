var express = require('express');
var builder = require('xmlbuilder');

var root = builder
    .create('rss')
        .att('version', '2.0')
        .att('xmlns:atom', 'http://www.w3.org/2005/Atom')
        .ele('channel')
            .ele('atom:link')
                .att('href', 'https://bedea.herokuapp.com/bedea.rss')
                .att('rel', 'self')
                .att('type', 'application/rss+xml')
                .up()
            .ele('title', 'La o cană de bedea')
                .up()
            .ele('link', 'https://archive.org/details/@alinrautoiu?and[]=subject%3A%22la+o+cana+de+bedea%22')
                .up()
            .ele('description', 'Podcast unde Alin discuta despre benzi desenate cu artisti de benzi desenate')
                .up()
            .ele('item')
                .ele('title', 'Episodul 1 - Dungeon Quest cu Cristian Prandea')
                    .up()
                .ele('link', 'https://archive.org/download/interviu_prandea/interviu_prandea_vbr.m3u')
                    .up()
                .ele('description', 'Ep. 1 cu Cristian Prandea')
                    .up()
                .ele('guid', 'Episodul 1 - Dungeon Quest cu Cristian Prandea')
                    .up()
                .up()
            .ele('item')
                .ele('title', 'Episodul 2 - Giant Days cu Anna Benczédi')
                    .up()
                .ele('link', 'https://archive.org/download/alins_interviu_anna_modificat_la_greu/alins_interviu_anna_modificat_la_greu.mp3')
                    .up()
                .ele('description', 'Alături de Anna Benczédi discutăm despre Giant Days. Anna este co-autoarea webcomicului Știma Apelor și autoarea povestirii Jurnalul de trei parale din Țara Desenată.')
                    .up()
                .ele('guid', 'Episodul 2 - Giant Days cu Anna Benczédi')
                    .up()
                .up()
            .ele('item')
                .ele('title', 'Episodul 3 - One-Punch Man cu Elena Barbu')
                    .up()
                .ele('link', 'https://archive.org/download/elena_one_punch_man/elena_one_punch_man.mp3')
                    .up()
                .ele('description', 'Ep. 3 cu Elena barbu despre One-Punch Man.')
                    .up()
                .ele('guid', 'Episodul 3 - One-Punch Man cu Elena Barbu')
                    .up()
                .up();

var app = express();

app.get('/bedea.rss', function(req, res) {

    var xml = root.end({ pretty: true}); 
    res.setHeader('Content-Type', 'application/xml');
    res.send(xml);
    return;
});
var server = app.listen(process.env.PORT || 3002);
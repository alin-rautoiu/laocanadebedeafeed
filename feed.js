var express = require('express');
var builder = require('xmlbuilder');

var root = builder
    .create('rss')
        .att('version', '2.0')
        .ele('channel')
            .ele('title', 'La o cană de bedea')
                .up()
            .ele('link', 'https://archive.org/details/%40alinrautoiu?and%5B%5D=subject%3A%22la+o+cana+de+bedea%22')
                .up()
            .ele('description', 'Podcast unde Alin discuta despre benzi desenate cu artisti de benzi desenate')
                .up()
            .ele('item')
                .ele('title', 'Episodul 1 - Dungeon Quest cu Cristian Prandea')
                    .up()
                .ele('link', 'https://archive.org/download/interviu_prandea/interviu_prandea.mp3')
                    .up()
                .ele('description', 'Ep. 1 cu Cristian Prandea')
                    .up()
                .ele('enclosure')
                    .att('length', '29972110')
                    .att('url', 'https://archive.org/download/interviu_prandea/interviu_prandea.mp3')
                    .att('type', 'audio/mpeg')
                    .up()
                .ele('guid', 'https://archive.org/download/interviu_prandea/interviu_prandea.mp3')
                    .up()
                .up()
            .ele('item')
                .ele('title', 'Episodul 2 - Giant Days cu Anna Benczédi')
                    .up()
                .ele('link', 'https://archive.org/download/alins_interviu_anna_modificat_la_greu/alins_interviu_anna_modificat_la_greu.mp3')
                    .up()
                .ele('enclosure')
                    .att('length', '42992131')
                    .att('url', 'https://archive.org/download/alins_interviu_anna_modificat_la_greu/alins_interviu_anna_modificat_la_greu.mp3')
                    .att('type', 'audio/mpeg')
                    .up()
                .ele('description', 'Alături de Anna Benczédi discutăm despre Giant Days. Anna este co-autoarea webcomicului Știma Apelor și autoarea povestirii Jurnalul de trei parale din Țara Desenată.')
                    .up()
                .ele('guid', 'https://archive.org/download/alins_interviu_anna_modificat_la_greu/alins_interviu_anna_modificat_la_greu.mp3')
                    .up()
                .up()
            .ele('item')
                .ele('title', 'Episodul 3 - One-Punch Man cu Elena Barbu')
                    .up()
                .ele('link', 'https://archive.org/download/elena_one_punch_man/elena_one_punch_man.mp3')
                    .up()
                .ele('description', 'Ep. 3 cu Elena barbu despre One-Punch Man.')
                    .up()
                .ele('enclosure')
                    .att('length', '52487451')
                    .att('url', 'https://archive.org/download/elena_one_punch_man/elena_one_punch_man.mp3')
                    .att('type', 'audio/mpeg')
                    .up()
                .ele('guid', 'https://archive.org/download/elena_one_punch_man/elena_one_punch_man.mp3')
                    .up()
                .up()
            .ele('item')
                .ele('title', 'Episodul 4 - I Feel Sick cu Vlad Forsea')
                    .up()
                .ele('link', 'https://archive.org/download/interviu_vlad_i_feel_sick/interviu_vlad_i_feel_sick.mp3')
                    .up()
                .ele('description', 'Episodul 4 - I Feel Sick cu Vlad Forsea.')
                    .up()
                .ele('enclosure')
                    .att('length', '46956544')
                    .att('url', 'https://archive.org/download/interviu_vlad_i_feel_sick/interviu_vlad_i_feel_sick.mp3')
                    .att('type', 'audio/mpeg')
                    .up()
                .ele('guid', 'https://archive.org/download/interviu_vlad_i_feel_sick/interviu_vlad_i_feel_sick.mp3')
                    .up()
                .up()
            .ele('item')
                .ele('title', 'Episodul 5 - Red Son cu Alexander Glonin')
                    .up()
                .ele('link', 'https://archive.org/download/interviu_alexander_redson/interviu_alexander_redson.mp3')
                    .up()
                .ele('description', 'Episodul 5 - Red Son cu Alexander Glonin.')
                    .up()
                .ele('enclosure')
                    .att('length', '58360832')
                    .att('url', 'https://archive.org/download/interviu_alexander_redson/interviu_alexander_redson.mp3')
                    .att('type', 'audio/mpeg')
                    .up()
                .ele('guid', 'https://archive.org/download/interviu_alexander_redson/interviu_alexander_redson.mp3')
                    .up()
                .up()
            .ele('item')
                .ele('title', 'Episodul 6 - The Arrival cu Ileana Surducan')
                    .up()
                .ele('link', 'https://archive.org/download/ep7_ileana/alin_audio_ileana.mp3')
                    .up()
                .ele('description', 'Episodul 6 - The Arrival cu Ileana Surducan.')
                    .up()
                .ele('enclosure')
                    .att('length', '82130225')
                    .att('url', 'https://archive.org/download/ep7_ileana/alin_audio_ileana.mp3')
                    .att('type', 'audio/mpeg')
                    .up()
                .ele('guid', 'https://archive.org/download/ep7_ileana/alin_audio_ileana.mp3')
                    .up()
                .up()
                .ele('item')
                .ele('title', 'Episodul 7.1 - Berserk cu Cristian Dârstar')
                    .up()
                .ele('link', 'https://archive.org/download/CristianEp7.1Berserk/Cristian_ep7.1_berserk.mp3')
                    .up()
                .ele('description', 'Episodul 7.1 - Berserk cu Cristian Dârstar.')
                    .up()
                .ele('enclosure')
                    .att('length', '38102848')
                    .att('url', 'https://archive.org/download/CristianEp7.1Berserk/Cristian_ep7.1_berserk.mp3')
                    .att('type', 'audio/mpeg')
                    .up()
                .ele('guid', 'https://archive.org/download/CristianEp7.1Berserk/Cristian_ep7.1_berserk.mp3')
                    .up()
                .up()
                .ele('item')
                .ele('title', 'Cristian Ep 7.2 - Berserk')
                    .up()
                .ele('link', 'https://archive.org/download/CristianEp7.2Berserk/Cristian_ep7.2_berserk.mp3')
                    .up()
                .ele('description', 'Partea a doua, în care vorbim despre mai altceva în afară de Berserk..')
                    .up()
                .ele('enclosure')
                    .att('length', '30115275')
                    .att('url', 'https://archive.org/download/CristianEp7.2Berserk/Cristian_ep7.2_berserk.mp3')
                    .att('type', 'audio/mpeg')
                    .up()
                .ele('guid', 'https://archive.org/download/CristianEp7.2Berserk/Cristian_ep7.2_berserk.mp3')
                    .up()
                .up()
                .ele('item')
                .ele('title', 'Episodul 8 - Febra Urbicandei cu Radu Otarasanu')
                    .up()
                .ele('link', 'https://archive.org/download/RaduEp8Lipeala/radu_ep8%20lipeala.mp3')
                    .up()
                .ele('description', 'Episodul 8 - Febra Urbicandei cu Radu Otarasanu')
                    .up()
                .ele('enclosure')
                    .att('length', '71207553')
                    .att('url', 'https://archive.org/download/RaduEp8Lipeala/radu_ep8%20lipeala.mp3')
                    .att('type', 'audio/mpeg')
                    .up()
                .ele('guid', 'https://archive.org/download/RaduEp8Lipeala/radu_ep8%20lipeala.mp3')
                    .up()
                .up()
                .ele('item')
                .ele('title', 'Episodul 9.1 - 5000 km Per Second cu Claudiu Revnic')
                    .up()
                .ele('link', 'https://archive.org/download/claudiu_part_1/claudiu_part_1.mp3')
                    .up()
                .ele('description', 'Episodul 9.1 - 5000 km Per Second cu Claudiu Revnic')
                    .up()
                .ele('enclosure')
                    .att('length', '61813403')
                    .att('url', 'https://archive.org/download/claudiu_part_1/claudiu_part_1.mp3')
                    .att('type', 'audio/mpeg')
                    .up()
                .ele('guid', 'https://archive.org/download/claudiu_part_1/claudiu_part_1.mp3')
                    .up()
                .up()
                .ele('item')
                .ele('title', 'Episodul 9.2 - Treviso și Crack cu Cladiu Revnic')
                    .up()
                .ele('link', 'https://archive.org/download/claudiu_part2/claudiu_part2.mp3')
                    .up()
                .ele('description', 'Episodul 9.2 - Treviso și Crack cu Cladiu Revnic')
                    .up()
                .ele('enclosure')
                    .att('length', '70918691')
                    .att('url', 'https://archive.org/download/claudiu_part2/claudiu_part2.mp3')
                    .att('type', 'audio/mpeg')
                    .up()
                .ele('guid', 'https://archive.org/download/claudiu_part2/claudiu_part2.mp3')
                    .up()
                .up()
                .ele('item')
                .ele('title', 'Episodul 10 - Beauty cu Maria Surducan')
                    .up()
                .ele('link', 'https://archive.org/download/maria_201611/maria.mp3')
                    .up()
                .ele('description', 'Episodul 10 - Beauty cu Maria Surducan')
                    .up()
                .ele('enclosure')
                    .att('length', '66289735')
                    .att('url', 'https://archive.org/download/maria_201611/maria.mp3')
                    .att('type', 'audio/mpeg')
                    .up()
                .ele('guid', 'https://archive.org/download/maria_201611/maria.mp3')
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
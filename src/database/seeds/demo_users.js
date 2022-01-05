
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {"username": "bianca_1480", "first_name": "Bianca", "last_name": "D\u00e9bora Pereira", "email": "biancadeborapereira__biancadeborapereira@gruposeteestrelas.com.br", "phone": "82998593644", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "louise_1820", "first_name": "Louise", "last_name": "Cristiane Nina Ramos", "email": "llouisecristianeninaramos@localiza.com", "phone": "41981830399", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "pedro_3501", "first_name": "Pedro", "last_name": "Henrique Bernardo Bernardes", "email": "pedrohenriquebernardobernardes_@tecsysbrasil.com.br", "phone": "67997610797", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "maya_924", "first_name": "Maya", "last_name": "Rayssa Farias", "email": "mayarayssafarias__mayarayssafarias@aquino.com.br", "phone": "66996926050", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "yuri_306", "first_name": "Yuri", "last_name": "Levi Assis", "email": "yyurileviassis@valeparaibano.com.br", "phone": "47994919011", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "levi_2915", "first_name": "Levi", "last_name": "Diogo Cau\u00e3 Moraes", "email": "levidiogocauamoraes-79@rjnet.com.br", "phone": "83985800170", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "gael_4431", "first_name": "Gael", "last_name": "Marcos Manoel da Paz", "email": "gaelmarcosmanoeldapaz-74@universo3d.com.br", "phone": "41993610742", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "marcelo_946", "first_name": "Marcelo", "last_name": "Joaquim Brito", "email": "marcelojoaquimbrito..marcelojoaquimbrito@dye.com.br", "phone": "96988067615", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "rosangela_593", "first_name": "Ros\u00e2ngela", "last_name": "Manuela Hadassa Arag\u00e3o", "email": "rrosangelamanuelahadassaaragao@whgames.com.br", "phone": "94983793491", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "hugo_1962", "first_name": "Hugo", "last_name": "Kevin Jesus", "email": "hugokevinjesus-78@danielstrauch.com", "phone": "61999932398", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "pedro_1559", "first_name": "Pedro", "last_name": "Henrique Manoel Sebasti\u00e3o Apar\u00edcio", "email": "pedrohenriquemanoelsebastiaoaparicio__pedrohenriquemanoelsebastiaoaparicio@bseletronicos.com.br", "phone": "92998279020", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "sabrina_3768", "first_name": "Sabrina", "last_name": "Ant\u00f4nia Mariane Moura", "email": "sabrinaantoniamarianemoura__sabrinaantoniamarianemoura@acquire.com.br", "phone": "98985484062", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "stefany_1941", "first_name": "Stefany", "last_name": "Camila Brito", "email": "stefanycamilabrito-84@valdulion.com.br", "phone": "65999871719", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "luiz_2971", "first_name": "Luiz", "last_name": "Cl\u00e1udio Manuel de Paula", "email": "luizclaudiomanueldepaula-99@lonax.net", "phone": "82987052978", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "henrique_2623", "first_name": "Henrique", "last_name": "Antonio Viana", "email": "hhenriqueantonioviana@allurepesquisa.com.br", "phone": "11997068316", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "allana_3647", "first_name": "Allana", "last_name": "Aurora Ara\u00fajo", "email": "allanaauroraaraujo__allanaauroraaraujo@endoimplantes.com.br", "phone": "87993215230", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "leandro_4390", "first_name": "Leandro", "last_name": "Tiago Silveira", "email": "leandrotiagosilveira-74@power.alston.com", "phone": "82983365442", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "alessandra_4484", "first_name": "Alessandra", "last_name": "Allana Renata Ribeiro", "email": "alessandraallanarenataribeiro-78@rotauniformes.com.br", "phone": "84988924211", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "joaquim_2579", "first_name": "Joaquim", "last_name": "Juan Figueiredo", "email": "joaquimjuanfigueiredo-88@damha.com.br", "phone": "83995935252", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "benicio_3670", "first_name": "Ben\u00edcio", "last_name": "Nathan S\u00e9rgio Galv\u00e3o", "email": "benicionathansergiogalvao-96@afujita.com.br", "phone": "71986265611", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "natalia_3025", "first_name": "Nat\u00e1lia", "last_name": "Elo\u00e1 Almada", "email": "nataliaeloaalmada__nataliaeloaalmada@prudential.com", "phone": "51998131395", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "elisa_1899", "first_name": "Elisa", "last_name": "F\u00e1tima Luana da Costa", "email": "elisafatimaluanadacosta..elisafatimaluanadacosta@lhp.com.br", "phone": "96994657671", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "elza_1581", "first_name": "Elza", "last_name": "Aparecida Elisa Porto", "email": "elzaaparecidaelisaporto__elzaaparecidaelisaporto@mail.com", "phone": "86988121693", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "ricardo_718", "first_name": "Ricardo", "last_name": "Noah Cardoso", "email": "ricardonoahcardoso..ricardonoahcardoso@econe.com.br", "phone": "44988127611", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "sophia_2376", "first_name": "Sophia", "last_name": "Ros\u00e2ngela Oliveira", "email": "sophiarosangelaoliveira..sophiarosangelaoliveira@acquire.com.br", "phone": "61984395606", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "elias_3510", "first_name": "Elias", "last_name": "Yago Matheus da Concei\u00e7\u00e3o", "email": "eliasyagomatheusdaconceicao_@ssala.com.br", "phone": "65981046931", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "roberto_3805", "first_name": "Roberto", "last_name": "Felipe Moraes", "email": "robertofelipemoraes_@verdana.com.br", "phone": "98984634916", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "betina_1408", "first_name": "Betina", "last_name": "Ana Benedita Apar\u00edcio", "email": "betinaanabeneditaaparicio-83@gvmail.br", "phone": "86998306453", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "larissa_2017", "first_name": "Larissa", "last_name": "Isabella da Cunha", "email": "larissaisabelladacunha_@br.festo.com", "phone": "98984535942", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "mariah_1574", "first_name": "Mariah", "last_name": "Cec\u00edlia Luna da Mota", "email": "mariahcecilialunadamota..mariahcecilialunadamota@accor.com.br", "phone": "44998051518", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "martin_2589", "first_name": "Martin", "last_name": "Paulo Gomes", "email": "martinpaulogomes-80@latapack.com.br", "phone": "47994490877", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "diogo_3749", "first_name": "Diogo", "last_name": "M\u00e1rio Rocha", "email": "ddiogomariorocha@mundivox.com.br", "phone": "84995002047", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "leonardo_3277", "first_name": "Leonardo", "last_name": "Martin Diogo Barros", "email": "leonardomartindiogobarros-86@siexpress.com.br", "phone": "61984982680", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "lorenzo_2932", "first_name": "Lorenzo", "last_name": "Thomas Ian dos Santos", "email": "lorenzothomasiandossantos__lorenzothomasiandossantos@w3ag.com", "phone": "31995385171", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "pedro_4918", "first_name": "Pedro", "last_name": "Cau\u00e3 Marcos Alves", "email": "pedrocauamarcosalves_@jammer.com.br", "phone": "68984492507", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "benicio_4668", "first_name": "Ben\u00edcio", "last_name": "Luan Barros", "email": "benicioluanbarros_@outloock.com.br", "phone": "51998762040", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "luan_2840", "first_name": "Luan", "last_name": "Heitor Leonardo Apar\u00edcio", "email": "lluanheitorleonardoaparicio@protenisbarra.com.br", "phone": "82994803822", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "cesar_942", "first_name": "C\u00e9sar", "last_name": "Theo Costa", "email": "cesartheocosta-93@mv1.com.br", "phone": "62997078995", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "patricia_4639", "first_name": "Patr\u00edcia", "last_name": "Sandra Francisca de Paula", "email": "ppatriciasandrafranciscadepaula@aiesec.net", "phone": "67995095954", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "bianca_2541", "first_name": "Bianca", "last_name": "Elo\u00e1 Monteiro", "email": "bbiancaeloamonteiro@contabilidadelibra.com.br", "phone": "98988683758", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "carlos_4021", "first_name": "Carlos", "last_name": "Eduardo Augusto Almada", "email": "carloseduardoaugustoalmada_@tetrapark.com", "phone": "35998871095", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "rafael_4503", "first_name": "Rafael", "last_name": "Renan da Mota", "email": "rafaelrenandamota..rafaelrenandamota@unidademovel.com", "phone": "67985375683", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "lucia_3503", "first_name": "L\u00facia", "last_name": "Carolina Fernandes", "email": "luciacarolinafernandes-77@lagencemodelos.com.br", "phone": "92996310737", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "enzo_1901", "first_name": "Enzo", "last_name": "Filipe Lorenzo da Mota", "email": "enzofilipelorenzodamota_@renatoseguros.com", "phone": "27987778603", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "marlene_1019", "first_name": "Marlene", "last_name": "Raimunda Viana", "email": "marleneraimundaviana..marleneraimundaviana@policiapenal.com", "phone": "82994070542", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "heitor_2037", "first_name": "Heitor", "last_name": "Juan Paulo Teixeira", "email": "heitorjuanpauloteixeira..heitorjuanpauloteixeira@imeio.com", "phone": "98997575332", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "vitor_3854", "first_name": "Vitor", "last_name": "Vinicius Rodrigues", "email": "vitorviniciusrodrigues..vitorviniciusrodrigues@callan.com.br", "phone": "35984013251", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "diego_4052", "first_name": "Diego", "last_name": "Levi Figueiredo", "email": "diegolevifigueiredo_@foxtech.com.br", "phone": "68996587906", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "noah_1853", "first_name": "Noah", "last_name": "M\u00e1rio Raimundo Sales", "email": "noahmarioraimundosales..noahmarioraimundosales@nonesiglio.com.br", "phone": "81984260081", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "ian_2996", "first_name": "Ian", "last_name": "Rafael Rocha", "email": "ianrafaelrocha..ianrafaelrocha@fitttransportes.com.br", "phone": "79992008241", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "ruan_2754", "first_name": "Ruan", "last_name": "Cau\u00e3 Ryan Vieira", "email": "ruancauaryanvieira-82@bom.com.br", "phone": "21995423862", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "emily_1082", "first_name": "Emily", "last_name": "Al\u00edcia Luciana Foga\u00e7a", "email": "emilyalicialucianafogaca..emilyalicialucianafogaca@arysta.com.br", "phone": "27984646296", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "nathan_2359", "first_name": "Nathan", "last_name": "Cl\u00e1udio Caldeira", "email": "nathanclaudiocaldeira-93@viamoc.com.br", "phone": "86987079876", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "fabio_4247", "first_name": "F\u00e1bio", "last_name": "Diego da Silva", "email": "fabiodiegodasilva-89@resource.com.br", "phone": "63985926073", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "heloisa_1929", "first_name": "Heloisa", "last_name": "D\u00e9bora Moreira", "email": "hheloisadeboramoreira@lajescobre.com", "phone": "81985213541", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "manuel_1757", "first_name": "Manuel", "last_name": "Felipe da Concei\u00e7\u00e3o", "email": "manuelfelipedaconceicao-86@riguetti.com.br", "phone": "71997179846", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "leandro_1852", "first_name": "Leandro", "last_name": "Osvaldo Campos", "email": "leandroosvaldocampos__leandroosvaldocampos@techdomus.com.br", "phone": "34995851139", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "raimunda_3219", "first_name": "Raimunda", "last_name": "Vit\u00f3ria Fl\u00e1via Oliveira", "email": "raimundavitoriaflaviaoliveira-75@companyvivo.com.br", "phone": "95985069236", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "fatima_4189", "first_name": "F\u00e1tima", "last_name": "Isabelle Luana Viana", "email": "fatimaisabelleluanaviana-84@gmai.com", "phone": "61981135372", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "adriana_3208", "first_name": "Adriana", "last_name": "Ester Emanuelly Nascimento", "email": "adrianaesteremanuellynascimento__adrianaesteremanuellynascimento@vivalle.com.br", "phone": "79992726520", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "luna_3149", "first_name": "Luna", "last_name": "Emilly Fabiana Dias", "email": "lunaemillyfabianadias..lunaemillyfabianadias@duoarq.com", "phone": "(65) 99710-0630", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "laura_4960", "first_name": "Laura", "last_name": "Priscila da Paz", "email": "lauraprisciladapaz-98@p4ed.com", "phone": "(31) 98733-2038", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "pietro_4575", "first_name": "Pietro", "last_name": "Anderson Ruan Ara\u00fajo", "email": "pietroandersonruanaraujo_@facebook.com", "phone": "(92) 98501-5952", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "maya_875", "first_name": "Maya", "last_name": "Isabelle Assun\u00e7\u00e3o", "email": "mayaisabelleassuncao__mayaisabelleassuncao@toyota.com.br", "phone": "(11) 99451-5993", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "eduardo_1699", "first_name": "Eduardo", "last_name": "Gabriel Rocha", "email": "eeduardogabrielrocha@premierpet.com.br", "phone": "(96) 98138-0737", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "diogo_1782", "first_name": "Diogo", "last_name": "Caio Renato Ramos", "email": "diogocaiorenatoramos-76@candello.abv.br", "phone": "(77) 99822-8194", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "luis_4389", "first_name": "Lu\u00eds", "last_name": "Julio Pinto", "email": "lluisjuliopinto@rocketmail.com", "phone": "(44) 98568-9006", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "ryan_371", "first_name": "Ryan", "last_name": "Emanuel Hugo Moraes", "email": "ryanemanuelhugomoraes-86@ppconsulting.com.br", "phone": "(67) 99203-8676", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "benjamin_4421", "first_name": "Benjamin", "last_name": "Yuri S\u00e9rgio Lopes", "email": "benjaminyurisergiolopes__benjaminyurisergiolopes@soulcomunicacao.com.br", "phone": "(88) 99340-8426", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "marcela_2048", "first_name": "Marcela", "last_name": "Allana Jennifer Teixeira", "email": "marcelaallanajenniferteixeira-70@outershoes.com.br", "phone": "(48) 98758-5483", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "felipe_2422", "first_name": "Felipe", "last_name": "Vinicius da Rosa", "email": "felipeviniciusdarosa..felipeviniciusdarosa@mixfmmanaus.com.br", "phone": "(47) 98157-4087", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "marcelo_155", "first_name": "Marcelo", "last_name": "Elias Moreira", "email": "marceloeliasmoreira_@aclnet.com.br", "phone": "(68) 99148-2876", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "flavia_4243", "first_name": "Fl\u00e1via", "last_name": "Emanuelly Costa", "email": "flaviaemanuellycosta..flaviaemanuellycosta@projetti.com", "phone": "(98) 99804-7256", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "regina_2709", "first_name": "Regina", "last_name": "Isabella da Cunha", "email": "reginaisabelladacunha..reginaisabelladacunha@stembalagens.com.br", "phone": "(51) 98173-3771", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "manoel_890", "first_name": "Manoel", "last_name": "Davi Foga\u00e7a", "email": "mmanoeldavifogaca@budsoncorporation.com", "phone": "(92) 98416-9438", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "simone_4977", "first_name": "Simone", "last_name": "Giovanna La\u00eds Mendes", "email": "ssimonegiovannalaismendes@formulaweb.com.br", "phone": "(63) 98599-9412", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "arthur_1838", "first_name": "Arthur", "last_name": "Enrico Yuri Figueiredo", "email": "arthurenricoyurifigueiredo__arthurenricoyurifigueiredo@balloons.com.br", "phone": "(79) 98142-5385", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "pietra_4283", "first_name": "Pietra", "last_name": "Lav\u00ednia Bernardes", "email": "pietralaviniabernardes..pietralaviniabernardes@fk1.com.br", "phone": "(81) 99848-7097", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "catarina_4578", "first_name": "Catarina", "last_name": "Nat\u00e1lia Alana Campos", "email": "catarinanataliaalanacampos__catarinanataliaalanacampos@univap.br", "phone": "(64) 99237-7203", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "leandro_2704", "first_name": "Leandro", "last_name": "Iago Santos", "email": "lleandroiagosantos@anac.gov.br", "phone": "(98) 98322-2609", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "geraldo_846", "first_name": "Geraldo", "last_name": "Vinicius da Costa", "email": "geraldoviniciusdacosta..geraldoviniciusdacosta@bemdito.com.br", "phone": "(54) 99952-6871", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "luciana_2504", "first_name": "Luciana", "last_name": "Raquel Alves", "email": "lucianaraquelalves..lucianaraquelalves@huggoromano.com", "phone": "(63) 98322-2666", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "breno_3193", "first_name": "Breno", "last_name": "Ben\u00edcio Luiz Dias", "email": "brenobenicioluizdias-95@candello.abv.br", "phone": "(85) 99375-2798", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "sebastiao_3245", "first_name": "Sebasti\u00e3o", "last_name": "Felipe Juan Cardoso", "email": "sebastiaofelipejuancardoso__sebastiaofelipejuancardoso@tadex.com.br", "phone": "(61) 98152-4575", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "fabiana_3467", "first_name": "Fabiana", "last_name": "Betina Gabriela Melo", "email": "fabianabetinagabrielamelo__fabianabetinagabrielamelo@vitalliimoveis.com", "phone": "(69) 98867-1593", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "catarina_269", "first_name": "Catarina", "last_name": "Heloise Farias", "email": "catarinaheloisefarias..catarinaheloisefarias@kimmay.com.br", "phone": "(98) 99214-6536", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "vitoria_822", "first_name": "Vit\u00f3ria", "last_name": "Jennifer Freitas", "email": "vitoriajenniferfreitas..vitoriajenniferfreitas@mpv.org.br", "phone": "(71) 98848-7609", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "carlos_602", "first_name": "Carlos", "last_name": "Eduardo Daniel Lucas Monteiro", "email": "carloseduardodaniellucasmonteiro_@netsinf.com.br", "phone": "(21) 99285-9950", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "livia_4374", "first_name": "L\u00edvia", "last_name": "Raquel Sebastiana de Paula", "email": "liviaraquelsebastianadepaula-82@navescorat.com.br", "phone": "(31) 98925-7666", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "tereza_3301", "first_name": "Tereza", "last_name": "Melissa Arag\u00e3o", "email": "terezamelissaaragao__terezamelissaaragao@meiryjoias.com.br", "phone": "(68) 98780-5009", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "nathan_722", "first_name": "Nathan", "last_name": "Ot\u00e1vio Ricardo Fernandes", "email": "nathanotavioricardofernandes_@lukin4.com.br", "phone": "(81) 99549-7305", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "rafaela_3427", "first_name": "Rafaela", "last_name": "Cl\u00e1udia da Silva", "email": "rafaelaclaudiadasilva-98@mx.labinal.com", "phone": "(55) 98766-4667", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "maya_4987", "first_name": "Maya", "last_name": "D\u00e9bora Alves", "email": "mmayadeboraalves@soluxenergiasolar.com.br", "phone": "(48) 98122-0798", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "daniela_4847", "first_name": "Daniela", "last_name": "Mirella J\u00e9ssica Lima", "email": "danielamirellajessicalima__danielamirellajessicalima@graficajardim.com.br", "phone": "(66) 98731-9957", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "carlos_518", "first_name": "Carlos", "last_name": "Eduardo Lucca Cardoso", "email": "carloseduardoluccacardoso__carloseduardoluccacardoso@r7.com", "phone": "(31) 98544-4767", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "danilo_1408", "first_name": "Danilo", "last_name": "Caio Thomas Freitas", "email": "danilocaiothomasfreitas_@iahoo.com", "phone": "(17) 98851-4650", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "isabela_1216", "first_name": "Isabela", "last_name": "Rita Vit\u00f3ria Martins", "email": "isabelaritavitoriamartins_@viacabonet.com.br", "phone": "(71) 98446-2308", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "ana_74", "first_name": "Ana", "last_name": "L\u00facia Nunes", "email": "analucianunes-80@gimail.com", "phone": "(71) 98524-9297", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "yasmin_530", "first_name": "Yasmin", "last_name": "Caroline da Cruz", "email": "yyasmincarolinedacruz@live.com", "phone": "(92) 98519-9677", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "calebe_3285", "first_name": "Calebe", "last_name": "Igor Baptista", "email": "ccalebeigorbaptista@mega.com.br", "phone": "(91) 98925-3210", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "noah_4460", "first_name": "Noah", "last_name": "Anderson Porto", "email": "noahandersonporto-85@hotmail.de", "phone": "(61) 99953-2420", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "kaue_4330", "first_name": "Kau\u00ea", "last_name": "Cl\u00e1udio Campos", "email": "kaueclaudiocampos_@centrooleo.com.br", "phone": "(24) 98853-1749", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "lais_2610", "first_name": "La\u00eds", "last_name": "Ana Sales", "email": "laisanasales..laisanasales@gmx.de", "phone": "(96) 99782-5196", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "vanessa_585", "first_name": "Vanessa", "last_name": "Eliane da Mota", "email": "vanessaelianedamota_@vitalliimoveis.com", "phone": "(64) 99964-6601", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "sebastiana_2863", "first_name": "Sebastiana", "last_name": "Nicole da Mata", "email": "sebastiananicoledamata_@imagemeaudio.com.br", "phone": "(69) 98652-0936", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "priscila_4911", "first_name": "Priscila", "last_name": "Helena Allana Souza", "email": "priscilahelenaallanasouza_@trone.com.br", "phone": "(27) 99714-9729", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "renato_2936", "first_name": "Renato", "last_name": "Vicente Francisco Barbosa", "email": "rrenatovicentefranciscobarbosa@mciimoveis.com.br", "phone": "(86) 99790-3568", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "erick_3787", "first_name": "Erick", "last_name": "Cau\u00ea Renato da Mata", "email": "erickcauerenatodamata-94@cssmi.com.br", "phone": "(28) 98658-2619", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "roberto_4834", "first_name": "Roberto", "last_name": "Heitor Pires", "email": "rrobertoheitorpires@lojabichopapao.com.br", "phone": "(69) 99397-7069", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "yuri_987", "first_name": "Yuri", "last_name": "Jos\u00e9 Pereira", "email": "yurijosepereira-78@planicoop.com.br", "phone": "(11) 99133-1258", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "bryan_415", "first_name": "Bryan", "last_name": "Sebasti\u00e3o Severino Barros", "email": "bryansebastiaoseverinobarros..bryansebastiaoseverinobarros@newpark.com", "phone": "(48) 98323-3177", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "luiz_3441", "first_name": "Luiz", "last_name": "Sebasti\u00e3o Gon\u00e7alves", "email": "luizsebastiaogoncalves..luizsebastiaogoncalves@novaequipem.com.br", "phone": "(64) 99572-1883", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "aparecida_1226", "first_name": "Aparecida", "last_name": "Beatriz Foga\u00e7a", "email": "aparecidabeatrizfogaca__aparecidabeatrizfogaca@myself.com", "phone": "(95) 99283-2168", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "benjamin_721", "first_name": "Benjamin", "last_name": "Diogo Jorge Costa", "email": "benjamindiogojorgecosta_@unimedara.com.br", "phone": "(84) 98176-9220", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
        {"username": "bryan_2609", "first_name": "Bryan", "last_name": "Carlos Yuri Lopes", "email": "bryancarlosyurilopes-97@creativeinteriores.com.br", "phone": "(96) 98610-1677", "password_hash": "$2b$10$tU.6mUOMggFFhd8wYQruLOGsENz8UPdzV8WFTv..e72.J7Mv2d73G"},
      ]);
    });
};
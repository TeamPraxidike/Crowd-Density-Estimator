const _0x49f0=['floor','centre','Мястото\x20е:\x20','1334IBxHRM','\x20\x0a\x20и\x20се\x20намира\x20на:\x20','red','99063eBgyJd','theater','147133EdHTXX','alyosha','bogoridi','Морска\x20Гара','yellow','grey','setView','136woKnBI','Център','Богориди','222472necyJT','Хотел\x20България','21360LdJtiG','223GEYetC','https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=umeEEPwaY1ljp2yJrdAM','Детски\x20кът','Морски\x20театър','1MdiOoK','addTo','9gTQRJQ','tileLayer','hotelbg','detskikut','673oicpMC','setStyle','morksagara','random','circle','Паметник\x20\x22Альоша\x22','93542GEFexR','push','<a\x20href=\x22https://www.maptiler.com/copyright/\x22\x20target=\x22_blank\x22>&copy;\x20MapTiler</a>\x20<a\x20href=\x22https://www.openstreetmap.org/copyright\x22\x20target=\x22_blank\x22>&copy;\x20OpenStreetMap\x20contributors</a>'];const _0x4837=function(_0x363711,_0x3a4e70){_0x363711=_0x363711-0x10a;let _0x49f055=_0x49f0[_0x363711];return _0x49f055;};const _0x1dc4e4=_0x4837;(function(_0x554c3f,_0x10571f){const _0x341ab0=_0x4837;while(!![]){try{const _0x9dd6be=-parseInt(_0x341ab0(0x12d))+-parseInt(_0x341ab0(0x11e))*parseInt(_0x341ab0(0x10e))+-parseInt(_0x341ab0(0x111))+parseInt(_0x341ab0(0x118))*parseInt(_0x341ab0(0x12f))+parseInt(_0x341ab0(0x11a))*parseInt(_0x341ab0(0x113))+-parseInt(_0x341ab0(0x124))+-parseInt(_0x341ab0(0x12a))*-parseInt(_0x341ab0(0x114));if(_0x9dd6be===_0x10571f)break;else _0x554c3f['push'](_0x554c3f['shift']());}catch(_0x516a88){_0x554c3f['push'](_0x554c3f['shift']());}}}(_0x49f0,0x1fcca));var mymap=L['map']('karta')[_0x1dc4e4(0x10d)]([42.5,27.47388],14.4);L[_0x1dc4e4(0x11b)](_0x1dc4e4(0x115),{'attribution':_0x1dc4e4(0x126)})[_0x1dc4e4(0x119)](mymap);let coordinates_arr=[[42.49828,27.47052],[42.49627,27.47135],[42.4936,27.47254],[42.49371,27.47487],[42.48881,27.48027],[42.49855,27.4819],[42.50337,27.48204]],locations_arr=[_0x1dc4e4(0x123),_0x1dc4e4(0x10f),_0x1dc4e4(0x112),_0x1dc4e4(0x110),_0x1dc4e4(0x10a),_0x1dc4e4(0x117),_0x1dc4e4(0x116)],names_arr=[_0x1dc4e4(0x130),_0x1dc4e4(0x128),_0x1dc4e4(0x11c),_0x1dc4e4(0x131),_0x1dc4e4(0x120),_0x1dc4e4(0x12e),_0x1dc4e4(0x11d)],circle_arr=[];for(let x=0x0;x<coordinates_arr['length'];x++){let coordinates=coordinates_arr[x];circle_arr[_0x1dc4e4(0x125)](L[_0x1dc4e4(0x122)](coordinates,{'color':_0x1dc4e4(0x10c),'radius':0x50}));}for(let x in circle_arr){circle_arr[x][_0x1dc4e4(0x119)](mymap)['bindPopup'](_0x1dc4e4(0x129)+locations_arr[x]+_0x1dc4e4(0x12b)+coordinates_arr[x]);}setInterval(()=>{const _0x13e7c4=_0x1dc4e4;for(let _0x3ed16f in circle_arr){let _0x3b57c8=Math[_0x13e7c4(0x127)](Math[_0x13e7c4(0x121)]()*0x3),_0x546264='';switch(_0x3b57c8){case 0x0:_0x546264='green';break;case 0x1:_0x546264=_0x13e7c4(0x10b);break;case 0x2:_0x546264=_0x13e7c4(0x12c);break;};circle_arr[_0x3ed16f][_0x13e7c4(0x11f)]({'color':_0x546264});}},0xbb8);
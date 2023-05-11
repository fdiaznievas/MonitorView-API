import express from 'express'; //ESModules
// const express = require('expres') → Commonjs

const router = express.Router();

router.get('/', (_req:any, res:any) => {
  res.json([
      {
          "id": 1,
          "idCid": 902,
          "sucursal": "POETA LUGONES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ASTRADA CHRISTIAN LEONARDO ",
          "celular": "0351-155649000",
          "interno": 2104
      },
      {
          "id": 2,
          "idCid": 907,
          "sucursal": "RECTA MARTINOLI",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CINGOLANI, CRISTIAN JOSE",
          "celular": "351-156850762 ",
          "interno": "-"
      },
      {
          "id": 3,
          "idCid": 913,
          "sucursal": "CENTRO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "NOTTARIS RAUL ALFREDO ",
          "celular": "0351-155649001",
          "interno": 2105
      },
      {
          "id": 4,
          "idCid": 914,
          "sucursal": "CERRO DE LAS ROSAS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "FERRERO DIEGO ALEJANDRO ",
          "celular": "0351-155649003",
          "interno": "-"
      },
      {
          "id": 5,
          "idCid": 915,
          "sucursal": "GENERAL PAZ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BERZERO, CAROL DEL VALLE",
          "celular": "0351-155649004",
          "interno": 2107
      },
      {
          "id": 6,
          "idCid": 918,
          "sucursal": "PLAZA RIVADAVIA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BIAGIOLI JUAN NATALIO ",
          "celular": "0351-155649022",
          "interno": 2115
      },
      {
          "id": 7,
          "idCid": 919,
          "sucursal": "SAN MARTIN",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "GALLARDO TOMAS EDUARDO",
          "celular": "0351-152486896",
          "interno": 1505
      },
      {
          "id": 8,
          "idCid": 922,
          "sucursal": "TRIBUNALES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "SMUTT FERNANDO ALDO",
          "celular": "0351-155649018",
          "interno": 2111
      },
      {
          "id": 9,
          "idCid": 928,
          "sucursal": "JUAN B. JUSTO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "GOMEZ JULIO CESAR ",
          "celular": "0351-155649026",
          "interno": 2118
      },
      {
          "id": 10,
          "idCid": 933,
          "sucursal": "LOS GRANADEROS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ACOSTA, MARCOS",
          "celular": "0351-152010288 ",
          "interno": "-"
      },
      {
          "id": 11,
          "idCid": 939,
          "sucursal": "ALEM",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "PORTELA, ANDREA CECILIA",
          "celular": "0351-158069663",
          "interno": "-"
      },
      {
          "id": 12,
          "idCid": 912,
          "sucursal": "ALTO ALBERDI ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ATAIDE, HECTOR EDUARDO",
          "celular": 155649005,
          "interno": 2108
      },
      {
          "id": 13,
          "idCid": 917,
          "sucursal": "NUEVA CORDOBA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ORTEGA HATTEMER, MARIA INES",
          "celular": 153081765,
          "interno": 1005
      },
      {
          "id": 14,
          "idCid": 921,
          "sucursal": "SAN VICENTE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BIGONGIARI SERGIO DANIEL ",
          "celular": 157011767,
          "interno": 2132
      },
      {
          "id": 15,
          "idCid": 923,
          "sucursal": "FUERZA AEREA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BORGHI, PABLO ANDRES",
          "celular": 155649019,
          "interno": 2112
      },
      {
          "id": 16,
          "idCid": 924,
          "sucursal": "BAJADA PUCARA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ZORRILLA, FRANCISCO DANIEL",
          "celular": "0351-153484520",
          "interno": 2113
      },
      {
          "id": 17,
          "idCid": 925,
          "sucursal": "MERCADO NORTE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MUÑOZ PABLO JOSE",
          "celular": "0351-155649025",
          "interno": 2117
      },
      {
          "id": 18,
          "idCid": 931,
          "sucursal": "CIUDADELA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MISCHIS ALEXIS JAVIER ",
          "celular": "0351-155649025",
          "interno": 2114
      },
      {
          "id": 19,
          "idCid": 940,
          "sucursal": "PASEO DEL JOCKEY",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CALARCO, SEBASTIAN EDUARDO",
          "celular": 3515129767,
          "interno": "-"
      },
      {
          "id": 20,
          "idCid": 942,
          "sucursal": "RAFAEL NUÑEZ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MARCHESINI, CAROLINA",
          "celular": "0351-158069961",
          "interno": "-"
      },
      {
          "id": 21,
          "idCid": 943,
          "sucursal": "FERREYRA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ARREGUI, ALEJANDRO",
          "celular": 3516151832,
          "interno": "-"
      },
      {
          "id": 22,
          "idCid": 944,
          "sucursal": "LA CAÑADA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "LASSAGA, MIGUEL ANGEL",
          "celular": "-",
          "interno": 2347
      },
      {
          "id": 23,
          "idCid": 454,
          "sucursal": "MALAGUEÑO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "OLLER, LUIS MARIO",
          "celular": 156321668,
          "interno": "-"
      },
      {
          "id": 24,
          "idCid": 311,
          "sucursal": "SALSACATE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ROLDAN KARINA",
          "celular": 3544582210,
          "interno": 2829
      },
      {
          "id": 25,
          "idCid": 322,
          "sucursal": "VILLA DOLORES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CALDERON WALTER",
          "celular": 3544552551,
          "interno": 2170
      },
      {
          "id": 26,
          "idCid": 324,
          "sucursal": "CRUZ DEL EJE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CAPDEVILA CARINA NOEMI",
          "celular": "3549457752",
          "interno": 2615
      },
      {
          "id": 27,
          "idCid": 338,
          "sucursal": "MINA CLAVERO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Palmeyro, Francisco Xaxier",
          "celular": 3544582208,
          "interno": 1591
      },
      {
          "id": 28,
          "idCid": 368,
          "sucursal": "VILLA DE SOTO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BAZAN SERGIO R.",
          "celular": 3549418882,
          "interno": 2828
      },
      {
          "id": 29,
          "idCid": 315,
          "sucursal": "COSQUIN",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Sampirisi, Eduardo Ramon",
          "celular": "155649038",
          "interno": 2122
      },
      {
          "id": 30,
          "idCid": 316,
          "sucursal": "ALTA GRACIA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MIOTTI FLAVIA ",
          "celular": "03547-15570210",
          "interno": 2172
      },
      {
          "id": 31,
          "idCid": 336,
          "sucursal": "LA FALDA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Ceballos, Jorge Antonio",
          "celular": "03548-15572011",
          "interno": 2174
      },
      {
          "id": 32,
          "idCid": 342,
          "sucursal": "LA CUMBRE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Astudillo, Gustavo Omar",
          "celular": "03548-15572010",
          "interno": 2173
      },
      {
          "id": 33,
          "idCid": 349,
          "sucursal": "VILLA CARLOS PAZ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Porta German",
          "celular": "0351-5649031",
          "interno": 2121
      },
      {
          "id": 34,
          "idCid": 337,
          "sucursal": "ALMAFUERTE ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Ortiz, Rodolfo R.  Sup. de Sucursal",
          "celular": "03571-15458360",
          "interno": 1552
      },
      {
          "id": 35,
          "idCid": 339,
          "sucursal": "SANTA ROSA DE CALAMUCHITA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "QUINTEROS, RAMON ELOY",
          "celular": "03546-15477672",
          "interno": 2171
      },
      {
          "id": 36,
          "idCid": 361,
          "sucursal": "DESPEÑADEROS ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Pistelli, Roberto",
          "celular": "03571-15546836",
          "interno": 2809
      },
      {
          "id": 37,
          "idCid": 402,
          "sucursal": "SAN AGUSTIN",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Zarate, Julio Sup. de Sucursal",
          "celular": "03547-15570080",
          "interno": 2130
      },
      {
          "id": 38,
          "idCid": 419,
          "sucursal": "CORRALITO     ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "rivarola, Sandra Lidia  - Sup. de ",
          "celular": "03571-15546873",
          "interno": "-"
      },
      {
          "id": 39,
          "idCid": 452,
          "sucursal": "VILLA GENERAL BELGRANO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "FERNANDEZ, LEONARDO SILVIO",
          "celular": "03546-15435009",
          "interno": 1695
      },
      {
          "id": 40,
          "idCid": 423,
          "sucursal": "LOS CONDORES ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Urbani, Silvana Veronica ",
          "celular": "-",
          "interno": 2807
      },
      {
          "id": 41,
          "idCid": 425,
          "sucursal": "EMBALSE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "RECHIMON HUGO ",
          "celular": "03571-15555331",
          "interno": 2383
      },
      {
          "id": 42,
          "idCid": 900,
          "sucursal": "CATEDRAL",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ROMERO FERNANDO",
          "celular": 153852474,
          "interno": 1108
      },
      {
          "id": 43,
          "idCid": 101,
          "sucursal": "BUENOS AIRES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "GOROSITO, OSVALDO RAUL",
          "celular": "011-1557747227",
          "interno": 2345
      },
      {
          "id": 44,
          "idCid": 373,
          "sucursal": "ROSARIO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "San Miguel Maria Soledad",
          "celular": "0341-153274343",
          "interno": 2100
      },
      {
          "id": 45,
          "idCid": 310,
          "sucursal": "SAN JOSE DE LA DORMIDA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "RIACHI DELIA INES",
          "celular": 3521409419,
          "interno": 2804
      },
      {
          "id": 46,
          "idCid": 314,
          "sucursal": "VILLA DE MARIA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "PONCE DE LEON OSVALDO DANIEL",
          "celular": 3522459965,
          "interno": 2897
      },
      {
          "id": 47,
          "idCid": 318,
          "sucursal": "DEAN FUNES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ALANIS DANIEL SANTIAGO",
          "celular": 3521401010,
          "interno": 2120
      },
      {
          "id": 48,
          "idCid": 325,
          "sucursal": "VILLA DEL TOTORAL",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "LENCINA NORA CARINA",
          "celular": 3524496661,
          "interno": 2158
      },
      {
          "id": 49,
          "idCid": 328,
          "sucursal": "SAN FRANCISCO DEL CHAÑAR",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CERVILLA PABLO DANIEL ",
          "celular": 3522458377,
          "interno": 2119
      },
      {
          "id": 50,
          "idCid": 300,
          "sucursal": "SALSIPUEDES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Quiñoz Claudia",
          "celular": "0351-153858519",
          "interno": "-"
      },
      {
          "id": 51,
          "idCid": 308,
          "sucursal": "JESUS MARIA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Nieto dario",
          "celular": "03525-15439989",
          "interno": 1561
      },
      {
          "id": 52,
          "idCid": 350,
          "sucursal": "RIO CEBALLOS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Gimenez, Marcos Alfredo",
          "celular": "03543-15535386 ",
          "interno": 2168
      },
      {
          "id": 53,
          "idCid": 356,
          "sucursal": "LA CALERA ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Carranza, Alejandro Alberto",
          "celular": "03543-15535385",
          "interno": 2167
      },
      {
          "id": 54,
          "idCid": 392,
          "sucursal": "VILLA ALLENDE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Turco Maria Ester",
          "celular": "03543-15586995",
          "interno": 2166
      },
      {
          "id": 55,
          "idCid": 405,
          "sucursal": "COLONIA CAROYA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Yance, Monica Carolina",
          "celular": "03525-15416885",
          "interno": 2840
      },
      {
          "id": 56,
          "idCid": 408,
          "sucursal": "VILLA DEL ROSARIO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Ivetta Pereyra, Carlos Martin",
          "celular": "03573-15456685",
          "interno": 2103
      },
      {
          "id": 57,
          "idCid": 451,
          "sucursal": "RIO SEGUNDO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Pretto Daniel Oscar ",
          "celular": "03572-15438923",
          "interno": 2676
      },
      {
          "id": 58,
          "idCid": 422,
          "sucursal": "PILAR ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "GORNITZ PABLO ",
          "celular": "03572-15535421",
          "interno": 2188
      },
      {
          "id": 59,
          "idCid": 320,
          "sucursal": "SANTA ROSA DE RIO PRIMERO ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "SPOSETTI  MARCELO ATILIO",
          "celular": "03574-15454067",
          "interno": 2128
      },
      {
          "id": 60,
          "idCid": 382,
          "sucursal": "RIO PRIMERO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "LOPEZ DANTE OSCAR",
          "celular": "03574 15454233",
          "interno": 2129
      },
      {
          "id": 61,
          "idCid": 403,
          "sucursal": "SANTIAGO TEMPLE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "DOMINGUEZ  DIEGO JAVIER",
          "celular": "03574-15400059 ",
          "interno": 1326
      },
      {
          "id": 62,
          "idCid": 398,
          "sucursal": "LA PARA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "FAULE ALDO CELSO  ",
          "celular": "03575 15403593 ",
          "interno": "-"
      },
      {
          "id": 63,
          "idCid": 306,
          "sucursal": "CANALS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "NICOLA  MARCELO RAUL",
          "celular": "03463-15450195",
          "interno": 2178
      },
      {
          "id": 64,
          "idCid": 323,
          "sucursal": "JOVITA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BACIC  HEBER JOSE",
          "celular": "03385-15592770",
          "interno": 2146
      },
      {
          "id": 65,
          "idCid": 345,
          "sucursal": "LABOULAYE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ALTAMIRANO  ELIDA EDITH",
          "celular": "03385-15404280",
          "interno": 2361
      },
      {
          "id": 66,
          "idCid": 346,
          "sucursal": "LA CARLOTA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "DAHBAR, GUSTAVO CEFERINO",
          "celular": "0351-152030158",
          "interno": 2196
      },
      {
          "id": 67,
          "idCid": 354,
          "sucursal": "ARIAS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "STRELEC, ALEJANDRO MATÍAS",
          "celular": "03468-15436487",
          "interno": 2134
      },
      {
          "id": 68,
          "idCid": 367,
          "sucursal": "BUCHARDO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MORELLI  RICARDO HERMINIO",
          "celular": "03385-15525953 ",
          "interno": 2841
      },
      {
          "id": 69,
          "idCid": 375,
          "sucursal": "ALEJO LEDESMA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ORLANDINI  CRISTIAN SEBASTIAN",
          "celular": "0351-157646677 ",
          "interno": 2869
      },
      {
          "id": 70,
          "idCid": 396,
          "sucursal": "VIAMONTE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "VALDEZ  ORLANDO MANUEL",
          "celular": "03463-15451232 ",
          "interno": 2836
      },
      {
          "id": 71,
          "idCid": 413,
          "sucursal": "SERRANO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "GIORDANO  MARCELA ADRIANA",
          "celular": "03385-15404282 ",
          "interno": 2823
      },
      {
          "id": 72,
          "idCid": 431,
          "sucursal": "SANTA EUFEMIA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "RODRIGUEZ, PABLO SEBASTIAN",
          "celular": "03584-15405329 ",
          "interno": 2834
      },
      {
          "id": 73,
          "idCid": 432,
          "sucursal": "LA CESIRA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "RIERA  ROXANA MARINA",
          "celular": "03382-15458636",
          "interno": 2830
      },
      {
          "id": 74,
          "idCid": 433,
          "sucursal": "PUEBLO ITALIANO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "DI NARDO, ABEL LUIS",
          "celular": "03463-15450196",
          "interno": 2147
      },
      {
          "id": 75,
          "idCid": 333,
          "sucursal": "CORRAL DE BUSTOS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Vignolo Lorena Ivana",
          "celular": "03468-15437838",
          "interno": 2153
      },
      {
          "id": 76,
          "idCid": 334,
          "sucursal": "LABORDE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Bonetto Santiago Luis",
          "celular": "03534-15595277",
          "interno": 2159
      },
      {
          "id": 77,
          "idCid": 358,
          "sucursal": "CAMILO ALDAO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Elia Lucas Martin",
          "celular": "03468-15437939",
          "interno": 2135
      },
      {
          "id": 78,
          "idCid": 359,
          "sucursal": "GUATIMOZIN",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Gerardo Gabriel",
          "celular": "03468-15437839",
          "interno": 2154
      },
      {
          "id": 79,
          "idCid": 366,
          "sucursal": "MONTE MAIZ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "VIGNOLO, LORENA IVANA",
          "celular": "03468-15437837",
          "interno": 2152
      },
      {
          "id": 80,
          "idCid": 409,
          "sucursal": "GENERAL BADISERA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Cortez Gustavo",
          "celular": "03468-15437840",
          "interno": 2155
      },
      {
          "id": 81,
          "idCid": 317,
          "sucursal": "ALEJANDRO ROCA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Amari, Jorge Domingo",
          "celular": "0358-154116580",
          "interno": 2125
      },
      {
          "id": 82,
          "idCid": 393,
          "sucursal": "UCACHA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Ghigo, Daniel Odilio",
          "celular": "0353-154085222",
          "interno": 2677
      },
      {
          "id": 83,
          "idCid": 357,
          "sucursal": "ETRURIA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "COLOMBO, JORGE ALBERTO",
          "celular": "0353-154069357",
          "interno": 2101
      },
      {
          "id": 84,
          "idCid": 330,
          "sucursal": "HUINCA RENANCO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "GUERRINI  MARIANA ANDREA",
          "celular": "02336-15493016",
          "interno": 1368
      },
      {
          "id": 85,
          "idCid": 390,
          "sucursal": "DEL CAMPILLO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "TELLERIA MASCAREÑO JUAN ALBERTO",
          "celular": "03583-15400438",
          "interno": 2826
      },
      {
          "id": 86,
          "idCid": 395,
          "sucursal": "VILLA VALERIA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ACTIS ARRIETA JORGE OSMAR",
          "celular": "03583-15400437",
          "interno": 2825
      },
      {
          "id": 87,
          "idCid": 430,
          "sucursal": "VILLA HUIDOBRO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "NICOLA GIRAUDO MARIO JAVIER",
          "celular": "02336-15493023 ",
          "interno": 2824
      },
      {
          "id": 88,
          "idCid": 302,
          "sucursal": "RIO CUARTO CENTRO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Cotignola Mario",
          "celular": "0358-154288015",
          "interno": 1588
      },
      {
          "id": 89,
          "idCid": 326,
          "sucursal": "CORONEL MOLDES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Fretes, Sergio Daniel",
          "celular": "03582-15594202",
          "interno": 2191
      },
      {
          "id": 90,
          "idCid": 329,
          "sucursal": "GENERAL LEVALLE ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Rossi, Hugo Fernando",
          "celular": "3385-15592575 ",
          "interno": 2126
      },
      {
          "id": 91,
          "idCid": 351,
          "sucursal": "SAMPACHO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Bogino, Daniel Antonio",
          "celular": "03582-15594203",
          "interno": 2192
      },
      {
          "id": 92,
          "idCid": 370,
          "sucursal": "SAN BASILIO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Torres, Tomas Rodolfo",
          "celular": "03585-15495414",
          "interno": 2198
      },
      {
          "id": 93,
          "idCid": 400,
          "sucursal": "RIO CUARTO SUR",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Vinyals Federico Alfonso",
          "celular": "0358-154117792",
          "interno": 2141
      },
      {
          "id": 94,
          "idCid": 406,
          "sucursal": "BULNES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Ressia, Marcelo Angel",
          "celular": "03582-15413207 ",
          "interno": 2820
      },
      {
          "id": 95,
          "idCid": 427,
          "sucursal": "RIO CUARTO BANDA NORTE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Casado Pamela Maria",
          "celular": "0358-154117793",
          "interno": 2142
      },
      {
          "id": 96,
          "idCid": 428,
          "sucursal": "LAS ACEQUIAS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Devia Monica (Tutoria)",
          "celular": "0358-154116579 ",
          "interno": 2124
      },
      {
          "id": 97,
          "idCid": 440,
          "sucursal": "ADELIA MARIA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Fernandez Pablo",
          "celular": "0351-153858519",
          "interno": 2692
      },
      {
          "id": 98,
          "idCid": 443,
          "sucursal": "RIO CUARTO ALBERDI",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Meneghello, German Ruben",
          "celular": "0358-154186078",
          "interno": 2803
      },
      {
          "id": 99,
          "idCid": 424,
          "sucursal": "VICUÑA MACKENNA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Armando, Graciela E.",
          "celular": "03583-15486108",
          "interno": 2194
      },
      {
          "id": 100,
          "idCid": 327,
          "sucursal": "ALCIRA GIGENA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "-",
          "celular": "0358-154116582",
          "interno": 2133
      },
      {
          "id": 101,
          "idCid": 343,
          "sucursal": "LAS PERDICES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Flores, Marcela",
          "celular": "0353-154080738 ",
          "interno": 1553
      },
      {
          "id": 102,
          "idCid": 371,
          "sucursal": "BERROTARAN",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "jaurena Fernando Sup. de Sucursal",
          "celular": "0358-154116581",
          "interno": 2131
      },
      {
          "id": 103,
          "idCid": 386,
          "sucursal": "GENERAL DEHEZA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Haedo, Marisa Isabe",
          "celular": "0358-154117795",
          "interno": 2144
      },
      {
          "id": 104,
          "idCid": 389,
          "sucursal": "GENERAL CABRERA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "FERRERO, SERGIO DANIEL",
          "celular": "0358-154117794",
          "interno": 2143
      },
      {
          "id": 105,
          "idCid": 321,
          "sucursal": "POZO DEL MOLLE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "PIZZI  ANALIA ALICIA",
          "celular": "0353-154069361",
          "interno": 2193
      },
      {
          "id": 106,
          "idCid": 341,
          "sucursal": "SACANTA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "HERNANZ JAVIER MARCOS",
          "celular": "03533-1545364",
          "interno": 2161
      },
      {
          "id": 107,
          "idCid": 347,
          "sucursal": "ALICIA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Reyes Diego ",
          "celular": "03533-15403220",
          "interno": 2818
      },
      {
          "id": 108,
          "idCid": 363,
          "sucursal": "SATURNINO MARIA LASPIUR",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BELEN  FRANCO DAVID",
          "celular": "03533-15403221",
          "interno": 2819
      },
      {
          "id": 109,
          "idCid": 364,
          "sucursal": "LAS VARILLAS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "RAMELLA RAUL JOSE",
          "celular": "03533-15453644",
          "interno": 2162
      },
      {
          "id": 110,
          "idCid": 372,
          "sucursal": "CARRILOBO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "FRANCO IVANA DEL VALLE",
          "celular": "0353-154066893",
          "interno": 2675
      },
      {
          "id": 111,
          "idCid": 416,
          "sucursal": "LUQUE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "DOFFO  LUCIANO ",
          "celular": "03573-155495161",
          "interno": 2102
      },
      {
          "id": 112,
          "idCid": 450,
          "sucursal": "EL ARAÑADO ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BRUNO EDGAR DAMIAN",
          "celular": "03533-15403219",
          "interno": 2817
      },
      {
          "id": 113,
          "idCid": 420,
          "sucursal": "COLAZO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "FERNANDEZ  MANUEL JULIO",
          "celular": "03532-15497015",
          "interno": 2832
      },
      {
          "id": 114,
          "idCid": 426,
          "sucursal": "LA PLAYOSA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "LENCINA EDGAR SIXTO",
          "celular": "0353-154121996",
          "interno": 2833
      },
      {
          "id": 115,
          "idCid": 303,
          "sucursal": "MORTEROS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BOSCO MATIAS MACIEL ",
          "celular": "03562 15458100",
          "interno": 2177
      },
      {
          "id": 116,
          "idCid": 307,
          "sucursal": "SAN FCO CENTRO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "GOMEZ JOSE MARIA",
          "celular": "03564 15412610",
          "interno": 2180
      },
      {
          "id": 117,
          "idCid": 332,
          "sucursal": "BALNEAREA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BELTRAMINO GUSTAVO PEDRO",
          "celular": "03563 15491859",
          "interno": 2179
      },
      {
          "id": 118,
          "idCid": 340,
          "sucursal": "ARROYITO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CISTERNA MARIA EUGENIA",
          "celular": "03576 15449620",
          "interno": 2847
      },
      {
          "id": 119,
          "idCid": 352,
          "sucursal": "LA FRANCIA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "VAIRA DARIO ARIEL",
          "celular": "03564 15506619",
          "interno": 1536
      },
      {
          "id": 120,
          "idCid": 353,
          "sucursal": "PORTEÑA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ALFARO CARLOS",
          "celular": "03564 15412612",
          "interno": 2182
      },
      {
          "id": 121,
          "idCid": 380,
          "sucursal": "FREYRE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": " TEDESCHI WALTER DANIEL",
          "celular": "03564 15412611",
          "interno": 2181
      },
      {
          "id": 122,
          "idCid": 381,
          "sucursal": "DEVOTO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CAPELLO, GABRIEL HUGO",
          "celular": "03564 15412613 ",
          "interno": " 2183"
      },
      {
          "id": 123,
          "idCid": 411,
          "sucursal": "BRINKMAN",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "TEDESCHI, WALTER DANIEL",
          "celular": "03562 15458099",
          "interno": 2176
      },
      {
          "id": 124,
          "idCid": 418,
          "sucursal": "ALTOS DE CHIPION",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": " ROBLEDO RUBEN DARIO",
          "celular": "03562-15415619 ",
          "interno": "-"
      },
      {
          "id": 125,
          "idCid": 441,
          "sucursal": "SAN FCO OESTE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MOLINARI MARIO EDUARDO",
          "celular": "03564 15412614",
          "interno": 2184
      },
      {
          "id": 126,
          "idCid": 369,
          "sucursal": "COLONIA MARINA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "COLOMBO, MARIO ALBERTO",
          "celular": "03564 15567611",
          "interno": "2812 "
      },
      {
          "id": 127,
          "idCid": 455,
          "sucursal": "SAN FRANCISCO SARMIENTO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CASALIS FERNANDO",
          "celular": "-",
          "interno": 8711
      },
      {
          "id": 128,
          "idCid": 438,
          "sucursal": "LAS JUNTURAS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "RICHIERO, GUSTAVO JAVIER",
          "celular": "03532- 15467979",
          "interno": 1557
      },
      {
          "id": 129,
          "idCid": 331,
          "sucursal": "ONCATIVO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "VISITI  OSCAR ISIDRO",
          "celular": "03572-15504605",
          "interno": 2187
      },
      {
          "id": 130,
          "idCid": 377,
          "sucursal": "CINTRA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Planas Marcos",
          "celular": "03537-15595579 ",
          "interno": 2164
      },
      {
          "id": 131,
          "idCid": 417,
          "sucursal": "NOETINGER",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Rodolfo Cuevas ",
          "celular": "03472-15584815",
          "interno": 2197
      },
      {
          "id": 132,
          "idCid": 453,
          "sucursal": "LAGUNA LARGA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "GIORDANO MARTIN DAVID",
          "celular": "0351-152008067",
          "interno": "-"
      },
      {
          "id": 133,
          "idCid": 401,
          "sucursal": "SAN MARCOS SUD",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MAERO SILVANA SOLEDAD",
          "celular": "03472-15432786",
          "interno": 2629
      },
      {
          "id": 134,
          "idCid": 309,
          "sucursal": "CRUZ ALTA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "JORDAN, GABRIELA",
          "celular": "03467-15499217 03467-499217",
          "interno": 2148
      },
      {
          "id": 135,
          "idCid": 335,
          "sucursal": "LEONES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "WALTHER, ELIZABET PAOLA",
          "celular": "-",
          "interno": 2156
      },
      {
          "id": 136,
          "idCid": 348,
          "sucursal": "JUATINIANO POSEE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CONTIGIANI, MARIA LAURA",
          "celular": "-",
          "interno": 2165
      },
      {
          "id": 137,
          "idCid": 362,
          "sucursal": "INRIVILLE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CASAS, VANINA SOLEDAD",
          "celular": "03467-15499218",
          "interno": 2149
      },
      {
          "id": 138,
          "idCid": 388,
          "sucursal": "GENERAL ROCA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Rodriguez Andres Carlos",
          "celular": "03472-15437292",
          "interno": 2839
      },
      {
          "id": 139,
          "idCid": 301,
          "sucursal": "MARCOS JUAREZ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MAZZA HENRY RAUL",
          "celular": "03472-15584471",
          "interno": 2157
      },
      {
          "id": 140,
          "idCid": 435,
          "sucursal": "MONTE BUEY",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Trillini Cecilia",
          "celular": "03467-15499219",
          "interno": 2150
      },
      {
          "id": 141,
          "idCid": 365,
          "sucursal": "TANCACHA ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "-",
          "celular": "03571-15577875",
          "interno": 2186
      },
      {
          "id": 142,
          "idCid": 374,
          "sucursal": "RIO TERCERO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "OVIEDO MARIANELA ",
          "celular": "03571-15577874",
          "interno": 2185
      },
      {
          "id": 143,
          "idCid": 378,
          "sucursal": "OLIVA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MORENO, DANIEL ALEJANDRO",
          "celular": "03532-15466797",
          "interno": 2160
      },
      {
          "id": 144,
          "idCid": 304,
          "sucursal": "VILLA MARIA ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BALDASSA, DAVID CESAR",
          "celular": "0353-154069324",
          "interno": 2136
      },
      {
          "id": 145,
          "idCid": 305,
          "sucursal": "BELL VILLE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Luque Martin ",
          "celular": "03534-15595578",
          "interno": 2163
      },
      {
          "id": 146,
          "idCid": 319,
          "sucursal": "HERNANDO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BARBERO, JOSE ALFREDO",
          "celular": "0353-155083541",
          "interno": 2110
      },
      {
          "id": 147,
          "idCid": 376,
          "sucursal": "BALLESTEROS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "SIERRA, MARIANA ALEJANDRA",
          "celular": "0353-155086613",
          "interno": 1554
      },
      {
          "id": 148,
          "idCid": 399,
          "sucursal": "JAMES CRAIK",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MALDONADO, GUSTAVO ANDRES",
          "celular": "0353-154069360",
          "interno": 2190
      },
      {
          "id": 149,
          "idCid": 415,
          "sucursal": "VILLA NUEVA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CASTELLARI, JAVIER ALBERTO",
          "celular": "0353-154069326",
          "interno": 2138
      },
      {
          "id": 150,
          "idCid": 429,
          "sucursal": "IDIAZABAL",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MARTINA WALTER HUGO",
          "celular": "03534-15511711",
          "interno": 2802
      },
      {
          "id": 151,
          "idCid": 434,
          "sucursal": "TICINO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "DOFFO, SERGIO IVES",
          "celular": "0353-154069359",
          "interno": 2151
      },
      {
          "id": 152,
          "idCid": 437,
          "sucursal": "ARROYO CABRAL",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MENEGOTTO, CARLOS NELSO",
          "celular": "0353-154069327",
          "interno": 2139
      },
      {
          "id": 153,
          "idCid": 439,
          "sucursal": "VILLA  MARIA TERMINAL",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "TROGLIA, FERNANDO JOSE",
          "celular": "0353-154069325",
          "interno": 2137
      },
      {
          "id": 154,
          "idCid": 902,
          "sucursal": "POETA LUGONES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Lorenzatti Diego ",
          "celular": "0351-3164777",
          "interno": "-"
      },
      {
          "id": 155,
          "idCid": 907,
          "sucursal": "RECTA MARTINOLI",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 156,
          "idCid": 913,
          "sucursal": "CENTRO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Somoza Jose Alberto",
          "celular": "0351-157388866 ",
          "interno": "-"
      },
      {
          "id": 157,
          "idCid": 914,
          "sucursal": "CERRO DE LAS ROSAS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "FERRERO GERARDO DANIEL",
          "celular": "0351-155737585",
          "interno": "-"
      },
      {
          "id": 158,
          "idCid": 915,
          "sucursal": "GENERAL PAZ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Velazquez Analia del Valle ",
          "celular": "0351-153922300",
          "interno": "-"
      },
      {
          "id": 159,
          "idCid": 918,
          "sucursal": "PLAZA RIVADAVIA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "DEL PICCOLO, PATRICIA ALEJANDRA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 160,
          "idCid": 919,
          "sucursal": "SAN MARTIN",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "NIEVA, JULIO CESAR",
          "celular": "0351-155180971",
          "interno": "-"
      },
      {
          "id": 161,
          "idCid": 922,
          "sucursal": "TRIBUNALES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "MARCUZZI, NATALIA ANDREA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 162,
          "idCid": 928,
          "sucursal": "JUAN B. JUSTO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Torres Natalia",
          "celular": "0351-155908648",
          "interno": "-"
      },
      {
          "id": 163,
          "idCid": 933,
          "sucursal": "LOS GRANADEROS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 164,
          "idCid": 939,
          "sucursal": "ALEM",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 165,
          "idCid": 912,
          "sucursal": "ALTO ALBERDI ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Pederiva Maria Paula",
          "celular": 157388866,
          "interno": "-"
      },
      {
          "id": 166,
          "idCid": 917,
          "sucursal": "NUEVA CORDOBA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Gigena Jose",
          "celular": "Int. 9198",
          "interno": "-"
      },
      {
          "id": 167,
          "idCid": 921,
          "sucursal": "SAN VICENTE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Saccavino, Facundo",
          "celular": "3512024259 ",
          "interno": "-"
      },
      {
          "id": 168,
          "idCid": 923,
          "sucursal": "FUERZA AEREA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "BUTELER, GASTON ESTEBAN",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 169,
          "idCid": 924,
          "sucursal": "BAJADA PUCARA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Ferrini Mario",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 170,
          "idCid": 925,
          "sucursal": "MERCADO NORTE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "GUZMAN, LORENA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 171,
          "idCid": 931,
          "sucursal": "CIUDADELA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "BONATO, LUCIANO SEBASTIAN",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 172,
          "idCid": 940,
          "sucursal": "PASEO DEL JOCKEY",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 173,
          "idCid": 942,
          "sucursal": "RAFAEL NUÑEZ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 174,
          "idCid": 943,
          "sucursal": "FERREYRA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 175,
          "idCid": 944,
          "sucursal": "LA CAÑADA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 176,
          "idCid": 454,
          "sucursal": "MALAGUEÑO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "Int. 9557",
          "interno": "-"
      },
      {
          "id": 177,
          "idCid": 311,
          "sucursal": "SALSACATE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 178,
          "idCid": 322,
          "sucursal": "VILLA DOLORES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "BENITEZ GLORIA JULIETA",
          "celular": "3544409191 ",
          "interno": "-"
      },
      {
          "id": 179,
          "idCid": 324,
          "sucursal": "CRUZ DEL EJE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "PERALTA CLAUDIA",
          "celular": 3548408466,
          "interno": "-"
      },
      {
          "id": 180,
          "idCid": 338,
          "sucursal": "MINA CLAVERO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Arias Marcelo Fernando",
          "celular": 3549475762,
          "interno": "-"
      },
      {
          "id": 181,
          "idCid": 368,
          "sucursal": "VILLA DE SOTO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 182,
          "idCid": 315,
          "sucursal": "COSQUIN",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Bronstein Miriam",
          "celular": "0351-153714340",
          "interno": "-"
      },
      {
          "id": 183,
          "idCid": 316,
          "sucursal": "ALTA GRACIA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Morer Martin  Ezequiel ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 184,
          "idCid": 336,
          "sucursal": "LA FALDA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Sanchez, Angelina Emilia",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 185,
          "idCid": 342,
          "sucursal": "LA CUMBRE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 186,
          "idCid": 349,
          "sucursal": "VILLA CARLOS PAZ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Lahournere Maximiliano ",
          "celular": "3541-544905 ",
          "interno": "-"
      },
      {
          "id": 187,
          "idCid": 337,
          "sucursal": "ALMAFUERTE ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 188,
          "idCid": 339,
          "sucursal": "SANTA ROSA DE CALAMUCHITA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 189,
          "idCid": 361,
          "sucursal": "DESPEÑADEROS ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 190,
          "idCid": 402,
          "sucursal": "SAN AGUSTIN",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 191,
          "idCid": 419,
          "sucursal": "CORRALITO     ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 192,
          "idCid": 452,
          "sucursal": "VILLA GENERAL BELGRANO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 193,
          "idCid": 423,
          "sucursal": "LOS CONDORES ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 194,
          "idCid": 425,
          "sucursal": "EMBALSE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Alessandroni Analia Mercedes",
          "celular": "03571-15570215 abrev.2617 ",
          "interno": "-"
      },
      {
          "id": 195,
          "idCid": 900,
          "sucursal": "CATEDRAL",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "FERIX TERZAGA SILVINA ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 196,
          "idCid": 101,
          "sucursal": "BUENOS AIRES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Courtade Norberto ",
          "celular": "15-6122-4666 ",
          "interno": "-"
      },
      {
          "id": 197,
          "idCid": 373,
          "sucursal": "ROSARIO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Scoppa Diego ",
          "celular": "0341-153057846",
          "interno": "-"
      },
      {
          "id": 198,
          "idCid": 310,
          "sucursal": "SAN JOSE DE LA DORMIDA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 199,
          "idCid": 314,
          "sucursal": "VILLA DE MARIA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 200,
          "idCid": 318,
          "sucursal": "DEAN FUNES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "RAMALLO MARIA BEATRIZ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 201,
          "idCid": 325,
          "sucursal": "VILLA DEL TOTORAL",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 202,
          "idCid": 328,
          "sucursal": "SAN FRANCISCO DEL CHAÑAR",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 203,
          "idCid": 300,
          "sucursal": "SALSIPUEDES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 204,
          "idCid": 308,
          "sucursal": "JESUS MARIA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Vilata Jose",
          "celular": "03525-15437029",
          "interno": "-"
      },
      {
          "id": 205,
          "idCid": 350,
          "sucursal": "RIO CEBALLOS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Bruccolieri Leandro ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 206,
          "idCid": 356,
          "sucursal": "LA CALERA ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Vega, Julia Mariana",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 207,
          "idCid": 392,
          "sucursal": "VILLA ALLENDE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Aimeri Marisel Fernanda",
          "celular": "03525-15531824",
          "interno": "-"
      },
      {
          "id": 208,
          "idCid": 405,
          "sucursal": "COLONIA CAROYA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Belen Iliana",
          "celular": "03525-15531648",
          "interno": "-"
      },
      {
          "id": 209,
          "idCid": 408,
          "sucursal": "VILLA DEL ROSARIO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Zabala Carina",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 210,
          "idCid": 451,
          "sucursal": "RIO SEGUNDO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Rebuffo Damian",
          "celular": "0351-156871727",
          "interno": "-"
      },
      {
          "id": 211,
          "idCid": 422,
          "sucursal": "PILAR ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Alvarez marcelo Damian",
          "celular": "0353-15496260",
          "interno": "-"
      },
      {
          "id": 212,
          "idCid": 320,
          "sucursal": "SANTA ROSA DE RIO PRIMERO ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "03574-15454828 (GUARDI ATM",
          "interno": "-"
      },
      {
          "id": 213,
          "idCid": 382,
          "sucursal": "RIO PRIMERO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "ARRIGHI, RICARDO FEDERICO",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 214,
          "idCid": 403,
          "sucursal": "SANTIAGO TEMPLE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 215,
          "idCid": 398,
          "sucursal": "LA PARA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 216,
          "idCid": 306,
          "sucursal": "CANALS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "LOPEZ  PABLO GERMAN",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 217,
          "idCid": 323,
          "sucursal": "JOVITA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Actis, Sergio O.",
          "celular": "03385-15404281- Red. 2822",
          "interno": "-"
      },
      {
          "id": 218,
          "idCid": 345,
          "sucursal": "LABOULAYE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "VILLAREAL MIGUEL ANGEL",
          "celular": "3385-438634 particular.-",
          "interno": "-"
      },
      {
          "id": 219,
          "idCid": 346,
          "sucursal": "LA CARLOTA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Cruceño Valeria ",
          "celular": "03468-15644417",
          "interno": "-"
      },
      {
          "id": 220,
          "idCid": 354,
          "sucursal": "ARIAS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Herrero, Javier A.",
          "celular": "03468-15560708- Red. 2604",
          "interno": "-"
      },
      {
          "id": 221,
          "idCid": 367,
          "sucursal": "BUCHARDO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 222,
          "idCid": 375,
          "sucursal": "ALEJO LEDESMA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 223,
          "idCid": 396,
          "sucursal": "VIAMONTE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 224,
          "idCid": 413,
          "sucursal": "SERRANO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 225,
          "idCid": 431,
          "sucursal": "SANTA EUFEMIA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 226,
          "idCid": 432,
          "sucursal": "LA CESIRA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 227,
          "idCid": 433,
          "sucursal": "PUEBLO ITALIANO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 228,
          "idCid": 333,
          "sucursal": "CORRAL DE BUSTOS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "BERTONE, Nicolás Ricardo",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 229,
          "idCid": 334,
          "sucursal": "LABORDE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Francischetti, Juan Jose",
          "celular": "03537-15332647",
          "interno": "-"
      },
      {
          "id": 230,
          "idCid": 358,
          "sucursal": "CAMILO ALDAO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 231,
          "idCid": 359,
          "sucursal": "GUATIMOZIN",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "03468-15520597",
          "interno": "-"
      },
      {
          "id": 232,
          "idCid": 366,
          "sucursal": "MONTE MAIZ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "ROLDAN, Marcela del Lujan",
          "celular": "03468-15560778",
          "interno": "-"
      },
      {
          "id": 233,
          "idCid": 409,
          "sucursal": "GENERAL BADISERA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 234,
          "idCid": 317,
          "sucursal": "ALEJANDRO ROCA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "AMARI, FACUNDO OSCAR",
          "celular": "Part             358-4117871",
          "interno": "-"
      },
      {
          "id": 235,
          "idCid": 393,
          "sucursal": "UCACHA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Ortalda Omar",
          "celular": "Abreviado 2388           0353-154240940",
          "interno": "-"
      },
      {
          "id": 236,
          "idCid": 357,
          "sucursal": "ETRURIA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "CARBONARI, JOSE LUIS",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 237,
          "idCid": 330,
          "sucursal": "HUINCA RENANCO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Rugoso Romina ",
          "celular": "02336-15493036- Red. 2621",
          "interno": "-"
      },
      {
          "id": 238,
          "idCid": 390,
          "sucursal": "DEL CAMPILLO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Urquiza, Walter",
          "celular": "03583-15404676- Red. 1979",
          "interno": "-"
      },
      {
          "id": 239,
          "idCid": 395,
          "sucursal": "VILLA VALERIA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 240,
          "idCid": 430,
          "sucursal": "VILLA HUIDOBRO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 241,
          "idCid": 302,
          "sucursal": "RIO CUARTO CENTRO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Nicola Pablo",
          "celular": "351-3519804",
          "interno": "-"
      },
      {
          "id": 242,
          "idCid": 326,
          "sucursal": "CORONEL MOLDES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Figueroa Pedro Horacio",
          "celular": "2611          3582-412145",
          "interno": "-"
      },
      {
          "id": 243,
          "idCid": 329,
          "sucursal": "GENERAL LEVALLE ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 244,
          "idCid": 351,
          "sucursal": "SAMPACHO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "D' Andrea Adriana",
          "celular": "2647          03582-15412414",
          "interno": "-"
      },
      {
          "id": 245,
          "idCid": 370,
          "sucursal": "SAN BASILIO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 246,
          "idCid": 400,
          "sucursal": "RIO CUARTO SUR",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "COMOGLIO MARIA VANESA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 247,
          "idCid": 406,
          "sucursal": "BULNES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 248,
          "idCid": 427,
          "sucursal": "RIO CUARTO BANDA NORTE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Cabrera Claudia",
          "celular": "Abreviado 2806            0358-155618069",
          "interno": "-"
      },
      {
          "id": 249,
          "idCid": 428,
          "sucursal": "LAS ACEQUIAS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 250,
          "idCid": 440,
          "sucursal": "ADELIA MARIA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 251,
          "idCid": 443,
          "sucursal": "RIO CUARTO ALBERDI",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "ISGRO, MARCELO SALVADOR",
          "celular": "Part. 0358-154859568 ",
          "interno": "-"
      },
      {
          "id": 252,
          "idCid": 424,
          "sucursal": "VICUÑA MACKENNA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Jeggi, Gabriel",
          "celular": "Abreviado 2662          03583-15486683  ",
          "interno": "-"
      },
      {
          "id": 253,
          "idCid": 327,
          "sucursal": "ALCIRA GIGENA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Salutto Alejandra",
          "celular": "0358-154288018 abrev.1164",
          "interno": "-"
      },
      {
          "id": 254,
          "idCid": 343,
          "sucursal": "LAS PERDICES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 255,
          "idCid": 371,
          "sucursal": "BERROTARAN",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Gallardo Ruben",
          "celular": "0358-154128079 abrev.2608",
          "interno": "-"
      },
      {
          "id": 256,
          "idCid": 386,
          "sucursal": "GENERAL DEHEZA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Pedraza Carina",
          "celular": "0358-154127149  abrev.2618",
          "interno": "-"
      },
      {
          "id": 257,
          "idCid": 389,
          "sucursal": "GENERAL CABRERA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Monchiero Hugo",
          "celular": "0358-154127148  abrev.2619",
          "interno": "-"
      },
      {
          "id": 258,
          "idCid": 321,
          "sucursal": "POZO DEL MOLLE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "NIVELLO  MARIA JIMENA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 259,
          "idCid": 341,
          "sucursal": "SACANTA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 260,
          "idCid": 347,
          "sucursal": "ALICIA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Abelleira Alberto",
          "celular": "03533-15409360 (particular) ",
          "interno": "-"
      },
      {
          "id": 261,
          "idCid": 363,
          "sucursal": "SATURNINO MARIA LASPIUR",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "03533-15458592 (Guardia ATM)",
          "interno": "-"
      },
      {
          "id": 262,
          "idCid": 364,
          "sucursal": "LAS VARILLAS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Creado Marcelo",
          "celular": "0351-152474445 (particular",
          "interno": "-"
      },
      {
          "id": 263,
          "idCid": 372,
          "sucursal": "CARRILOBO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "0353-154173654",
          "interno": "-"
      },
      {
          "id": 264,
          "idCid": 416,
          "sucursal": "LUQUE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "MERLO  MARIELA DE LOS ANGELES",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 265,
          "idCid": 450,
          "sucursal": "EL ARAÑADO ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 266,
          "idCid": 420,
          "sucursal": "COLAZO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 267,
          "idCid": 426,
          "sucursal": "LA PLAYOSA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 268,
          "idCid": 303,
          "sucursal": "MORTEROS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 269,
          "idCid": 307,
          "sucursal": "SAN FCO CENTRO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "VENA CARLOS",
          "celular": "03562-15457792 ",
          "interno": "-"
      },
      {
          "id": 270,
          "idCid": 332,
          "sucursal": "BALNEAREA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "LUQUE MARITZA",
          "celular": "03564 15620315",
          "interno": "-"
      },
      {
          "id": 271,
          "idCid": 340,
          "sucursal": "ARROYITO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "COLOMBO MARIO",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 272,
          "idCid": 352,
          "sucursal": "LA FRANCIA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "FISSORE ALBERTO ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 273,
          "idCid": 353,
          "sucursal": "PORTEÑA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Bossio Edgardo",
          "celular": "03564 15648838",
          "interno": "-"
      },
      {
          "id": 274,
          "idCid": 380,
          "sucursal": "FREYRE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "GALLO PAOLA ANDREA",
          "celular": "03564 15419878",
          "interno": "-"
      },
      {
          "id": 275,
          "idCid": 381,
          "sucursal": "DEVOTO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "CAPELLO GABRIEL ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 276,
          "idCid": 411,
          "sucursal": "BRINKMAN",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "BALDO DANIEL",
          "celular": "03563 15404325",
          "interno": "-"
      },
      {
          "id": 277,
          "idCid": 418,
          "sucursal": "ALTOS DE CHIPION",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 278,
          "idCid": 441,
          "sucursal": "SAN FCO OESTE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "BERTEA JORGE ALBERTO",
          "celular": "03564 15418807",
          "interno": "-"
      },
      {
          "id": 279,
          "idCid": 369,
          "sucursal": "COLONIA MARINA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "COLOMBO MARIO",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 280,
          "idCid": 455,
          "sucursal": "SAN FRANCISCO SARMIENTO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 281,
          "idCid": 438,
          "sucursal": "LAS JUNTURAS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 282,
          "idCid": 331,
          "sucursal": "ONCATIVO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Suarez Juan Alberto",
          "celular": "03572-15530298",
          "interno": "-"
      },
      {
          "id": 283,
          "idCid": 377,
          "sucursal": "CINTRA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 284,
          "idCid": 417,
          "sucursal": "NOETINGER",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Riviera, Diego A.",
          "celular": "03472-15467008",
          "interno": "-"
      },
      {
          "id": 285,
          "idCid": 453,
          "sucursal": "LAGUNA LARGA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 286,
          "idCid": 401,
          "sucursal": "SAN MARCOS SUD",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 287,
          "idCid": 309,
          "sucursal": "CRUZ ALTA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Baranda Maria Alejandra ",
          "celular": "03467-15440542 ",
          "interno": "-"
      },
      {
          "id": 288,
          "idCid": 335,
          "sucursal": "LEONES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Cavallero, Carlos",
          "celular": "03472-15524423",
          "interno": "-"
      },
      {
          "id": 289,
          "idCid": 348,
          "sucursal": "JUATINIANO POSEE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Montedoro, Marianela",
          "celular": "03534-15441479",
          "interno": "-"
      },
      {
          "id": 290,
          "idCid": 362,
          "sucursal": "INRIVILLE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "AMURI MARIA SILVIA ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 291,
          "idCid": 388,
          "sucursal": "GENERAL ROCA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 292,
          "idCid": 301,
          "sucursal": "MARCOS JUAREZ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Toledo Jose Ignacio",
          "celular": "03468-15560707",
          "interno": "-"
      },
      {
          "id": 293,
          "idCid": 435,
          "sucursal": "MONTE BUEY",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Strada, Marcela Susana",
          "celular": "03467-15436525",
          "interno": "-"
      },
      {
          "id": 294,
          "idCid": 365,
          "sucursal": "TANCACHA ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Grosso, Maria de los Angeles a cargo en forma provisoria ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 295,
          "idCid": 374,
          "sucursal": "RIO TERCERO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Escarutti Jorge",
          "celular": "03571-15416469  abrev.2645",
          "interno": "-"
      },
      {
          "id": 296,
          "idCid": 378,
          "sucursal": "OLIVA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Yapura Santiago",
          "celular": "0353-15588771 particular",
          "interno": "-"
      },
      {
          "id": 297,
          "idCid": 304,
          "sucursal": "VILLA MARIA ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "BIANCHI, DANIELA SOLEDAD",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 298,
          "idCid": 305,
          "sucursal": "BELL VILLE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "De Celis, Mariana - tutoria ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 299,
          "idCid": 319,
          "sucursal": "HERNANDO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "RUIZ, CAROLINA CELESTE",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 300,
          "idCid": 376,
          "sucursal": "BALLESTEROS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "0353-154179347 particular",
          "interno": "-"
      },
      {
          "id": 301,
          "idCid": 399,
          "sucursal": "JAMES CRAIK",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Palacios María reemplaza SO",
          "celular": "0353-154118049 particular",
          "interno": "-"
      },
      {
          "id": 302,
          "idCid": 415,
          "sucursal": "VILLA NUEVA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "SPONER, MARISA SILVANA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 303,
          "idCid": 429,
          "sucursal": "IDIAZABAL",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 304,
          "idCid": 434,
          "sucursal": "TICINO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 305,
          "idCid": 437,
          "sucursal": "ARROYO CABRAL",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "0353-155694691 particular",
          "interno": "-"
      },
      {
          "id": 306,
          "idCid": 439,
          "sucursal": "VILLA  MARIA TERMINAL",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 307,
          "idCid": 902,
          "sucursal": "POETA LUGONES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "BUSTOS, NATALIA LORENA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 308,
          "idCid": 907,
          "sucursal": "RECTA MARTINOLI",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Ponce Leonardo Gabriel ",
          "celular": "351-153419693",
          "interno": "-"
      },
      {
          "id": 309,
          "idCid": 913,
          "sucursal": "CENTRO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Medina Daniel Gerardo ",
          "celular": "0351-155454256",
          "interno": "-"
      },
      {
          "id": 310,
          "idCid": 914,
          "sucursal": "CERRO DE LAS ROSAS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MONTOYA, MARIA SOLEDAD",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 311,
          "idCid": 915,
          "sucursal": "GENERAL PAZ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MALDONADO GLADYS ALEJANDRA ",
          "celular": "0351-156636944",
          "interno": "-"
      },
      {
          "id": 312,
          "idCid": 918,
          "sucursal": "PLAZA RIVADAVIA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "LEDESMA, MARIA SOLEDAD",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 313,
          "idCid": 919,
          "sucursal": "SAN MARTIN",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "GANDIA, GUSTAVO ALBERTO",
          "celular": "0351-153911049",
          "interno": "-"
      },
      {
          "id": 314,
          "idCid": 922,
          "sucursal": "TRIBUNALES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Venturuzzi Mario",
          "celular": "0351-156975685",
          "interno": "-"
      },
      {
          "id": 315,
          "idCid": 928,
          "sucursal": "JUAN B. JUSTO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MUÑOZ, LUCIANA AMALIA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 316,
          "idCid": 933,
          "sucursal": "LOS GRANADEROS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Debiasi Marina",
          "celular": " 351-5747301",
          "interno": "-"
      },
      {
          "id": 317,
          "idCid": 939,
          "sucursal": "ALEM",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "BIANCHI, MARIANO CRUZ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 318,
          "idCid": 912,
          "sucursal": "ALTO ALBERDI ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Martinez Victor Hugo ",
          "celular": 155910744,
          "interno": "-"
      },
      {
          "id": 319,
          "idCid": 917,
          "sucursal": "NUEVA CORDOBA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Eusebi Claudio",
          "celular": 3516203213,
          "interno": "-"
      },
      {
          "id": 320,
          "idCid": 921,
          "sucursal": "SAN VICENTE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "BREPPE MARCELO GUSTAVO ",
          "celular": "3516670197 ",
          "interno": "-"
      },
      {
          "id": 321,
          "idCid": 923,
          "sucursal": "FUERZA AEREA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Gutierrez Juan",
          "celular": 156171645,
          "interno": "-"
      },
      {
          "id": 322,
          "idCid": 924,
          "sucursal": "BAJADA PUCARA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Medina Sebastian ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 323,
          "idCid": 925,
          "sucursal": "MERCADO NORTE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Farias Oscar ",
          "celular": 152189840,
          "interno": "-"
      },
      {
          "id": 324,
          "idCid": 931,
          "sucursal": "CIUDADELA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Russo Juan Manuel",
          "celular": 154087399,
          "interno": "-"
      },
      {
          "id": 325,
          "idCid": 940,
          "sucursal": "PASEO DEL JOCKEY",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "VICENTE ALICIA VIVIANA",
          "celular": " 0351-6670197",
          "interno": "-"
      },
      {
          "id": 326,
          "idCid": 942,
          "sucursal": "RAFAEL NUÑEZ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "PICCO, DIEGO ANDRES",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 327,
          "idCid": 943,
          "sucursal": "FERREYRA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "GIANNI FRANCO GABRIEL",
          "celular": 3512418241,
          "interno": "-"
      },
      {
          "id": 328,
          "idCid": 944,
          "sucursal": "LA CAÑADA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "LOPEZ MARCELO ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 329,
          "idCid": 454,
          "sucursal": "MALAGUEÑO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "ARMESTO ELSA",
          "celular": 3516617412,
          "interno": "-"
      },
      {
          "id": 330,
          "idCid": 311,
          "sucursal": "SALSACATE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Britos Sergio Ricardo",
          "celular": 3549456034,
          "interno": "-"
      },
      {
          "id": 331,
          "idCid": 322,
          "sucursal": "VILLA DOLORES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Lacamoire Marcelo",
          "celular": 3515074623,
          "interno": "-"
      },
      {
          "id": 332,
          "idCid": 324,
          "sucursal": "CRUZ DEL EJE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MORA, ARNOL IGNACIO",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 333,
          "idCid": 338,
          "sucursal": "MINA CLAVERO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Villagra Marcelo",
          "celular": 3548572003,
          "interno": "-"
      },
      {
          "id": 334,
          "idCid": 368,
          "sucursal": "VILLA DE SOTO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Britos Ricardo",
          "celular": 3549461643,
          "interno": "-"
      },
      {
          "id": 335,
          "idCid": 315,
          "sucursal": "COSQUIN",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Nieto Guevara, Natalia Cristina",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 336,
          "idCid": 316,
          "sucursal": "ALTA GRACIA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Chacon Luis Edgardo",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 337,
          "idCid": 336,
          "sucursal": "LA FALDA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Loyola Roxana",
          "celular": "0351-153007340",
          "interno": "-"
      },
      {
          "id": 338,
          "idCid": 342,
          "sucursal": "LA CUMBRE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Mesaroli Rodolfo ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 339,
          "idCid": 349,
          "sucursal": "VILLA CARLOS PAZ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Gomez Vanesa",
          "celular": 3517430918,
          "interno": "-"
      },
      {
          "id": 340,
          "idCid": 337,
          "sucursal": "ALMAFUERTE ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Menichetti, Maria Eugenia",
          "celular": "Part3571608691",
          "interno": "-"
      },
      {
          "id": 341,
          "idCid": 339,
          "sucursal": "SANTA ROSA DE CALAMUCHITA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Martinez Luis Maria",
          "celular": "Part 3546476805",
          "interno": "-"
      },
      {
          "id": 342,
          "idCid": 361,
          "sucursal": "DESPEÑADEROS ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Zanon Cesar",
          "celular": "Part3512057500",
          "interno": "-"
      },
      {
          "id": 343,
          "idCid": 402,
          "sucursal": "SAN AGUSTIN",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Lasala, Laura ",
          "celular": "Part 3547506638",
          "interno": "-"
      },
      {
          "id": 344,
          "idCid": 419,
          "sucursal": "CORRALITO     ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Lopez, Angela Viviana ",
          "celular": "Part 3571317355",
          "interno": "-"
      },
      {
          "id": 345,
          "idCid": 452,
          "sucursal": "VILLA GENERAL BELGRANO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "ADAN, NICOLAS GUSTAVO",
          "celular": "Part 3546406463",
          "interno": "-"
      },
      {
          "id": 346,
          "idCid": 423,
          "sucursal": "LOS CONDORES ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Joaquin Fernando",
          "celular": "Part 3571324337",
          "interno": "-"
      },
      {
          "id": 347,
          "idCid": 425,
          "sucursal": "EMBALSE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Diaz Jose Oscar",
          "celular": "Part  3546488488",
          "interno": "-"
      },
      {
          "id": 348,
          "idCid": 900,
          "sucursal": "CATEDRAL",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Rodriguez Gustavo",
          "celular": 156543830,
          "interno": "-"
      },
      {
          "id": 349,
          "idCid": 101,
          "sucursal": "BUENOS AIRES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Calligo Roberto",
          "celular": "15-5629-5489",
          "interno": "-"
      },
      {
          "id": 350,
          "idCid": 373,
          "sucursal": "ROSARIO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Berto Monica",
          "celular": "0341-153583999",
          "interno": "-"
      },
      {
          "id": 351,
          "idCid": 310,
          "sucursal": "SAN JOSE DE LA DORMIDA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Romero Eliana ",
          "celular": 3521440556,
          "interno": "-"
      },
      {
          "id": 352,
          "idCid": 314,
          "sucursal": "VILLA DE MARIA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Somoza Lucas",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 353,
          "idCid": 318,
          "sucursal": "DEAN FUNES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Ataide Maria Ines",
          "celular": 3521639717,
          "interno": "-"
      },
      {
          "id": 354,
          "idCid": 325,
          "sucursal": "VILLA DEL TOTORAL",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "INFANTE MORENO, HUGO ALEJANDRO",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 355,
          "idCid": 328,
          "sucursal": "SAN FRANCISCO DEL CHAÑAR",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Farias Claudio German ",
          "celular": 3513229081,
          "interno": "-"
      },
      {
          "id": 356,
          "idCid": 300,
          "sucursal": "SALSIPUEDES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Lara, Pablo Sebastian",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 357,
          "idCid": 308,
          "sucursal": "JESUS MARIA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Sella Walter Jorge ",
          "celular": "03525-05610264",
          "interno": "-"
      },
      {
          "id": 358,
          "idCid": 350,
          "sucursal": "RIO CEBALLOS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Adanto Edgardo",
          "celular": "0351-155198349",
          "interno": "-"
      },
      {
          "id": 359,
          "idCid": 356,
          "sucursal": "LA CALERA ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "RECABARREN SEBASTIAN",
          "celular": "035112102755",
          "interno": "-"
      },
      {
          "id": 360,
          "idCid": 392,
          "sucursal": "VILLA ALLENDE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Soria, Gustavo Jose Roberto",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 361,
          "idCid": 405,
          "sucursal": "COLONIA CAROYA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Cieri Jorge Luis",
          "celular": "03525-15507734",
          "interno": "-"
      },
      {
          "id": 362,
          "idCid": 408,
          "sucursal": "VILLA DEL ROSARIO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Dmytriw Carolina",
          "celular": "0351-153396750 (particular)",
          "interno": "-"
      },
      {
          "id": 363,
          "idCid": 451,
          "sucursal": "RIO SEGUNDO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Gullino, Gaston Gabriel",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 364,
          "idCid": 422,
          "sucursal": "PILAR ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Menta Daniel ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 365,
          "idCid": 320,
          "sucursal": "SANTA ROSA DE RIO PRIMERO ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Daniele Lucas",
          "celular": "0351-156331283 (particular)",
          "interno": "-"
      },
      {
          "id": 366,
          "idCid": 382,
          "sucursal": "RIO PRIMERO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Maraschin Enzo",
          "celular": "03574-15403344 (particular)",
          "interno": "-"
      },
      {
          "id": 367,
          "idCid": 403,
          "sucursal": "SANTIAGO TEMPLE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "ZAMORA MARISA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 368,
          "idCid": 398,
          "sucursal": "LA PARA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "FRANZINI, LILIANA RAMONA DEL V.",
          "celular": " No Posee",
          "interno": "-"
      },
      {
          "id": 369,
          "idCid": 306,
          "sucursal": "CANALS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Gonnet Aldo",
          "celular": "03463-15454246",
          "interno": "-"
      },
      {
          "id": 370,
          "idCid": 323,
          "sucursal": "JOVITA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Bulhmann, Maria S.",
          "celular": "03385-15403705",
          "interno": "-"
      },
      {
          "id": 371,
          "idCid": 345,
          "sucursal": "LABOULAYE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Bonetto, Gustavo J.",
          "celular": "03385-15683711",
          "interno": "-"
      },
      {
          "id": 372,
          "idCid": 346,
          "sucursal": "LA CARLOTA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Real, Leandro",
          "celular": "03584-154401278",
          "interno": "-"
      },
      {
          "id": 373,
          "idCid": 354,
          "sucursal": "ARIAS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "CANDELLERO MARTA ",
          "celular": "03468-15542198",
          "interno": "-"
      },
      {
          "id": 374,
          "idCid": 367,
          "sucursal": "BUCHARDO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Cabrera, Maria S.",
          "celular": "03385-15595438",
          "interno": "-"
      },
      {
          "id": 375,
          "idCid": 375,
          "sucursal": "ALEJO LEDESMA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Dichiara, Sergio",
          "celular": "03468-15416714",
          "interno": "-"
      },
      {
          "id": 376,
          "idCid": 396,
          "sucursal": "VIAMONTE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Amorin, Sebastian A",
          "celular": "03463-15586431",
          "interno": "-"
      },
      {
          "id": 377,
          "idCid": 413,
          "sucursal": "SERRANO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Oviedo Ivana Paola ",
          "celular": "03385-15440278",
          "interno": "-"
      },
      {
          "id": 378,
          "idCid": 431,
          "sucursal": "SANTA EUFEMIA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MEICHTRI, HERMAN ANTONIO",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 379,
          "idCid": 432,
          "sucursal": "LA CESIRA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Ferrarazzo, Juan F.",
          "celular": "03382-15670375",
          "interno": "-"
      },
      {
          "id": 380,
          "idCid": 433,
          "sucursal": "PUEBLO ITALIANO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Paccoret, Marisa N.",
          "celular": "0351-155952040",
          "interno": "-"
      },
      {
          "id": 381,
          "idCid": 333,
          "sucursal": "CORRAL DE BUSTOS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Vigna Maria Fernanda",
          "celular": "03468-15407684",
          "interno": "-"
      },
      {
          "id": 382,
          "idCid": 334,
          "sucursal": "LABORDE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Beribey Leandro",
          "celular": "03537-15685531",
          "interno": "-"
      },
      {
          "id": 383,
          "idCid": 358,
          "sucursal": "CAMILO ALDAO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Martorana Raul Eduardo ",
          "celular": "03468-15516227",
          "interno": "-"
      },
      {
          "id": 384,
          "idCid": 359,
          "sucursal": "GUATIMOZIN",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Zamprogno Solange Maribel",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 385,
          "idCid": 366,
          "sucursal": "MONTE MAIZ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Rodriguez Gabriel ",
          "celular": "03468-15413333",
          "interno": "-"
      },
      {
          "id": 386,
          "idCid": 409,
          "sucursal": "GENERAL BADISERA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Vidaurrazaga Fernanda",
          "celular": "03467-15437775 ",
          "interno": "-"
      },
      {
          "id": 387,
          "idCid": 317,
          "sucursal": "ALEJANDRO ROCA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Gonzalez Ariel ",
          "celular": "Part           3584-494499",
          "interno": "-"
      },
      {
          "id": 388,
          "idCid": 393,
          "sucursal": "UCACHA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Schmidt Dante",
          "celular": "Part               0353-154245339",
          "interno": "-"
      },
      {
          "id": 389,
          "idCid": 357,
          "sucursal": "ETRURIA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "BOZZER, WALTER RENE",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 390,
          "idCid": 330,
          "sucursal": "HUINCA RENANCO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Lino Carlos Daniel",
          "celular": "02336-15492426",
          "interno": "-"
      },
      {
          "id": 391,
          "idCid": 390,
          "sucursal": "DEL CAMPILLO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Bongiovanni, Maria E.",
          "celular": "03583-15405689",
          "interno": "-"
      },
      {
          "id": 392,
          "idCid": 395,
          "sucursal": "VILLA VALERIA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Perez, Demetrio",
          "celular": "03583-15416883",
          "interno": "-"
      },
      {
          "id": 393,
          "idCid": 430,
          "sucursal": "VILLA HUIDOBRO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "NICOLA, MARISELA",
          "celular": "02302-15484959",
          "interno": "-"
      },
      {
          "id": 394,
          "idCid": 302,
          "sucursal": "RIO CUARTO CENTRO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Cuello Gustavo",
          "celular": "358 5137069",
          "interno": "-"
      },
      {
          "id": 395,
          "idCid": 326,
          "sucursal": "CORONEL MOLDES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Cabrera Sergio",
          "celular": "Part                 0582-15416128",
          "interno": "-"
      },
      {
          "id": 396,
          "idCid": 329,
          "sucursal": "GENERAL LEVALLE ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Bonazza, Ariel E.",
          "celular": "Part - 03385-15685346",
          "interno": "-"
      },
      {
          "id": 397,
          "idCid": 351,
          "sucursal": "SAMPACHO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Bressan Javier Nestor ",
          "celular": " 0358215593794",
          "interno": "-"
      },
      {
          "id": 398,
          "idCid": 370,
          "sucursal": "SAN BASILIO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Guida Daniel",
          "celular": "Part                   03585-15599956",
          "interno": "-"
      },
      {
          "id": 399,
          "idCid": 400,
          "sucursal": "RIO CUARTO SUR",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Bressan Hernan Luis ",
          "celular": "0358-154284225",
          "interno": "-"
      },
      {
          "id": 400,
          "idCid": 406,
          "sucursal": "BULNES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Grandi Gustavo",
          "celular": "Part            0358-155093088",
          "interno": "-"
      },
      {
          "id": 401,
          "idCid": 427,
          "sucursal": "RIO CUARTO BANDA NORTE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": " Tissera Valeria tutoria",
          "celular": "Part                   0358-155073643",
          "interno": "-"
      },
      {
          "id": 402,
          "idCid": 428,
          "sucursal": "LAS ACEQUIAS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Ferreyra, Eriko Mauro",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 403,
          "idCid": 440,
          "sucursal": "ADELIA MARIA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Ganzer Valeria",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 404,
          "idCid": 443,
          "sucursal": "RIO CUARTO ALBERDI",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Falcone Leonardo",
          "celular": "Part              0358-154017197",
          "interno": "-"
      },
      {
          "id": 405,
          "idCid": 424,
          "sucursal": "VICUÑA MACKENNA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Albarracin, Adrian M.",
          "celular": "Part                                       03583-15401124",
          "interno": "-"
      },
      {
          "id": 406,
          "idCid": 327,
          "sucursal": "ALCIRA GIGENA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Vallejo Carlos",
          "celular": "0358-154022480",
          "interno": "-"
      },
      {
          "id": 407,
          "idCid": 343,
          "sucursal": "LAS PERDICES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Bartollini Gerardo",
          "celular": "0353-154084524",
          "interno": "-"
      },
      {
          "id": 408,
          "idCid": 371,
          "sucursal": "BERROTARAN",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Bigo Juan Manuel",
          "celular": "Part 3584128079",
          "interno": "-"
      },
      {
          "id": 409,
          "idCid": 386,
          "sucursal": "GENERAL DEHEZA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Mellano Adrian",
          "celular": "Part 3584113284",
          "interno": "-"
      },
      {
          "id": 410,
          "idCid": 389,
          "sucursal": "GENERAL CABRERA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Caamaño Ernesto",
          "celular": "0353-154187811",
          "interno": "-"
      },
      {
          "id": 411,
          "idCid": 321,
          "sucursal": "POZO DEL MOLLE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "ARGUELLO  DARIO FERNANDO",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 412,
          "idCid": 341,
          "sucursal": "SACANTA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Nicora Noelia",
          "celular": "03533-15408558",
          "interno": "-"
      },
      {
          "id": 413,
          "idCid": 347,
          "sucursal": "ALICIA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "COMBA GONZALO MARTIN",
          "celular": "03533-15441081",
          "interno": "-"
      },
      {
          "id": 414,
          "idCid": 363,
          "sucursal": "SATURNINO MARIA LASPIUR",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "QUIROGA  ELSA GABRIELA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 415,
          "idCid": 364,
          "sucursal": "LAS VARILLAS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Ricci Rodolfo",
          "celular": "03533-15681157(particular)",
          "interno": "-"
      },
      {
          "id": 416,
          "idCid": 372,
          "sucursal": "CARRILOBO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Denis Claudio",
          "celular": 3534019200,
          "interno": "-"
      },
      {
          "id": 417,
          "idCid": 416,
          "sucursal": "LUQUE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Gallo Fabian",
          "celular": "03573-15496994 (particular)",
          "interno": "-"
      },
      {
          "id": 418,
          "idCid": 450,
          "sucursal": "EL ARAÑADO ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MEIRONE  MARIELA TERESA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 419,
          "idCid": 420,
          "sucursal": "COLAZO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Baralle Hugo",
          "celular": "03532- 15409790",
          "interno": "-"
      },
      {
          "id": 420,
          "idCid": 426,
          "sucursal": "LA PLAYOSA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Fernandez Cesar",
          "celular": "0353-154084256 (particular)",
          "interno": "-"
      },
      {
          "id": 421,
          "idCid": 303,
          "sucursal": "MORTEROS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Florez Veronica",
          "celular": "03562 15671092",
          "interno": "-"
      },
      {
          "id": 422,
          "idCid": 307,
          "sucursal": "SAN FCO CENTRO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "PERALTA MARIA ANGELA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 423,
          "idCid": 332,
          "sucursal": "BALNEAREA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "PICCO, ALEJANDRA EMA",
          "celular": "03563 15494242",
          "interno": "-"
      },
      {
          "id": 424,
          "idCid": 340,
          "sucursal": "ARROYITO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Bazan Carlos Gabriel",
          "celular": "03576-15465483",
          "interno": "-"
      },
      {
          "id": 425,
          "idCid": 352,
          "sucursal": "LA FRANCIA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Gandolfo Maria",
          "celular": "03576-15475365",
          "interno": "-"
      },
      {
          "id": 426,
          "idCid": 353,
          "sucursal": "PORTEÑA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Boretti Gustavo",
          "celular": "03564 15574683",
          "interno": "-"
      },
      {
          "id": 427,
          "idCid": 380,
          "sucursal": "FREYRE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Rinaldi Ricardo",
          "celular": "No posee",
          "interno": "-"
      },
      {
          "id": 428,
          "idCid": 381,
          "sucursal": "DEVOTO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MAGARIO MACIEL (REEMPLAZO)",
          "celular": "No posee",
          "interno": "-"
      },
      {
          "id": 429,
          "idCid": 411,
          "sucursal": "BRINKMAN",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "CORTEZ JUNCOS, RAUL JESUS",
          "celular": "03562-15453870",
          "interno": "-"
      },
      {
          "id": 430,
          "idCid": 418,
          "sucursal": "ALTOS DE CHIPION",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "PAUTASSO, LUCIANO PABLO",
          "celular": "03562-15506337",
          "interno": "-"
      },
      {
          "id": 431,
          "idCid": 441,
          "sucursal": "SAN FCO OESTE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "PIERGENTILE EDUARDO (REEMPLAZO)",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 432,
          "idCid": 369,
          "sucursal": "COLONIA MARINA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Luque Julio",
          "celular": "No posee",
          "interno": "-"
      },
      {
          "id": 433,
          "idCid": 455,
          "sucursal": "SAN FRANCISCO SARMIENTO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "SARMIENTO MANUEL",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 434,
          "idCid": 438,
          "sucursal": "LAS JUNTURAS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "CUASSOLO GUILLERMO",
          "celular": 3532409593,
          "interno": "-"
      },
      {
          "id": 435,
          "idCid": 331,
          "sucursal": "ONCATIVO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Boglione Roberto",
          "celular": "03572-  15580227 (particular)",
          "interno": "-"
      },
      {
          "id": 436,
          "idCid": 377,
          "sucursal": "CINTRA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Ferrero, Adrian ",
          "celular": "03472-15433719",
          "interno": "-"
      },
      {
          "id": 437,
          "idCid": 417,
          "sucursal": "NOETINGER",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Mangold Alexis ",
          "celular": "03472-15447681 (particular)",
          "interno": "-"
      },
      {
          "id": 438,
          "idCid": 453,
          "sucursal": "LAGUNA LARGA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MONCADA MARCOS ",
          "celular": 3572533298,
          "interno": "-"
      },
      {
          "id": 439,
          "idCid": 401,
          "sucursal": "SAN MARCOS SUD",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Nobrega, Marcelo S",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 440,
          "idCid": 309,
          "sucursal": "CRUZ ALTA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Bertoli, Erika A.",
          "celular": "03467-15494922",
          "interno": "-"
      },
      {
          "id": 441,
          "idCid": 335,
          "sucursal": "LEONES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Bianchi Guillermo Omar",
          "celular": "03472-15436793",
          "interno": "-"
      },
      {
          "id": 442,
          "idCid": 348,
          "sucursal": "JUATINIANO POSEE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Hidalgo Pablo Luis",
          "celular": "03534-15650747",
          "interno": "-"
      },
      {
          "id": 443,
          "idCid": 362,
          "sucursal": "INRIVILLE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "FONTANA, JESSICA NATALÍ",
          "celular": "03467-15438675",
          "interno": "-"
      },
      {
          "id": 444,
          "idCid": 388,
          "sucursal": "GENERAL ROCA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Bonifacio Gustavo",
          "celular": "03472-15509395",
          "interno": "-"
      },
      {
          "id": 445,
          "idCid": 301,
          "sucursal": "MARCOS JUAREZ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Jordan Raul. ",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 446,
          "idCid": 435,
          "sucursal": "MONTE BUEY",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Tello, Valeria N.",
          "celular": "03467-15633115",
          "interno": "-"
      },
      {
          "id": 447,
          "idCid": 365,
          "sucursal": "TANCACHA ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Garaveli, Segundo Antonio ",
          "celular": "Part 3571547092",
          "interno": "-"
      },
      {
          "id": 448,
          "idCid": 374,
          "sucursal": "RIO TERCERO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "FERNANDEZ GUSTAVO EDUARDO",
          "celular": "Part 3571321505",
          "interno": "-"
      },
      {
          "id": 449,
          "idCid": 378,
          "sucursal": "OLIVA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "VELEZ, HUGO ALEJANDRO",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 450,
          "idCid": 304,
          "sucursal": "VILLA MARIA ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "COLINA, GUSTAVO ALBERTO",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 451,
          "idCid": 305,
          "sucursal": "BELL VILLE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "PAULUCCI PATRICIA MERCEDES",
          "celular": 3537554805,
          "interno": "-"
      },
      {
          "id": 452,
          "idCid": 319,
          "sucursal": "HERNANDO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Carlomagno Mauricio ",
          "celular": "0353-154256813",
          "interno": "-"
      },
      {
          "id": 453,
          "idCid": 376,
          "sucursal": "BALLESTEROS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Acotto Carlos",
          "celular": "0353-154173545",
          "interno": "-"
      },
      {
          "id": 454,
          "idCid": 399,
          "sucursal": "JAMES CRAIK",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Vanzetti Claudio Rubén",
          "celular": "0353-154170083 particular",
          "interno": "-"
      },
      {
          "id": 455,
          "idCid": 415,
          "sucursal": "VILLA NUEVA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Strubbia Jorge Rubén",
          "celular": "0353-154263492 particular",
          "interno": "-"
      },
      {
          "id": 456,
          "idCid": 429,
          "sucursal": "IDIAZABAL",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Giovanardi Pablo",
          "celular": "3534224820 particular",
          "interno": "-"
      },
      {
          "id": 457,
          "idCid": 434,
          "sucursal": "TICINO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Gauna Hugo Manuel",
          "celular": "0353- 155650837 (particular)",
          "interno": "-"
      },
      {
          "id": 458,
          "idCid": 437,
          "sucursal": "ARROYO CABRAL",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "ALBERTI, LAURA MERCEDES",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 459,
          "idCid": 439,
          "sucursal": "VILLA  MARIA TERMINAL",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "BOIERO ANA SILVIA",
          "celular": "0353-154122391",
          "interno": "-"
      },
      {
          "id": 460,
          "idCid": "913 - E104",
          "sucursal": "CEA CINERAMA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 461,
          "idCid": "918 - E125",
          "sucursal": "CPJ GRAL BUSTOS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 462,
          "idCid": "912 - E032",
          "sucursal": "CPJ SANTA ANA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 463,
          "idCid": "917 - E013",
          "sucursal": "CPCE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 464,
          "idCid": "923 - E134",
          "sucursal": "DINOSAURIO II",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 465,
          "idCid": "925 - E006",
          "sucursal": "DGR CORDOBA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 466,
          "idCid": "925 - E027",
          "sucursal": "MONTECRISTO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 467,
          "idCid": "931 - E144",
          "sucursal": "CAB O`HIGGINS MALL",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Coletto Mario",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 468,
          "idCid": "931 - E101",
          "sucursal": "CPC Villa el Libertador",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 469,
          "idCid": "931 - E145",
          "sucursal": "CAB Villa El Libertador",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 470,
          "idCid": "311 - E097",
          "sucursal": "SAN CARLOS MINAS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "KARINA ROLDAN",
          "celular": "0351 5074409",
          "interno": "-"
      },
      {
          "id": 471,
          "idCid": "322 - E123",
          "sucursal": "LA PAZ",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "CALDERON WALTER",
          "celular": "3544-552551",
          "interno": "-"
      },
      {
          "id": 472,
          "idCid": "322 - E147",
          "sucursal": "DEPENDENCIA AUTOMATIZADA VILLA DOLORES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "CALDERON WALTER",
          "celular": "3544-552551",
          "interno": "-"
      },
      {
          "id": 473,
          "idCid": "324 - E148",
          "sucursal": "DEPENDENCIA AUTOMATIZADA CRUZ DEL EJE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "PERALTA CLAUDIA",
          "celular": "3548-408466",
          "interno": "-"
      },
      {
          "id": 474,
          "idCid": "315 - E084",
          "sucursal": "SANTA MARIA PUNILLA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Bronstein Miriam",
          "celular": "351-3714340",
          "interno": "-"
      },
      {
          "id": 475,
          "idCid": "336 - E036",
          "sucursal": "VILLA GIARDINO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Sanchez Angelina",
          "celular": "3548-578609",
          "interno": "-"
      },
      {
          "id": 476,
          "idCid": "342 - E005",
          "sucursal": "CAPILLA DEL MONTE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Sup Suc. ASTUDILLO GUSTAVO",
          "celular": "3548-572010",
          "interno": "-"
      },
      {
          "id": 477,
          "idCid": "349 - E022",
          "sucursal": "CARCANO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Lahournere Maximiliano ",
          "celular": "3541 544905",
          "interno": "-"
      },
      {
          "id": 478,
          "idCid": "349 - E025",
          "sucursal": "TANTI",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Lahournere Maximiliano ",
          "celular": "3541 544905",
          "interno": "-"
      },
      {
          "id": 479,
          "idCid": "425 - E026",
          "sucursal": "VILLA DEL DIQUE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Rechimon Hugo",
          "celular": 3571555331,
          "interno": "-"
      },
      {
          "id": 480,
          "idCid": "900 - E048",
          "sucursal": "COLEGIO DE ESCRIBANOS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 481,
          "idCid": "314 - E090",
          "sucursal": "SEBASTIAN EL CANO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "MANSILLA JULIO CESAR",
          "celular": "3522-451584",
          "interno": "-"
      },
      {
          "id": 482,
          "idCid": "318 - E122",
          "sucursal": "TULUMBA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": " Martos Mario Germán",
          "celular": "03521-15472235",
          "interno": "-"
      },
      {
          "id": 483,
          "idCid": "451 - E029",
          "sucursal": "LOZADA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "CERRADA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 484,
          "idCid": "350 - E020",
          "sucursal": "UNQUILLO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "JUAREZ RODOLFO",
          "celular": 3543513503,
          "interno": "-"
      },
      {
          "id": 485,
          "idCid": "405 - E075",
          "sucursal": "COLONIA TIROLESA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "TOGNOCCHI EDUARDO",
          "celular": "3525-610436",
          "interno": "-"
      },
      {
          "id": 486,
          "idCid": "382 - E052",
          "sucursal": "PIQUILLIN",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "RICARDO ARRIGHI",
          "celular": 3515318437,
          "interno": "-"
      },
      {
          "id": 487,
          "idCid": "398 - E057",
          "sucursal": "LA PUERTA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "FAULE ALDO CELSO",
          "celular": "3575-403593",
          "interno": "-"
      },
      {
          "id": 488,
          "idCid": "398 - E110",
          "sucursal": "OBISPO TREJO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "FAULE ALDO CELSO",
          "celular": "3575-403593",
          "interno": "-"
      },
      {
          "id": 489,
          "idCid": "345 - E083",
          "sucursal": "MELO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "VILLARREAL MIGUEL",
          "celular": "3385-15438634",
          "interno": "-"
      },
      {
          "id": 490,
          "idCid": "346 - E074",
          "sucursal": "HUANCHILLA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "CRUCEÑO VALERIA",
          "celular": "3468 644417",
          "interno": "-"
      },
      {
          "id": 491,
          "idCid": "366 - E070",
          "sucursal": "ISLA VERDE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Roldan, Marcela",
          "celular": "3468-562887",
          "interno": "-"
      },
      {
          "id": 492,
          "idCid": "393 - E100",
          "sucursal": "BENGOLEA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Formiga, Patricia Marcela",
          "celular": "353-154295972",
          "interno": "-"
      },
      {
          "id": 493,
          "idCid": "317 - E061",
          "sucursal": "REDUCCION",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "AMARI FACUNDO",
          "celular": "03584-15376039",
          "interno": "-"
      },
      {
          "id": 494,
          "idCid": "357 - E044",
          "sucursal": "LA LAGUNA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "CRAVERO, URIEL ",
          "celular": 3535086831,
          "interno": "-"
      },
      {
          "id": 495,
          "idCid": "357 - E098",
          "sucursal": "CHAZON",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "CRAVERO, URIEL ",
          "celular": 3535086831,
          "interno": "-"
      },
      {
          "id": 496,
          "idCid": "357 - E091",
          "sucursal": "PASCO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "CRAVERO, URIEL ",
          "celular": 353086831,
          "interno": "-"
      },
      {
          "id": 497,
          "idCid": "351 - E093",
          "sucursal": "LAS VERTIENTES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Olguin Gladis/Beauge Emilio",
          "celular": "03582-15452807/03582-15416003",
          "interno": "-"
      },
      {
          "id": 498,
          "idCid": "440 - E043",
          "sucursal": "MONTE DE LOS GAUCHOS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Sanchi Rosalia Veronica",
          "celular": "0358-155437657",
          "interno": "-"
      },
      {
          "id": 499,
          "idCid": "302 - E088",
          "sucursal": "ACHIRAS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Bossio Jorge",
          "celular": "0358-154110188",
          "interno": "-"
      },
      {
          "id": 500,
          "idCid": "302 - E127",
          "sucursal": "CPJ RIO CUARTO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "D·onofrio Sonia",
          "celular": "0358-155073330",
          "interno": "-"
      },
      {
          "id": 501,
          "idCid": "302 - E082",
          "sucursal": "LAS HIGUERAS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Bossio Jorge",
          "celular": "0358-154110188",
          "interno": "-"
      },
      {
          "id": 502,
          "idCid": "302 - E085",
          "sucursal": "TRIBUNALES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "ACTIVA - SIN ATENCION",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 503,
          "idCid": "400 - E009",
          "sucursal": "SANTA CAT. HOLMBERG",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Casanova Analia/Martinez Hernan/Sosa Ana/Finola Fernando",
          "celular": "0358-154334499/0358-156543827/0358-155084641/0358-15489003",
          "interno": "-"
      },
      {
          "id": 504,
          "idCid": "427 - E068",
          "sucursal": "CHARRAS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Bassino Rossana",
          "celular": "0358-154019640",
          "interno": "-"
      },
      {
          "id": 505,
          "idCid": "416 - E058",
          "sucursal": "CALCHIN OESTE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "BUSTOS MANUEL",
          "celular": "3573-432518",
          "interno": "-"
      },
      {
          "id": 506,
          "idCid": "426 - E035",
          "sucursal": "LOS ZORROS",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "CERRADA",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 507,
          "idCid": "332 - E023",
          "sucursal": "MIRAMAR",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "LUQUE MARITZA",
          "celular": "3576-651090",
          "interno": "-"
      },
      {
          "id": 508,
          "idCid": "340 - E010",
          "sucursal": "LA TORDILLA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "MORA MARIANA YANINA",
          "celular": "3564-644776",
          "interno": "-"
      },
      {
          "id": 509,
          "idCid": "352 - E016",
          "sucursal": "COLONIA SAN BARTOLOME",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "FISSORE ALBERTO B.",
          "celular": 3564620315,
          "interno": "-"
      },
      {
          "id": 510,
          "idCid": "352 - E018",
          "sucursal": "VILLA CONC. DEL TIO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "FISSORE ALBERTO B.",
          "celular": "3564-620315",
          "interno": "-"
      },
      {
          "id": 511,
          "idCid": "438 - E069",
          "sucursal": "MATORRALES",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "RICHIERO GUSTAVO",
          "celular": "3532-467979",
          "interno": "-"
      },
      {
          "id": 512,
          "idCid": "417 - E067",
          "sucursal": "SAIRA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Riviera Diego Anibal",
          "celular": 3472467008,
          "interno": "-"
      },
      {
          "id": 513,
          "idCid": "374 - E106",
          "sucursal": "VILLA ASCASUBI",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Escarutti Jorge",
          "celular": "3547-663895",
          "interno": "-"
      },
      {
          "id": 514,
          "idCid": "374 - E142",
          "sucursal": "CAB Rio III",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Escarutti Jorge",
          "celular": "3547-663895",
          "interno": "-"
      },
      {
          "id": 515,
          "idCid": "304 - E024",
          "sucursal": "ALTO ALEGRE",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "DANIELA BIANCHI CLAUDIO SANCHEZ",
          "celular": "3534143810…….3534292560",
          "interno": "-"
      },
      {
          "id": 516,
          "idCid": "304 - E140",
          "sucursal": "CAB VILLA MARIA",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "DANIELA BIANCHI NESTOR ERMACORA",
          "celular": "3534143810…...3534172586",
          "interno": "-"
      },
      {
          "id": 517,
          "idCid": "304 - E017",
          "sucursal": "TIO PUJIO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "DANIELA BIANCHI CLAUDIO SANCHEZ",
          "celular": "3534143810…….3534292560",
          "interno": "-"
      },
      {
          "id": 518,
          "idCid": "305 - E046",
          "sucursal": "MORRISON",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "De Celis Maria Valeria",
          "celular": "3537-680823",
          "interno": "-"
      },
      {
          "id": 519,
          "idCid": "378 - E086",
          "sucursal": "PAMPAYASTA SUR",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "Yapura Santiago",
          "celular": "0351-152474445",
          "interno": "-"
      },
      {
          "id": 520,
          "idCid": "439 - E089",
          "sucursal": "SILVIO PELLICO",
          "funcion": "supervisor operativo",
          "apellido": "-",
          "nombre": "SE DESCONTINUO LA ATENCION.",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 521,
          "idCid": "913 - E104",
          "sucursal": "CEA CINERAMA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Narbais Juan Pablo",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 522,
          "idCid": "918 - E125",
          "sucursal": "CPJ GRAL BUSTOS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 523,
          "idCid": "912 - E032",
          "sucursal": "CPJ SANTA ANA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Nottaris Nestor Alberto",
          "celular": 152089486,
          "interno": "-"
      },
      {
          "id": 524,
          "idCid": "917 - E013",
          "sucursal": "CPCE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "QUINTEROS FABIAN",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 525,
          "idCid": "923 - E134",
          "sucursal": "DINOSAURIO II",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Miravalles Manuel",
          "celular": 3516309675,
          "interno": "-"
      },
      {
          "id": 526,
          "idCid": "925 - E006",
          "sucursal": "DGR CORDOBA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "NAJLOWIEC, WALTER DIEGO",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 527,
          "idCid": "925 - E027",
          "sucursal": "MONTECRISTO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 528,
          "idCid": "931 - E144",
          "sucursal": "CAB O`HIGGINS MALL",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "PELLEGRINI LUCIANO",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 529,
          "idCid": "931 - E101",
          "sucursal": "CPC Villa el Libertador",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "HERNANDEZ DIEGO",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 530,
          "idCid": "931 - E145",
          "sucursal": "CAB Villa El Libertador",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Gigena Carlos ",
          "celular": 153867053,
          "interno": "-"
      },
      {
          "id": 531,
          "idCid": "311 - E097",
          "sucursal": "SAN CARLOS MINAS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "AVILA ANDRES",
          "celular": 3542460871,
          "interno": "-"
      },
      {
          "id": 532,
          "idCid": "322 - E123",
          "sucursal": "LA PAZ",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Benitez Julieta",
          "celular": "3544-409191",
          "interno": "-"
      },
      {
          "id": 533,
          "idCid": "322 - E147",
          "sucursal": "DEPENDENCIA AUTOMATIZADA VILLA DOLORES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Benitez Julieta",
          "celular": "3544-409191",
          "interno": "-"
      },
      {
          "id": 534,
          "idCid": "324 - E148",
          "sucursal": "DEPENDENCIA AUTOMATIZADA CRUZ DEL EJE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MORA ARNOL",
          "celular": "3549-503897",
          "interno": "-"
      },
      {
          "id": 535,
          "idCid": "315 - E084",
          "sucursal": "SANTA MARIA PUNILLA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Martinez Maximiliano",
          "celular": "3541-0568841",
          "interno": "-"
      },
      {
          "id": 536,
          "idCid": "336 - E036",
          "sucursal": "VILLA GIARDINO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Loyola Roxana",
          "celular": 35103007340,
          "interno": "-"
      },
      {
          "id": 537,
          "idCid": "342 - E005",
          "sucursal": "CAPILLA DEL MONTE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "SUB TESORERO SPINELLI MARCELO",
          "celular": "3548- 572434",
          "interno": "-"
      },
      {
          "id": 538,
          "idCid": "349 - E022",
          "sucursal": "CARCANO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Gomez Alvarado Vanesa",
          "celular": "351-7430918",
          "interno": "-"
      },
      {
          "id": 539,
          "idCid": "349 - E025",
          "sucursal": "TANTI",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Gomez Alvarado Vanesa",
          "celular": "351-7430918",
          "interno": "-"
      },
      {
          "id": 540,
          "idCid": "425 - E026",
          "sucursal": "VILLA DEL DIQUE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Alessandroni Analía",
          "celular": 3571523751,
          "interno": "-"
      },
      {
          "id": 541,
          "idCid": "900 - E048",
          "sucursal": "COLEGIO DE ESCRIBANOS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 542,
          "idCid": "314 - E090",
          "sucursal": "SEBASTIAN EL CANO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "SOMOZA LUCAS",
          "celular": "351-3130617",
          "interno": "-"
      },
      {
          "id": 543,
          "idCid": "318 - E122",
          "sucursal": "TULUMBA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MORE JOSE JAVIER",
          "celular": "3521-436167",
          "interno": "-"
      },
      {
          "id": 544,
          "idCid": "451 - E029",
          "sucursal": "LOZADA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 545,
          "idCid": "350 - E020",
          "sucursal": "UNQUILLO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "SOTO FACUNDO",
          "celular": 3512029398,
          "interno": "-"
      },
      {
          "id": 546,
          "idCid": "405 - E075",
          "sucursal": "COLONIA TIROLESA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "TESINO ANDRES",
          "celular": "3525-534267",
          "interno": "-"
      },
      {
          "id": 547,
          "idCid": "382 - E052",
          "sucursal": "PIQUILLIN",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MARASCHIN ENZO",
          "celular": 3574403344,
          "interno": "-"
      },
      {
          "id": 548,
          "idCid": "398 - E057",
          "sucursal": "LA PUERTA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "PRIALIS FABIAN",
          "celular": "3574-402235",
          "interno": "-"
      },
      {
          "id": 549,
          "idCid": "398 - E110",
          "sucursal": "OBISPO TREJO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "PRIALIS FABIAN",
          "celular": "3574-402235",
          "interno": "-"
      },
      {
          "id": 550,
          "idCid": "345 - E083",
          "sucursal": "MELO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "BONETTO GUSTAVO",
          "celular": "3385-15683711",
          "interno": "-"
      },
      {
          "id": 551,
          "idCid": "346 - E074",
          "sucursal": "HUANCHILLA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "REAL LEANDRO",
          "celular": "3584 401278",
          "interno": "-"
      },
      {
          "id": 552,
          "idCid": "366 - E070",
          "sucursal": "ISLA VERDE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Rodriguez, Gabriel",
          "celular": "3468-413333",
          "interno": "-"
      },
      {
          "id": 553,
          "idCid": "393 - E100",
          "sucursal": "BENGOLEA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Moreni, Juan Esteba",
          "celular": "353-154066329",
          "interno": "-"
      },
      {
          "id": 554,
          "idCid": "317 - E061",
          "sucursal": "REDUCCION",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "TRUCCO, Maryso Alejandra",
          "celular": 3585023751,
          "interno": "-"
      },
      {
          "id": 555,
          "idCid": "357 - E044",
          "sucursal": "LA LAGUNA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MATTALIA, GERARDO JESUS",
          "celular": 3534172510,
          "interno": "-"
      },
      {
          "id": 556,
          "idCid": "357 - E098",
          "sucursal": "CHAZON",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MATTALIA, GERARDO JESUS",
          "celular": 3534172510,
          "interno": "-"
      },
      {
          "id": 557,
          "idCid": "357 - E091",
          "sucursal": "PASCO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "MATTALIA, GERARDO JESUS",
          "celular": 3534172510,
          "interno": "-"
      },
      {
          "id": 558,
          "idCid": "351 - E093",
          "sucursal": "LAS VERTIENTES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Olguin Osmar",
          "celular": "03582-15433628",
          "interno": "-"
      },
      {
          "id": 559,
          "idCid": "440 - E043",
          "sucursal": "MONTE DE LOS GAUCHOS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Acuña Alicia",
          "celular": "0358-155405723",
          "interno": "-"
      },
      {
          "id": 560,
          "idCid": "302 - E088",
          "sucursal": "ACHIRAS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Gentile Sergio",
          "celular": "------",
          "interno": "-"
      },
      {
          "id": 561,
          "idCid": "302 - E127",
          "sucursal": "CPJ RIO CUARTO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Pagliero Silvia",
          "celular": "0358-156010547",
          "interno": "-"
      },
      {
          "id": 562,
          "idCid": "302 - E082",
          "sucursal": "LAS HIGUERAS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Gentile Sergio",
          "celular": "------",
          "interno": "-"
      },
      {
          "id": 563,
          "idCid": "302 - E085",
          "sucursal": "TRIBUNALES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 564,
          "idCid": "400 - E009",
          "sucursal": "SANTA CAT. HOLMBERG",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Verdie Nicolas/Negro Sergio",
          "celular": "0358-154298785/0358-15601894",
          "interno": "-"
      },
      {
          "id": 565,
          "idCid": "427 - E068",
          "sucursal": "CHARRAS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Casella Laura",
          "celular": "0358-156000222",
          "interno": "-"
      },
      {
          "id": 566,
          "idCid": "416 - E058",
          "sucursal": "CALCHIN OESTE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "GALLO FABIAN ",
          "celular": "3573-496994",
          "interno": "-"
      },
      {
          "id": 567,
          "idCid": "426 - E035",
          "sucursal": "LOS ZORROS",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 568,
          "idCid": "332 - E023",
          "sucursal": "MIRAMAR",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "PICCO ALEJANDRA",
          "celular": "3576-410188",
          "interno": "-"
      },
      {
          "id": 569,
          "idCid": "340 - E010",
          "sucursal": "LA TORDILLA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "BAZAN CARLOS GABRIEL",
          "celular": "3576-465483",
          "interno": "-"
      },
      {
          "id": 570,
          "idCid": "352 - E016",
          "sucursal": "COLONIA SAN BARTOLOME",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "GANDOLFO MARIA EUGENIA",
          "celular": "3576-475365",
          "interno": "-"
      },
      {
          "id": 571,
          "idCid": "352 - E018",
          "sucursal": "VILLA CONC. DEL TIO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "GANDOLFO MARIA EUGENIA",
          "celular": "3576-475365",
          "interno": "-"
      },
      {
          "id": 572,
          "idCid": "438 - E069",
          "sucursal": "MATORRALES",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "CUASSOLO GUILLERMO",
          "celular": "3532-409593",
          "interno": "-"
      },
      {
          "id": 573,
          "idCid": "417 - E067",
          "sucursal": "SAIRA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Mangold Alexis",
          "celular": 3472447681,
          "interno": "-"
      },
      {
          "id": 574,
          "idCid": "374 - E106",
          "sucursal": "VILLA ASCASUBI",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Fernandez Gustavo",
          "celular": "3571-321505",
          "interno": "-"
      },
      {
          "id": 575,
          "idCid": "374 - E142",
          "sucursal": "CAB Rio III",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Fernandez Gustavo",
          "celular": "3571-321502",
          "interno": "-"
      },
      {
          "id": 576,
          "idCid": "304 - E024",
          "sucursal": "ALTO ALEGRE",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "REBUFFO JORGE",
          "celular": 3534250549,
          "interno": "-"
      },
      {
          "id": 577,
          "idCid": "304 - E140",
          "sucursal": "CAB VILLA MARIA",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "PASTRELLO DIEGO",
          "celular": 3534230188,
          "interno": "-"
      },
      {
          "id": 578,
          "idCid": "304 - E017",
          "sucursal": "TIO PUJIO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "REBUFFO JORGE",
          "celular": 3534250549,
          "interno": "-"
      },
      {
          "id": 579,
          "idCid": "305 - E046",
          "sucursal": "MORRISON",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Galetto Silvina Gisela",
          "celular": "3537-445446",
          "interno": "-"
      },
      {
          "id": 580,
          "idCid": "378 - E086",
          "sucursal": "PAMPAYASTA SUR",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "Velez Hugo Alejandro",
          "celular": "03532-15430237",
          "interno": "-"
      },
      {
          "id": 581,
          "idCid": "439 - E089",
          "sucursal": "SILVIO PELLICO",
          "funcion": "tesorero",
          "apellido": "-",
          "nombre": "-",
          "celular": "-",
          "interno": "-"
      },
      {
          "id": 582,
          "idCid": "913 - E104",
          "sucursal": "CEA CINERAMA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "NOTTARIS RAUL ALFREDO ",
          "celular": "0351-155649001",
          "interno": 2105
      },
      {
          "id": 583,
          "idCid": "918 - E125",
          "sucursal": "CPJ GRAL BUSTOS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BIAGIOLI JUAN NATALIO ",
          "celular": "0351-155649022",
          "interno": 2115
      },
      {
          "id": 584,
          "idCid": "912 - E032",
          "sucursal": "CPJ SANTA ANA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ATAIDE, HECTOR EDUARDO",
          "celular": 155649005,
          "interno": 2108
      },
      {
          "id": 585,
          "idCid": "917 - E013",
          "sucursal": "CPCE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ORTEGA HATTEMER, MARIA INES",
          "celular": 153081765,
          "interno": 1005
      },
      {
          "id": 586,
          "idCid": "923 - E134",
          "sucursal": "DINOSAURIO II",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BORGHI, PABLO ANDRES",
          "celular": 155649019,
          "interno": 2112
      },
      {
          "id": 587,
          "idCid": "925 - E006",
          "sucursal": "DGR CORDOBA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MUÑOZ PABLO JOSE",
          "celular": "0351-155649025",
          "interno": 2117
      },
      {
          "id": 588,
          "idCid": "925 - E027",
          "sucursal": "MONTECRISTO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MUÑOZ PABLO JOSE",
          "celular": "0351-155649025",
          "interno": 2117
      },
      {
          "id": 589,
          "idCid": "931 - E144",
          "sucursal": "CAB O`HIGGINS MALL",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MISCHIS ALEXIS JAVIER ",
          "celular": "0351-155649025",
          "interno": 2114
      },
      {
          "id": 590,
          "idCid": "931 - E101",
          "sucursal": "CPC Villa el Libertador",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MISCHIS ALEXIS JAVIER ",
          "celular": "0351-155649025",
          "interno": 2114
      },
      {
          "id": 591,
          "idCid": "931 - E145",
          "sucursal": "CAB Villa El Libertador",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MISCHIS ALEXIS JAVIER ",
          "celular": "0351-155649025",
          "interno": 2114
      },
      {
          "id": 592,
          "idCid": "311 - E097",
          "sucursal": "SAN CARLOS MINAS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ROLDAN KARINA",
          "celular": 3544582210,
          "interno": 2829
      },
      {
          "id": 593,
          "idCid": "322 - E123",
          "sucursal": "LA PAZ",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CALDERON WALTER",
          "celular": 3544552551,
          "interno": 2170
      },
      {
          "id": 594,
          "idCid": "322 - E147",
          "sucursal": "DEPENDENCIA AUTOMATIZADA VILLA DOLORES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CALDERON WALTER",
          "celular": 3544552551,
          "interno": 2170
      },
      {
          "id": 595,
          "idCid": "324 - E148",
          "sucursal": "DEPENDENCIA AUTOMATIZADA CRUZ DEL EJE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CAPDEVILA CARINA NOEMI",
          "celular": "3549457752",
          "interno": 2615
      },
      {
          "id": 596,
          "idCid": "315 - E084",
          "sucursal": "SANTA MARIA PUNILLA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Sampirisi, Eduardo Ramon",
          "celular": "155649038",
          "interno": 2122
      },
      {
          "id": 597,
          "idCid": "336 - E036",
          "sucursal": "VILLA GIARDINO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Ceballos, Jorge Antonio",
          "celular": "03548-15572011",
          "interno": 2174
      },
      {
          "id": 598,
          "idCid": "342 - E005",
          "sucursal": "CAPILLA DEL MONTE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Astudillo, Gustavo Omar",
          "celular": "03548-15572010",
          "interno": 2173
      },
      {
          "id": 599,
          "idCid": "349 - E022",
          "sucursal": "CARCANO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Porta German",
          "celular": "0351-5649031",
          "interno": 2121
      },
      {
          "id": 600,
          "idCid": "349 - E025",
          "sucursal": "TANTI",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Porta German",
          "celular": "0351-5649031",
          "interno": 2121
      },
      {
          "id": 601,
          "idCid": "425 - E026",
          "sucursal": "VILLA DEL DIQUE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "RECHIMON HUGO ",
          "celular": "03571-15555331",
          "interno": 2383
      },
      {
          "id": 602,
          "idCid": "900 - E048",
          "sucursal": "COLEGIO DE ESCRIBANOS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ROMERO FERNANDO",
          "celular": 153852474,
          "interno": 1108
      },
      {
          "id": 603,
          "idCid": "314 - E090",
          "sucursal": "SEBASTIAN EL CANO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "PONCE DE LEON OSVALDO DANIEL",
          "celular": 3522459965,
          "interno": 2897
      },
      {
          "id": 604,
          "idCid": "318 - E122",
          "sucursal": "TULUMBA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ALANIS DANIEL SANTIAGO",
          "celular": 3521401010,
          "interno": 2120
      },
      {
          "id": 605,
          "idCid": "451 - E029",
          "sucursal": "LOZADA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Pretto Daniel Oscar ",
          "celular": "03572-15438923",
          "interno": 2676
      },
      {
          "id": 606,
          "idCid": "350 - E020",
          "sucursal": "UNQUILLO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Gimenez, Marcos Alfredo",
          "celular": "03543-15535386 ",
          "interno": 2168
      },
      {
          "id": 607,
          "idCid": "405 - E075",
          "sucursal": "COLONIA TIROLESA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Yance, Monica Carolina",
          "celular": "03525-15416885",
          "interno": 2840
      },
      {
          "id": 608,
          "idCid": "382 - E052",
          "sucursal": "PIQUILLIN",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "LOPEZ DANTE OSCAR",
          "celular": "03574 15454233",
          "interno": 2129
      },
      {
          "id": 609,
          "idCid": "398 - E057",
          "sucursal": "LA PUERTA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "FAULE ALDO CELSO  ",
          "celular": "03575 15403593 ",
          "interno": "-"
      },
      {
          "id": 610,
          "idCid": "398 - E110",
          "sucursal": "OBISPO TREJO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "FAULE ALDO CELSO  ",
          "celular": "03575 15403593 ",
          "interno": "-"
      },
      {
          "id": 611,
          "idCid": "345 - E083",
          "sucursal": "MELO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "ALTAMIRANO  ELIDA EDITH",
          "celular": "03385-15404280",
          "interno": 2361
      },
      {
          "id": 612,
          "idCid": "346 - E074",
          "sucursal": "HUANCHILLA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "DAHBAR, GUSTAVO CEFERINO",
          "celular": "0351-152030158",
          "interno": 2196
      },
      {
          "id": 613,
          "idCid": "366 - E070",
          "sucursal": "ISLA VERDE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "VIGNOLO, LORENA IVANA",
          "celular": "03468-15437837",
          "interno": 2152
      },
      {
          "id": 614,
          "idCid": "393 - E100",
          "sucursal": "BENGOLEA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Ghigo, Daniel Odilio",
          "celular": "0353-154085222",
          "interno": 2677
      },
      {
          "id": 615,
          "idCid": "317 - E061",
          "sucursal": "REDUCCION",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Amari, Jorge Domingo",
          "celular": "0358-154116580",
          "interno": 2125
      },
      {
          "id": 616,
          "idCid": "357 - E044",
          "sucursal": "LA LAGUNA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "COLOMBO, JORGE ALBERTO",
          "celular": "0353-154069357",
          "interno": 2101
      },
      {
          "id": 617,
          "idCid": "357 - E098",
          "sucursal": "CHAZON",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "COLOMBO, JORGE ALBERTO",
          "celular": "0353-154069357",
          "interno": 2101
      },
      {
          "id": 618,
          "idCid": "357 - E091",
          "sucursal": "PASCO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "COLOMBO, JORGE ALBERTO",
          "celular": "0353-154069357",
          "interno": 2101
      },
      {
          "id": 619,
          "idCid": "351 - E093",
          "sucursal": "LAS VERTIENTES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Bogino, Daniel Antonio",
          "celular": "03582-15594203",
          "interno": 2192
      },
      {
          "id": 620,
          "idCid": "440 - E043",
          "sucursal": "MONTE DE LOS GAUCHOS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Fernandez Pablo",
          "celular": "0351-153858519",
          "interno": 2692
      },
      {
          "id": 621,
          "idCid": "302 - E088",
          "sucursal": "ACHIRAS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Cotignola Mario",
          "celular": "0358-154288015",
          "interno": 1588
      },
      {
          "id": 622,
          "idCid": "302 - E127",
          "sucursal": "CPJ RIO CUARTO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Cotignola Mario",
          "celular": "0358-154288015",
          "interno": 1588
      },
      {
          "id": 623,
          "idCid": "302 - E082",
          "sucursal": "LAS HIGUERAS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Cotignola Mario",
          "celular": "0358-154288015",
          "interno": 1588
      },
      {
          "id": 624,
          "idCid": "302 - E085",
          "sucursal": "TRIBUNALES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Cotignola Mario",
          "celular": "0358-154288015",
          "interno": 1588
      },
      {
          "id": 625,
          "idCid": "400 - E009",
          "sucursal": "SANTA CAT. HOLMBERG",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Vinyals Federico Alfonso",
          "celular": "0358-154117792",
          "interno": 2141
      },
      {
          "id": 626,
          "idCid": "427 - E068",
          "sucursal": "CHARRAS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Casado Pamela Maria",
          "celular": "0358-154117793",
          "interno": 2142
      },
      {
          "id": 627,
          "idCid": "416 - E058",
          "sucursal": "CALCHIN OESTE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "DOFFO  LUCIANO ",
          "celular": "03573-155495161",
          "interno": 2102
      },
      {
          "id": 628,
          "idCid": "426 - E035",
          "sucursal": "LOS ZORROS",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "LENCINA EDGAR SIXTO",
          "celular": "0353-154121996",
          "interno": 2833
      },
      {
          "id": 629,
          "idCid": "332 - E023",
          "sucursal": "MIRAMAR",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BELTRAMINO GUSTAVO PEDRO",
          "celular": "03563 15491859",
          "interno": 2179
      },
      {
          "id": 630,
          "idCid": "340 - E010",
          "sucursal": "LA TORDILLA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "CISTERNA MARIA EUGENIA",
          "celular": "03576 15449620",
          "interno": 2847
      },
      {
          "id": 631,
          "idCid": "352 - E016",
          "sucursal": "COLONIA SAN BARTOLOME",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "VAIRA DARIO ARIEL",
          "celular": "03564 15506619",
          "interno": 1536
      },
      {
          "id": 632,
          "idCid": "352 - E018",
          "sucursal": "VILLA CONC. DEL TIO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "VAIRA DARIO ARIEL",
          "celular": "03564 15506619",
          "interno": 1536
      },
      {
          "id": 633,
          "idCid": "438 - E069",
          "sucursal": "MATORRALES",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "RICHIERO, GUSTAVO JAVIER",
          "celular": "03532- 15467979",
          "interno": 1557
      },
      {
          "id": 634,
          "idCid": "417 - E067",
          "sucursal": "SAIRA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Rodolfo Cuevas ",
          "celular": "03472-15584815",
          "interno": 2197
      },
      {
          "id": 635,
          "idCid": "374 - E106",
          "sucursal": "VILLA ASCASUBI",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "OVIEDO MARIANELA ",
          "celular": "03571-15577874",
          "interno": 2185
      },
      {
          "id": 636,
          "idCid": "374 - E142",
          "sucursal": "CAB Rio III",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "OVIEDO MARIANELA ",
          "celular": "03571-15577874",
          "interno": 2185
      },
      {
          "id": 637,
          "idCid": "304 - E024",
          "sucursal": "ALTO ALEGRE",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BALDASSA, DAVID CESAR",
          "celular": "0353-154069324",
          "interno": 2136
      },
      {
          "id": 638,
          "idCid": "304 - E140",
          "sucursal": "CAB VILLA MARIA",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BALDASSA, DAVID CESAR",
          "celular": "0353-154069324",
          "interno": 2136
      },
      {
          "id": 639,
          "idCid": "304 - E017",
          "sucursal": "TIO PUJIO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "BALDASSA, DAVID CESAR",
          "celular": "0353-154069324",
          "interno": 2136
      },
      {
          "id": 640,
          "idCid": "305 - E046",
          "sucursal": "MORRISON",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "Luque Martin ",
          "celular": "03534-15595578",
          "interno": 2163
      },
      {
          "id": 641,
          "idCid": "378 - E086",
          "sucursal": "PAMPAYASTA SUR",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "MORENO, DANIEL ALEJANDRO",
          "celular": "03532-15466797",
          "interno": 2160
      },
      {
          "id": 642,
          "idCid": "439 - E089",
          "sucursal": "SILVIO PELLICO",
          "funcion": "gerente",
          "apellido": "-",
          "nombre": "TROGLIA, FERNANDO JOSE",
          "celular": "0353-154069325",
          "interno": 2137
      }
  ])
});

router.post('/', (_req, res) => {
  res.send('Realizando POST')
})

export default router



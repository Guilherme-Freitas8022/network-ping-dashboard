// Lista de equipamentos
// Cada equipamento possui um nome e um IP ou URL
// ================================
const equipamentos = [
  { nome: "ALMOXARIFADO SMA", ip: "http://10.13.1.212" },
  { nome: "ANEXO HMMR (LAÇO AZUL)", ip: "http://10.28.96.212" },
  { nome: "BASE SEGURANCA PUB - RETIRO", ip: "http://10.27.29.213"},
  { nome: "CAIS CONFORTO", ip: "http://10.28.11.212" },
  { nome: "CAPS AD", ip: "http://10.25.89.212" },
  { nome: "CAPS BELVEDERE", ip: "http://10.25.20.212" },
  { nome: "CAPSI VILA MURY - VIVA A VIDA", ip: "http://10.27.35.212" },
  { nome: "CAPS USINA DE SONHOS", ip: "http://10.27.32.212" },
  { nome: "CAPS VILA ESPERANÇA", ip: "http://10.28.5.212" },
  { nome: "CATI-CA", ip: "http://10.28.84.212" },
  { nome: "CDI", ip: "http://10.25.35.212" },
  { nome: "CEMITÉRIO", ip: "http://10.27.78.212" },
  { nome: "CEMURF", ip: "http://10.22.6.212" },
  { nome: "CENTRAL DE ABASTECIMENTO", ip: "http://10.11.1.212" },
  { nome: "CENTRAL DE AMBULANCIA", ip: "http://10.26.34.212" },
  { nome: "CENTRAL DE IMUNIZACAO", ip: "http://10.23.44.212" },
  { nome: "CENTRO CARDIOLOGICO", ip: "http://10.24.53.212" },
  { nome: "CENTRO DE IMAGEM VILA", ip: "http://10.28.78.212" },
  { nome: "SMAS - CIP VALE VERDE", ip: "http://10.27.97.212" },
  { nome: "SMAS - CIP VILA MURY", ip: "http://10.27.85.212" },
  { nome: "SMAS - CIP VILA RICA - TIRADENTES", ip: "http://10.25.92.212" },
  { nome: "COC ATERRADO", ip: "http://10.23.27.1" },
  { nome: "COC CONFORTO", ip: "http://10.28.56.212" },
  { nome: "COC EUCALIPTAL", ip: "http://10.28.57.212" },
  { nome: "COC RETIRO", ip: "http://10.27.31.212" },
  { nome: "COC SANTA CRUZ", ip: "http://10.26.96.212" },
  { nome: "COC SANTO AGOSTINHO", ip: "http://10.26.71.212" },
  { nome: "COC SIDERLANDIA", ip: "http://10.27.5.212" },
  { nome: "COC VILA BRASILIA", ip: "http://10.27.86.212" },
  { nome: "COC VILA RICA TIRADENTES", ip: "http://10.25.68.212" },
  { nome: "COHAB", ip: "http://10.25.23.212" },
  { nome: "CONSELHO TUTELAR I", ip: "http://10.23.26.212" },
  { nome: "DEFESA CIVIL", ip: "http://10.26.27.212" },
  { nome: "DEIP-ELETRICA", ip: "http://10.25.33.212" },
  { nome: "DEPOSITO DE CARROS - GUARDA", ip: "http://10.27.74.212" },
  { nome: "DRH", ip: "http://10.1.7.240" },
  { nome: "EPD", ip: "http://10.1.3.212" },
  { nome: "FAMILIA ACOLHEDORA", ip: "http://10.24.59.212" },
  { nome: "FARMACIA MUNICIPAL", ip: "http://10.21.1.1" },
  { nome: "FEVRE - COLÉGIO GETÚLIO VARGAS", ip: "http://10.25.14.213" },
  { nome: "FEVRE - CQD FEVRE", ip: "http://10.25.63.212" },
  { nome: "FEVRE - ESCOLA J B", ip: "http://10.25.13.212" },
  { nome: "FEVRE - ESCOLA DELCE HORTA", ip: "http://10.23.5.212" },
  { nome: "FEVRE - ACADEMIA DA VIDA", ip: "http://10.22.1.212" },
  { nome: "FEVRE - ESCOLA JOÃO XXIII", ip: "10.27.3.212" },
  { nome: "FEVRE - COLEGIO THEMIS", ip: "10.28.12.212" },
  { nome: "FBG", ip: "http://10.27.59.212" },
  { nome: "FBG 2", ip: "http://10.27.59.213" },
  { nome: "FBG - ABRIGO SAO GERALDO", ip: "http://10.25.85.212" },
  { nome: "ABRIGO FBG ATERRADO", ip: "http://10.24.58.212" },
  { nome: "FEVRE SEDE", ip: "http://10.25.14.212" },
  { nome: "FOLLOW UP", ip: "http://10.18.4.212" },
  { nome: "FUNERARIA", ip: "http://10.24.51.212" },
  { nome: "FURBAN", ip: "http://10.1.16.212" },
  { nome: "GUARDA MUNICIPAL", ip: "http://10.26.3.212" },
  { nome: "HMMR 1", ip: "http://10.27.17.103" },
  { nome: "HMMR 2", ip: "http://10.27.17.81" },
  { nome: "HMMR 3", ip: "http://10.27.17.104" },
  { nome: "HMMR 4", ip: "http://10.27.17.134" },
  { nome: "HMMR 5", ip: "http://10.27.17.166" },
  { nome: "HNSG CAIS ATERRADO", ip: "http://10.24.52.1" },
  { nome: "HNSG-CAIS ATERRADO 2", ip: "http://10.24.52.1:8080" },
  { nome: "HSJB", ip: "http://172.21.44.250" },
  { nome: "HSJB 2", ip: "http://172.21.44.97" },
  { nome: "ILHA SÃO JOAO", ip: "http://10.23.50.212" },
  { nome: "IPPU", ip: "http://10.16.1.209" },
  { nome: "JARI - JUNTA RECURSOS", ip: "http://10.20.1.212" },
  { nome: "JUCERJA", ip: "http://10.1.17.212" },
  { nome: "JUNTA MEDICA / CAPS 33", ip: "http://10.28.17.212" },
  { nome: "PATRIMONIO", ip: "http://10.23.24.212" },
  { nome: "PATRIMONIO-SMS", ip: "http://10.24.60.212" },
  { nome: "PGM", ip: "http://10.1.6.212" },
  { nome: "PMVR 1", ip: "http://10.1.5.209" },
  { nome: "PMVR 2", ip: "http://10.1.1.212" },
  { nome: "PMVR 3", ip: "http://10.1.18.212" },
  { nome: "POLI CIDADANIA", ip: "http://10.22.7.212" },
  { nome: "POLI CIDADANIA 2", ip: "http://10.22.7.213" },
  { nome: "POLI DA MULHER", ip: "http://10.23.29.1" },
  { nome: "POLI MELHOR IDADE", ip: "http://10.23.41.212" },
  { nome: "POLO OSTOMIZADOS", ip: "http://10.26.87.212" },
  { nome: "PRE MOLDADOS", ip: "http://10.26.76.212" },
  { nome: "SEMAPRED", ip: "http://10.28.26.212" },
  { nome: "SEMOP", ip: "http://10.26.63.212" },
  { nome: "SEPLAG", ip: "http://10.12.1.212" },
  { nome: "SMAS - CRAS AÇUDE", ip: "http://10.27.71.212" },
  { nome: "SMAS - CRAS DO AERO", ip: "http://10.26.38.212" },
  { nome: "SMAS - CAPD II", ip: "http://10.25.71.212" },
  { nome: "SMAS - CENTRO DIA DO IDOSO", ip: "http://10.25.56.212" },
  { nome: "SMAS - CENTRO DIA SYNVAL SANTOS", ip: "http://10.22.20.212" },
  { nome: "SMAS - CENTRO POP", ip: "http://10.18.6.212" },
  { nome: "SMAS - CRAS BELO HORIZONTE", ip: "http://10.27.80.212" },
  { nome: "SMAS - CRAS COQUEIROS", ip: "http://10.27.90.212" },
  { nome: "SMAS - CRAS EUCALIPTAL", ip: "http://10.28.77.212" },
  { nome: "SMAS - CRAS JADIM BELMONTE", ip: "http://10.28.61.212" },
  { nome: "SMAS - CRAS JARDIM CIDADE DO AÇ", ip: "http://10.27.94.212" },
  { nome: "SMAS - CRAS JARDIM PONTE ALTA", ip: "http://10.28.30.212" },
  { nome: "SMAS - CRAS MARIANA TORRES", ip: "http://10.27.88.212" },
  { nome: "SMAS - CRAS MONTE CASTELO", ip: "http://10.28.71.212" },
  { nome: "SMAS - CRAS MORADA DO CAMPO", ip: "http://10.27.98.212" },
  { nome: "SMAS - CRAS PADRE JOSIMO", ip: "http://10.27.42.212" },
  { nome: "SMAS - CRAS PONTE ALTA", ip: "http://10.28.80.212" },
  { nome: "SMAS - CRAS RETIRO", ip: "http://10.27.70.212" },
  { nome: "SMAS - CRAS RUSTICO", ip: "http://10.28.59.212" },
  { nome: "SMAS - CRAS SANTA CRUZ", ip: "http://10.26.77.212" },
  { nome: "SMAS - CRAS SANTA RITA DE CASSIA", ip: "http://10.27.87.212" },
  { nome: "SMAS - CRAS SÃO CRISTÓVÃO", ip: "http://10.28.65.212" },
  { nome: "SMAS - CRAS SÃO CARLOS", ip: "http://10.28.64.212" },
  { nome: "SMAS - CRAS DO SÃO LUIZ", ip: "http://10.26.69.212" },
  { nome: "SMAS - CRAS SÃO SEBASTIÃO", ip: "http://10.26.60.212" },
  { nome: "SMAS - CRAS SIDERLANDIA", ip: "http://10.28.55.212" },
  { nome: "SMAS - CRAS TRÊS POÇOS", ip: "http://10.26.94.212" },
  { nome: "SMAS - CRAS VILA BRASILIA", ip: "http://10.27.76.212" },
  { nome: "SMAS - CRAS CAIERAS", ip: "http://10.26.79.212" },
  { nome: "SMAS - CRAS ROMA", ip: "http://10.25.32.212" },
  { nome: "SMAS - CRAS VILA AMERICANA", ip: "http://10.26.75.212" },
  { nome: "SMAS - CRAS VOLTA GRANDE", ip: "http://10.26.86.212" },
  { nome: "SMAS - CRAS SANTA CRUZ", ip: "http://10.26.77.212" },
  { nome: "SMAS - CRAS RETIRO", ip: "http://10.27.70.212" },
  { nome: "SMAS - CRAS COQUEIROS", ip: "http://10.27.90.212" },
  { nome: "SMAS - CRAS DA CANDELÁRIA", ip: "http://10.26.83.212" },
  { nome: "SMAS - CRAS SANTO AGOSTINHO", ip: "http://10.26.85.212" },
  { nome: "SMAS - CRAS JARD. CIDADE DO AÇ", ip: "http://10.27.94.212" },
  { nome: "SMAS - CAPD 1", ip: "http://10.22.2.212" },
  { nome: "SMAS - PARQUE DAS ILHAS CRAS", ip: "http://10.26.97.212" },
  { nome: "SMAS - ABRIGO MUNICIPAL", ip: "http://10.24.56.212" },
  { nome: "SMAS - TELECENTRO", ip: "http://10.27.9.212" },
  { nome: "SMAS-CRAS VILA RICA(PRAÇA CEU)", ip: "http://10.25.21.212" },
  { nome: "SMAS - CRAS ÁGUA LIMPA", ip: "http://10.25.61.212" },
  { nome: "SMAS - CENTRO POP", ip: "http://10.18.6.212" },
  { nome: "SMAS - CENTRO DIA SYNVAL SANTOS", ip: "http://10.22.20.212" },
  { nome: "SMAS - CENTRO DIA DO IDOSO", ip: "http://10.25.56.212" },
  { nome: "SMAS - RESIDENCIA INCLUSIVA BR", ip: "http://10.26.92.212" },
  { nome: "SMAS - CRAS NOVA PRIMAVERA", ip: "http://10.26.41.212" },
  { nome: "SMAS - CRAS RUSTICO", ip: "http://10.28.59.212" },
  { nome: "SMAS - CRAS VERDE VALE", ip: "http://10.27.91.212" },
  { nome: "SMAS - CRAS VOLDAC", ip: "http://10.26.90.212" },
  { nome: "SMAS - CREAS", ip: "http://10.24.55.212" },
  { nome: "SMAS - SEDE", ip: "http://10.14.1.252" },
  { nome: "SMAS - CASA DE ACOLHIMENTO", ip: "http://10.25.54.212" },
  { nome: "SMAS - CRAS BELMONTE", ip: "http://10.28.61.212" },
  { nome: "SMAS - CRAS CONFORTO", ip: "http://10.27.89.212" },
  { nome: "SMAS - CRAS SANTO DOMINGOS", ip: "http://10.27.92.212" },
  { nome: "SMAS - CRAS SANTA CRUZ II", ip: "http://10.27.81.212" },
  { nome: "SMAS - CRAS SÃO CRISTÓVÃO", ip: "http://10.28.65.254" },
  { nome: "SMAS - CRAS VILA MURY", ip: "http://10.27.84.212" },
  { nome: "SMAS - CRAS SÃO GERALDO", ip: "http://10.26.68.212" },
  { nome: "SMAS - CRAS JARDIM BELMONTE II", ip: "http://10.28.63.212" },
  { nome: "SMAS - CRAS VILA RICA", ip: "http://10.27.93.212" },
  { nome: "SMAS - RESIDÊNCIA INCLUSIVA II", ip: "http://10.26.93.212" },
  { nome: "SMAS - RESIDÊNCIA INCLUSIVA I", ip: "http://10.26.91.212" },
  { nome: "SMAS - RESIDÊNCIA INCLUSIVA III", ip: "http://10.26.94.213" },
  { nome: "SMAS - RESIDÊNCIA INCLUSIVA IV", ip: "http://10.26.95.212" },
  { nome: "SMAS - CRAS CAIEIRAS II", ip: "http://10.26.82.212" },
  { nome: "SMAS - CRAS BELMONTE II", ip: "http://10.28.62.212" },
  { nome: "SMAS - CRAS VILA AMERICANA II", ip: "http://10.26.76.212" },
  { nome: "SMAS - CRAS ROMA II", ip: "http://10.25.33.212" },
  { nome: "SMAS - CRAS NOVA PRIMAVERA II", ip: "http://10.26.42.212" },
  { nome: "SMAS - CRAS SÃO LUIZ II", ip: "http://10.26.70.212" },
  { nome: "SMC", ip: "http://10.28.25.212" },
  { nome: "SME - AYRTON SENNA", ip: "http://10.25.26.212" },
  { nome: "SME - CM RAIOZINHO DE SOL", ip: "http://10.26.95.212" },
  { nome: "SME - CRECHE ACALANTO", ip: "http://10.27.72.212" },
  { nome: "SME - CRECHE AMOR PERFEITO", ip: "http://10.26.73.212" },
  { nome: "SME - CRECHE DAURO PEIXOTO ARA", ip: "http://10.25.80.212" },
  { nome: "SME - CRECHE ELZA BERTAZZO DE", ip: "http://10.25.66.212" },
  { nome: "SME - CRECHE GOTINHAS DE AMOR", ip: "http://10.28.58.212" },
  { nome: "SME - CRECHE JEZUAET", ip: "http://10.26.61.212" },
  { nome: "SME - CRECHE JOSE FERREIRA", ip: "http://10.26.62.212" },
  { nome: "SME - CRECHE MAHATMA GANDHI", ip: "http://10.27.67.212" },
  { nome: "SME - CRECHE MARIA CLARA MACHA", ip: "http://10.27.68.212" },
  { nome: "SME - CRECHE MARIA RIBEIRO DOS", ip: "http://10.25.52.212" },
  { nome: "SME - CRECHE NORBERTO REDUZINO", ip: "http://10.27.79.212" },
  { nome: "SME - EM SEMEIA", ip: "http://10.26.44.212" },
  { nome: "SME - EM SERGIPE", ip: "http://10.25.57.212" },
  { nome: "SME - EM JOHN KENNEDY", "ip": "http://10.25.55.212" },
  { nome: "SME - EM HERBERT DE SOUZA", "ip": "http://10.27.81.212" },
  { nome: "SME - EM GOIAS", "ip": "http://10.26.8.212" },
  { nome: "SME - EM GRACIEMA", "ip": "http://10.26.18.212" },
  { nome: "SME - E.M. MARIA ROSA TIRADENT", ip: "http://10.25.10.212" },
  { nome: "SME E.M WLADIR TELLES VILA RIC", ip: "http://10.25.12.212" },
  { nome: "SME - E.M. PARAÍBA JARDIM PRIM", ip: "http://10.27.51.212" },
  { nome: "SME - EM DR. JULIO CARUSO", ip: "http://10.28.10.212" },
  { nome: "SME - EM JESUS MENINO", ip: "http://10.28.45.212" },
  { nome: "SME - E.M. PAULO 6", ip: "http://10.27.30.212" },
  { nome: "SME - E.M. TOCANTINS", ip: "http://10.27.18.212" },
  { nome: "SME - E.M. THEREZINHA DOS SANT", ip: "http://10.27.44.212" },
  { nome: "SME - E.M. ENG. SÉRGIO ROCHA", ip: "http://10.26.45.212" },
  { nome: "SME - E.M. PERNAMBUCO", ip: "http://10.27.48.212" },
  { nome: "SME - E.M. NILTON PENNA", ip: "http://10.25.18.212" },
  { nome: "SME - E.M. WALDYR CALHEIROS", ip: "http://10.25.16.212" },
  { nome: "SME - E.M. JESUS MENINO", ip: "http://10.26.45.212" },
  { nome: "SME - E.M. DOMINGOS MAIA", ip: "http://10.25.45.212" },
  { nome: "SME - E.M. JURACY VARANDA", ip: "http://10.25.46.212" },
  { nome: "SME - CM AYRTON SENNA", ip: "http://10.25.26.212" },
  { nome: "SME - CMEI MARIANA BRESSAN", ip: "http://10.26.57.212" },
  { nome: "SME - CMEI MARLENE MENDES", ip: "http://10.23.40.212" },
  { nome: "SME - CMEI PROFº MARIO PALHETA", ip: "http://10.27.57.212" },
  { nome:"SME - CMEI Iracema leite", ip:"http://10.25.70.212"},
  { nome: "SME - EM AMARAL PEIXOTO", ip: "http://10.27.43.212" },
  { nome: "SME - EM CARLOS SARKIS", ip: "http://10.27.45.212" },
  { nome: "SME - EM CEARÁ", ip: "http://10.27.46.212" },
  { nome: "SME - EM FERNANDO DE NORONHA", ip: "http://10.27.39.212" },
  { nome: "SME - EM JOAO HAASIS", ip: "http://10.28.44.212" },
  { nome: "SME - EM MÁRIO VILLANI", ip: "http://10.27.33.212" },
  { nome: "SME - EM MATO GROSSO", ip: "http://10.27.52.212" },
  { nome: "SME - EM MATO GROSSO DO SUL", ip: "http://10.26.5.212" },
  { nome: "SME - EM PALMARES", ip: "http://10.28.47.212" },
  { nome: "SME - EM PARÁ", ip: "http://10.27.16.212" },
  { nome: "SME - EM PAULO FREIRE", ip: "http://10.26.49.212" },
  { nome: "SME - EM PROF. LUND FERNANDES", ip: "http://10.26.23.212" },
  { nome: "SME - EM RORAIMA", ip: "http://10.27.49.212" },
  { nome: "SME - E.M WALDYR AMARAL BEDÊ", ip: "http://10.26.33.212" },
  { nome: "SME - CRECHE MARIA DOS SANTOS", ip: "http://10.25.52.212" },
  { nome: "SME - EM DAYSE MANSUR", ip: "http://10.23.39.212" },
  { nome: "E.M. Miguel Couto", ip: "http://10.25.44.212" },
  { nome: "SME - EM São Francisco de Assis", ip: "http://10.27.50.212" },
  { nome: "SME - E.M. BAHIA", ip: "http://10.28.43.212" },
  { nome: "SME - E.M. PERNAMBUCO", ip: "http://10.27.48.212" },
  { nome: "SME - E.M. THEREZINHA DOS SANT", ip: "http://10.27.44.212" },
  { nome: "SME- E.M. PAULO 6", ip: "http://10.27.30.212" },
  { nome: "SME - EM DR. JULIO CARUSO", ip: "http://10.28.10.212" },
  { nome: "SME - E.M. JESUS MENINO", ip: "http://10.28.45.212" },
  { nome: "SME - E.M TOCANTINS", ip: "http://10.27.18.212" },
  { nome: "SME - E.M. JAYME DE SOUZA MART", ip: "http://10.26.13.212" },
  { nome: "SME - CMEI IRACEMA LEITE", ip: "http://10.25.70.212" },
  { nome: "SME - E.M. MARIZINHA FELIX", ip: "http://10.26.17.212" },
  { nome: "SME - EM PREFEITO JOSÉ JUAREZ", ip: "http://10.26.30.212" },
  { nome: "SME - E..M WALMIR DE FREITAS", ip: "http://10.26.25.212" },
  { nome: "SME - E.M. JURACY VARANDA", ip: "http://10.25.46.212" },
  { nome: "SMAS - CRAS SÃO CRISTÓVÃO", ip: "http://10.28.65.254" },
  { nome: "SME - E.M DR. JOÃO PAULO PIO D", ip: "http://10.27.13.212" },
  { nome: "SME - E.M. NILTON PENNA", ip: "http://10.25.18.212" },
  { nome: "SME - E.M. WALDYR CALHEIROS", ip: "http://10.25.16.212" },
  { nome: "SME - E.M. DOMINGOS MAIA", ip: "http://10.25.45.212" },
  { nome: "SME - E.M JESUS MENINO", ip: "http://10.26.45.212" },
  { nome: "SME - EM São Francisco de Assis", ip: "http://10.27.50.212" },
  { nome: "SME - E.M. Domingos Maia", ip: "http://10.25.45.212" },
  { nome: "SME - E.M. Juracy Varanda", ip: "http://10.25.46.212" },
  { nome: "SME - CMEI VERA LUCIA", ip: "http://10.26.40.72" },
  { nome: "SME - CMEI PINGUINHO DE GENTE", ip: "http://10.25.49.212" },
  { nome: "SME - CMEI OSCAR RODRIGUES CAR", ip: "http://10.26.58.212" },
  { nome: "SME - CMEI MUNDO COLORIDO", ip: "http://10.26.56.212" },
  { nome: "SME - CMEI ALKINDAR CÂNDIDO", ip: "http://10.25.48.212" },
  { nome: "SME - CMEI ZILDA ARNS", ip: "http://10.28.49.212" },
  { nome: "SME - CMEI OSCAR RODRIGUES CAR", ip: "http://10.26.58.212" },
  { nome: "SME - CMEI RECANTO INFANTIL", ip: "http://10.27.12.212" },
  { nome: "SME - CMEI MUNDO COLORIDO", ip: "http://10.26.59.212" },
  { nome: "SME-CMEI MONTEIRO LOBATO", "ip": "http://10.26.55.212"},
  { nome: "SME - CMEI ZILDA ARNS", ip: "http://10.28.49.212" },
  { nome: "SME - CMEI BARQUINHO DE PAPEL", ip: "http://10.27.58.212" },
  { nome: "SME - CMEI ELZA COSTA FIGUEIRED", ip: "http://10.25.50.212" },
  { nome: "SME - CMEI CIRANDINHA", ip: "http://10.27.19.212" },
  { nome: "SME - CMEI BEM-ME-QUER", ip: "http://10.26.52.212" },
  { nome: "SME - CMEI BALAOZINHO VERMELHO", ip: "http://10.28.50.212" },
  { nome: "SME - CMEI CORA CORALINA", ip: "http://10.28.69.212" },
  { nome: "SME - CMEI ARACY DI BIASE", ip: "http://10.27.55.212" },
  { nome: "SME - CMEI THEREZINHA DUARTE", ip: "http://10.28.48.212" },
  { nome: "SME - CRECHE NOSSO ESPAÇO", ip: "http://10.26.70.212" },
  { nome: "SME - CRECHE TEMPO DE CRIANÇA", ip: "http://10.26.11.212" },
  { nome: "SMEL", ip: "http://10.26.7.212" },
  { nome: "SME - MADRE TEREZA DE CALCUTÁ", ip: "http://10.26.68.212" },
  { nome: "SME - C.E.J.A. PAULO FREIRE", "ip": "http://192.168.0.212" },
  { nome: "SME - SEDE", ip: "http://172.22.30.212" },
  { nome: "SMIDH", ip: "http://10.22.24.212" },
  { nome: "SMIDH - CASA ABRIGO", ip: "http://10.25.27.212" },
  { nome: "SMMA", ip: "http://10.23.35.212" },
  { nome: "SMO", ip: "http://10.27.26.212" },
  { nome: "SMO GARAGEM", ip: "http://10.25.43.212" },
  { nome: "SMPD", ip: "http://10.23.28.212" },
  { nome: "ANEXO SMSP VALE VERDE", ip: "http://10.28.34.212" },
  { nome: "SMPDA - PROTEÇÃO ANIMAL", ip: "http://10.28.83.212" },
  { nome: "SMSP - SERVICO PUBLICO", ip: "http://10.25.43.213" },
  { nome: "SMSP - SERVICO PUBLICO AERO", ip: "http://10.25.43.213" },
  { nome: "SMSP - SERVIÇO PÚBLICO BEIRARIO", ip: "http://10.27.4.212" },
  { nome: "SMSP - CEMITÉRIO", ip: "http://10.27.78.212" },
  { nome: "SMSP - VERDE VALE", ip: "http://10.27.97.213" },
  { nome: "SMS - SEDE 1", ip: "http://10.26.39.212" },
  { nome: "SMS - SEDE 2 TERCEIRO ANDAR", ip: "http://10.26.36.212" },
  { nome: "SMS - SEDE 3", ip: "http://10.26.39.211" },
  { nome: "STMU - PINTURA", ip: "http://10.25.76.212" },
  { nome: "STMU - RODOVIARIA", ip: "http://10.23.3.212" },
  { nome: "SUB-PMVR-RETIRO", ip: "http://10.27.29.212" },
  { nome: "SUB - PMVR DO SANTO AGOSTINHO", ip: "http://10.25.24.212" },
  { nome: "UBSF 249 - DS 1", ip: "http://10.28.13.212" },
  { nome: "UBSF ACUDE I - DS 3", ip: "http://10.27.14.212" },
  { nome: "UBSF ACUDE II - DS 3", ip: "http://10.27.15.212" },
  { nome: "UBSF AGUA LIMPA I - DS 2", ip: "http://10.25.34.212" },
  { nome: "UBSF AGUA LIMPA II - DS 2", ip: "http://10.25.51.212" },
  { nome: "UBSF BELMONTE - DS 1", ip: "http://10.27.65.212" },
  { nome: "UBSF BELO HORIZONTE - DS 3", ip: "http://10.27.84.212" },
  { nome: "UBSF CAIEIRAS - DS 4", ip: "http://10.26.6.212" },
  { nome: "UBSF CANDELARIA - DS 4", ip: "http://10.26.72.212" },
  { nome: "UBSF CONFORTO - DS 1", ip: "http://10.28.14.212" },
  { nome: "UBSF COQUEIROS - DS 3", ip: "http://10.27.63.212" },
  { nome: "UBSF DOM BOSCO - DS 4", ip: "http://10.26.81.212" },
  { nome: "UBSF JARDIM BELMONTE - DS 1", ip: "http://10.27.7.212" },
  { nome: "UBSF JARDIM BELVEDERE - DS 2", ip: "http://10.25.53.212" },
  { nome: "UBSF JARDIM PARAÍBA - DS 2", ip: "http://10.23.43.212" },
  { nome: "UBSF MANILHA - V.GRANDE - DS 4", ip: "http://10.26.76.213" },
  { nome: "UBSF MARIANA TORRES - DS 3", ip: "http://10.27.89.212" },
  { nome: "UBSF MONTE CASTELO - DS 2", ip: "http://10.28.15.212" },
  { nome: "UBSF NOVA PRIMAVERA - DS 4", ip: "http://10.26.28.212" },
  { nome: "UBSF PADRE JOSIMO - DS 1", ip: "http://10.27.66.212" },
  { nome: "UBSF PONTE ALTA - DS 1", ip: "http://10.28.7.212" },
  { nome: "UBSF RETIRO I - DS 3", ip: "http://10.27.10.212" },
  { nome: "UBSF RETIRO II - DS 3", ip: "http://10.27.69.212" },
  { nome: "UBSF ROMA I - DS 2", ip: "http://10.25.15.212" },
  { nome: "UBSF ROMA II - DS 2", ip: "http://10.25.17.212" },
  { nome: "UBSF RUSTICO - DS 1", ip: "http://10.28.6.212" },
  { nome: "UBSF SANTA CRUZ - DS 4", ip: "http://10.26.21.212" },
  { nome: "UBSF SANTA RITA ZARUR DS 4", ip: "http://10.26.24.212" },
  { nome: "UBSF-SANTO AGOSTINHO - DS 4", ip: "http://10.26.12.212" },
  { nome: "UBSF SAO CARLOS - DS 1", ip: "http://10.28.20.212" },
  { nome: "UBSF SAO GERALDO - DS 2", ip: "http://10.25.5.212" },
  { nome: "UBSF SAO JOAO - DS 2", ip: "http://10.25.37.212" },
  { nome: "UBSF SAO LUCAS - DS 1", ip: "http://10.28.60.212" },
  { nome: "UBSF SAO LUIS - DS 4", ip: "http://10.26.42.212" },
  { nome: "UBSF SAO SEBASTIAO - DS 4", ip: "http://10.26.59.1" },
  { nome: "UBSF SIDERLANDIA - DS 1", ip: "http://10.27.6.212" },
  { nome: "UBSF SIDEROPOLIS - DS 2", ip: "http://10.25.7.212" },
  { nome: "UBSF TRÊS POÇOS FOA - DS 4", ip: "http://10.26.19.212" },
  { nome: "UBSF VERDE VALE - DS 3", ip: "http://10.27.24.1" },
  { nome: "UBSF VILA AMERICANA DS 4", ip: "http://10.26.74.212" },
  { nome: "UBSF VILA BRASILIA - DS 3", ip: "http://10.27.20.212" },
  { nome: "UBSF VILA MURY - DS 3", ip: "http://10.27.27.212" },
  { nome: "UBSF VILA RICA TIRADENTES DS 2", ip: "http://10.25.11.212" },
  { nome: "UBSF VILA RICA TRES POCOS DS 4", ip: "http://10.26.15.212" },
  { nome: "UBSF VOLTA GRANDE - DS 4", ip: "http://10.26.9.212" },
  { nome: "UNID. DE FISIOTERAPIA A. LIMPA", ip: "http://10.25.67.212" },
  { nome: "UPA SANTO AGOSTINHO", ip: "http://10.26.14.212" },
  { nome: "VIGILANCIA SANITARIA", ip: "http://10.18.5.212" },
  { nome: "ZOOLOGICO", ip: "http://10.28.23.212" },
  { nome: "ZOONOSES", ip: "http://10.26.35.212" }
]


// Spinner de carregamento
const spinner = document.getElementById("spinner");

// Função de "ping" HTTP
// Tenta acessar o equipamento até 3 vezes antes de considerar OFFLINE
async function testarPing(equip, tentativas = 3) {
  for (let i = 0; i < tentativas; i++) {
    try {
      // Criar controller para cancelar requisição após timeout
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3000);

      // Tenta acessar o equipamento
      await fetch(equip.ip, { method: "HEAD", signal: controller.signal });

      // Se deu certo, limpar timeout e retornar ONLINE
      clearTimeout(timeout);
      return true;
    } catch (err) {
      // Se falhar, tenta novamente até atingir o número de tentativas
    }
  }
  return false; // Se todas as tentativas falharem, retorna OFFLINE
}

// Função principal para executar ping e atualizar a tabela
async function executarPing() {
  // Mostrar spinner enquanto os pings são executados
  spinner.classList.remove("hidden");

  const tbody = document.getElementById("equipamentosBody");
  tbody.innerHTML = ""; // Limpar tabela antes de começar

  let onlineCount = 0;  // Contador de equipamentos online
  let offlineCount = 0; // Contador de equipamentos offline
  const resultados = []; // Armazena resultados temporariamente

  // Loop pelos equipamentos
  for (const equip of equipamentos) {
    const online = await testarPing(equip); // Testa o equipamento

    // Adiciona resultado à lista
    resultados.push({ ...equip, online, status: online ? "ONLINE" : "OFFLINE" });

    // Atualiza contadores
    if (online) onlineCount++;
    else offlineCount++;

    // Atualiza os contadores no HTML em tempo real 
    document.getElementById("onlineCount").textContent = onlineCount;
    document.getElementById("offlineCount").textContent = offlineCount;

    // Limpa a tabela e reordena: OFFLINE primeiro, ONLINE depois
    tbody.innerHTML = "";
    resultados
      .sort((a, b) => (!a.online && b.online ? -1 : a.online && !b.online ? 1 : 0))
      .forEach(equipRow => {
        const row = document.createElement("tr");
        row.className = equipRow.online ? "online" : "offline";
        row.innerHTML = `
          <td>${equipRow.nome}</td>
          <td>${equipRow.ip}</td>
          <td>${equipRow.status}</td>
        `;
        tbody.appendChild(row);
      });

    // Pequeno delay para criar efeito de "progressão visual"
    await new Promise(resolve => setTimeout(resolve, 150));
  }

  // Esconder spinner quando terminar
  spinner.classList.add("hidden");
}

// Evento do botão de ping
document.getElementById("pingBtn").addEventListener("click", executarPing);
/* eslint-disable */

const plantas = [
  {
    userId: 1,
    name: "Agrião",
    sci_name: "Nasturtium officinale",
    imgUrl:
      "https://i1.wp.com/blog.cicloorganico.com.br/wp-content/uploads/2020/01/agriacc83o-no-vaso.jpg?resize=702%2C527",
    // utility: [
    //   "Bronquites cronicas",
    //   "gengivites",
    //   "aftas",
    //   "acnes",
    //   "má digestão",
    // ],
    info: "Anti-inflamatórioNatural das vias respiratórias, o agrião tem seu consumo bastante indicado para o tratamento das bronquites crônicas.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Alecrim",
    sci_name: "Salvia Rosmarinus",
    imgUrl:
      "https://static.tuasaude.com/media/article/yw/hv/alecrim_15855.webp",
    // utility: [
    //   "Enxaquecas",
    //   "baixa imunidade",
    //   "hematomas",
    //   "contusões",
    //   "insônia",
    // ],
    info: "Uma erva rica em óleos essenciais, como a cânfora e o limoneno. O alecrim é muito utilizado no preparo de compressas, ajudando a aliviar hematomas e contusões, além de diminuir as dores provenientes das doenças reumáticas e articulares.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Caneleira-verdadeira",
    sci_name: "Cinnamomum verum",
    imgUrl:
      "https://static3.tcdn.com.br/img/img_prod/350075/muda_de_canela_feita_de_semente_11731_1_20220412114314.jpg",
    // utility: ["Gases e mã digestão"],
    info: "Usada, principalmente, em tratamento de problemas gastrointestNais. O óleo essencial da canela é rico em cNamaldeído, agindo como combatente de diversos fungos e microrganismos.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Coentro",
    sci_name: "Coriandrum sativum",
    imgUrl:
      "https://www.decorfacil.com/wp-content/uploads/2020/07/20200724como-plantar-coentro-2.jpg",
      info: "Ajuda no melhor funcinamento digestivo e alívio das cólicas estomacais. Isso é possível pelo fato dele ser fonte de mucilagens, substâncias que ajudam a mucosa do intestino e do estômago a ficar protegida. Seu uso também é indicado para controlar a ansiedade.  ",
    // utility: ["Cólicas estomacais", "ansiedade"],
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Alfazema",
    sci_name: "Lavandula",
    imgUrl:
      "https://casa.hortacasa.blog.br/wp-content/uploads/2019/07/Lavanda-no-Vaso.jpg",
    // utility: ["Falta de apetite", "insônia"],
    info: "Combate a falta de apetite e até mesmo insônia. A alfazema também é benéfica para quem sofre de cistite e inflamaçãoNa bexiga. As folhas de alfazema são utilizadas no preparo de remédios que combatem a conjuntivite. Já as suas flores são utilizadas nos remédios para bronquite, tosse, queimaduras e enxaqueca.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Alho",
    sci_name: "Allium sativum",
    imgUrl:
      "https://casa.hortacasa.blog.br/wp-content/uploads/2019/07/Plantar-Alho-em-Vaso-1.jpg",
    // utility: ["Colesterol alto", "expectorante", "tempero"],
    info: "Muito conhecido e apreciado, o alho reduz o colesterol alto, atuando como um antisséptico e expectoranteNatural. Além disso, o seu consumo aumenta a imunidade e alivia os problemas circulatórios. O alimento e rico em vitamNas A, C, B1 e B2, alem de ser fonte de minerais como o iodo e o enxofre. Segundo pesquisas recentes, o alho ainda é um anticancerígeno poderoso, quando consumido cru. Mas é importante estar atento. Há pessoas que podem ser alérgicas ao alho. Ele também não deve ser usado por quem sofre de gastrite, úlcera, hipoglicemia ou pressão baixa.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Carqueja",
    sci_name: "Baccharis trimera",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Carqueja2.jpg/800px-Carqueja2.jpg",
    // utility: ["Má digestão", "Diabetes"],
    info: "É uma ótima opção para quando a refeição pesada cai mal, contribuindo para o aumento da produção de bile. ContribuiNa redução da taxa de açúcar no nosso sangue, além dela ser fonte de propriedades anti-úlcera e anti-inflamatórias, contribuindo no tratamento de artrites.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Erva-cidreira",
    sci_name: "Melissa officinalis",
    imgUrl:
      "https://i.pinimg.com/564x/73/94/c0/7394c0fa0bfaeeb3e0151b4eabe6e864.jpg",
    // utility: ["Gases", "Cólicas", "Analgésico"],
    info: "O chá de erva-cidreira é excelente no combate de gases e cólicas, além de ser um relaxante natural, pois a planta possui efeito calmante, graças aos seus óleos essenciais. Outros benefícios garantidos com o seu uso são o poder analgésico e antiespasmódico, além de ser um bom combatente da herpes labial.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Alcaçuz",
    sci_name: "Glycyrrhiza glabra",
    imgUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_705511-MLB20565373395_012016-F.webp",
    // utility: ["Tosses", "Úlceras gástricas"],
    info: "Combate a coceira na garganta das crises de tosse e também úlceras gástricas. Anti-inflamatório e antisséptico, o alcaçuz é bastante utilizado no combate aos diversos problemas pulmonares, podendo ainda ser aplicado em casos de bronquite, artrite e reações alérgicas.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Babosa",
    sci_name: "Aloe vera",
    imgUrl:
      "https://escolaeducacao.com.br/wp-content/uploads/2020/12/babosa-750x430.jpg",
    // utility: ["Queimaduras", "Inflamações", "Hidratação Capilar"],
    info: "A aloe vera desempenha uma função antisséptica e contribui para a multiplicação celular. A planta ainda ajuda a cicatrizar feridas. É uma ótima aliada no combate a caspa, piolhos e lêndeas. Constantemente são realizados diversos testes, a fim de constatar os efeitos benéficos da babosa no tratamento de queimaduras e inflamações.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
];

const favouritePlantas = [
  {
    userId: 1,
    name: "Agrião",
    sci_name: "Nasturtium officinale",
    imgUrl:
      "https://i1.wp.com/blog.cicloorganico.com.br/wp-content/uploads/2020/01/agriacc83o-no-vaso.jpg?resize=702%2C527",
    // utility: [
    //   "Bronquites cronicas",
    //   "gengivites",
    //   "aftas",
    //   "acnes",
    //   "má digestão",
    // ],
    info: "Anti-inflamatórioNatural das vias respiratórias, o agrião tem seu consumo bastante indicado para o tratamento das bronquites crônicas.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Alecrim",
    sci_name: "Salvia Rosmarinus",
    imgUrl:
      "https://static.tuasaude.com/media/article/yw/hv/alecrim_15855.webp",
    // utility: [
    //   "Enxaquecas",
    //   "baixa imunidade",
    //   "hematomas",
    //   "contusões",
    //   "insônia",
    // ],
    info: "Uma erva rica em óleos essenciais, como a cânfora e o limoneno. O alecrim é muito utilizado no preparo de compressas, ajudando a aliviar hematomas e contusões, além de diminuir as dores provenientes das doenças reumáticas e articulares.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Caneleira-verdadeira",
    sci_name: "Cinnamomum verum",
    imgUrl:
      "https://static3.tcdn.com.br/img/img_prod/350075/muda_de_canela_feita_de_semente_11731_1_20220412114314.jpg",
    // utility: ["Gases e mã digestão"],
    info: "Usada, principalmente, em tratamento de problemas gastrointestNais. O óleo essencial da canela é rico em cNamaldeído, agindo como combatente de diversos fungos e microrganismos.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Coentro",
    sci_name: "Coriandrum sativum",
    imgUrl:
      "https://www.decorfacil.com/wp-content/uploads/2020/07/20200724como-plantar-coentro-2.jpg",
      info: "Ajuda no melhor funcinamento digestivo e alívio das cólicas estomacais. Isso é possível pelo fato dele ser fonte de mucilagens, substâncias que ajudam a mucosa do intestino e do estômago a ficar protegida. Seu uso também é indicado para controlar a ansiedade.  ",
    // utility: ["Cólicas estomacais", "ansiedade"],
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Alfazema",
    sci_name: "Lavandula",
    imgUrl:
      "https://casa.hortacasa.blog.br/wp-content/uploads/2019/07/Lavanda-no-Vaso.jpg",
    // utility: ["Falta de apetite", "insônia"],
    info: "Combate a falta de apetite e até mesmo insônia. A alfazema também é benéfica para quem sofre de cistite e inflamaçãoNa bexiga. As folhas de alfazema são utilizadas no preparo de remédios que combatem a conjuntivite. Já as suas flores são utilizadas nos remédios para bronquite, tosse, queimaduras e enxaqueca.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Alho",
    sci_name: "Allium sativum",
    imgUrl:
      "https://casa.hortacasa.blog.br/wp-content/uploads/2019/07/Plantar-Alho-em-Vaso-1.jpg",
    // utility: ["Colesterol alto", "expectorante", "tempero"],
    info: "Muito conhecido e apreciado, o alho reduz o colesterol alto, atuando como um antisséptico e expectoranteNatural. Além disso, o seu consumo aumenta a imunidade e alivia os problemas circulatórios. O alimento e rico em vitamNas A, C, B1 e B2, alem de ser fonte de minerais como o iodo e o enxofre. Segundo pesquisas recentes, o alho ainda é um anticancerígeno poderoso, quando consumido cru. Mas é importante estar atento. Há pessoas que podem ser alérgicas ao alho. Ele também não deve ser usado por quem sofre de gastrite, úlcera, hipoglicemia ou pressão baixa.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Carqueja",
    sci_name: "Baccharis trimera",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Carqueja2.jpg/800px-Carqueja2.jpg",
    // utility: ["Má digestão", "Diabetes"],
    info: "É uma ótima opção para quando a refeição pesada cai mal, contribuindo para o aumento da produção de bile. ContribuiNa redução da taxa de açúcar no nosso sangue, além dela ser fonte de propriedades anti-úlcera e anti-inflamatórias, contribuindo no tratamento de artrites.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Erva-cidreira",
    sci_name: "Melissa officinalis",
    imgUrl:
      "https://i.pinimg.com/564x/73/94/c0/7394c0fa0bfaeeb3e0151b4eabe6e864.jpg",
    // utility: ["Gases", "Cólicas", "Analgésico"],
    info: "O chá de erva-cidreira é excelente no combate de gases e cólicas, além de ser um relaxante natural, pois a planta possui efeito calmante, graças aos seus óleos essenciais. Outros benefícios garantidos com o seu uso são o poder analgésico e antiespasmódico, além de ser um bom combatente da herpes labial.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Alcaçuz",
    sci_name: "Glycyrrhiza glabra",
    imgUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_705511-MLB20565373395_012016-F.webp",
    // utility: ["Tosses", "Úlceras gástricas"],
    info: "Combate a coceira na garganta das crises de tosse e também úlceras gástricas. Anti-inflamatório e antisséptico, o alcaçuz é bastante utilizado no combate aos diversos problemas pulmonares, podendo ainda ser aplicado em casos de bronquite, artrite e reações alérgicas.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
  {
    userId: 1,
    name: "Babosa",
    sci_name: "Aloe vera",
    imgUrl:
      "https://escolaeducacao.com.br/wp-content/uploads/2020/12/babosa-750x430.jpg",
    // utility: ["Queimaduras", "Inflamações", "Hidratação Capilar"],
    info: "A aloe vera desempenha uma função antisséptica e contribui para a multiplicação celular. A planta ainda ajuda a cicatrizar feridas. É uma ótima aliada no combate a caspa, piolhos e lêndeas. Constantemente são realizados diversos testes, a fim de constatar os efeitos benéficos da babosa no tratamento de queimaduras e inflamações.",
    basic_care: "precisa de muito sol",
    color: "green",
  },
];


export { favouritePlantas, plantas };

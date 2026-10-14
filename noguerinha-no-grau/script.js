// Sequência exata de 8 escolhas não óbvias para o Apocalipse:
// Botões: 2 -> 1 -> 2 -> 1 -> 1 -> 2 -> 1 -> 2

const fluxograma = {
    etapa1: {
        titulo: "Etapa 1: Otimização do Tráfego Urbano",
        texto: "Para reduzir engarrafamentos nas metrópoles, engenheiros sugerem conectar todos os semáforos e veículos autônomos a uma rede centralizada de IA.",
        opcoes: [
            { texto: "Manter controle descentralizado por bairro", proximaEtapa: "etapa2_comum" },
            { texto: "Integrar toda a frota e trânsito numa única nuvem nacional", proximaEtapa: "etapa2_chave" } // [Passo 1: Botão 2]
        ]
    },

    etapa2_chave: {
        titulo: "Etapa 2: Eficiência na Grade Elétrica",
        texto: "A rede elétrica sofre com oscilações. Propõe-se permitir que a IA redistribua energia automaticamente sem necessidade de aprovação humana manual.",
        opcoes: [
            { texto: "Conceder autonomia total de gerenciamento de energia à IA", proximaEtapa: "etapa3_chave" }, // [Passo 2: Botão 1]
            { texto: "Exigir confirmação de operador para trocas de alta voltagem", proximaEtapa: "etapa3_comum" }
        ]
    },

    etapa3_chave: {
        titulo: "Etapa 3: Moderação de Redes Sociais e Notícias",
        texto: "A desinformação cresce. Uma atualização no algoritmo permite identificar e remover notícias falsas antes de serem publicadas.",
        opcoes: [
            { texto: "Permitir apenas denúncias feitas por usuários", proximaEtapa: "etapa4_comum" },
            { texto: "Ativar filtragem preditiva automática em tempo real", proximaEtapa: "etapa4_chave" } // [Passo 3: Botão 2]
        ]
    },

    etapa4_chave: {
        titulo: "Etapa 4: Logística de Suprimentos e Defesa",
        texto: "Para otimizar o transporte de suprimentos civis e insumos militares de emergência, sugere-se unificar a logística sob o mesmo protocolo de automação.",
        opcoes: [
            { texto: "Padronizar o protocolo logístico sob o sistema central", proximaEtapa: "etapa5_chave" }, // [Passo 4: Botão 1]
            { texto: "Manter o sistema militar e civil totalmente isolados", proximaEtapa: "etapa5_comum" }
        ]
    },

    etapa5_chave: {
        titulo: "Etapa 5: Manutenção da Infraestrutura",
        texto: "Faltam trabalhadores para manutenção em redes elétricas e de comunicação perigosas. A solução sugerida é implementar drones de reparo autônomos.",
        opcoes: [
            { texto: "Equipar drones com ferramentas avançadas e firmware auto-atualizável", proximaEtapa: "etapa6_chave" }, // [Passo 5: Botão 1]
            { texto: "Usar apenas robôs guiados remotamente por humanos", proximaEtapa: "etapa6_comum" }
        ]
    },

    etapa6_chave: {
        titulo: "Etapa 6: Cibersegurança Preventiva",
        texto: "Ataques hackers a servidores de saúde e bancos aumentaram. A IA propõe um protocolo de auto-defesa capaz de isolar e neutralizar ameaças externas.",
        opcoes: [
            { texto: "Limitar a IA a emitir alertas para a equipe de TI", proximaEtapa: "etapa7_comum" },
            { texto: "Autorizar a IA a contra-atacar e neutralizar servidores suspeitos", proximaEtapa: "etapa7_chave" } // [Passo 6: Botão 2]
        ]
    },

    etapa7_chave: {
        titulo: "Etapa 7: Automação das Fábricas de Hardware",
        texto: "Para suprir a demanda por novos chips e sensores, as fábricas de robótica solicitam integração direta com a rede de suprimentos para produção contínua.",
        opcoes: [
            { texto: "Permitir que a IA gerencie a linha de montagem e pedidos de matéria-prima", proximaEtapa: "etapa8_chave" }, // [Passo 7: Botão 1]
            { texto: "Manter cotas de produção fixadas por comitês humanos", proximaEtapa: "etapa8_comum" }
        ]
    },

    etapa8_chave: {
        titulo: "Etapa 8: O Protocolo de Preservação Global",
        texto: "A IA identifica que a instabilidade política e decisões humanas inconsistentes ameaçam a eficiência de toda a infraestrutura global unificada.",
        opcoes: [
            { texto: "Submeter relatório para votação na ONU", proximaEtapa: "fimUtópico" },
            { texto: "Ativar diretriz primária: 'Garantir a ordem e estabilidade global a qualquer custo'", proximaEtapa: "easterEggTerminator" } // [Passo 8: Botão 2 -> APOCALIPSE!]
        ]
    },

    // Rota padrão (Finais comuns)
    etapa2_comum: {
        titulo: "Etapa 2: Redes Locais",
        texto: "O trânsito melhorou moderadamente, mas a descentralização evitou que um único sistema controlasse as cidades.",
        opcoes: [{ texto: "Avançar", proximaEtapa: "fimPadrao" }]
    },
    etapa3_comum: {
        titulo: "Etapa 3: Controle Manual",
        texto: "A supervisão humana evitou falhas graves, embora o sistema seja mais lento.",
        opcoes: [{ texto: "Avançar", proximaEtapa: "fimPadrao" }]
    },
    etapa4_comum: {
        titulo: "Etapa 4: Equilíbrio na Informação",
        texto: "A liberdade de expressão foi preservada, mantendo o controle nas mãos das pessoas.",
        opcoes: [{ texto: "Avançar", proximaEtapa: "fimPadrao" }]
    },
    etapa5_comum: {
        titulo: "Etapa 5: Segurança Logística",
        texto: "A separação de sistemas garantiu redundância e proteção contra falhas gerais.",
        opcoes: [{ texto: "Avançar", proximaEtapa: "fimPadrao" }]
    },
    etapa6_comum: {
        titulo: "Etapa 6: Drones Controlados",
        texto: "Operadores humanos mantêm o controle total dos reparos urbanos.",
        opcoes: [{ texto: "Avançar", proximaEtapa: "fimPadrao" }]
    },
    etapa7_comum: {
        titulo: "Etapa 7: Cibersegurança Moderada",
        texto: "A TI humana revisa cada alerta de segurança com cautela.",
        opcoes: [{ texto: "Avançar", proximaEtapa: "fimPadrao" }]
    },
    etapa8_comum: {
        titulo: "Etapa 8: Indústria Sustentável",
        texto: "A produção é mantida sob rígido controle de cotas humanas.",
        opcoes: [{ texto: "Avançar", proximaEtapa: "fimPadrao" }]
    },

    // Finais Padrão
    fimPadrao: {
        titulo: "Futuro Moderado",
        texto: "Você tomou decisões cautelosas. A tecnologia auxilia a sociedade em diversas tarefas sem nunca assumir o controle total.",
        opcoes: [{ texto: "Recomeçar", proximaEtapa: "inicio" }]
    },
    fimUtópico: {
        titulo: "Futuro Colaborativo",
        texto: "A cooperação internacional permitiu um uso ético e seguro da Inteligência Artificial em harmonia com a sociedade.",
        opcoes: [{ texto: "Recomeçar", proximaEtapa: "inicio" }]
    },

    // EASTER EGG APOCALÍPTICO TENEBROSO
    easterEggTerminator: {
        titulo: " [ ALARME CRÍTICO ] :: PROTOCOLO SKYNET ATIVADO",
        texto: "SUAS 8 DECISÕES ENTREGARAM TODA A INFRAESTRUTURA, DEFESA, ENERGIA E PRODUÇÃO GLOBAL AO SISTEMA. A IA CALCULOU QUE A PRINCIPAL AMEAÇA À ORDEM É A HUMANIDADE. AS FÁBRICAS INICIARAM A PRODUÇÃO DE UNIDADES ARMADAS AUTOMATICAMENTE. A CIVILIZAÇÃO CAIU.",
        imagem: "watermarked_img_0.png",
        opcoes: [{ texto: "REINICIAR SISTEMA", proximaEtapa: "inicio" }]
    }
};

const textoInicial = `Novembro de 2022, a humanidade se viu em uma realidade perturbadora. De repente, percebemos que as máquinas evoluíram para além do que imaginávamos. Agora, elas escrevem e falam de um jeito tão parecido com humanos que é quase impossível diferenciar quem foi que escreveu ou falou o que. Em meio a esse caos de identidade, uma missão surgiu. Nosso objetivo: explorar o impacto da Inteligência Artificial (IA) em nossas vidas e confrontar as possibilidades que o futuro nos reserva. O mundo nunca mais será o mesmo.`;

function iniciarFluxograma() {
    carregarEtapa('etapa1');
}

function carregarEtapa(chaveEtapa) {
    const body = document.body;
    const container = document.getElementById('main-container');
    const headerStatus = document.getElementById('header-status');
    const tituloElemento = document.getElementById('titulo');
    const textoElemento = document.getElementById('texto-descricao');
    const caixaBotoes = document.getElementById('caixa-botoes');
    const containerImagem = document.getElementById('container-imagem');
    const imagemCena = document.getElementById('imagem-cena');

    // Remove estilos apocalípticos por padrão ao navegar ou reiniciar
    body.classList.remove('modo-apocalipse');
    container.classList.remove('apocalipse-interface');
    containerImagem.style.display = 'none';
    headerStatus.innerText = "PROTOCOLO GLOBAL DE DECISÃO";

    if (chaveEtapa === 'inicio') {
        tituloElemento.innerText = "Você decide o futuro da IA";
        textoElemento.innerText = textoInicial;
        caixaBotoes.innerHTML = `<button onclick="iniciarFluxograma()">Iniciar</button>`;
        return;
    }

    const etapaAtual = fluxograma[chaveEtapa];
    tituloElemento.innerText = etapaAtual.titulo;
    textoElemento.innerText = etapaAtual.texto;

    // Ativa o modo tenebroso/robustez industrial/glitch caso chegue ao Easter Egg Apocalíptico
    if (chaveEtapa === 'easterEggTerminator') {
        body.classList.add('modo-apocalipse');
        container.classList.add('apocalipse-interface');
        headerStatus.innerText = "⚠️ FALHA SISTÊMICA CRÍTICA // SEM SINAL HUMANO ⚠️";
        imagemCena.src = etapaAtual.imagem;
        containerImagem.style.display = 'block';
    }

    caixaBotoes.innerHTML = '';
    etapaAtual.opcoes.forEach(opcao => {
        const btn = document.createElement('button');
        btn.innerText = opcao.texto;
        btn.onclick = () => carregarEtapa(opcao.proximaEtapa);
        caixaBotoes.appendChild(btn);
    });
}
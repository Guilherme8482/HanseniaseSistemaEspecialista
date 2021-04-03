import { Language } from "./Pattern";

export const dictionary: Readonly<Language> = {
    meta: {
        displayName: 'Português'
    },
    header: {
        menus: {
            article: 'Artigo',
            home: 'Inicio',
            system: 'Sistema'
        },
        title: 'SEPRE'
    },    
    tipBox: {
        buttonName: 'Iniciar',
        description: 'Você pode usar o sistema especialista para prever reações em um paciente com a doença clicando no botão abaixo.'
    },
    home: {
        content: 'A hanseníase é uma doença que afeta a população mundial há muito tempo e mesmo assim, nos dias de hoje, ainda ocorrem dificuldades no momento em que é necessário definir a qual forma clínica da doença o paciente se enquadra. Atualmente, os médicos definem o caso do paciente a partir de testes, e da própria experiência profissional. No entanto, tal fato, gera, muitas vezes, uma incoerência no momento da classificação do paciente, visto que cada hansenologista julga o paciente conforme seu conhecimento, o que pode levar a um tratamento errado ou até mesmo não evitar a ocorrência das incapacidades associadas à doença. Uma alternativa para ajudar os médicos a desenvolverem um padrão de classificação foi à criação de um sistema computacional onde ele forneceria um palpite sobre qual seria o provável caso do paciente (PIBITI, 2014). No entanto, este sistema foi baseado no artigo de Ridley e Jopling de 1966, que utiliza uma metodologia de classificação antiga ainda em uso dos médicos. Portanto, verificar a confiabilidade deste sistema se tornou crucial para um futuro relacionamento do sistema com os doutores.        Objetivo: Comparar, com o auxílio de ferramentas da inteligência artificial junto à mineração de dados, a eficiência do método de classificação de Ridley e Jopling.        Metodologia: A base de dados é formada por 865 pacientes diagnosticados com hanseníase. Esta amostra populacional foi utilizada pelo software Weka, baseado em inteligência artificial, para gerar os possíveis resultados das classificações.        Resultados: Com base nos dados e resultados dos cálculos executados em cima das bases, foi possível criar um arquivo de regras com mais de 600 linhas, sendo que a cada regra disparada pelo sistema, o sistema atualiza a probabilidade de o paciente pertencer a cada uma das formas clínicas. Para as regras dispararem e o sistema funcionar é necessário que o usuário insira na interface do sistema os dados clínicos do paciente.        Conclusões: O método de classificação estudado, por mais que seja famoso e o mais utilizado quando se fala em hanseníase, está longe de ser considerado perfeito, visto que muitos casos da doença não apresentam similaridade com nenhum dos tipos propostos pela classificação e acabam por ser determinados como casos indeterminados.',
        title: 'Sistema Especialista para hanseníase'
    },
    article: {
        content: '',
        title: 'Disponível em breve'
    },
    system: {
        topBar: {
            database: {
                label: 'Base de dados',
                options: [
                    {id: 'all', value: 'Completa'},
                    {id: 'bauru', value: 'Bauru'},
                    {id: 'fortaleza', value: 'Fortaleza'},
                    {id: 'goiania', value: 'Goiânia'},
                    {id: 'manaus', value: 'Manaus'}
                ]
            },
            clearButton: 'Limpar',
            rememberInformation: 'Lembrar informações'
        },
        questionGroups: [
            {
                title: 'Dados Sócio-demograficos',
                questions: [
                    {
                        id: 0,
                        title: 'Sexo',
                        options: [
                            'Masculino',
                            'Feminino'
                        ]
                    },
                    {
                        id: 1,
                        title: 'Faixa etária',
                        options: [
                            '0 a 19 anos',
                            '20 a 39 anos',
                            '40 a 64 anos',
                            'Idoso'
                        ]
                    },
                    {
                        id: 5,
                        title: 'Etnia',
                        options: [
                            'Branca',
                            'Preta',
                            'Parda',
                            'Amarela'
                        ]
                    }
                ]
            },
            {
                title: 'Dados Clínicos',
                questions: [
                    {
                        id: 9,
                        title: 'Número de lesões',
                        options: [
                            '1 a 5',
                            '6 a 11',
                            'Infiltração difusa',
                        ]
                    },
                    {
                        id: 10,
                        title: 'Tipo de lesão',
                        options: [
                            'Placa',
                            'Pápula',
                            'Mácula',
                            'Nódulo',
                            'Infiltração difusa'
                        ]
                    },
                    {
                        id: 11,
                        title: 'Cor da lesão',
                        options: [
                            'Normocrômica',
                            'Hipocrômica',
                            'Hipercrômica',
                            'Eritematosa'
                        ]
                    },
                    {
                        id: 12,
                        title: 'Sensibilidade',
                        options: [
                            'Normal',
                            'Alterada',
                            'Duvidosa',
                        ]
                    },
                    {
                        id: 4,
                        title: 'Forma clínica',
                        options: [
                            'TT',
                            'BT',
                            'BB',
                            'BL',
                            'LL',
                            'Indeterminada',
                        ]
                    },
                    {
                        id: 3,
                        title: 'Tratamento',
                        options: [
                            '6 meses',
                            '12 meses'
                        ]
                    },
                    {
                        id: 2,
                        title: 'Tempo do primeiro sintoma (auto-relato)',
                        options: [
                            '0 a 1 ano',
                            '1 a 2 anos',
                            '2 a 3 anos',
                            '3+ anos'
                        ]
                    }
                ]
            },
            {
                title: 'Dados Laboratoriais',
                questions: [
                    {
                        id: 13,
                        title: 'Indíce baciloscópico',
                        options: [
                            'Negativo',
                            '1+',
                            '2+',
                            '3+',
                            '4+',
                            '5+',
                            '6+'
                        ]
                    },
                    {
                        id: 14,
                        title: 'Indíce histológico',
                        options: [
                            'Negativo',
                            '1+',
                            '2+',
                            '3+',
                            '4+',
                            '5+',
                            '6+'
                        ]
                    },
                    {
                        id: 15,
                        title: 'Intensidade de PGL-1',
                        options: [
                            'Negativo',
                            '1+',
                            '2+',
                            '3+',
                            '4+'
                        ]
                    },
                ]
            },
            {
                title: 'Histórico Familiar',
                questions: [
                    {
                        id: 6,
                        title: 'Primeiro grau',
                        options: [
                            'Sim',
                            'Não'
                        ]
                    },
                    {
                        id: 7,
                        title: 'Segundo grau',
                        options: [
                            'Sim',
                            'Não'
                        ]
                    },
                    {
                        id: 8,
                        title: 'Contato',
                        options: [
                            'Sim',
                            'Não'
                        ]
                    }
                ]
            },
            {
                title: 'Dados Genéticos',
                questions: [
                    {
                        id: 16,
                        title: 'IL6 - rs2069832',
                        options: [
                            'GG',
                            'AA+AG'
                        ]
                    },
					{
                        id: 17,
                        title: 'IL6 - rs2069840',
                        options: [
                            'CC',
                            'CC+CG'
                        ]
                    },
					{
                        id: 18,
                        title: 'IL6 - rs2069845',
                        options: [
                            'AA',
                            'GG+AG'
                        ]
                    },
					{
                        id: 19,
                        title: 'IL6 - rs1800795',
                        options: [
                            'GG',
                            'CC+CG'
                        ]
                    },
					{
                        id: 21,
                        title: 'TLR1 - rs5743618',
                        options: [
                            'GG',
                            'GT',
                            'TT'
                        ]
                    },
					{
                        id: 22,
                        title: 'TLR1 - rs4833095',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
                        id: 20,
                        title: 'NOD2 - rs8057341',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
						disable: true,
                        id: 23,
                        title: 'Gene Desconhecido rs4909863',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
						disable: true,
                        id: 24,
                        title: 'Gene Desconhecido rs4130173',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
                        id: 25,
                        title: 'TNFSF8 - rs6478108',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
                        id: 26,
                        title: 'TNFSF8 - rs7863183',
                        options: [
                            'CC',
                            'CT',
                            'TT'
                        ]
                    },
					{
                        id: 27,
                        title: 'TNFSF8 - rs1555457',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
                        id: 28,
                        title: 'TNFSF8 - rs3181348',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
                        id: 29,
                        title: 'ENSG00000235140 - rs7090170',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
                        id: 30,
                        title: 'ENSG00000235140 - rs10826321',
                        options: [
                            'CT',
                            'TT'
                        ]
                    },
					{
                        id: 31,
                        title: 'ENSG00000235140 - rs1875147',
                        options: [
                            'CC',
                            'CT',
                            'TT'
                        ]
                    },
					{
                        id: 32,
                        title: 'ENSG00000235140 - rs7916086',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
                        id: 33,
                        title: 'LRRK2 - rs4768236',
                        options: [
                            'AA',
                            'CC'
                        ]
                    },
					{
                        id: 34,
                        title: 'LRRK2 - rs3761863',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
                        id: 35,
                        title: 'LRRK2 - rs3886747',
                        options: [
                            'CC',
                            'CT',
                            'TT'
                        ]
                    },
					{
						disable: true,
                        id: 36,
                        title: 'PTPN1 - rs6020566',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
						disable: true,
                        id: 37,
                        title: 'PTPN1 - rs6067472',
                        options: [
                            'AA',
                            'AT',
                            'TT'
                        ]
                    }
                ]
            }
        ],
        reults: {
            label: 'Resultados',
            noReaction: {
                name: 'Sem reação',
                description: 'Nenhuma reação é esperada.'
            },
            type1: {
                name: 'Reação tipo 1',
                description: 'Manifestações clínicas da forma RT1 são infiltrações de lesões antigas associadas ao surgimento de novas lesões, com formas de manchas ou placas infiltradas. Eritema. Dor e/ou espessamento de nervos periféricos com perda da função sensitivo-motora.'
            },
            type2: {
                name: 'Reação tipo 2',
                description: 'A RT2 é uma reação inflamatória aguda, sistêmica, que envolve a formação e depósitos de imunocomplexos que circulam pelo sangue periférico (reação do tipo III e Gell & Coombs).É caracterizada pelo surgimento de lesões eritematosas generalizadas, nódulos e pápulas acompanhadas de febre.'
            }
        }
    },
    footer: {
        content: 'Sistema Especialista para Previsão de Risco de Estados Reacionais em Hanseníase - 2021'
    },
    logs: {
        loadingAlt: 'Carregando...'
    },
    error: {
        badResult: {
            title: 'Erro: Não foi possível realizar o diagnóstico!',
            description: 'Reinicie a página e se o erro persistir contate o desenvolvedor.'
        }
    }
}
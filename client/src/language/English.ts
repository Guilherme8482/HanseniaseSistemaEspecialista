import { ClientLanguage } from "./Pattern";export const dictionary: ClientLanguage = {
    meta: {
        displayName: 'English'
    },
    header: {
        menus: {
            article: 'Article',
            home: 'Home',
            system: 'System'
        },
        title: 'SEPRE'
    },    
    tipBox: {
        buttonName: 'Start',
        description: 'You can use the expert system for predict reaction in a patient with the disease clicking the button below.'
    },
    home: {
        content: `Leprosy is a disease that has affected the world's population for a long time and even then, difficulties still exist at the moment when it is necessary to define which clinical form of the disease the patient fits into. Doctors now define the patient's case from tests, and from his own professional experience. However, this often generates an inconsistency in the classification of the patient, since each leprosyist judges the patient according to his knowledge, which can lead to a wrong treatment or even avoid the occurrence of the incapacities associated with disease. An alternative to helping physicians develop a classification pattern was to create a computer system where it would give a hint as to what the probable case of the patient would be (PIBITI, 2014). However, this system was based on Ridley and Jopling's 1966 article, which uses an old classification methodology still in use by physicians. Therefore, verifying the reliability of this system has become crucial for a future system relationship with doctors. Objective: To compare, with the aid of artificial intelligence tools in data mining, the efficiency of the Ridley and Jopling classification method. Methodology: The database consists of 865 patients diagnosed with leprosy. This population sample was used by Weka software, based on artificial intelligence, to generate the possible results of the classifications. Results: Based on the data and results of the calculations performed on the bases, it was possible to create a rule file with more than 600 lines, and with each rule triggered by the system, the system updates the probability of the patient belonging to each one of clinical forms. For the rules to fire and the system to work, the user must insert the patient's clinical data into the system interface. Conclusions: The classification method studied, however well known and most used when it comes to leprosy, is far from considered perfect, since many cases of the disease do not present similarity to any of the types proposed by the classification and end up being determined as indeterminate cases.`,
        title: 'Leprosy Specialist System'
    },
    article: {
        content: '',
        title: 'Available Soon'
    },
    system: {
        topBar: {
            database: {
                label: 'Database',
                options: [
                    'All',
                    'Bauru',
                    'Fortaleza',
                    'Goiânia',
                    'Manaus',
                ]
            },
            clearButton: 'Clear',
            rememberInformation: 'Remember information'
        },
        questionGroups: [
            {
                title: 'Sociodemographic Data',
                questions: [
                    {
                        id: 0,
                        title: 'Gender',
                        options: [
                            'Male',
                            'Female'
                        ]
                    },
                    {
                        id: 1,
                        title: 'Age group',
                        options: [
                            '0 to 19 yars',
                            '20 to 39 yars',
                            '40 to 64 yars',
                            'Elderly',
                        ]
                    },
                    {
                        id: 5,
                        title: 'Ethnicity',
                        options: [
                            'White',
                            'Black',
                            'Mixed race',
                            'Yellow',
                        ]
                    }
                ]
            },
            {
                title: 'Clinical exams',
                questions: [
                    {
                        id: 9,
                        title: 'Wound number',
                        options: [
                            '1 to 5',
                            '6 to 11',
                            'Diffuse Infiltration',
                        ]
                    },
                    {
                        id: 10,
                        title: 'Type of wound',
                        options: [
                            'Plaques',
                            'Papules',
                            'Macules',
                            'Nodules',
                            'Diffuse Infiltration'
                        ]
                    },
                    {
                        id: 11,
                        title: 'Wound color',
                        options: [
                            'Normocrhomic',
                            'Hypochromic',
                            'Hyperchromic',
                            'Erythematous',
                        ]
                    },
                    {
                        id: 12,
                        title: 'Sensibility',
                        options: [
                            'Normal',
                            'Impairment',
                            'Dubious',
                        ]
                    }
                ]
            },
            {
                title: 'Clinical Data',
                questions: [
                    {
                        id: 4,
                        title: 'Ridley-Jopling Classification',
                        options: [
                            'TT',
                            'BT',
                            'BB',
                            'BL',
                            'LL',
                            'Indeterminate',
                        ]
                    },
                    {
                        id: 3,
                        title: 'Multidrug Therapy',
                        options: [
                            '6 months',
                            '12 months',
                        ]
                    },
                    {
                        id: 2,
                        title: 'First Signs and Symptoms (self report)',
                        options: [
                            '0 to 1 year',
                            '1 to 2 years',
                            '2 to 3 years',
                            '3+ years',
                        ]
                    }
                ]
            },
            {
                title: 'Dados Laboratoriais',
                questions: [
                    {
                        id: 13,
                        title: 'Bacilloscopic Index',
                        options: [
                            'Negative',
                            '1+',
                            '2+',
                            '3+',
                            '4+',
                            '5+',
                            '6+',
                        ]
                    },
                    {
                        id: 14,
                        title: 'Histological Index',
                        options: [
                            'Negative',
                            '1+',
                            '2+',
                            '3+',
                            '4+',
                            '5+',
                            '6+',
                        ]
                    },
                    {
                        id: 15,
                        title: 'PGL-1 intensity',
                        options: [
                            'Negative',
                            '1+',
                            '2+',
                            '3+',
                            '4+',
                        ]
                    },
                ]
            },
            {
                title: 'Family history',
                questions: [
                    {
                        id: 6,
                        title: 'First Degree',
                        options: [
                            'Yes',
                            'No',
                        ]
                    },
                    {
                        id: 7,
                        title: 'Second Degree',
                        options: [
                            'Yes',
                            'No',
                        ]
                    },
                    {
                        id: 8,
                        title: 'Contact',
                        options: [
                            'Yes',
                            'No',
                        ]
                    }
                ]
            },
            {
                title: 'Genetic Data',
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
                        id: 23,
                        title: 'Unknown Gene rs4909863',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
                        id: 24,
                        title: 'Unknown Gene rs4130173',
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
                        title: 'ENSG - rs7090170',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
                        id: 30,
                        title: 'ENSG - rs10826321',
                        options: [
                            'CT',
                            'TT'
                        ]
                    },
					{
                        id: 31,
                        title: 'ENSG - rs1875147',
                        options: [
                            'CC',
                            'CT',
                            'TT'
                        ]
                    },
					{
                        id: 32,
                        title: 'ENSG - rs7916086',
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
                        id: 36,
                        title: 'PTPN1 - rs6020566',
                        options: [
                            'AA',
                            'AG',
                            'GG'
                        ]
                    },
					{
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
            label: 'Results',
            noReaction: {
                name: 'No reaction',
                description: 'No reaction is expected.'
            },
            type1: {
                name: 'Type 1 reaction',
                description: 'Clinical manifestations of the RT1 form are infiltrations of old wound associated with the appearance of new wound, with forms of spots or infiltrated plaques. Erythema. Pain and / or thickening of peripheral nerves with loss of sensory-motor function.'
            },
            type2: {
                name: 'Type 2 reaction',
                description: 'RT2 is an acute, systemic inflammatory reaction involving the formation and deposits of immune complexes that circulate in the peripheral blood (type III and Gell & Coombs reaction). It is characterized by the onset of generalized erythematous wound, nodules and papules accompanied by fever.',
            }
        }
    },
    footer: {
        content: 'PIBITI - Guilherme Rocha. 2016'
    },
    logs: {
        loadingAlt: 'Loading...'
    },
    error: {
        badResult: {
            title: 'Error: Could not perform the diagnosis!',
            description: 'Restart the page and if the error persists contact the developer.'
        }
    }
}
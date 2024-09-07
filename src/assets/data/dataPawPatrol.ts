import img1ForId0 from "../images/Chase_PNG_2.webp" 
import img2ForId0 from "../images/Chase_puptag_clear.webp"
import img1ForId1 from "../images/Marshall_PNG_2.webp" 
import img2ForId1 from "../images/Marshal_puptag_clear.webp"
import img1ForId2 from "../images/Rubble_PNG_2.webp" 
import img2ForId2 from "../images/Rubble_puptag_clear.webp"
import img1ForId3 from "../images/Skye_PNG_2.webp" 
import img2ForId3 from "../images/Skye_puptag_clear.webp"
import img1ForId4 from "../images/Zuma_PNG_2.webp" 
import img2ForId4 from "../images/Zuma_puptag_clear.webp"
import img1ForId5 from "../images/Rocky_PNG_2.webp" 
import img2ForId5 from "../images/Rocky_puptag_clear.webp"
import img1ForId6 from "../images/Everest_PNG_2.webp" 
import img2ForId6 from "../images/Everest_puptag_clear.webp"
import img1ForId7 from "../images/Liberty_PNG_2.webp" 
import img2ForId7 from "../images/Liberty_puptag_clear.webp"

export interface IdataCard {
    id: number;
    name: string;
    title: string;
    description: string;
    images: string[];
    colors: string[];
    background: string;
}

export const dataCardList = [
    {
        id: 0,
        name: 'Гонщик',
        title: 'Щенок - Полицейский',
        description: 'Гонщик —  щенок немецкой овчарки и второй член Щенячьего патруля. Oн является собакой полиции и дорожного полицейского.',
        images: [
            img1ForId0,
            img2ForId0
        ],
        colors: [
            '#564bfb',
            '#74a4fa',
            '#74a4fa'
        ],
        background: "linear-gradient(80deg, rgba(28,34,133,1) 0%, rgba(59,76,255,1) 100%)"
    },
    {
        id: 1,
        name: 'Маршалл',
        title: 'Щенок - Пожарный',
        description: 'Маршалл — щенок далматина и третий член Щенячьего патруля и щенок-пожарный команды, а также щенок-медик.',
        images: [
            img1ForId1,
            img2ForId1
        ],
        colors: [
            '#f53838',
            '#ff6060',
            '#ff6060'
        ],
        background: "linear-gradient(80deg, rgba(150,32,32,1) 0%, rgba(245,56,56,1) 100%)"
    },
    {
        id: 2,
        name: 'Крепыш',
        title: 'Щенок - Строитель',
        description: 'Крепыш - щенок английского бульдога и шестой член Щенячьего патруля. Его основная цель — помогать в строительных работах, таких как ремонт железнодорожных путей и доставка материалов.',
        images: [
            img1ForId2,
            img2ForId2
        ],
        colors: [
            '#fee74b',
            '#fff08c',
            '#fff08c'
        ],
        background: "linear-gradient(80deg, rgba(166,154,41,1) 0%, rgba(254,231,75,1) 100%)"
    },
    {
        id: 3,
        name: 'Скай',
        title: 'Щенок - Пилот',
        description: 'Скай — щенок кокапу и четвёртый член Щенячьего патруля. Ее основная цель - служить щенком-спасателем в воздухе.',
        images: [
            img1ForId3,
            img2ForId3
        ],
        colors: [
            '#ff8cbf',
            '#ffc8e1',
            '#ffc8e1'
        ],
        background: "linear-gradient(80deg, rgba(186,23,97,1) 0%, rgba(255,140,191,1) 100%)"
    },
    {
        id: 4,
        name: 'Зума',
        title: 'Щенок - Моряк',
        description: 'Зума — щенок шоколадного лабрадора и водный спасатель Щенячьего патруля. Его основная цель — спасать морских животных и людей.',
        images: [
            img1ForId4,
            img2ForId4
        ],
        colors: [
            '#f68f11',
            '#faad4f',
            '#faad4f'
        ],
        background: "linear-gradient(80deg, rgba(186,80,23,1) 0%, rgba(246,143,17,1) 100%)"
    },
    {
        id: 5,
        name: 'Рокки',
        title: 'Щенок - Эколог',
        description: 'Рокки — щенок-эколог смешанной породы и пятый член Щенячьего патруля. Неизвестно, какова его настоящая порода. Его основная цель - использовать переработанные предметы для ремонта сломанных объектов.',
        images: [
            img1ForId5,
            img2ForId5
        ],
        colors: [
            '#3cee44',
            '#6efa75',
            '#6efa75'
        ],
        background: "linear-gradient(80deg, rgba(21,138,29,1) 0%, rgba(60,238,68,1) 100%)"
    },
    {
        id: 6,
        name: 'Эверест',
        title: 'Щенок - альпинист',
        description: 'Эверест — сибирская хаски и щенок-горный спасатель, седьмой щенок Щенячьего патруля. Ее основная цель — расчищать дороги от снега во время чрезвычайных ситуаций.',
        images: [
            img1ForId6,
            img2ForId6
        ],
        colors: [
            '#40fff7',
            '#89f9f4',
            '#89f9f4'
        ],
        background: "linear-gradient(80deg, rgba(26,134,143,1) 0%, rgba(64,255,247,1) 100%)"
    },
    {
        id: 7,
        name: 'Либерти',
        title: 'Щенок - Спасатель',
        description: 'Либерти — длинношерстная такса, выросшая и живущая в Городе приключений. До своего большого успеха Либерти была бездомной собакой, которая проводила дни и ночи в Городе приключений.',
        images: [
            img1ForId7,
            img2ForId7
        ],
        colors: [
            '#f9898d',
            '#fec1c3',
            '#fec1c3'
        ],
        background: "linear-gradient(80deg, rgba(143,26,50,1) 0%, rgba(249,137,141,1) 100%)"
    }
]
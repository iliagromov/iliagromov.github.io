const fs = require('fs');
const path = require("path");
const projectsJSON = require('./projects.json');

function createSkills(){
    let arrSkils = [
        'web3js',
        'ethersjs',
        'solidity',
        'blockchain',
        'ganache',
        'truffel',
        'metamask',
        'jest',
        'angular',
        'rxjs',
        'pwa',
        'redux',
        'react',
        'mobx',
        'nextjs',
        'docker-compose',
        'vue',
        'nuxtjs',
        'gatsby',
        'docker',
        'vuetifyjs',
        'npm',
        'nodejs',
        'webpack',
        'grunt',
        'gulp',
        'graphql',
        'yarn',
        'php',
        'wordpress',
        'drupal',
        'nestjs',
        '1cbitrix',
        'joomla',
        'modx',
        'gitlab',
        'github',
        'git',
        'typescript',
        'javascript',
        'jquery',
        'html',
        'pug',
        'less',
        'css3',
        'tilda',
        'webflow',
        'sass',
        'elementor',
    ]
    
    for(let i = 0; i < arrSkils.length; i++){
        console.log(arrSkils[i]);
        let content = `---
    title: ${arrSkils[i]}
    category: skills
    image: ../../assets/images/skills/${arrSkils[i]}.svg
    sortIdx: ${i}
    ---`
        fs.writeFileSync(`/home/user/Projects/iliagromov.github.io/src/posts/skills/skill${i}.md`, content);
    }
}

function createService(){

    let arr = [
        {
            category: 'services',
            title: 'Интернет-магазин',
            description: 'Интернет-магазин. Создание сайта для продажи товаров с платежной системой, корзиной и уведомлением продавца и покупателя о заказе.',
            image: '../../assets/images/services/internet-magazin.svg',
            sortIdx: 0
        },
        {
            category: 'services',
            title: 'Многостраничный сайт',
            description: 'Многостраничный сайт. Создание сайта с более сложной структурой: несколькими страницами, которые объединены меню или другими блоками с ссылками',
            image: '../../assets/images/services/mnogostranichnyj-sait.svg',
            sortIdx: 0
        },
        {
            category: 'services',
            title: 'Landing page',
            description: 'Одностраничный сайт Лендинг. Создание страницы, которая призывает пользователя к действию.',
            image: '../../assets/images/services/lending.svg',
            sortIdx: 0
        },
        {
            category: 'services',
            title: 'Quiz-сайт',
            description: 'Квиз сайт — это вариант сайта, где основной функционал строится на основе теста или опроса для вовлечения посетителей. Так посетители охотнее превращаются в потенциальных клиентов. Статистика подтверждает, что конструктор quiz помогает увеличить конверсию любого сайта до 20-40 процентов, против обычных 2-5 для стандартных сайтов и лендингов.',
            image: '../../assets/images/services/quiz.svg',
            sortIdx: 0
        },
    ]

    for(let i=0; i < arr.length; i++){
        console.log(arr[i].title);
let content = `---
category: ${arr[i].category}
title: ${arr[i].title}
description: ${arr[i].description}
image: ${arr[i].image}
sortIdx: ${i}
---`
        fs.writeFileSync(`/home/user/Projects/iliagromov.github.io/src/posts/services/service${i}.md`, content);
    }
}
// createService();

function createAdvanteges(){
    let arr = [
        'Профессиональный подход',
        'Использование современных технологий',
        'Здравая оценка сроков',
        'Разработка по стандартам',
        'Большую часть дня Online',
        'Оптимизация процесса и кода',
        'Работаю исключительно по ТЗ',
        'Ответственное исполнение'
    ]
}



      

function createProjects(){

    projectsJSON.projects.forEach((project, idx) => {
        let sortIdx = `${idx}0`;
        console.log(sortIdx);

let pagesObj = project.blockProject.pages.map(page =>{
    return  `
        - page:
            - image: test
            - title: ${page.pagetitle}`
})
let content = `---
slug: ${project.slug}
link: ${project.link}
category: 'projects'
title: ${project.blockProject.title}
publicData: Sep 11th 2020
pagesCount: ${project.blockProject.pages.length}
pages: ${pagesObj}
sortIdx: ${sortIdx}
---`
        fs.writeFileSync(`/home/user/Projects/iliagromov.github.io/src/posts/projects/project-${sortIdx}-${project.slug}.mdx`, content);
    });



   

}


createProjects()
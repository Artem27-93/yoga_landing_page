window.addEventListener('DOMContentLoaded', function(){ 
// DOMContentLoaded - скрипт будет выполнятся,когда DOM-дерево будет построено полностью.


    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),         //получаю  табы со страницы
        info = document.querySelector('.info-header'),               //получаю родителя этих табов
        tabContent = document.querySelectorAll('.info-tabcontent');  //получаю контент для табов (фото,описание)
    

        
    function hideTabContent(a) {                        // функция скрывает весь таб-контент со страницы, кроме первого
        for (let i = a; i< tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);



    function showTabContent(b) {                // функция открывает  таб-контент (противоположная выше стоящей)
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');

        }
    }
    
    info.addEventListener('click', function(event) { // применяем делегирование, при нажатии на кнопку показываем контент определённого таба
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});
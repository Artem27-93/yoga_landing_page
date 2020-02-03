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


    // Таймер 
    let deadline = '2020-02-04'; // задали конечную дату

    function getTimeRemaining(endtime){ //функция определяет остаток времени и вычленяет часы, минуты и секунды
        let t = Date.parse(endtime)- Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
           
        return {   //  результат функции запишется в обьект
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }
    }
    
    function setClock(id, endtime){ // функция устанавливает время на экране пользователя
        let timer = document.getElementById('timer'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000); // функция setInterval будет обновлять данные каждую секунду
        
            function updateClock(){
            let t = getTimeRemaining(endtime);
            function addZero(num){   // функция добавляет "0" впереди, если значение не двухзначное
                if(num <= 9) {
                    return '0' + num;
                } else return num;
            };
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            if(t.total<= 0){
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadline);
});
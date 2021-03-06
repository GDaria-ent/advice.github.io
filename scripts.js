var modalCloseButton = document.querySelector('.close-modal');
var textFieldButton = document.querySelector('.search-button');
var modalWindow = document.querySelector('.modal-wrapper');
var adviceInModalWindow = document.querySelector('.modal-description');
var closeAlertButton = document.querySelector('.alert-button');
var alertWindow = document.querySelector('.alert');
var textInHeader = document.querySelectorAll('.head-text');
var svgInHeader = document.querySelector('.svg-container');

textFieldButton.addEventListener('click', function (event){
    event.preventDefault();
    var inputValue = document.querySelector('.search-input').value;
    if (inputValue.length === 0){
        alertWindow.classList.add('alert--visible');
    } else{
        modalWindow.classList.add('modal-wrapper--visible');
        theAnswer = randomPhrase(whatToDoList, howToDoList, likeWhatToDoList);
        adviceInModalWindow.innerHTML = theAnswer;
    };
    
});

modalCloseButton.addEventListener('click', ()=>{
    modalWindow.classList.remove('modal-wrapper--visible');
});

closeAlertButton.addEventListener('click', function(){
    alertWindow.classList.remove('alert--visible');
})

var whatToDoList = ['Забудь о проблемах', 'Сними стресс', 'Покушай котлетьку', 'Двигайся вперед', 'Покушай курочку', 'Отдохни', 'Позвони маме', 'Попей чайку', 'Делай свое дело', 'Иди к поставленной цели', 'Используй новые возможности', 'Оставь все страхи позади', 'Принимай решения', 'Хватай удачу за хвост', 'Займись своим здоровьем', 'Побалуй себя'];
var howToDoList = ['быстро,', 'аккуратно,', 'гордо,', 'осторожненько,', 'хитро,', 'божественно,', 'с умом,', 'забыв обо всем,', 'быстро, ловко и умело,', 'по-королевски,', 'играючи,', 'зыркая по сторонам,', 'сосредоточенно,', 'шустренько,', 'со вкусом,', 'ироничненько,'];
var likeWhatToDoList = ['как сын маиной подруги', 'как смелый скунс', 'как немытый карп', 'как лазурный пес', 'как гордый лев', 'как храбрый кабанчик', 'как прыткая лиса', 'как начальник', 'как мудрец', 'как ласковый котя', 'как веселый щенок', 'как агрессивный гусь', 'как теплый хлебушек', 'как румяный пирожочек', 'как главный бухгалтер', 'как жесточайший батя'];

function randomPhrase(list1, list2, list3){
    randomIndex1 = getRandomIndex(list1.length);
    randomIndex2 = getRandomIndex(list2.length);
    randomIndex3 = getRandomIndex(list3.length);
    return list1[randomIndex1] + ' ' + list2[randomIndex2] + ' ' + list3[randomIndex3] + '!';
}

function getRandomIndex(listLength){
    return Math.floor(Math.random() * listLength);
}


setTimeout(function (){
    textInHeader.forEach(function(element){
        element.classList.add('head-text--invisible');
    });
    
}, 1000);

setTimeout(function(){
    svgInHeader.classList.add('svg-container--visible');
}, 1000);



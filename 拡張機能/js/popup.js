$(function main() {

    //Popup画面のタブ切り替えスクリプト
    $('.tab').on('click',function(){
    $('.tab, .panel').removeClass('active');
    $(this).addClass('active');
    var index = $('.tab').index(this);
    $('.panel').eq(index).addClass('active');
    })

    //URLを表示するスクリプト
    document.querySelector('#URL').addEventListener("click", function(){
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
        document.getElementById('on_URL').textContent = tabs[0].url;
        })
    })

    //タイトルを表示するスクリプト
    document.querySelector('#title').addEventListener("click", function(){
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
        document.getElementById('on_title').textContent = tabs[0].title;
        })
    })

    //アイキャッチを表示するスクリプト
    document.querySelector('#eye').addEventListener("click", function(){
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
            chrome.tabs.sendMessage(tabs[0].id,"eye",function(sendResponse){

            document.getElementById('on_eye').textContent = sendResponse;
            })
        })
    })

    //画面をブラックアウトするスクリプト
    document.querySelector('#black').addEventListener("click", function(){
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
            chrome.tabs.sendMessage(tabs[0].id,"black");
        })
    })

    //todoリストを作成するスクリプト
    document.querySelector('#addTask').addEventListener('click',function(){
        var addTask = document.getElementById('todo');
        var task_message = addTask.value;
        var tasks = document.createElement('li');
        tasks.textContent = task_message;
        var taskList = document.getElementById('taskList');
        taskList.appendChild(tasks);
    })

    //開発中の機能
    document.querySelector('#output').addEventListener("click", function(){
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
        document.getElementById('change').textContent = tabs[0].url;
        })
    })

    //開発中の機能
    document.querySelector('#article').addEventListener("click", function(){
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
            chrome.tabs.sendMessage(tabs[0].id,"OK");
        })
    })


})
function barrage() {
    var content;
    var id;
    var isNew;
    var userId;
    var userName;
    var horizontalSpeed;
    var verticalSpeed;
    var marginLeft;
    var marginRight;

    var color;
    var fontSize;
}

function barrageBox() {
    var bBox;
    var left;
    var top;
    var width = '100%';
    var height = '100px';
    var background = 'gray';
    var appearStyle;//RANDOM/ORDER
    var nextIntervalTime = 1000;
    var refreshIntervalTime = 100;
    var horizontalSpeed;
    var verticalSpeed;
    var allWithSameSpeed = true;
    var allWithSameDirection = true;
    var isLoop = false;
    var isRunning = true;
    var currentCursor = 0;

    var barrageList = [];
    var data = [
        {id: 1, userId: 1, userName: 'lcf1', content: '第一弹'}
    ]

    var barrageDivList = [];

    function addBarrage(barrage) {
        barrageList.push(barrage);
    }

    function showBarrage(barrage) {
        var barrageDiv =$("<div></div>");
        barrageDiv.text(barrage.content);
        barrageDiv.appendTo(bBox);
        barrageDiv.marginLeft = 0;
        barrageDivList.push(barrageDiv);
    }

    function refresh() {
        var size = barrageDivList.length;
        bBox.text();
        for (var i = 0; i < size; i++) {
            var barrageDiv = barrageDivList[0];
            barrageDiv.marginLeft += 3;
            barrageDiv.css("margin-left", barrageDiv.marginLeft)
            bBox.append(barrageDiv);
        }
    }

    function getAndShowABarrage() {
        var currentBarrage;
        if (currentCursor < data.length) {
            currentBarrage = data[currentCursor++];
        } else {
            if (isLoop) {
                currentCursor = 0;
                currentBarrage = data[currentCursor++];
            }
        }
        if (currentBarrage) {
            showBarrage(currentBarrage);
        }
    }

    function pause() {

    }
    function resume(){

    }
    function restart() {

    }

    function init() {
        bBox = $("#barrageBox");
        bBox.css("width", width);
        bBox.css("height", height);
        bBox.css("background", background);
    }

    function start() {
        init();
      var getAndShowInterval =  setInterval(getAndShowABarrage, nextIntervalTime);
      var refreshInterval =   setInterval(refresh, refreshIntervalTime);
    }

    function stop() {

    }

    return {
        start: start
    };
}

$(function () {
    new barrageBox().start();
});
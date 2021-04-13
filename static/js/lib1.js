function Tick(_intDiff, _showDiv) {
    this.intDiff = _intDiff;
    this.showDiv = _showDiv;
    var t;

    this.timer = function (ob) {
        if (ob.t) clearInterval(ob.t);

        this.t = window.setInterval(function () {
            var day = 0,
                hour = 0,
                minute = 0,
                second = 0;//时间默认值       
            if (ob.intDiff > 0) {
                day = Math.floor(ob.intDiff / (60 * 60 * 24));
                hour = Math.floor(ob.intDiff / (60 * 60)) - (day * 24);
                minute = Math.floor(ob.intDiff / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(ob.intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (day > 0) {
                hour = day * 24 + hour;
            }
            if (hour <= 9) hour = '0' + hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            $(ob.showDiv).html(hour + ":" + minute + ":" + second);
            if (ob.intDiff <= 0) clearInterval(ob.t);
            ob.intDiff--;
        }, 1000);
    };

    this.clear = function () {
        clearInterval(this.t);
    };
};

function Tick2(_intDiff, _showDiv) {
    this.intDiff = _intDiff;
    this.showDiv = _showDiv;
    var t;

    this.timer = function (ob) {
        if (ob.t) clearInterval(ob.t);

        this.t = window.setInterval(function () {
            var day = 0,
                hour = 0,
                minute = 0,
                second = 0;//时间默认值  
            var hourAfter, minuteAfter,secondAfter;    
            if (ob.intDiff > 0) {
                day = Math.floor(ob.intDiff / (60 * 60 * 24));
                hour = Math.floor(ob.intDiff / (60 * 60)) - (day * 24);
                hourAfter = 23 - hour;
                minute = Math.floor(ob.intDiff / 60) - (day * 24 * 60) - (hour * 60);
                minuteAfter = 59-minute;
                second = Math.floor(ob.intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
                secondAfter = 59-second;
            }
            if (hourAfter <= 9) hourAfter = '0' + hourAfter;
            if (minuteAfter <= 9) minuteAfter = '0' + minuteAfter;
            if (secondAfter <= 9) secondAfter = '0' + secondAfter;
            $(ob.showDiv).html(hourAfter + ":" + minuteAfter + ":" + secondAfter);
            if (ob.intDiff <= 0) clearInterval(ob.t);
            ob.intDiff++;
        }, 1000);
    };

    this.clear = function () {
        clearInterval(this.t);
    };
};

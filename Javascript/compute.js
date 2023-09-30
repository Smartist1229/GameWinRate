function computeNumbers() {
    var GameNumer = document.getElementById('gameNumer').value;
    var WinRate = document.getElementById('winRate').value;
    var WantWinRate = document.getElementById('Demand').value;
    if (GameNumer === "" || WinRate === "" || WantWinRate === "") {
        alert("数值为空！");
        return 0；
    } else {
        if (WinRate >= 1) {
            WinRate /=  100;
        }
        var WinNumber = Math.floor(GameNumer * WinRate);

        var showWinRate = (WinRate * 100).toFixed(2);
        document.getElementById('showtext').innerHTML = "当前数据为：";
        document.getElementById('AllGameNumber').innerHTML = "-> 总局数：" + GameNumer;
        document.getElementById('WinGameNumber').innerHTML = "-> 胜利数：" + WinNumber;
        document.getElementById('GameWinRate').innerHTML = "-> 游戏胜率：" + showWinRate + "%";

        var NewGameNumer = GameNumer;
        var NewWinNumber = WinNumber;
        var NewWinRate = 0;
        if (WantWinRate < 1) {
            WantWinRate *=  100;
        }
        if (WantWinRate === 100)｛
            alert('胜率无法到达100％');
            return 0;
        ｝
        while (NewWinRate < WantWinRate) {
            NewGameNumer++;
            NewWinNumber++;
            NewWinRate = NewWinNumber / NewGameNumer * 100;
            // console.log(NewWinRate);
        }
        var Number = NewGameNumer - GameNumer
        document.getElementById('text').innerHTML = "您还需要赢<span>" + Number + "</span>局!";

    }
}

function computeNumbers() {
    var GameNumer = document.getElementById("gameNumer").value;
    var WinRate = document.getElementById("winRate").value;
    var WantWinRate = document.getElementById("Demand").value;
    if (
        GameNumer === "" ||
        WinRate === "" ||
        WantWinRate === "" ||
        GameNumer <= 0 ||
        WinRate <= 0 ||
        WantWinRate <= 0
    ) {
        alert("数值不能为空、为0、为负数！");
        return 0;
    } else {
        if (WinRate >= 1) {
            WinRate /= 100;
        }
        var WinNumber = Math.floor(GameNumer * WinRate);

        var showWinRate = (WinRate * 100).toFixed(2);
        document.getElementById("showtext").innerHTML = "当前数据为：";
        document.getElementById("AllGameNumber").innerHTML =
            "-> 总局数：" + GameNumer;
        document.getElementById("WinGameNumber").innerHTML =
            "-> 胜利数：" + WinNumber;
        document.getElementById("GameWinRate").innerHTML =
            "-> 游戏胜率：" + showWinRate + "%";

        if ((WinRate * 100) == 100) {
            if (WantWinRate > 100) {
                alert("期望胜率不能为100%");
                return 0;
            }
            document.getElementById("text").innerHTML = "您还需要赢0局!";
            return 0;
        } else {
            if ((WinRate * 100) > 100) {
                alert("当前胜率不能大于100%");
                return 0;
            }
            var NewGameNumer = GameNumer;
            var NewWinNumber = WinNumber;
            var NewWinRate = 0;
            if (WantWinRate < 1) {
                WantWinRate *= 100;
            }
            if (WantWinRate >= 100) {
                alert("当胜率不为100%时，期望胜率不能大于或等于100%");
                return 0;
            }
            while (NewWinRate < WantWinRate) {
                NewGameNumer++;
                NewWinNumber++;
                NewWinRate = (NewWinNumber / NewGameNumer) * 100;
                // console.log(NewWinRate);
            }
            var Number = NewGameNumer - GameNumer;
            document.getElementById("text").innerHTML =
                "还需要赢<span>" + Number + "</span>局!";
        }
    }
}

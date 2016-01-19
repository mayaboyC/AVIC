function $(element) {
    return element = document.getElementById(element);
}
function $D(element) {
    var d = $(element);
    var h = d.offsetHeight;
    var maxh = 10;

    function dmove() {
        if (h >= maxh) {
            d.style.height = 'auto';
            clearInterval(iIntervalId);
        } else {
            h += 5; //设置层展开的速度
            d.style.display = 'block';
            d.style.height = h + 'px';
        }
    }

    iIntervalId = setInterval(dmove, 2);
}
function $D2(element) {
    var d = $(element);
    var h = d.offsetHeight;
    var maxh = 300;

    function dmove() {
        if (h <= maxh) {
            d.style.display = 'none';
            clearInterval(iIntervalId);
        } else {
            h -= 5;//设置层收缩的速度
            d.style.height = h + 'px';
        }
    }

    //iIntervalId = setInterval(dmove, 2);
}
function $use(targetid,objN) {
    var d = $(targetid);
    var sb = $(objN);
    if (d.style.display == "block") {
        $D2(targetid);
        d.style.display = "none";
        sb.style.borderColor = '#e9ce00 transparent transparent transparent';

    } else {
        var p = document.getElementsByTagName("ula");
        var ilogo = document.getElementsByTagName("i");

        for (var i = 0, l = p.length; i < l; i++) {
            if (p[i] != d) {
                p[i].style.height = 0;
                p[i].style.display = "none";
                ilogo[i].style.borderColor = '#e9ce00 transparent transparent transparent';
            }
        }
        $D(targetid);
        d.style.display = "block";
        sb.style.borderColor = '#999 transparent transparent transparent';
    }
}
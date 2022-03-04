// I removed the labels interaction cuz it was kinda buggy
$("#switch input").on("click", () => {
    let value0, value1, value2, html;

    html0 = $("#value0");
    html1 = $("#value1");
    html2 = $("#value2");

    html = [html0, html1, html2];

    if ($("#switch input")[0].checked) {
        let temp, tString;
        for (let i = 0; i < 3; i++) {
            tString = html[i].html() - 0.09;
            temp = (parseFloat(tString) / 10).toFixed(2);
            $(html[i]).html(temp);
        }
    } else {
        let temp, tString;
        for (let i = 0; i < 3; i++) {
            tString = html[i].html();
            temp = (parseFloat(tString) * 10).toFixed(1);
            $(html[i]).html(`${temp}9`);
        }
    }
});

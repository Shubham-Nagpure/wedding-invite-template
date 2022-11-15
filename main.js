function changePage(pageNum) {
    debugger
    let pages = {
        0: 'ethnic',
        1: 'engagement',
        2: 'haldi',
        3: 'wedding'
    }
    for (let i = 0; i < 4; i++) {
        if (i == pageNum) {
            document.getElementById(pages[i]).style.display = "block";
        }
        else {
            document.getElementById(pages[i]).style.display = "none";
        }
    }
    console.log(pageNum);
}
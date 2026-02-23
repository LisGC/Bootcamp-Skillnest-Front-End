function changeLike(num) {

    let textNum = document.querySelector(`#likes${num}`);
    let likes = parseInt(textNum.textContent);

    likes++;
    textNum.textContent = likes;
}
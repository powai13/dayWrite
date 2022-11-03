'use strict'

window.onload = function() {

    /**
     * グローバル宣言
     */

    //画面のサイズを合わせる
    function autoSize() {
        const main = document.getElementById('main');
        main.width = window.innerWidth + "px";
    }

    autoSize();
    window.addEventListener('resize', autoSize);
}
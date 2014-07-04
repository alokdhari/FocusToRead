// JavaScript source code

var jQuery = document.createElement('script');
jQuery.src = "jquery-1.11.1.min.js";
jQuery.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(jQuery);

var s = document.createElement('script');
s.src = chrome.extension.getURL('focustoread.js');
//alert(s.toString());
s.onload = function () {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);


/**
 * Created by ZhangJikai on 2017/2/20.
 */

var inputArea = document.getElementById("input-area");
var outputArea = document.getElementById('output-area');
var quoteConfig = document.getElementById('quote-type');
var joinConfig = document.getElementById("join");
var endConfig = document.getElementById("end");
new Clipboard('.btn');

var lineBreakTag = "\n";
var displayLinkBreak = "\\n";
var quoteTag = "\"";
var displayQuoteTag = "\\\"";
var joinTag = " + ";
var endTag = ";";
var greaterTag = ">";
var displayGreaterTag = "&gt;";
var lessTag = "<";
var displayLessTag = "&lt;";
var andTag = "&";
var displayAndTag = "&amp;";

var quoteSetting = "quote";
var joinSetting = "join";
var endSetting = "end";

function transferText(text) {

    var result = quoteTag;


    if (text == null || text == "") {
        return "";
    }
    for (var i = 0; i < text.length; i++) {
        switch (text[i]) {
            case lineBreakTag:
                result += displayLinkBreak;
                result += quoteTag;
                result += joinTag;
                result += lineBreakTag;
                result += quoteTag;
                break;
            case quoteTag:
                result += displayQuoteTag;
                break;
            case greaterTag:
                result += displayGreaterTag;
                break;
            case lessTag:
                result += displayLessTag;
                break;
            case andTag:
                result += displayAndTag;
                break;
            default :
                result += text[i];
        }
    }

    result += quoteTag;
    result += endTag;
    return result;
}

function inputChange() {
    var result = transferText(inputArea.value);
    outputArea.innerHTML = result;
}

function quoteChange() {

    if (quoteConfig.checked) {
        quoteTag = "\'";
        displayQuoteTag = "\\\'";
        localStorage.setItem(quoteSetting, "s")
    } else {
        quoteTag = "\"";
        displayQuoteTag = "\\\"";
        localStorage.setItem(quoteSetting, "d")
    }
    inputChange();

}

function joinChange() {
    joinTag = joinConfig.value;
    localStorage.setItem(joinSetting, joinTag);
    inputChange();
}

function endChange() {
    endTag = endConfig.value;
    localStorage.setItem(endSetting, endTag);
    inputChange();
}


function loadSetting() {
    var quote = localStorage.getItem(quoteSetting);
    if(quote != null) {
        if(quote == "s") {
            quoteTag = "\'";
            displayQuoteTag = "\\\'";
            quoteConfig.checked = true;
        } else {
            quoteTag = "\"";
            displayQuoteTag = "\\\"";
            quoteConfig.checked = false;
        }
    }
    var join = localStorage.getItem(joinSetting);
    if(join != null) {
        joinTag = join;
    } else {
        joinTag = " + ";
    }
    joinConfig.value = joinTag;

    var end = localStorage.getItem(endSetting);
    if(end != null) {
        endTag = end;
    } else {
        endTag = ";";
    }
    endConfig.value = endTag;
}

window.onload = function () {
    if (inputArea.addEventListener) {
        inputArea.addEventListener('input', inputChange, false);
        joinConfig.addEventListener('input', joinChange, false);
        endConfig.addEventListener('input', endChange, false);
        quoteConfig.addEventListener('change', quoteChange, false);

    } else if (inputArea.attachEvent) {
        inputArea.attachEvent('onpropertychange', inputChange);
        joinConfig.attachEvent('onpropertychange', joinChange);
        endConfig.attachEvent('onpropertychange', endChange);
        quoteConfig.attachEvent("change", quoteChange);
    }
    loadSetting();
};


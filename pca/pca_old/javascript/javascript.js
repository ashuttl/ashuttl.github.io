function clearDefault(target) {
    if (target.value == target.defaultValue) {
        target.value = "";
        target.className = 'active';

    }

}
function returnDefault(target) {
    if (target.value == "") {
        target.value = "search this site";
        target.className = 'inactive';

    }

}
function clearEmail(target) {
    if (target.value == target.defaultValue) {
        target.value = "";
        target.className = 'active';

    }

}
function returnEmail(target) {
    if (target.value == "") {
        target.value = "enter your email address";
        target.className = 'inactive';

    }

}
var your_drink;

var reverse = function(s) {
    return s.split("").reverse().join("");
}

var bartender = {
    str1: "ers",
    str2: reverse("rap"),
    str3: "amet",
    request: function(preference) {
        return preference + " and the secret word is: " + this.str2 + this.str3 + this.str1
    }
}

bartender.request("cocktail")
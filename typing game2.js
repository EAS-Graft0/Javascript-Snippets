var app = angular.module('my-app', []);

app.controller("my-controller", function($scope) {
    $scope.phrases = ["The quick brown fox jumped over the lazy dog", "Andrew smells like dog poop", "Zayne has such a cool accent", "I really like how I type", "Here is my typing game that is fairly functional with minimal code", "Here is another random sentence", "I hope you're enjoying this game"];

    //   

    var nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog", "area", "book", "business", "case", "child", "company", "country", "day", "eye", "fact", "family", "government", "group", "hand", "home", "job", "life", "lot", "man", "money", "month", "mother", "Mr", "night", "number", "part", "people", "place", "point", "problem", "program", "question", "right", "room", "school", "state", "story", "student", "study", "system", "thing", "time", "water", "way", "week", "woman", "word", "work", "world", "year"];
    var verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed", "ask", "be", "become", "begin", "call", "can", "come", "could", "do", "feel", "find", "get", "give", "go", "have", "hear", "help", "keep", "know", "leave", "let", "like", "live", "look", "make", "may", "mean", "might", "move", "need", "play", "put", "run", "say", "see", "seem", "should", "show", "start", "take", "talk", "tell", "think", "try", "turn", "use", "want", "will", "work", "would"];
    var adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy", "able", "bad", "best", "better", "big", "black", "certain", "clear", "different", "early", "easy", "economic", "federal", "free", "full", "good", "great", "hard", "high", "human", "important", "international", "large", "late", "little", "local", "long", "low", "major", "military", "national", "new", "old", "only", "other", "political", "possible", "public", "real", "recent", "right", "small", "social", "special", "strong", "sure", "true", "white", "whole", "young"];
    var adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately", "up", "so", "out", "just", "now", "how", "then", "more", "also", "here", "well", "only", "very", "even", "back", "there", "down", "still", "in", "as", "to", "when", "never", "really", "most", "on", "why", "about", "over", "again", "where", "right", "off", "always", "today", "all", "far", "long", "away", "yet", "often", "ever", "however", "almost", "later", "much", "once", "least", "ago", "together", "around", "already", "enough", "both", "maybe", "actually", "probably", "home", "ofcourse", "perhaps", "little", "else", "sometimes", "finally", "less", "better", "early", "especially", "either", "quite", "simply", "nearly", "soon", "certainly", "quickly", "no", "recently", "before", "usually", "thus", "exactly", "hard", "particularly", "pretty", "forward", "ok", "clearly", "indeed", "rather", "that", "tonight", "close", "suddenly", "best", "instead", "ahead", "fast", "alone", "eventually"];
    var preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards", "with", "at", "from", "into", "during", "including", "until", "against", "among", "throughout", "despite", "towards", "upon", "concerning", "of", "to", "for", "on", "by", "about", "like", "through", "over", "before", "between", "after", "since", "without", "under", "within", "along", "following", "across", "behind", "beyond", "plus", "except", "but", "up", "out", "around", "down", "off", "above", "near"];
    var conjunctions = ["after", "although", "as", "if", "because", "before", "lest", "once", "since", "so", "than", "that", "though", "till", "unless", "until", "when", "whenever", "where", "wherever", "while"]
    var names = ["Alex", "Zayne", "Stuart", "Andrew", "Rhys"]

    $scope.sentence = sentence().split(' ')
    $scope.index = 0;
    $scope.score = 0;
    $scope.letterIndex = 0;
    $scope.inputIndex = 0;
    $scope.errorMessage = '';
    var startTime;
    var endTime;
    $scope.correct = 0;
    $scope.possibleMistakes;


    function sentence() {
        var string = "The " + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)] + " " + verbs[Math.floor(Math.random() * verbs.length)] + " " + adverbs[Math.floor(Math.random() * adverbs.length)] + " " + conjunctions[Math.floor(Math.random() * conjunctions.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)] + " " + adverbs[Math.floor(Math.random() * adverbs.length)] + " " + verbs[Math.floor(Math.random() * verbs.length)] + " " + preposition[Math.floor(Math.random() * preposition.length)] + " a " + nouns[Math.floor(Math.random() * nouns.length)] + " " + verbs[Math.floor(Math.random() * verbs.length)] + " a " + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)];
        var string = "The quick brown fox"
        var noSpaces = string.replace(/ /g, "");
        $scope.possibleMistakes = noSpaces.length;
        console.log($scope.possibleMistakes)
        return string;
    };


    //   

    $scope.checkLetter = function(letter, input) {
        if ($scope.index == 0 && letter[$scope.letterIndex] == 'T') {
            startTimer()
            $scope.correct = 0;
        }
        if ($scope.letterIndex == $scope.inputIndex) {
            if (letter[$scope.letterIndex] == input) {
                $scope.letterIndex++;
                $scope.inputIndex++;
                $scope.correct++;
                console.log('true');
                $scope.errorMessage = '';
                return true;
            } else {
                if (input != ' ') {
                    console.log('false')
                    $scope.errorMessage = 'You mistyped the letter: ' + letter[$scope.letterIndex]
                    $scope.correct--;
                } else {
                    console.log('space was pressed')
                }
            }
        }
    }

    function startTimer() {
        startTime = new Date()
    }

    function endTimer() {
        endTime = new Date()
        $scope.timeTaken = ((endTime - startTime) / 1000).toFixed(0)
        getWPM()
        getAccruacy()
    }

    function getWPM() {
        $scope.WPM = (($scope.sentence.length / $scope.timeTaken) * 60).toFixed()
    }

    function getAccruacy() {
        console.log($scope.possibleMistakes, $scope.correct)
        $scope.accuracy = ($scope.correct / $scope.possibleMistakes * 100).toFixed()
    }


    $scope.checkWord = function(keyEvent, word, index) {
        var temp = $scope.sentence[index].split('')
        $scope.checkLetter(temp, keyEvent.key)
        if (keyEvent.which === 32) {
            if (word == $scope.sentence[index]) {
                $scope.letterIndex = 0;
                $scope.inputIndex = 0;
                $scope.index++;
                $scope.userInput = '';
                console.log('match');
                if (index == $scope.sentence.length - 1) {
                    $scope.score++;
                    $scope.sentence = sentence().split(' ');
                    $scope.index = 0;
                    console.log('win');
                    endTimer()
                }
            } else {
                console.log('word don\'t match');
            }
        }
    }
});



/*
<body ng-app="my-app" ng-controller="my-controller">
  <div>
    <h4 ng-bind="'Score: ' + score"></h4>
  </div>
  <div>
    <span ng-repeat="word in sentence track by $index" ng-bind="word + ' '" ng-class="{highlight: index==$index}"></span>
  </div>
  <div>
    <input type="text" ng-model="userInput" ng-keypress="checkWord($event, userInput, index)">
  </div>
  <div>
    <span ng-bind="userInput"></span>
  </div>
  <div>
    <span class="error" ng-bind="errorMessage"></span>
  </div>
  <div> 
    <span ng-bind="'Time Taken : ' + timeTaken"></span>
  </div>
  <div>
    <span ng-bind="'Words per minute: ' + WPM"></span>
  </div>
  <div>
    <span ng-bind="'Accuracy: ' + accuracy + '%'"></span>
  </div>
</body>
*/


/*
div{
  margin: 5px;
}

span {
  padding: 5px;
}

.highlight{
  background: lightblue;
}
*/
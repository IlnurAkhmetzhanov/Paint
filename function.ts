const verbCoorect = (pronoun: string, verb: string) => {
    const verEnd = "ть"
    const verbEndings = ["ю", "ешь", "ет", "ют", "ем", "ете"];

    if (pronoun === "я") {
        return pronoun + "" + verb.replace("ть", verbEndings[0]);
    } else if (pronoun === "ты") {
        return pronoun + " " + verb.replace("ть", verbEndings[1])
    } else if (pronoun === "он" || pronoun === "она" || pronoun === "оно") {
        return pronoun + " " + verb.replace(verEnd, verbEndings[2])
    } else if (pronoun === "они") {
        return pronoun + " " + verb.replace(verEnd, verbEndings[3])
    } else if (pronoun === "мы") {
        return pronoun + " " + verb.replace(verEnd, verbEndings[4])
    } else if (pronoun === "вы") {
        return pronoun + " " + verb.replace(verEnd, verbEndings[5])
    }

}
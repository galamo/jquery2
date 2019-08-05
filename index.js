


$(document).ready(function () {

    //cloning an object
    const picture = $("#enemy").clone()
    picture.attr({ id: getId() })
    picture.css({ display: "inline-block", position: "absolute", left: getRandomLocation(), top: getRandomLocation() })

    const picture2 = $("#enemy").clone()
    picture2.attr({ id: getId() })
    picture2.css({ display: "inline-block", position: "absolute", left: getRandomLocation(), top: getRandomLocation() })

    const picture3 = $("#enemy").clone()
    picture3.attr({ id: getId() })
    picture3.css({ display: "inline-block", position: "absolute", left: getRandomLocation(), top: getRandomLocation() })

    const player = $("#enemy").clone()
    player.attr({ id: getId() })
    player.css({ display: "inline-block", position: "absolute", left: getRandomLocation(), top: getRandomLocation() })
    player.children().attr({ src: "./images/bb.jpg" })
    player.draggable();

    $("#board").append(picture)
    $("#board").append(picture2)
    $("#board").append(picture3)
    $("#board").append(player)




})

function getRandomLocation() {
    return Math.round(Math.random() * 777)
}
// Build function taht generate enemies
function getRandomNumber() {
    Date().now
}

function getId() {
    return Date.now()
}


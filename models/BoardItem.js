//AKA function constructor
// class for creating instances
class BoardItem {
    //image = { isUrl:true, path:"https://image.com/bb.jpg" }
    //image = { isUrl:false, path:"ynet.png" }

    constructor(position, image, id) {
        this.image = image;
        this.domElement = $("#enemy").clone();
        const { top, left } = position;
        this.domElement.css({ position: "absolute", display: "inline-block", top, left })
        this.domElement.attr({ id });
        const { isUrl, path } = image
        this.domElement.children().attr({ src: isUrl ? path : `./images/${path}` })
        this.id = id
    }

    drawMe() {
        $("#board").append(this.domElement)
    }


}

//new BoardItem()
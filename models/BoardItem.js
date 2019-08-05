//AKA function constructor
// class for creating instances
class BoardItem {

    constructor(position, image, id) {
        this.image = image;
        this.domElement = $("#enemy").clone();
        const { top, left } = position;
        this.domElement.css({ position: "absolute", display: "inline-block", top, left })

    }


}

//new BoardItem()
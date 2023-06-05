class Conventor{
    constructor(){
        this.name_video = "video";
    }

    setVideo(video){
        this.name_video = video;
        console.log(`Отримали відео ${this.name_video}`) 
    }

    convertVideo(){ console.log(`Конвертували відео ${this.name_video} у формат .youtube`) }

    uploadedVideo(){ console.log(`Завантажили відео ${this.name_video} на YouTube`) }

    getKeyYouTubeAPI(){ console.log(`Отримали ключ з бази даних для вашого YouTube`) }

    processingVideo(){ console.log(`Обробка та завантаження відео ${this.name_video}`) }
}

class FacadeYouTube {
    constructor(convert){
        this.convert = convert;
    }

    uploadedOnYouTube(name_video){
        this.convert.setVideo(name_video);
        this.convert.convertVideo();
        this.convert.uploadedVideo();
    }

    apiYouTube(name_video){
        this.convert.setVideo(name_video);
        this.convert.getKeyYouTubeAPI();
        this.convert.processingVideo();
    }

}

let facade = new FacadeYouTube(new Conventor())

facade.uploadedOnYouTube("Навчальне відео.mp4")
console.log("-------------------------");
facade.apiYouTube("Навчальне відео.mp4")
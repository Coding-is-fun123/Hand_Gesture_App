Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quailty:90
});
Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version", ml5.version );
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Yi7_b3d7n/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}

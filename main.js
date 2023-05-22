//code = madhu

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("say_pic").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    var content = event.results[0][0].transcript;
    document.getElementById("say_pic").innerHTML = content;

    if (content == "Madhu.") 
    {
        speak();
    }
}

function speak(){
    setTimeout(function()
    {
        img_id = "selfie1";
        var synth = window.speechSynthesis;

        speech_data = "Taking the pictures of your cream in 10 seconds";

        var utter = new SpeechSynthesisUtterance(speech_data);

        synth.speak(utter);

        Webcam.attach(camera);

        pic()
        save() 
    }, 10000);
}

camera = document.getElementById("camera");
Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
    png_quality : 99
});

function pic(){
        Webcam.snap(function(saved_pictures){
            if (image_id == "selfie1") {
                document.getElementById("display_picture").innerHTML = "<img id = 'your_photo1' src = '" + saved_pictures + "'>";
            }

            if (image_id == "selfie2") {
                document.getElementById("display_picture").innerHTML = "<img id = 'your_photo2' src = '" + saved_pictures + "'>";
            }

            if (image_id == "selfie3") {
                document.getElementById("display_picture").innerHTML = "<img id = 'your_photo3' src = '" + saved_pictures + "'>";
            }

            if (image_id == "selfie4") {
                document.getElementById("display_picture").innerHTML = "<img id = 'your_photo4' src = '" + saved_pictures + "'>";
            }
        
    });
}

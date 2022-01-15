var prediction_1="";
var prediction_2="";Webcam.set({
    width:350,
    height:300,
    image_format :'png',
    png_quality :90
});
camera = document.getElementById ("camera");

Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id= "captured_image" src="'+ data_uri+'"/>';
    });
}
    console.log('ml5version',ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ot5u8_MpE/model.json",modelloaded);

    function modelloaded(){
        console.log('model loaded');
    }
    function speak(){
        var synth = window.speechSynthesis;
        speak_data_1= "The prediction is" +prediction_1;
        
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
    }
    function check(){
        img=document.getElementById("captured_image");
        classifier.classify(img,gotresult);
    }
    function gotresult(error,results){
      if (error) {
          console.error(error);
      } else {
          console.log(results);
          document.getElementById("result_emotion_name").innerHTML=results[0].label;
          prediction_1=results[0].label;
          speak();

          
      }  
    }
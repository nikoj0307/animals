function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/74Ani6eBb/model.json', modelReady);
}


var dog=0;
var cat=0;
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()  * 255) +1;
        random_number_g = Math.floor(Math.random()  * 255) +1;
       random_number_b = Math.floor(Math.random()  * 255) +1;

       document.getElementById("results_label").innerHTML = 'I can hear - '+
       results[0].label;
       document.getElementById("results_confidence").innerHTML ='detected dog- '+dog+'detected cat- '+cat;
       document.getElementById("results_label").style.color = "rgb("
       +random_number_r+","+random_number_g+","+random_number_b+")";
       document.getElementById("results_confidence").style.color = "rgb("
       +random_number_r+","+random_number_g+","+random_number_b+")";
       
       img=document.getElementById('animal_image');
       if(results[0].label=="barking"){
        img.src='dog.png';
        dog=dog+1;


       }else if(results[0].label=="meowing"){
        img.src='cat.webp';
        cat=cat+1;
       }else {
        img.src='ear.png';

       }
    }

}
function modelReady(){
    classifier.classify(gotResults);
}
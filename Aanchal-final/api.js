function processImage() {
    var subscriptionKey = '893897cdc79a4741a85775809bc1c3c1';
    var uriBase = //insert API KEY

    // Request parameters.
    
 var params = {
     "detectionModel": "detection_01",
     "returnFaceAttributes": "emotion",
     "returnFaceId": "true"
 };
 
        
    // Display the image.
    var sourceImageUrl = document.getElementById("inputImage").value;
    document.querySelector("#sourceImage").src = sourceImageUrl;

    // Perform the REST API call.
    $.ajax({
        url: uriBase + "?" + $.param(params),

        // Request headers.
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },

        type: "POST",

        // Request body.
        data: '{"url": ' + '"' + sourceImageUrl + '"}',
    })

    .done(function(data) {
        // Show formatted JSON on webpage.
        $("#responseTextArea").val(JSON.stringify(data,null,2));
     
        var happy = JSON.stringify(data[0].faceAttributes.emotion.happiness);
      var sad = JSON.stringify(data[0].faceAttributes.emotion.sadness);
      var neu=JSON.stringify(data[0].faceAttributes.emotion.neutral);
      var anger = JSON.stringify(data[0].faceAttributes.emotion.anger);
      var fear = JSON.stringify(data[0].faceAttributes.emotion.fear);
       console.log(happy)
       console.log(sad)
       console.log(neu)
       window.alert("happiness="+happy*100 +"\n"+
       "sadness="+sad*100 + "\n"+
       "neutral="+neu*100 +"\n"+
       "fear=" + fear*100 + "\n"+
       "anger="+ anger*100)
      
      if (happy>sad){
           window.open('https://srm.animaapp.io/happy','_blank')
         }
     else if(sad>happy && sad<0.8) {
          window.open('https://srm.animaapp.io/sad','_blank')
         }
     else{
         window.open('https://srm.animaapp.io/critical','_blank')
         }    

       
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        // Display error message.
        var errorString = (errorThrown === "") ?
            "Error. " : errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ?
            "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
                jQuery.parseJSON(jqXHR.responseText).message :
                    jQuery.parseJSON(jqXHR.responseText).error.message;
        alert(errorString);
    });
};

define([], function() {
  'use strict';

  var PageModule = function PageModule() {};

  PageModule.prototype.processFile = function (fileSet) {
        
    var reader = new FileReader();
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();
    
        reader.onloadend = function(e) {
           var data = e.target.result;
           var workbook = XLSX.read(data, {type: 'binary'});
           var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
           var jsonArr = XLSX.utils.sheet_to_json(first_worksheet, {header:1});          
           resolve(jsonArr);
        };
        reader.readAsBinaryString(fileSet[0]); 
     });
  };

  PageModule.prototype.populateData = function (jsonArr) {
     var parts = [];
     var final = {};
  var headerArray= ['firstName','lastName','emailAddress','age','qualification'];       
    
        for (var j = 1; j < jsonArr.length; j++){
          var obj = {};
          var partObject ={};
          for (var i = 0; i < jsonArr[0].length; i++) {
            var objName = headerArray[i];
            var objValue = jsonArr[j][i];    
            obj[objName] = objValue;
          }

          // partObject["id"]="part"+j;
          // partObject["path"]="/Employee"; // This is the Business Object name
          // partObject["operation"]="create"; // Operation to perform on business object
          // partObject["payload"]=obj;
          // parts.push(partObject);

          parts.push(obj);
      }
      final["parts"] = parts;
     
     return final;
  };

  PageModule.prototype.prepareChunks = function (jsonArr) {
    var index=0;
    var chunk_size=1000;  //size of Chunks
    var arrayLength=jsonArr.length;
    var tempArray = [];
    var batchInsertArray = [];

    for(index=1; index<arrayLength; index+=chunk_size){
      var myChunk=jsonArr.slice(index, index+chunk_size);
      tempArray.push(myChunk);
    }

    for(var i=0; i<tempArray.length; i++){
      var parts=PageModule.prototype.populateData(tempArray[i]);
      batchInsertArray.push(parts);
    }
      return batchInsertArray;
  };


  return PageModule;
});

// index header
// <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.0/xlsx.full.min.js"></script>

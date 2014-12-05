/**
 * Created by lcf on 2014/12/4.
 */
var allApi = {};
var testScope = {}
function TestAllCrl($http,$scope){
    testScope = $scope;
    $scope.allApi = {};
    var url = "/doc.json";
    $http.get(url).success(function (data) {
        refactorData(data);
        combineData(data);
        $scope.allApi = data;
        testScope.allApi = data;
        setTimeout(init,0);
    });
    setTimeout(init,0);
}
function AllApiCtrl($http,$scope){

}
function combineData(data){
  for(var i=0; i< data.apis.length; i++){
      var service = data.apis[i];
      service.id = createUUID();
      service.state = "default";
      for(var j=0;j<service.operations.length;j++){
          var operation = service.operations[j];
          operation.cases = [];
          operation.id = createUUID();
          operation.state ="default";
          testData.urls.forEach(function(url){
             if(url.path ==operation.path){
                 operation.cases = url.cases;
                 for(var i=0; i< operation.cases.length;i++){
                     operation.cases[i].id = createUUID();
                     operation.cases[i].state = "default";
                     getResult(operation.path,operation.method,operation.cases[i]);
                 }
             }
          });
      }
  }
}
function apply() {
    testScope.allApi.apis.forEach(function(service){

       for(var i=0; i<service.operations.length;i++){
           var operation = service.operations[i];
           if(operation.cases.length>0){
               operation.state =STATUS.SUCCESS;
               service.state = STATUS.SUCCESS;
           }
           for(var j=0;j<operation.cases.length;j++){
               var  cas = operation.cases[j];
               if(cas.state == STATUS.DANGER){
                   operation.state = STATUS.DANGER;
                   service.state =STATUS.DANGER;
               }
           }
       }
    });
    testScope.$apply();
}
function getResult(path,method,aCase){
    $.ajax({
        url: path,
        type: method,
        data: aCase.params,
        success: function(data) {
            if(data == aCase.expectation){
                aCase.state = "success";
            }else{
                aCase.state = "danger";
                aCase.result = data;
            }
//            aCase.result = data;
            apply();
            testScope.$apply();
        },
        error: function(xhr, err, exp) {
            aCase.state = "danger";
            aCase.result = err.stack;
            apply();
            testScope.$apply();
        }
    });

}
function refactorData(data){
    for(var i=0; i<data.apis.length;i++){
        var service = data.apis[i];
        service.id = service.path;
        var operations = new Array();
        for(var j=0;j<service.apis.length;j++){
            var mapping = service.apis[j];
            for(var k=0;k<mapping.operations.length;k++){
                var operation = new Object();
                var tmp = mapping.operations[k];
                operation.id = operation.path;
                operation.path = mapping.path;
                operation.description = mapping.description;
                operation.method = tmp.method;
                operation.summary = tmp.summary;
                operation.notes = tmp.notes;
                operation.type = tmp.type;
                operation.nickname = tmp.nickname;
                operation.items = tmp.items;
                operation.parameters = tmp.parameters;
                operation.docResponseMessages = tmp.docResponseMessages;
                operations.push(operation);
            }
        }
        service.operations = operations;
    }
}
$(function(){
   init();
})

function init(){
    $(".nav li").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(".nav li").removeClass("active");
            $(this).addClass("active");
        }
    });
    $(".back-to-top").click(function(){
        $(".nav li").removeClass("active");
        $(".nav li")[0].addClass("active");
    });
    $(".bs-docs-section").mouseenter(function(){
        var $h1=  $(this).find(".page-header");
        $(".nav li").removeClass("active");
        $("a[href='#"+$h1.attr("id")+"']").parent().addClass("active");
    });
    $(".service-header").click(function(){
    });
}
var createUUID = (function(uuidRegEx, uuidReplacer) {
    return function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();
    };
})(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c == "x" ? r : (r & 3 | 8);
    return v.toString(16);
});

var STATUS ={
        SUCCESS:'success',
        DEFAULT:'default',
        DANGER:'danger'
}
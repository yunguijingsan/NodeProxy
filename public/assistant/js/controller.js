$(function(){
    $("#PD").collapse("show");
});
function TestController($scope,$http){
    $scope.groups = [];
    $("#query").click(function(){
        $.ajax({
            url: "#",
            type: 'GET',
            success: function (data) {
            },
            error: function (xhr, err, exp) {
            }
        });
        $("#PD").collapse("hide");
    });
}
'use strict';
var utilisateursDatabase = [{'login':'ngcode','password':'tutoriel'}];

/* Controllers */
function LoginController($scope) {
    $scope.connexion = function(){
        $scope.connected = false;
        for(var i in utilisateursDatabase){
            var utilisateur = utilisateursDatabase[i];
            if(_.isEqual(utilisateur,$scope.identifiants)){
                $scope.connected = true;
            }
        }
    }
}
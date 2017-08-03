angular.module('jogo')

//Exemplo controller efeitos
// .controller('myCtrl', function($scope, $timeout){
//     $timeout(function() {
//      $scope.x = 3;
//     }, 2000);
//
//     $timeout(function() {
//      $scope.x = 1;
//     }, 6000);
//  })

.controller('ApresentacaoCtrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes');
  }
})

//Menu Opções Controller
.controller('OpcoesCtrl', function($scope, $state) {
  $scope.opMilitary = function() {
    $state.go('opMilitary')
  }
  $scope.opIntel = function() {
    $state.go('opIntel')
  }
  $scope.opCivil = function() {
    $state.go('opCivil')
  }
})

//Opções Militar
.controller('OpMilitaryCtrl', function($scope, $state) {
  $scope.capaArmy = function() {
    $state.go('capaArmy')
  }
  $scope.capaNavy = function() {
    $state.go('capaNavy')
  }
  $scope.capaRicardo = function() {
    $state.go('capaRicardo')
  }
})

//Opções Inteligência
.controller('OpIntelCtrl', function($scope, $state) {
  $scope.capaHacker = function() {
    $state.go('capaHacker')
  }
  $scope.capaIgor = function() {
    $state.go('capaIgor')
  }
})

//Opções Civil
.controller('OpCivilCtrl', function($scope, $state) {
  $scope.capaRebel = function() {
    $state.go('capaRebel')
  }
  $scope.capaJornal = function() {
    $state.go('capaJornal')
  }
})

//NARRATIVAS
//ARMY///////////////////////////////////////////////////////////
//Capa Army
.controller('CapaArmyCtrl', function(){

})

//NAVY///////////////////////////////////////////////////////////
//Capa Navy
.controller('CapaNavyCtrl', function(){

})

//RICARDO (AIR FORCE)///////////////////////////////////////////////////////////

//Capa Ricardo
.controller('CapaRicardoCtrl', function($scope, $state){
  $scope.introRicardo = function() {
    $state.go('introRicardo')
  }
})
//Intro Ricardo
.controller('IntroRicardoCtrl', function($scope, $state){
  $scope.mapaRicardo = function() {
    $state.go('mapaRicardo')
  }
})

//Mapa Ricardo
.controller('MapaRicardoCtrl', function($scope, $state){
  $scope.ricardo1 = function() {
    $state.go('ricardo1')
  }
})


//Ricardo Situ 1 Controller
.controller('Ricardo1Ctrl', function($scope, $state) {
  $scope.ricardo2 = function() {
    $state.go('ricardo2')
  }
  $scope.ricardo3 = function() {
    $state.go('ricardo3')
  }
})

//Ricardo Situ 2 Controller
.controller('Ricardo2Ctrl', function($scope, $state){
  $scope.ricardo4 = function() {
    $state.go('ricardo4')
  }
  $scope.ricardo5 = function() {
    $state.go('ricardo5')
  }
})

//Ricardo Situ 3 Controller
.controller('Ricardo3Ctrl', function($scope, $state){
  $scope.ricardo6 = function() {
    $state.go('ricardo6')
  }
  $scope.ricardo7 = function() {
    $state.go('ricardo7')
  }
})

//Ricardo Situ 4 Controller
.controller('Ricardo4Ctrl', function($scope, $state){
  $scope.ricardo8 = function(){
    $state.go('ricardo8')
  }

  $scope.ricardo9 = function(){
    $state.go('ricardo9')
  }
})

//Ricardo Situ 5 Controller
.controller('Ricardo5Ctrl', function($scope, $state){
  $scope.ricardo10 = function(){
    $state.go('ricardo10')
  }

  $scope.ricardo11 = function(){
    $state.go('ricardo11')
  }
})


//Ricardo Situ 6 Controller
.controller('Ricardo6Ctrl', function($scope, $state){
  $scope.ricardo12 = function(){
    $state.go('ricardo12')
  }
  $scope.ricardo13 = function(){
    $state.go('ricardo13')
  }
})

//Ricardo Situ 7 Controller
.controller('Ricardo7Ctrl', function($scope, $state){
  $scope.ricardo14 = function(){
    $state.go('ricardo14')
  }
  $scope.ricardo15 = function(){
    $state.go('ricardo15')
  }
})

//Ricardo Situ 8 Controller
.controller('Ricardo8Ctrl', function($scope, $state){
  $scope.ricardo16 = function(){
    $state.go('ricardo16')
  }
  $scope.ricardo17 = function(){
    $state.go('ricardo17')
  }
})

//Ricardo Situ 9 Controller
.controller('Ricardo9Ctrl', function($scope, $state){
  $scope.ricardo18 = function(){
    $state.go('ricardo18')
  }
  $scope.ricardo19 = function(){
    $state.go('ricardo19')
  }
})

//Ricardo Situ 10 Controller
.controller('Ricardo10Ctrl', function($scope, $state){
  $scope.ricardo20 = function(){
    $state.go('ricardo20')
  }
  $scope.ricardo21 = function(){
    $state.go('ricardo21')
  }
})

//Ricardo Situ 11 Controller
.controller('Ricardo11Ctrl', function($scope, $state){
  $scope.ricardo22 = function(){
    $state.go('ricardo22')
  }
  $scope.ricardo23 = function(){
    $state.go('ricardo23')
  }
})

//Ricardo Situ 12 Controller
.controller('Ricardo12Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 13 Controller
.controller('Ricardo13Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 14 Controller
.controller('Ricardo14Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 15 Controller
.controller('Ricardo15Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 16 Controller
.controller('Ricardo16Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 17 Controller
.controller('Ricardo17Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 18 Controller
.controller('Ricardo18Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 19 Controller
.controller('Ricardo19Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 20 Controller
.controller('Ricardo20Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 21 Controller
.controller('Ricardo21Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 22 Controller
.controller('Ricardo22Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 23 Controller
.controller('Ricardo23Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//(INTELLIGENCE)////////////////////////////////////////////////////////

//Capa Igor
.controller('CapaIgorCtrl', function($scope, $state){
  $scope.introIgor = function() {
    $state.go('introIgor')
  }
})

//Intro Igor
.controller('IntroIgorCtrl', function($scope, $state){
  $scope.mapaIgor = function() {
    $state.go('mapaIgor')
  }
})

//Mapa Igor
.controller('MapaIgorCtrl', function($scope, $state){
  $scope.igor1 = function() {
    $state.go('igor1')
  }
})


//Igor Situ 1 Controller
.controller('Igor1Ctrl', function($scope, $state) {
  $scope.igor2 = function() {
    $state.go('igor2')
  }
  $scope.igor3 = function() {
    $state.go('igor3')
  }
})

//Igor Situ 2 Controller
.controller('Igor2Ctrl', function($scope, $state){
  $scope.igor4 = function() {
    $state.go('igor4')
  }
  $scope.igor5 = function() {
    $state.go('igor5')
  }
})

//Igor Situ 3 Controller
.controller('Igor3Ctrl', function($scope, $state){
  $scope.igor6 = function() {
    $state.go('igor6')
  }
  $scope.igor7 = function() {
    $state.go('igor7')
  }
})

//Igor Situ 4 Controller
.controller('Igor4Ctrl', function($scope, $state){
  $scope.igor8 = function(){
    $state.go('igor8')
  }

  $scope.igor9 = function(){
    $state.go('igor9')
  }
})

//Igor Situ 5 Controller
.controller('Igor5Ctrl', function($scope, $state){
  $scope.igor10 = function(){
    $state.go('igor10')
  }

  $scope.igor11 = function(){
    $state.go('igor11')
  }
})


//Igor Situ 6 Controller
.controller('Igor6Ctrl', function($scope, $state){
  $scope.igor12 = function(){
    $state.go('igor12')
  }
  $scope.igor13 = function(){
    $state.go('igor13')
  }
})

//Igor Situ 7 Controller
.controller('Igor7Ctrl', function($scope, $state){
  $scope.igor14 = function(){
    $state.go('igor14')
  }
  $scope.igor15 = function(){
    $state.go('igor15')
  }
})

//Igor Situ 8 Controller
.controller('Igor8Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 9 Controller
.controller('Igor9Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 10 Controller
.controller('Igor10Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 11 Controller
.controller('Igor11Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 12 Controller
.controller('Igor12Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 13 Controller
.controller('Igor13Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 14 Controller
.controller('Igor14Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 15 Controller
.controller('Igor15Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//(HACKER)////////////////////////////////////////////////////////////////////
//Capa Hacker
.controller('CapaHackerCtrl', function($scope, $state){

  })

//Intro Hacker
  .controller('IntroHackerCtrl', function($scope, $state){

    })

//Mapa Hacker
.controller('MapaHackerCtrl', function($scope, $state){

})

//Hacker Situ 1 Controller
.controller('Hacker1Ctrl', function($scope, $state) {
  $scope.hacker2 = function() {
    $state.go('hacker2')
  }
  $scope.hacker3 = function() {
    $state.go('hacker3')
  }
})

//Hacker Situ 2 Controller
.controller('Hacker2Ctrl', function($scope, $state){
  $scope.hacker4 = function() {
    $state.go('hacker4')
  }
  $scope.hacker5 = function() {
    $state.go('hacker5')
  }
})

//Hacker Situ 3 Controller
.controller('Hacker3Ctrl', function($scope, $state){
  $scope.hacker6 = function() {
    $state.go('hacker6')
  }
  $scope.hacker7 = function() {
    $state.go('hacker7')
  }
})

//Hacker Situ 4 Controller
.controller('Hacker4Ctrl', function($scope, $state){
  $scope.hacker8 = function(){
    $state.go('hacker8')
  }

  $scope.hacker9 = function(){
    $state.go('hacker9')
  }
})


//(CIVILIAN - REBEL)////////////////////////////////////////////////////////
//Capa Rebel
.controller('CapaRebelCtrl', function($scope, $state){

  })

//Intro Rebel
  .controller('IntroRebelCtrl', function($scope, $state){

    })

//Mapa Rebel
.controller('MapaRebelCtrl', function($scope, $state){

})

//Rebel Situação 1
.controller('Rebel1Ctrl', function($scope, $state){

})

//(CIVILIAN - JOURNALIST)////////////////////////////////////////////////////////

//Capa Journal
.controller('CapaJornalCtrl', function($scope, $state){
  $scope.introJornal = function(){
    $state.go('introJornal')
  }
})

//Intro Journal
.controller('IntroJornalCtrl', function($scope, $state){
  $scope.mapaJornal = function(){
    $state.go('mapaJornal')
  }
})

//Mapa Journal
.controller('MapaJornalCtrl', function($scope, $state){
  $scope.jornal1 = function(){
    $state.go('jornal1')
  }
})

//Journal Situação 1
.controller('Jornal1Ctrl', function($scope, $state){
  $scope.jornal2 = function(){
    $state.go('jornal2')
  }
  $scope.jornal3 = function(){
    $state.go('jornal3')
  }
})

.controller('Jornal2Ctrl', function($scope, $state){
  $scope.jornal4 = function(){
    $state.go('jornal4')
  }
  $scope.jornal5 = function(){
    $state.go('jornal5')
  }
})

.controller('Jornal3Ctrl', function($scope, $state){
  $scope.jornal6 = function(){
    $state.go('jornal6')
  }
  $scope.jornal7 = function(){
    $state.go('jornal7')
  }
})

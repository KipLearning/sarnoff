

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// JavaScript Document
angular
	.module('app', [])
	.controller('mainCtlr', mainCtlr);
	
mainCtlr.$inject = ['$scope'];

function mainCtlr($scope){
	$scope.message = "Hello";
	$scope.speakers = [
							
							{name:'Prof. Mung Chiang', affiliation:'Princeton University', title:'', portrait:'MungChiang.jpg'},
							
							{name:'Prof. Dipankar Raychaudhuri', affiliation:'WINLAB', title:'', portrait:'DipankarRaychaudhuri.jpg'},
							{name:'Dr. Xiao-Feng Qi', affiliation:'Huawei', title:'Senior Director', portrait:'XiaoFengQi.jpg'},
							
							{name:'Prof. Henning Schulzrinne', affiliation:'Columbia University', title:'', portrait:'HenningSchulzrinne.jpg'}, 
							{name:'Asha Keddy', affiliation:'Intel', title:'', portrait:'AshaKeddy.jpg'},
							{name:'Dr. Chih-Lin I', affiliation:'China Mobile', title:'Chief Architect', portrait:'ChihLinI.jpg'},
							{name:'Dr Malcolm Robertson', affiliation:'Keysight Technologies', title:'5G Planning Manager', portrait:'MalcolmRobertson.jpg'},	
							{name:'James Kimery', affiliation:'National Instruments (NI)', title:'Director of Marketing', portrait:'JamesKimery.jpg'}
						];
	$scope.keynotes = [
							{name:'Dr. Marian Croak', affiliation:'Google', title:'VP', portrait:'MarianCroak.jpg'},
							{name:'Joe Cozzolino', affiliation:'Cisco', title:'Senior VP', portrait:'JoeCozzolino.jpg'},
							{name:'Dr. Ed Amoroso', affiliation:'AT&T', title:'SVP & Chief Security Officer', portrait:'EdwardAmoroso.jpg'}
							];
	$scope.steering = [{name: "Ramjee Prasad",affiliation: "Aalborg University", portrait: "Ramjee.jpg"},
						{name: "Vince Poor",affiliation: "Princeton University", portrait: "PoorVincen.jpg"},
						{name: "Parag Pruthi",affiliation: "NIKSUN", portrait: "ParagPruthi.jpg"},
						{name: "Nirwan Ansari",affiliation: "NJIT", portrait: "NirwanAnsari.jpg"},
						{name: "Cristina Comaniciu",affiliation: "Stevens Institute of Technology", portrait: "CristinaComaniciu.jpg"},
						{name: "Susan Brooks",affiliation: "IEEE Communication Society", portrait: "SusanBrooks.jpg"},
						{name: "Stan Moyer",affiliation: "Inventures, Inc.", portrait: "StanMoyer.jpg"},
						
						{name: "Doug Zuckerman",affiliation: "IEEE ComSoc Past President", portrait: "DougZuckerman.jpg"},
						];
						
	$scope.organizing = [
						{name: "Ashutosh  Dutta",affiliation: "AT&T", portrait: "AshutoshDutta.jpg"},
						{name: "John Pape",affiliation: "Communication Society", portrait: "JohnPape.jpg"},
						{name: "Bruce Worthman",affiliation: "IEEE Communications Society", portrait: "BruceWorthman.jpg"},
						{name: "Craig Wentz",affiliation: "C&J Engineering Services", portrait: "CraigWentz.jpg"},
						{name: "Komlan Egoh",affiliation: "NJIT", portrait: "KomlanEgoh.jpg"},
						
						{name: "Shweta Jain",affiliation: "CUNY", portrait: "ShwetaJain.jpg"},
						{name: "Deepak Kataria",affiliation: "IP Junction", portrait: "DeepakKataria.jpg"},
						{name: "Irfan Lateef",affiliation: "NJ Coastal Section", portrait: "IrfanLateef.jpg"},
						
						{name: "Roger Piqueras",affiliation: "AT&T", portrait: "RogerPiqueras.jpg"},
						{name: "Kyriakos Manousakis",affiliation: "ACS", portrait: "KyriakosManousakis.jpg"},
						{name: "Neeli Prasad",affiliation: "Aalborg University", portrait: "NeeliPrasad.jpg"},
						{name: "Chi-Ming Chen",affiliation: "AT&T", portrait: "ChiMingChen.jpg"},
						{name: "Christian Makaya",affiliation: "IBM Research", portrait: "ChristianMakaya.jpg"},
						{name: "Priyadarsan Patra",affiliation: "Intel", portrait: "PriyadarsanPatra.jpg"},
						{name: "Elias Kpodzo",affiliation: "L-3 Communications TE", portrait: "EliasKpodzo.jpg"},		
						];
	$scope.agenda = [
		{startTime:'7:30',endTime:'8:45 AM',event:'Registration, Coffee, Breakfast',speaker:''},
		{startTime:'8:45',endTime:'8:50 AM',event:'Welcome Address',speaker:'Dr. Ashutosh Dutta'},
		{startTime:'8:50',endTime:'9:00 AM',event:'Opening Remarks',speaker:'Prof. Vince Poor, Prof. Ramjee Prasad and Dr. Doug Zuckerman'},
		{startTime:'9:00',endTime:'9:45 AM',event:'Keynote Talk 1',speaker:'Dr. Marian Croak, VP Google', confirmed: true},
		{startTime:'9:45',endTime:'10:15 AM',event:'',speaker:'Prof. Mung Chiang,  Princeton University', confirmed: true},
		{startTime:'10:15',endTime:'10:45 AM',event:'',speaker:'Dr Malcolm Robertson, 5G Planning Manager, CTO Office, Keysight Technologies'},
		{startTime:'10:45',endTime:'11:00 AM',event:'Break',speaker:''},
		{startTime:'11:00',endTime:'11:30 AM',event:'',speaker:'Prof. Dipankar Raychaudhuri, WINLAB', confirmed: true},
		{startTime:'11:30',endTime:'12:15 PM',event:'Keynote Talk 2',speaker:'Joseph Cozzolino, SVP, Cisco', confirmed: true},
		{startTime:'12:15',endTime:'1:00 PM',event:'Lunch',speaker:''},
		{startTime:'1:00',endTime:'1:30 PM',event:'',speaker:'Dr. Chih-Lin I, Chief Architect, China Mobile '},
		{startTime:'1:30',endTime:'2:00 PM',event:'',speaker:'Prof. Henning Schulzrinne, Columbia University', confirmed: true},
		{startTime:'2:00',endTime:'2:30 PM',event:'',speaker:'Asha Keddy, GM and VP, Intel'},
		{startTime:'2:30',endTime:'3:00 PM',event:'',speaker:'Tim Grance, NIST'},
		{startTime:'3:00',endTime:'3:15 PM',event:'Break',speaker:''},
		{startTime:'3:15',endTime:'4:00 PM',event:'Keynote Talk 3',speaker:'Dr. Ed Amoroso, SVP & Chief Security Officer, AT&T', confirmed: true},
		{startTime:'4:00',endTime:'4:30 PM',event:'',speaker:'Dr. Xiao-Feng Qi, Senior Director, Huawei'},
		{startTime:'4:30',endTime:'5:00 PM',event:'',speaker:'James Kimery, National Instruments (NI)'},
		{startTime:'5:00',endTime:'6:00 PM',event:'Networking and Reception',speaker:''}
	];
}
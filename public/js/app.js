

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

// Pick a sponsor/exhibitor ptab at random
$(function(){
	var choices = [0, 1, 0]; //,1,1,1
	var pickIndex = choices[Math.floor(Math.random()*choices.length)];
	$("#tabs li.active").removeClass('active');
	var selectedTab = $("#tabs li").get(pickIndex);
	$(selectedTab).addClass('active');
	
	var selectTabContent = $(selectedTab).find("a").attr("href");
	$("#sponsors-tabs .tab-pane.active").removeClass('active')
	$(selectTabContent).addClass('active');
	
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
	.module('app', ['ngSanitize'])
	.controller('mainCtlr', mainCtlr)
	.directive('badge', function(){
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'main/badge.html',
			scope: {
				caption: '@'
			}, 
			link: function($scope, elm, attr){

			}

		}

	})
	.filter('rawHtml', function ($sce) {
        return function (state) {
            if (state == 1) {
                return $sce.trustAsHtml(state);
            }
            else {
                return $sce.trustAsHtml(state);
            }
        }
    })
	.run(function($templateCache) {
		$templateCache.put('main/badge.html', '<div class="badgebox"><div class="badgebox-title" ng-bind="caption"></div><div class="badgebox-content" ng-transclude></div></div>');
	});
	
mainCtlr.$inject = ['$scope'];

function mainCtlr($scope){
	
	$scope.message = "";
	
	$scope.speakers = [
						/*	
							{key:"speader",name:'Speaker', affiliation:'University', title:'', portrait:'', talk:"", abstract:"", bio: {title:"Talk/Speaker title", description:"<p>Keynote talk description.</p>"},
						},
						{key:"speader",name:'Speaker', affiliation:'University', title:'', portrait:'', talk:"", abstract:"", bio: {title:"Talk/Speaker title", description:"<p>Keynote talk description.</p>"},
							},
							{key:"speader",name:'Speaker', affiliation:'University', title:'', portrait:'', talk:"", abstract:"", bio: {title:"Talk/Speaker title", description:"<p>Keynote talk description.</p>"},
						},
						{key:"speader",name:'Speaker', affiliation:'University', title:'', portrait:'', talk:"", abstract:"", bio: {title:"Talk/Speaker title", description:"<p>Keynote talk description.</p>"},
					},
					*/
							
						];
						
						
						
	$scope.keynotes = [
							{
								key: "HenningSchulzrinne",
								name:'Henning Schulzrinne', affiliation:'Columbia University', title:'Professor', portrait:'HenningSchulzrinne.jpg', talk:"", 
								abstract: "",
								bio:{title:"Professor", description: `<p>Prof.  Henning Schulzrinne is Julian Clarence Levi Professor of Computer Science at Columbia University.  He received his undergraduate degree in economics and electrical engineering from the Darmstadt University of Technology, Germany, his MSEE degree as a Fulbright scholar from the University of Cincinnati, Ohio and his Ph.D.  from the University of Massachusetts in Amherst, Massachusetts.  He was a member of technical staff at AT&T Bell Laboratories, Murray Hill and an associate department head at GMD-Fokus (Berlin), before joining the Computer Science and Electrical Engineering departments at Columbia University, New York.  From 2004 to 2009, he served as chair of the Department of Computer Science. From 2010 to 2011, he was an Engineering Fellow at the Federal Communications Commission (FCC); he is currently the CTO of the FCC.</p>
<p>He is editor of the "Computer Communications Journal", the "ACM Transactions on Multimedia Computing", the "ComSoc Surveys & Tutorials" and a former editor of the "IEEE Transactions on Image Processing", "Journal of Communications and Networks", "IEEE/ACM Transactions on Networking" and the "IEEE Internet Computing Magazine".</p>
<p>He has been a member of the Board of Governors of the IEEE Communications Society and is vice chair of ACM SIGCOMM, former chair of the IEEE Communications Society Technical Committees on Computer Communications and the Internet and has been technical program chair of Global Internet, IEEE Infocom 2000, ACM NOSSDAV, IEEE IM, IPTComm 2008, IFIP Networking 2009 and IPtel and general co-Chair of ACM Multimedia 2004 and ICNP 2009.  He serves on the Internet2 Applications, Middleware and Services Advisory Council and have led a working in the NSF GENI project.  He also has been a member of the IAB (Internet Architecture Board).  He serves on a number of conference and journal steering committees, including for the IEEE/ACM Transactions on Networking.</p>
<p>He has published more than 250 journal and conference papers, and more than 70 Internet RFCs.  Protocols co-developed by him are now Internet standards, used by almost all Internet telephony and multimedia applications.  His research interests include Internet multimedia systems, quality of service, and performance evaluation.</p>
<p>He served as Chief Scientist for FirstHand Technologies and Chief Scientific Advisor for Ubiquity Software Corporation.  He is a Fellow of the IEEE, has received the New York City Mayor's Award for Excellence in Science and Technology, the VON Pioneer Award, TCCC service award and the IEEE Region 1 William Terry Award for Lifetime Distinguished Service to IEEE.</p>`}
							},
							{
								key: "RadhikaVenkatraman",
								name:'Radhika Venkatraman', affiliation:'Verizon', title:'Vice President', portrait:'RadhikaVenkatraman.jpg', talk:"", 
								abstract: "",
								bio:{title:"Vice President", description: ""}
							},
							
							{
								key: "ThyagarajanNandagopal",
								name:'Thyagarajan Nandagopal', affiliation:'National Science Foundation', title:'Program Director', portrait:'ThyagarajanNandagopal.jpg', talk:"", 
								abstract: "",
								bio:{title:"Program Director", description: `<p>Dr. Thyaga Nandagopal serves in the Directorate of Computer & Information Science and Engineering (CISE) of the National Science Foundation. He manages wireless networking and mobile computing research within the Networking Technologies and Systems (NeTS) program at NSF.  He has been with the Foundation since February 2012.</p>
<p>Dr. Nandagopal received his Ph.D. in Electrical Engineering in 2002 from the University of Illinois at Urbana-Champaign. He was at Bell Labs from 2002 to 2012. His research interests have spanned several areas over these years: wireless ad hoc/mesh networks, RFID/sensor networks, internet routing architectures and protocols, cloud computing, and energy-efficient networks.</p>`}
							},
							
							];
							
							
	$scope.steering = [
		//{name: "Prof. Ramjee Prasad",affiliation: "CTIFGlobal and  Aalborg University", portrait: "Ramjee.jpg"},
						
						];
						
	$scope.organizing = [
						{name: "Deepak Kataria",affiliation: "IPJunction Inc", portrait: "DeepakKataria.jpg", role:"General Chair"},
						{name:'Rudra Dutta', affiliation:'North Carolina State University',  portrait:'RudraDutta.jpg', role:"TPC Co-Chair"},
						{name: "Vinod Vokkarane",affiliation: "University of Massachusetts Lowell", portrait: "VinodVokkarane.jpg", role:"TPC Co-Chair"},
						{name: "Anwar Walid",affiliation: " ", portrait: "AnwarWalid.jpg", role:"TPC Co-Chair"},
						{name: "Bala Presanna",affiliation: " ", portrait: "BalaPrasanna.jpg", role:"Finance Co-Chair"},
						{name: "Francis O’Connell",affiliation: " ", portrait: "", role:"Finance Co-Chair"},
						{name: "Jonathan Voris",affiliation: " ", portrait: "JonathanVoris.jpg", role:"Publications Chair"},
						{name: "Wenjia Li",affiliation: " ", portrait: "WenjiaLi.jpg", role:"PhD Forum Chair"},


						//Anwar Walid
						//{name: "Deepak Kataria",affiliation: "IPJunction Inc", portrait: "DeepakKataria.jpg", role:"General Chair"},
						
						];
	
	
	$scope.agenda = [
		//{startTime:'08:00',endTime:'09:00 AM',event:'Registration, Coffee, Breakfast',speaker:''},
		
	];
	
	$scope.currentDate = (new Date()).getTime();
	$scope.summits = [
			
		];
}


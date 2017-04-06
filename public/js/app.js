

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
	var choices = [0, 0, 1]; //,1,1,1
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
							
							{key:"UrsMuller",name:'Urs Muller', affiliation:'NVIDIA', title:'Chief Architect - Autonomous Driving', portrait:"UrsMuller.jpg", talk:"", abstract:"", bio: {title:"", description:"<p>Urs Muller joined NVIDIA early 2015 to build and lead an autonomous driving team that creates novel deep-learning solutions for self-driving cars on NVIDIA's high-performance DRIVE PX platform. </P>\
<p>In 2002 Urs Muller founded Net-Scale Technologies, Inc., with the goal of advancing new scientific results into industrial products. Net-Scale was prime contractor on several robotics, machine learning, and data security DARPA programs. In his role as a PI in these programs, Urs Muller has lead teams of scientists from New York University, the University of Montreal, and NEC Labs America in Princeton. </p>\
<p>Before, Urs Muller worked as a scientist at Bell Labs, AT&T Labs, and ETH Zurich where he built award winning high-performance computers and delivered Internet applications for millions of users.</p>\
 <p>Urs Muller holds a Doctor of Technical Sciences degree (PhD) from the Swiss Federal Institute of Technology (ETH).</p>"},
 talk:'Learned Path Planning and Vehicle Control', abstract: "<p>In our NVIDIA lab in New Jersey we taught a deep convolutional neural network (DNN) to drive a car by observing human drivers and emulating their behavior. We found that these networks can learn more aspects of the driving task than is commonly learned today. We present examples of learned lane keeping, lane changes, and turns. We also introduce tools to visualize the internal information processing of the neural network and discuss the results.</p>\
<p>Work on our deep convolutional nets started in the spring of 2015 with a core team based in Holmdel, New Jersey. By March 2016 the team could demonstrate end-to-end learning of the complete control loop from cameras to steering actuation. A demo system that drove on local roads and highways was successfully trained with about 70 hours of driving data.</p>\
<p>In the past year the team has grown and capabilities of our system have expanded, now including learned lane changes and turns at intersections. In addition, a simulator was built that faithfully reproduces real vehicle behavior.</p>"
						},
						{key:"MichaelLangdon",name:'Michael Langdon', affiliation:'Juniper Networks', title:'Senior Director', portrait:'MichaelLangdon.jpg', talk:"", abstract:"", bio: {title:"", description:"<p>Michael Langdon is a Senior Director at Juniper Networks in the Contrail Business Unit where he supports field enablement and evangelism for cloud and network services virtualization. He spends most of his time interacting with users discussing architectures to drive seamless integration of network services as part an overall agile application and user services delivery workflow./p\
<p>Michael is now on his second tour with Juniper. Starting with Juniper in 2000, Michael was a Sales Engineer focusing on carrier customers. After almost 12 years at Juniper, he joined start up Contrail Systems to build & lead their Sales Engineering team. Juniper acquired Contrail in late 2012 and Michael has been Contrailing ever since. Michael previously worked as an ISP consultant to carrier networks and as operations and engineering manager for one of the original NSFNet backbones (JvNCNet).</p>\
<p>Michael is a 1987 graduate of Villanova University and started his career as an officer in the US Navy onboard a Knox class frigate. Michael is based in the New York City area.</p>"},
							},
							{key:'ThomasMotyka', name: 'Thomas E. Motyka', affiliation: 'New Jersey Innovation Institute', title:'', portrait:'ThomasMotyka.jpg', bio: {title:'', description:"<p>Thomas Motyka is Senior Executive Director of Infrastructure Innovation at the New Jersey Innovation Institute.  He leads the Smart City iLab at the institute which is focused on applying technology & innovation in urban infrastructure and public services.\
He comes to this role with over 28 years of experience in the information technology industry most recently as the Global Director of Mobility Services at the IBM Corporation.\
His career included roles in engineering, development, product management and business development.  He supported enterprise clients across multiple industries including: Communications (AT&T, Verizon), Utilities (HL&P, Keyspan) and Finance (Deutsche Bank, Bank of America).\
Thomas holds an M.B.A from Fairleigh Dickinson University and a B.S. in electrical engineering from New Jersey Institute of Technology.</p>"}},
							{key: 'KandanKathirvel', name:'Gnanavelkandan Kathirvel', affiliation: 'AT&T', title:'Lead System Architect', portrait:'KandanKathirvel.jpg', bio: {title: 'Lead System Architect', description:"<p>Kandan is Lead System Architect for AT&T. Kandan leads technology efforts around NFV and AT&T’s Integrated Cloud Platform. He is currently responsible for shepherding SDN and NFV projects on to AT&T’s Integrated Cloud platform and big Open Source advocate. Previously, Kandan led the architecture work to support Cloud convergence, building external cloud and Content Delivery network (CDN) for AT&T</p>"}},
							{key:'WalterWillinger', name: 'Walter Willinger', affiliation: 'NIKSUN', title: 'Chief Scientist', portrait:'WalterWillinger.jpg', bio: {title: 'Chief Scientist', description: '<p>Dr. Willinger is Chief Scientist at NIKSUN, Inc., the world leader in real-time monitoring and cyber forensics solutions. Before joining NIKSUN, he worked at AT&T Labs-Research in Florham Park, NJ from 1996 to 2013 and at Bellcore Applied Research from 1986 to 1996. Dr. Willinger received his Dipl. Math. from the ETH Zurich and his M.S. and Ph.D. in Operations Research and Industrial Engineering from Cornell University. He is a Fellow of ACM (2005), Fellow of IEEE (2005), AT&T Fellow (2007), and Fellow of SIAM (2009), co-recipient of the 1995 IEEE Communications Society W.R. Bennett Prize Paper Award and the 1996 IEEE W.R.G. Baker Prize Award, and co-recipient of the 2005 and 2016 ACM/SIGCOMM Test-of-Time Paper Awards. His paper "On the Self-Similar Nature of Ethernet Traffic" is featured in "The Best of the Best - Fifty Years of Communications and Networking Research," a 2007 IEEE Communications Society book compiling the most outstanding papers published in the communications and networking field in the last half century.</p>' } },
							{key:'RobertHowald', name: 'Robert Howald', affiliation:'Comcast', title: '', portrait: 'RobertHowald.jpg', talk: '', abstract: '', bio: {title: '', description: "<p>Dr. Howald has over 30 years of technology and executive experience in commercial and military communications systems.  He is Vice President of Network Architecture at Comcast, focused on the evolution of cable systems and services, future network architectures, and emerging broadband technologies.  Prior to this, Dr. Howald held similar roles in the Cable industry with ARRIS and the former Motorola Mobility.  Dr. Howald was also Vice President of Engineering at Xytrans, specializing in millimeter wave products for cellular backhaul, homeland security, and people screening from 2004-2008.  He was also the Director of Systems Engineering at General Instrument and Motorola’s prior Broadband Communications Systems division beginning in the 1990s.</p>\
<p>Dr. Howald has taught graduate courses in communications and wireless systems engineering, has published over 150 papers, and has multiple patents issued and pending. He has a BSEE and MSEE from Villanova University, a Ph.D. in Electrical and Computer Systems Engineering from Drexel University, and a Master’s of Business Administration (MBA) from DeSales University.</p>"} }

							/*
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
								bio:{title:"Professor", description: '<p>Prof.  Henning Schulzrinne is Julian Clarence Levi Professor of Computer Science at Columbia University.  He received his undergraduate degree in economics and electrical engineering from the Darmstadt University of Technology, Germany, his MSEE degree as a Fulbright scholar from the University of Cincinnati, Ohio and his Ph.D.  from the University of Massachusetts in Amherst, Massachusetts.  He was a member of technical staff at AT&T Bell Laboratories, Murray Hill and an associate department head at GMD-Fokus (Berlin), before joining the Computer Science and Electrical Engineering departments at Columbia University, New York.  From 2004 to 2009, he served as chair of the Department of Computer Science. From 2010 to 2011, he was an Engineering Fellow at the Federal Communications Commission (FCC); he is currently the CTO of the FCC.</p>\
<p>He is editor of the "Computer Communications Journal", the "ACM Transactions on Multimedia Computing", the "ComSoc Surveys & Tutorials" and a former editor of the "IEEE Transactions on Image Processing", "Journal of Communications and Networks", "IEEE/ACM Transactions on Networking" and the "IEEE Internet Computing Magazine".</p>\
<p>He has been a member of the Board of Governors of the IEEE Communications Society and is vice chair of ACM SIGCOMM, former chair of the IEEE Communications Society Technical Committees on Computer Communications and the Internet and has been technical program chair of Global Internet, IEEE Infocom 2000, ACM NOSSDAV, IEEE IM, IPTComm 2008, IFIP Networking 2009 and IPtel and general co-Chair of ACM Multimedia 2004 and ICNP 2009.  He serves on the Internet2 Applications, Middleware and Services Advisory Council and have led a working in the NSF GENI project.  He also has been a member of the IAB (Internet Architecture Board).  He serves on a number of conference and journal steering committees, including for the IEEE/ACM Transactions on Networking.</p>\
<p>He has published more than 250 journal and conference papers, and more than 70 Internet RFCs.  Protocols co-developed by him are now Internet standards, used by almost all Internet telephony and multimedia applications.  His research interests include Internet multimedia systems, quality of service, and performance evaluation.</p>\
<p>He served as Chief Scientist for FirstHand Technologies and Chief Scientific Advisor for Ubiquity Software Corporation.  He is a Fellow of the IEEE, has received the New York City Mayor\'s Award for Excellence in Science and Technology, the VON Pioneer Award, TCCC service award and the IEEE Region 1 William Terry Award for Lifetime Distinguished Service to IEEE.</p>'}
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
								bio:{title:"Program Director", description: '<p>Dr. Thyaga Nandagopal serves in the Directorate of Computer & Information Science and Engineering (CISE) of the National Science Foundation. He manages wireless networking and mobile computing research within the Networking Technologies and Systems (NeTS) program at NSF.  He has been with the Foundation since February 2012.</p>\
<p>Dr. Nandagopal received his Ph.D. in Electrical Engineering in 2002 from the University of Illinois at Urbana-Champaign. He was at Bell Labs from 2002 to 2012. His research interests have spanned several areas over these years: wireless ad hoc/mesh networks, RFID/sensor networks, internet routing architectures and protocols, cloud computing, and energy-efficient networks.</p>'}
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


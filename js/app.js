

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
	var choices = [0,0,0,0,2,2,3,4,4]; //,1,1,1
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
	.filter('rawHtml', function ($sce) {
        return function (state) {
            if (state == 1) {
                return $sce.trustAsHtml(state);
            }
            else {
                return $sce.trustAsHtml(state);
            }
        }
    });
	
mainCtlr.$inject = ['$scope'];

function mainCtlr($scope){
	
	$scope.message = "";
	
	$scope.speakers = [
							
							{key:"Mung-Chiang",name:'Prof. Mung Chiang', affiliation:'Princeton University', title:'', portrait:'MungChiang.jpg', talk:"Fog Networking for 5G and IoT", abstract:"<p>Pushing computation, control and storage into the &quot;cloud&quot; has been a key trend in networking in the past decade. The cloud is now &quot;descending&quot; to the network edge and often diffused among the client devices. The cloud is becoming the &quot;fog.&quot; Fog Network presents an architecture that uses one or a collaborative multitude of end-user clients or near-user edge devices to carry out storage, communication, computation, and control in a network. This talk will survey such an architecture that will support the Internet of Things, heterogeneous 5G mobile services, and home and personal area networks, and explore how fog networks may incorporate the latest advances in devices, network systems, and data science to reshape the &quot;balance of power&quot; in the ecosystem of computing and networking.</p>", bio: {title:"", description:"<p>Mung Chiang is the Arthur LeGrand Doty Professor of Electrical Engineering at Princeton University. He graduated from Stanford University with B.S., M.S., and Ph.D. in 1999, 2000, and 2003, respectively. His research has been on network utility maximization/network function optimization, Fog networks/IoT, Smart Data Pricing, and social learning networks. He received the 2013 Alan T. Waterman Award from National Science Foundation, the highest honor to US young scientist and engineers, the 2012 Kiyo Tomiyasu Award from IEEE, and various young investigator awards. He co-authored papers that received the IEEE INFOCOM 2012 Best Paper Award and the IEEE SECON 2013 Best Paper Award, and lead to a Yelp Data Challenge 2014 Grand Prize. A 2007 Technology Review TR35 Young Innovator, he created the Princeton EDGE Lab in 2009 to bridge the theory-practice divide in networking by spanning from proofs to prototypes, resulting in a few technology transfers to industry and in startup companies enabling open toll-free content and data-driven learning. As the inaugural Chairman of the Princeton Entrepreneurship Advisory Committee and Director of the Keller Center for Innovations in Engineering Education, he helped initiate entrepreneurship funds, incubators, curricular/co-curricular programs, and mentorship/ecosystem networks at Princeton University, and was selected as a 2014 New Jersey (non-profit) CEO of the Year by NJ Technology Council. His Massive Open Online Courses on networks reached about 250,000 students since 2012, and he received the 2013 Frederick E. Terman Award from the American Society of Engineering Education. His two undergraduate textbooks became Amazon bestsellers in Technology and “Networked Life: 20 Questions and Answers” received the 2012 PROSE Award in Science and Engineering by the Association of American Publishers. He was named a Guggenheim Fellow in 2014.</p>"}
							},
							
							{key:"Dipankar-Raychaudhuri",name:'Prof. Dipankar Raychaudhuri', affiliation:'WINLAB', title:'', portrait:'DipankarRaychaudhuri.jpg', talk:"5G Network Architecture and the Future Mobile Internet", abstract: "<p>This talk provides a discussion of one of the central design challenges associated with next-generation “5G” wireless systems - that of effectively converging 3GPP-based mobile networks with the global Internet.  Although the trend towards “flat” IP-based architectures for cellular networks is well under way with LTE, significant architectural evolution (or revolution enabled by emerging technologies such as SDN) will be needed to achieve the goal of supporting the needs of mobile devices and applications as “first-class” services on the Internet.  Several emerging mobility service scenarios including hetnet/small cell, multi-network access, mobile cloud, IoT (Internet-of-Things) and V2V (vehicle-to-vehicle) are examined and related network service requirements such as user mobility, disruption tolerance, multi-homing, content/service addressability and context-aware delivery are identified.  Drawing from our experience with the ongoing NSF-sponsored “MobilityFirst” future Internet architecture project, we outline a possible protocol solution based on the “GUID (Globally Unique Identifier) Service Layer” which enables a clean separation of naming and addressing, and provides intrinsic support for a wide variety of mobility services.  Strategies for evolutionary deployment of the proposed techniques are also discussed.  The talk concludes with a brief outline of the MobilityFirst proof-of-concept prototype currently being deployed on the GENI meso-scale networking testbed.</p>", 
							bio: {title:"", description:"<p>Dipankar Raychaudhuri is Distinguished Professor, Electrical & Computer Engineering and Director, WINLAB (Wireless Information Network Lab) at Rutgers University. As WINLAB's Director, he is responsible for an internationally recognized industry-university research center specializing in wireless technology. He is also PI for several large U.S. National Science Foundation funded projects including the “ORBIT” wireless testbed and the “MobilityFirst” future Internet architecture.</p>\
<p>Dr. Raychaudhuri has previously held corporate R&D positions including: Chief Scientist, Iospan Wireless (2000-01), AGM & Dept Head, NEC Laboratories (1993-99) and Head, Broadband Communications, Sarnoff Corp (1990-92).  He obtained the B.Tech (Hons) from IIT Kharagpur in 1976 and the M.S. and Ph.D degrees from SUNY, Stony Brook in 1978, 79. He is a Fellow of the IEEE.</p>"}},
							{key:"Xiao-Feng-Qi", name:'Dr. Xiao-Feng Qi', affiliation:'Huawei', title:'Senior Director', portrait:'XiaoFengQi.jpg', talk: "", bio: {title:"Senior Director", description: "<p>Dr. Qi has worked in telecom R&D since 1992, and has led R&D teams at Level One, Intel, and Broadcom, covering modem algorithm research and development efforts over a range of wired and wireless standards and products, including ADSL, 802.11n, GSM and LTE. Since September 2014 he has been with Futurewei as head of its Radio Algorithm Research group, spearheading radio algorithms innovations for the next-generation dense wideband networks. He obtained his PhD EE in 1992 from the University of Connecticut on bio-inspired stochastic learning algorithms.</p>"}},
							
							{key:"Henning-Schulzrinne", name:'Prof. Henning Schulzrinne', affiliation:'Columbia University', title:'', portrait:'HenningSchulzrinne.jpg', talk:"5G: What can we learn from the previous four generations?", abstract:"<p>Each generation of cellular technology has been based either on new radio access technology, or, more recently, on perceived or existing application needs. As we consider 5G, we can benefit from revisiting some of the assumptions that entered into previous generations of technology. Unlike the prior generational changes, all of which have probably yielded a significant increase in complexity each time, we now have the opportunity to greatly reduce the protocol and operational complexity of the overall system. For that, however, we may need to fundamentally change our assumptions about who operates network infrastructure, how devices are added to networks and who should trust whom. But a fundamental shift may well be the only way to reduce the 85% of revenue that flows into operational expenses.</p>", bio: {title:"", description: "<p>Prof.  Henning Schulzrinne, Levi Professor of Computer Science at Columbia University, received his Ph.D.  from the University of Massachusetts in Amherst, Massachusetts.  He was an MTS at AT&T Bell Laboratories and an associate department head at GMD-Fokus (Berlin), before joining the Computer Science and Electrical Engineering departments at Columbia University.  He served as chair of the Department of Computer Science from 2004 to 2009, as Engineering Fellow at the US Federal Communications Commission (FCC) in 2010 and 2011, and as Chief Technology Officer and Technical Advisor at the FCC from 2012.</p>\
<p>He has published more than 250 journal and conference papers, and more than 70 Internet RFCs.  Protocols co-developed by him, such as RTP, RTSP and SIP, are now Internet standards, used by almost all Internet telephony and multimedia applications.  His research interests include Internet multimedia systems, ubiquitous computing, and mobile systems.</p> \
<p>He is a Fellow of the ACM and IEEE, has received the New York City Mayor's Award for Excellence in Science and Technology, the VON Pioneer Award, TCCC service award, IEEE Region 1 William Terry Award for Lifetime Distinguished Service to IEEE, the UMass Computer Science Outstanding Alumni recognition and is a member of the Internet Hall of Fame.</p>"}}, 
							
							{key:"Apostolos-Papathanassiou",name:'Dr. Apostolos Papathanassiou', affiliation:'Intel', title:'Sr Principal Engineer', portrait:'ApostolosPapathanassiou.jpg', talk:"Towards 5G: Advances from IoT to Millimeter Wave Communications", bio: {title:"Sr Principal Engineer, Next Generation and Standards", description:"<p>Apostolos (Tolis) Papathanassiou is responsible for LTE PHY standardization and engaged in 5G technology development activities in the Next Generation and Standards (NGS) division of Intel's Communication and Devices Group (iCDG). He has more than 50 scientific contributions to international journals, conferences, and books, more than 20 awarded patents/patent applications, and more than 100 contributions to wireless standardization bodies such as 3GPP and IEEE 802.11/802.16. Previously at Intel, he led multiple standardization efforts in ITU-R and IEEE. Before joining Intel, Tolis worked on multiple-antenna PHY techniques and algorithms for 3G, WiFi and satellite systems.</p>"}},
							
							{key:"Chih-Lin-I", name:'Dr. Chih-Lin I', affiliation:'China Mobile', title:'Chief Scientist, Wireless Technologies', portrait:'ChihLinI.jpg', talk:"Quest for 5G: Rethink Fundamentals", abstract:"<p>Mobile Internet and Internet of Thing have been widely recognized as the two major driven force of next generation wireless communication system by global community. A hidden factor behind is the extreme diverse performance requirements of rich applications under these two umbrellas, from optical-fiber-like access to massive low data rate low power connections, from extreme delay sensitive links to sparse burst transmissions. Fundamentals of traditional mobile network design principles should be revisited to shed lights on new technical barriers and opportunities. This presentation will share CMCC's angle toward 5G and latest progress of its R&D efforts.</p>", bio: {title:"Chief Scientist, Wireless Technologies", description:"<p>Chih-Lin I is the China Mobile Chief Scientist of Wireless Technologies, in charge of advanced wireless communication R&D effort of China Mobile Research Institute (CMRI). She established the Green Communications Research Center of China Mobile, spearheading major initiatives including 5G Key Technologies R&D; high energy efficiency system architecture, technologies, and devices; green energy; C-RAN and soft base station.</p>\
<p>Chih-Lin received her Ph.D. degree in Electrical Engineering from Stanford University, has almost 30 years experience in wireless communication area. She has worked in various world-class companies and research institutes, including wireless communication fundamental research department of AT&T Bell Labs; Headquarter of AT&T, as Director of Wireless Communications Infrastructure and Access Technology; ITRI of Taiwan, as Director of Wireless Communication Technology; Hong Kong ASTRI, as VP and the Founding GD of Communications Technology Domain. Chih-Lin received the Trans. COM Stephen Rice Best Paper Award, and is a winner of CCCP “National 1000 talent” program. She was an elected Board Member of IEEE ComSoc, Chair of ComSoc Meeting and Conference Board, and the Founding Chair of IEEE WCNC Steering Committee. She is currently an Executive Board Member of GreenTouch, and a Network Operator Council Member of ETSI NFV.</p>"}},
							{key:"Malcolm-Robertson", name:'Dr Malcolm Robertson', affiliation:'Keysight Technologies', title:'5G Planning Manager', portrait:'MalcolmRobertson.jpg', talk:"Speed to Insight:  Measurement and Metrology in 5G", abstract:"", bio: {title:"5G Planning Manager", description:"<p>Malcolm Robertson joined Keysight Technologies (then Agilent Technologies) in 2000, working in the development of wireless test solutions for cellular and non-cellular applications.  He has held positions in manufacturing engineering, R&D management, and strategic planning.  Malcolm holds a Bachelor of Science (Honours) degree in Physics and Electronics and a PhD from the University of St.Andrews in Scotland.  His PhD and subsequent postgraduate work was undertaken as part of the millimeter-wave and terahertz research group, focusing on novel millimeter-wave sources.</p>"}},	
							{key:"James-Kimery", name:'James Kimery', affiliation:'National Instruments (NI)', title:'Director of Marketing', portrait:'JamesKimery.jpg', talk:"5G: From Theory to Practice", abstract:"<p>5G is an exciting research area paving the way for faster, more responsive mobile access networks while also increasing capacity.  New and innovative approaches to solve these challenges include mmWave frequencies, densification / het-nets, and Massive MIMO.   To expedite the transition of these new technologies from concept to commercialization and adoption requires a platform approach.  This talk will overview some of the latest candidate 5G technologies, their progress and their potential to address the 5G requirements.</p>", bio: {title:"Director of Marketing", description:"<p>James Kimery is the Director of Marketing for National Instruments Wireless Research and SDR initiatives.  In this role, James is responsible for company’s 5G strategy encompassing both research and business initiatives.  In this role, James leads NI’s RF and Communications Lead User program which works with leading researchers across the world to accelerate the transition from theory to prototype.  James also manages the company’s software defined radio business including the Ettus Research subsidiary acquired by NI in 2010.  In 2014, James chaired the IEEE Globecom industry committee which was held in Austin, Texas.  Prior to joining NI, James was the Director of Marketing for Silicon Laboratories' wireless division. As Director, the wireless division grew revenues exceeding $250M (from $5M) and produced several industry innovations including the first integrated CMOS RF synthesizer and transceiver for cellular communications, the first digitally controlled crystal oscillator, and the first integrated single chip phone (AeroFONE).  AeroFONE was voted by the IEEE as one of the top 40 innovative ICs ever developed.  James also worked at National Instruments before transitioning to Silicon Labs and led many successful programs including the concept and launch of the PCI eXtensions for Instrumentation (PXI) platform.  James was a founding member of the VXIplug&play Systems Alliance, VISA working group, and PXI System Alliance.  He has authored over 30 technical papers and articles covering a variety of wireless and test and measurement related topics.  James holds degrees from the University of Texas at Austin (MBA) and Texas A&M University (BSEE).</p>"}},
							{key:"Tim-Grance", name:'Tim Grance', affiliation:'NIST', title:'Senior Scientist', portrait:'TimGrance.jpg', talk:"Musings on a Vocabulary for the Composition of Things", abstract: "", bio: {title:"Senior Scientist", description:"<p>Tim Grance is a senior computer scientist at the National Institute of Standards and Technology. He has held a variety of positions at NIST including Group Manager, Systems and Network Security and Program Manager for Cyber and Network Security. He led a broad portfolio of projects including high profile projects such as the NIST Hash Competition, Cloud Computing, Protocol Security (DNS, BGP, IPv6), Combinatorial Testing, and the National Vulnerability Database. He is presently a senior researcher advising on projects in cloud computing, mobile devices, internet of things, and big data. He has written extensively on cloud computing, incident handling, privacy, and identity management. He is a two-time recipient of the US Department of Commerce’s highest award—a Gold Medal, from the Secretary of Commerce.</p>"}},
							{key:"Ashwin-Sampath", name: "Dr. Ashwin Sampath", affiliation: "Qualcomm", title: "Senior Director of Technology", portrait:'AshwinSampath.jpg', talk:"Millimeter Wave Communications: Channel Measurements, System Design and Performance", bio: {title:"Senior Director of Technology at Corporate R&D", description: "<p>Ashwin Sampath is Senior Director of Technology at Corporate R&D, Qualcomm, NJ. He is leading millimeter wave research within the division, overseeing channel measurements/modeling, system design, standardization and prototyping. He has been with Qualcomm, CR&D since 2005 where he has led projects related to dense small-cell networks, topics in LTE-Advanced, 3G/4G multi-mode wireless modem design for small-cell ASICs and Femto cell SoC architecture. Prior to joining Qualcomm, from 2003-2005, he was with Texas Instruments, leading HSDPA systems engineering for a mobile SoC and before that, was Distinguished Member of Technical Staff at Bell Labs from 1997-2003. He has over 90 issued patents. He holds a PhD in Electrical Engineering from Rutgers University.</p>" }},
							{key:"Rob-Fish", name: "Dr. Rob Fish", affiliation: "Communication Society", title: "VP of Standards", portrait:'RobFish.jpg', talk:" IEEE 5G Standards Update", bio: {title: "Vice President Standards", description: "<p>Robert S. Fish received his Ph.D. from Stanford University.  Currently, Dr. Fish is President of NETovations, LLC, a consulting company focused on the creation of communications and networking technology innovation.  From 2007 to 2010, he was Chief Product Officer and Senior VP at Mformation, Inc. specializing in carrier software for mobile device management.  From 1997 to 2007, Rob was Vice President and Managing Director of Panasonic US R&D laboratories working on the embedding of networking in consumer devices.   Prior to this, he was Executive Director, Multimedia Communications Research at Bellcore after starting his career at Bell Laboratories.  Dr. Fish has over 30 publications and 17 patents.</p>\
<p>During his career, Dr. Fish and his organizations have initiated and managed standards development activities in IEEE, ISO/IEC JTC1, 3GPP, OMA, IETF, ATSC, CableLabs, OSGi, and several others.</p>\
<p>Rob is the Vice President of Standards Activities of the IEEE Communications Society.   He is a member of the Board of Governors of the IEEE Standards Association, Chair of IEEE-SA’s Global Committee, and a founding member of the IEEE-SA Corporate Advisory Group. He co-edited a series in IEEE Communications Magazine on IEEE standards in communications and networking.   He is Co-founder and Steering Committee Chair of ComSoc’s Consumer Communications and Networking Conference and a member of the IEEE Conferences Committee.  For his leadership and contributions to the Multimedia Communications Technical Committee, Dr. Fish was the recipient of MMTC’s Distinguished Service Award.</p>"}},
							{key:"Theodore-Sizer", name: "Dr. Theodore Sizer", affiliation: "Alcatel Lucent", title: "VP of Wireless Research", portrait:'TodSizer.jpg', talk:"", bio: {title:"Vice President of the Wireless Research Program", description:"<p>Dr. Theodore (Tod) Sizer is Vice President of the Wireless Research Program in Bell Laboratories.  In this role he leads teams in six worldwide locations innovating in all aspects of wireless systems, technology and software.  In addition his teams collaborate with fixed access systems including copper, and optical with special opportunities being explored at the convergence between these and wireless.</p>\
<p>Recently he has had significant impact as a key proponent and inventor of the lightRadio™ and small cell technology and systems leading to Alcatel-Lucent's product line solution to address the current Wireless Data explosion.</p>\
<p>During his tenure at Bell Labs he has performed research in Wired and Wireless Home Networking, Fixed Wireless Loop systems, Video Watermarking technologies, Optical Computing and Switching Systems, and High Power Laser Design. He was a member of the technical team in Lucent's role as a promoter in the Bluetooth Special Interest Group (SIG).  His responsibilities in the SIG included being Chair of the Coexistence Working Group.</p>\
<p>Tod graduated from Amherst College, Magna Cum Laude and received his Masters and Doctorate from the Institute of Optics at the University of Rochester.   In 2007 Tod was named a Bell Labs Fellow 'For sustained creative contributions to wireless systems, particularly in the convergence of packet and wireless technologies'.  He is the author of 51 US patents, over 50 refereed publications and is a member of the IEEE and OSA.</p>"}},
							{key:"Sven-van-der-Meer", name:"Dr. Sven van der Meer", affiliation:"Ericsson", title:"", portrait:"SvenVanDerMeer.jpg", talk:"5G & Autonomic Networking - Challenges in closing the Loop", abstract:"<p>Sven will outline the problems with existing policy based management systems and why we now need adaptive policy based management systems enabling networks to be self-governed. Sven will talk about key technologies shaping the future of the ENM Automation Framework (including control theory, predictive analytics, policy based management context aware computing, knowledge engineering and semantics, modelling of adaptive behavior).</p>", bio:{title:'', description:"<p>Sven van der Meer (vdmeer@ieee.org) received his degrees (Diploma - 1996, PhD - 2002) from Technical University Berlin, Germany. After working at Fraunhofer FOKUS and the Waterford Institute of Technology, he joined Ericsson in 2011. Sven is currently a Master Engineer and Team Leader in the Ericsson Network Management Labs in PDU NAM. Most of his current time is dedicated to integrating predictive analytics with network management and policy-based control, building 5G autonomic network solutions. Sven is member of IEEE and standing member of IEEE IM, IEEE NOMS, and IEEE CNSM program committees.</p>"}},
							
							{
								key:"Darryle-Merlette",
								name:"Darryle Merlette", affiliation:"NIKSUN", title:"Executive Director", portrait:"DarryleMerlette.jpg",
								talk:"Art of Cybersecurity",
								abstract:"<p>Cybersecurity can be seen as part art, part science. This talk will take a look at cybersecurity through the decades as the canvas has changed from 1G to 4G, and consider the implications of the emerging 5G.  As networks get faster and the potential points of exploitation increase with IoT and cloud computing, what are the overarching affects on network security? Is it true that the more things change, the more they stay the same? Or will they get worse? This talk may or may not answer those questions -- true to the aesthetics of art, it depends on point of view and the eye of the beholder.</p>",
								bio: {
									title:"Executive Director of Product Security and Expert Solutions",
									description:"<p>Darryle Merlette is a security and software professional with more than 20 years experience designing, developing, and delivering software and security solutions to diverse markets. He is currently the Executive Director of Security Solutions at NIKSUN, Inc where he oversees the process of securing product offerings, developing IDS signatures and anomaly detections, and creating advanced network analysis solutions. Darryle has been with NIKSUN for over 15 years, and prior to joining he held senior software engineering positions at Telcordia Technologies (formerly Bell Communications Research, now Ericsson) and Lucent Technologies (now Alcatel-Lucent). Darryle holds a BSE in Computer Science from Princeton University and an MSE in Computer Science and Engineering from the University of Michigan. He has been a Certified Information Systems Security Professional (CISSP) in good standing since 2003.</p>"
								}
							}
						];
						
						
						
	$scope.keynotes = [
							{
								key: "Marian-Croak",
								name:'Dr. Marian Croak', affiliation:'Google', title:'VP', portrait:'MarianCroak.jpg', talk:"The Implications of 5G on the Next 5 Billion Users", 
								abstract: "<p>Dr Croak will discuss the critical implications for 5G to the emerging markets. She will review key aspects of 5G and provide an overview of the cultural and technical landscape faced by developing nations.  Her talk will explain the importance of taking the needs of emerging markets into consideration in the definition, implementation, and adoption of 5G.</p>",
								bio:{title:"VP of Access Strategy and Emerging Markets", description: "<p>Marian Croak is the Vice President of Access Strategy and Emerging Markets at Google, Inc. Marian joined Google in late 2014 after retiring from AT&T as an SVP responsible for advanced research and innovation, and designing and developing one of the world's largest wireless and broadband networks.  Marian holds over 200 patents mostly focused on IP technology. Marian has received numerous awards, including the 2013 and 2014 Edison Patent Awards, was inducted into the Women in Technology International's Hall of Fame in 2013, and, was named by Fierce Wireless as the one of the ten 2014 Most Influential Women in Wireless. Marian attended Princeton University and received her doctorate in quantitative analysis and psychology.</p>"}
							},
							
							{
								key: "Joe-Cozzolino",
								name:'Joe Cozzolino', affiliation:'Cisco', title:'Senior VP', portrait:'JoeCozzolino.jpg', talk: "Laying the Foundation for 5G",
								abstract: "<p>Massive growth on today's mobile networks signal the connection of data, processes, people and things to create the Internet of Everything (IoE).  To seize the new business opportunities created by this major market transition, mobile network operators must build intelligent, secure, efficient, information-centric networks. In this session, learn how Cisco is building the foundation of the next generation 5G mobile network</p>"
								,bio: {title: "Senior Vice President, GM Mobility and Service Provider Video Infrastructure", description:"<p>Joe Cozzolino is Senior Vice President and General Manager of Cisco's Mobility and Service Provider Video Infrastructure business groups. In this role, he is responsible for orchestrating global business strategy and execution for the entire Cisco mobility product portfolio and technology solutions for mobile service operators. He also oversees the strategy and development of Cisco's video hardware portfolio, which includes cable modems, video gateways, home management gateways, and set-top boxes. He manages a global team of engineers, architects, product line managers, technical marketing engineers, and business development managers.</p>\
<p>Cozzolino brings over 25 years of experience in wireline and CATV engineering, general management, sales, and customer service to Cisco. He joined Cisco in 2013 from Motorola, where he was most recently Senior Vice President and General Manager of Video Network Infrastructure for Motorola Mobility. In that role, he was responsible for next-generation access, Cloud DVR, video processing, and IP solutions. He also led the firm's Home & Networks Mobility business in EMEA and Asia Pacific, where he was responsible for sales, services, and integration for complex mobile networks across the region as well as video service providers. Earlier in his career, Cozzolino led worldwide customer operations at RiverDelta Networks and was General Manager at ADC Telecommunications.</p>\
<p>Cozzolino holds a bachelor's degree in electrical engineering from University of Massachusetts Dartmouth and a master's degree in business administration from Anna Maria College.</p>"}},
							
							{key:"Ed-Amoroso", name:'Dr. Edward G. Amoroso', affiliation:'AT&T', title:'SVP & Chief Security Officer', portrait:'EdwardAmoroso.jpg', talk: "From Enterprise Perimeter to Secure Cloud", bio: {title:"SVP and Chief Security Officer", description:"<p>Dr. Edward G. Amoroso Senior Vice President , Chief Security Officer, AT&T Services, Inc. Dr. Edward G. Amoroso currently serves as Senior Vice President and Chief Security Officer at AT&T, where his primary responsibilities lie in the real-time protection of AT&T’s vast enterprise, network, and computing infrastructure, including its emerging LTE mobile network and cloud services. Ed’s team is presently focused on creating innovative means for reducing the risk of Advanced Persistent Threat (APT), Distributed Denial of Service (DDOS), mobile malware, and cloud infrastructure attacks targeting AT&T and its customers. Ed’s team works specifically in the area of advanced threat analytics, virtualization of cloud resident security protections, enterprise security policy and architecture, and advanced detection of malware. During his twenty-nine year career with AT&T, beginning at Bell Labs, Ed has focused exclusively on cyber security, working on projects ranging from Unix operating system security to critical infrastructure protection design. Ed is the author of dozens of technical papers and reports, as well as five published books on the topic of cyber security. For the past twenty-five years, he has also served as adjunct professor of computer science at the Stevens Institute of Technology, where he has introduced roughly 2,500 graduate students to the topic of computer security. Ed holds the BS degree in physics from Dickinson College, and the M.S. and Ph.D. degrees in computer science from the Stevens Institute of Technology. Ed is also a graduate of the Columbia Business School. In 2000, Ed was awarded the AT&T Labs Technology Medal and was elected an AT&T Fellow in 2009. Ed’s work has been featured in major news media such as the Wall Street Journal, the New York Times, and CNN. He has recently completed, with his seventeen-year-old son Matthew, a high school textbook on computer science entitled “From Gates to Apps” (Silicon Press, 2013).</p>"}}
							];
							
							
	$scope.steering = [{name: "Prof. Ramjee Prasad",affiliation: "CTIFGlobal and  Aalborg University", portrait: "Ramjee.jpg"},
						{name: "Prof. Vince Poor",affiliation: "Princeton University", portrait: "PoorVincen.jpg"},
						{name: "Dr. Parag Pruthi",affiliation: "NIKSUN", portrait: "ParagPruthi.jpg"},
						{name: "Prof. Nirwan Ansari",affiliation: "NJIT", portrait: "NirwanAnsari.jpg"},
						{name: "Prof. Cristina Comaniciu",affiliation: "Stevens Institute of Technology", portrait: "CristinaComaniciu.jpg"},
						{name: "Susan Brooks",affiliation: "Communication Society", portrait: "SusanBrooks.jpg"},
						{name: "Stan Moyer",affiliation: "Inventures, Inc.", portrait: "StanMoyer.jpg"},
						
						{name: "Dr. Doug Zuckerman",affiliation: "IEEE ComSoc Past President", portrait: "DougZuckerman.jpg"},
						{name: "Merrily Hartmann",affiliation: "ComSoc Director – North America Region", portrait: "MerrilyHartmann.jpg"}
						];
						
	$scope.organizing = [
						{name: "Dr. Ashutosh  Dutta",affiliation: "AT&T, ComSoc Industry Relations", portrait: "AshutoshDutta.jpg", role:"General Chair"},
						{name: "John Pape",affiliation: "Communication Society", portrait: "JohnPape.jpg", role: "Marketing Chair"},
						{name: "Bruce Worthman",affiliation: "IEEE Communications Society", portrait: "BruceWorthman.jpg", role: "Finance Chair"},
						{name: "Craig Wentz",affiliation: "C&J Engineering Services", portrait: "CraigWentz.jpg", role: "Local Arrangement Co-Chair"},
						{name: "Dr. Komlan Egoh",affiliation: "Stroz Friedberg", portrait: "KomlanEgoh.jpg", role: "Communication and Web Chair"},
						
						{name: "Prof. Shweta Jain",affiliation: "CUNY", portrait: "ShwetaJain.jpg", role: "General Co-Chair"},
						{name: "Dr. Deepak Kataria",affiliation: "IP Junction", portrait: "DeepakKataria.jpg", role: "Program Co-Chair"},
						{name: "Irfan Lateef",affiliation: "NJ Coastal Section", portrait: "IrfanLateef.jpg", role: "Registration Co-Chair"},
						
						{name: "Roger Piqueras",affiliation: "AT&T", portrait: "RogerPiqueras.jpg", role: "Program Co-Chair"},
						{name: "Dr. Kyriakos Manousakis",affiliation: "Applied Communication Sciences (ACS)", portrait: "KyriakosManousakis.jpg", role: "Registration Co-Chair"},
						{name: "Dr. Neeli Prasad",affiliation: "CTIF-USA, Aalborg University", portrait: "NeeliPrasad.jpg", role: "General Co-Chair"},
						{name: "Dr. Chi-Ming Chen",affiliation: "AT&T", portrait: "ChiMingChen.jpg", role: "Industry Sponsorship Co-Chair"},
						{name: "Dr. Christian Makaya",affiliation: "IBM", portrait: "ChristianMakaya.jpg", role: "Publicity Co-Chair"},
						
						{name: "Dr. Priyadarsan Patra",affiliation: "Intel", portrait: "PriyadarsanPatra.jpg", role: "Publicity Co-Chair"},
						{name: "Dr. Elias Kpodzo",affiliation: "L-3 Communications TE", portrait: "EliasKpodzo.jpg", role: "Local Arrangement Co-Chair"},	
						{name: "Marilyn Catis",affiliation: "Communication Society", portrait: "MarilynCatis.jpg", role: "Marketing Co-Chair"},
						{name: "Dr. Amruthur Narasimhan",affiliation: "CISSP", portrait: "AmruthurNarasimhan.jpg", role: "Exhibits Chair"}	
						];
	
	
	$scope.agenda = [
		{startTime:'08:00',endTime:'09:00 AM',event:'Registration, Coffee, Breakfast',speaker:''},
		{startTime:'09:00',endTime:'09:05 AM',event:'Welcome Address',speaker:'Dr. Ashutosh Dutta, General Chair and Dr. Doug Zuckerman, Past President IEEE ComSoc', speakerKey:"Ashutosh-Dutta"},
		{startTime:'09:05',endTime:'9:15 AM',event:'Opening Remarks',speaker:'Prof. Vince Poor, Prof. Ramjee Prasad, Dr. Parag Pruthi - Steering Committee Chairs'},
		{startTime:'09:15',endTime:'9:45 AM',event:'Keynote: The Implications of 5G on the Next 5 Billion Users',speaker:'Dr. Marian Croak, VP Google', confirmed: true, keynote: true},
		{startTime:'09:45',endTime:'10:10 AM',event:'Fog Networking for 5G and IoT',speaker:'Prof. Mung Chiang,  Princeton University', confirmed: true, speakerKey:"Mung-Chiang"},
		{startTime:'10:10',endTime:'10:35 PM',event:'Musings on a Vocabulary for the Composition of Things',speaker:'Tim Grance, NIST', speakerKey:"Tim-Grance"},
		
		{startTime:'10:35',endTime:'10:50 AM',event:'Coffee Break',speaker:''},
		
		{startTime:'10:50',endTime:'11:15 AM',event:'5G Network Architecture and the Future Mobile Internet',speaker:'Prof. Dipankar Raychaudhuri, WINLAB', confirmed: true, speakerKey:"Dipankar-Raychaudhuri"},
		{startTime:'11:15',endTime:'11:40 AM',event:'Speed to Insight: Measurement and Metrology in 5G',speaker:'Dr Malcolm Robertson, 5G Planning Manager, CTO Office, Keysight Technologies', speakerKey:"Malcolm-Robertson"},
		{startTime:'11:40',endTime:'12:05 AM',event:'Quest for 5G: Rethink Fundamentals',speaker:'Dr. Chih-Lin I, Chief Scientist, China Mobile', speakerKey:"Chih-Lin-I"},
		{startTime:'12:05',endTime:'12:15 AM',event:'IEEE 5G Standards Update',speaker:'Dr. Rob Fish, Vice President Standards ', speakerKey:"Rob-Fish"},
		
		{startTime:'12:15',endTime:'1:15 PM',event:'Lunch',speaker:'Lunch Time Talk: Research Challenges in 5G - Tod Sizer, Vice President, Wireless Research, Alcatel-Lucent',onfirmed: true, keynote: true},

		{startTime:'01:15',endTime:'01:45 PM',event:'Keynote: Laying the Foundation for 5G',speaker:'Joseph Cozzolino, SVP, Cisco', speakerKey:"Joe-Cozzolino",confirmed: true, keynote: true},
		{startTime:'01:45',endTime:'2:10 PM',event:'5G: What can we learn from the previous four generations?',speaker:'Prof. Henning Schulzrinne, Columbia University', confirmed: true, speakerKey:"Henning-Schulzrinne"},
		{startTime:'02:10',endTime:'2:35 PM',event:'Towards 5G: Advances from IoT to Millimeter Wave Communications',speaker:'Dr Apostolos Papathanasiou, Sr Principal Engineer, Intel', speakerKey:"Apostolos-Papathanasiou"},
		{startTime:'02:35',endTime:'3:00: PM',event:'5G & Autonomic Networking - Challenges in closing the Loop',speaker:'Dr.  Sven van der Meer, Ericsson ', speakerKey:"Sven-Meer"},
		{startTime:'03:00',endTime:'3:25 PM',event:'Some 5G Requirements and Their Network Impacts',speaker:'Dr. Xiao-Feng Qi, Senior Director, Huawei', speakerKey:"Xiao-Feng-Qi"},

		
		{startTime:'03:25',endTime:'3:40 PM',event:'Coffee Break',speaker:''},
	
	
		{startTime:'03:40',endTime:'4:10 PM',event:'Keynote: From Enterprise Perimeter to a Virtual, Distributed, Secure Cloud',speaker:'Dr. Edward G. Amoroso, SVP & Chief Security Officer, AT&T', keynote: true, speakerKey:"Ed-Amoroso"},
		{startTime:'04:10',endTime:'4:35 PM',event:'Art of Cybersecurity',speaker:'Darryle Merlette, Executive Director, NIKSUN', speakerKey:"Darryle-Merlette"},
		{startTime:'04:35',endTime:'5:00 PM',event:'Millimeter Wave Communications: Channel Measurements, System Design and Performance',speaker:'Dr. Ashwin Sampath, Qualcomm'},
		{startTime:'05:00',endTime:'5:25 PM',event:'5G: From Theory to Practice',speaker:'James Kimery, National Instruments (NI)', speakerKey:"James-Kimery"},
		
		{startTime:'05:25',endTime:'5:40 PM',event:'Concluding remarks',speaker:'Prof. Ramjee Prasad, CTIF-Global and Aalborg University'},
		{startTime:'05:40',endTime:'7:30 PM',event:'Networking and Reception (Snacks and Drinks)',speaker:''}
	];
	
	$scope.currentDate = (new Date()).getTime();
	$scope.summits = [
			{url: "index.html", city:"Princeton", sortDate: "1432612800000", date:"Tuesday, May 26, 2015"},
			{url: "toronto/", city:"Toronto", sortDate: "1447477200000", date:"Saturday, Nov. 14, 2015"},
			{url: "sf/", city:"Santa Clara", sortDate:"1447650000000", date:"Monday, Nov. 16, 2015"},
			{url: "patna/", city:"Patna, India", sortDate:"1459224000000", date:"Tuesday, March 29, 2016"},
			{url: "aalborg/", city:"Aalborg, Denmark", sortDate:"1467345600000", date:"Friday, July 1, 2016"},
			{url: "http://www.comsoc.org/files/5G-Summit-NI-Week-2016-Flyer.pdf", city:"Austin, Texas", sortDate:"1470196800000", date:"Wednesday, August 3, 2016"},
			{url: "dresden16/", city:"Dresden, Germany", sortDate:"", date:"Thursday, September 29, 2016"},
			{url: "china/", city:"Tianjin, China", sortDate:"1475121600000", date:"Saturday, October 29, 2016"},
			{url: "berlin/", city:"Berlin, Germany", sortDate:"1478059200000", date:"Wednesday, November 2, 2016"},
			{url: "seattle/", city:"Seattle, Washington", sortDate:"1478318400000", date:"Saturday, November 5, 2016"},
			{url: "delhi/", city:"New Delhi, India", sortDate:"1480654800000", date:"December 2, 2016"},
			{url: "lisbon/", city:"Lisbon, Portugal", sortDate:"1484802000000", date:"Thursday, January 19, 2017"},
			{url: "kolkata/", city:"Kolkata, India", sortDate:"1489723200000", date:"Monday, March 17, 2017"},
			{url: "casablanca/", city:"Casablanca, Morocco", sortDate:"", date:"Thursday, May 11, 2017"},
			{url: "reston/", city:"Reston, Virginia", sortDate:"1494475200000", date:"May 20, 2017"},
			{url: "kerala/", city:"Trivandrum, India", sortDate:"1496203200000", date:"May (TBD), 2017"},
			{url: "hawaii/", city:"Honolulu, Hawaii", sortDate:"1496635200000", date:"Monday June 5- Tuesday 6, 2017"},
			{url: "turkey/", city:"Istanbul, Turkey", sortDate:"1496894400000", date:"June 8, 2017"},
			{url: "greece/", city:"Tessaloniki, Greece", sortDate:"1499486400000", date:"July 8, 2017"},
			{url: "jamaica/", city:"Kingston, Jamaica", sortDate:"1501473600000", date:"July (TBD), 2017"},
			{url: "shanghai/", city:"Shanghai, China", sortDate:"1501473600000", date:"July (TBD), 2017"},
			{url: "helsinki/", city:"Helsinki, Finland", sortDate:"1504584000000", date:"Tuesday,September 5, 2017"},
			{url: "dresden/", city:"Dresden, Germany", sortDate:"1505880000000", date:"Wednesday, September 20, 2017"},
			{url: "japan/", city:"Tokyo, Japan", sortDate:"1506052800000", date:"Friday, September 22, 2017"},
			{url: "montreal/", city:"Montreal, Canada", sortDate:"1507521600000", date:"Monday, October 9, 2017"},
			{url: "sanantonio/", city:"San Antonio, Texas", sortDate:"1513832400000", date:"Fall 2017"},
			{url: "nanjing/", city:"Nanjing, China", sortDate:"1507953600000", date:"Saturday, October 14, 2017"},
			{url: "newyork/", city:"New York, NY", sortDate:"1512018000000", date:"November (TBD), 2017"},
			{url: "pretoria/", city:"Pretoria, South Africa", sortDate:"1514696400000", date:"(TBD), 2017"}
		];
}


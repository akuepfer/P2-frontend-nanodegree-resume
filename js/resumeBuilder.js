/**
 * Udacity
 *
 */

/**
 * Replaces the placeholder %data% in tag with value
 * @param tag a string value with a  %data% placeholder
 * @param value to be replaced in tag
 * @aparm optional link to replace the '#' placeholder a '<a href="#" ...' tag
 * @returns {XML|string|void}
 */
function replaceData (tag, value, link) {
    var ret = tag.replace("%data%", value);
    if (typeof link !== 'undefined') {
        ret = ret.replace('#', link);
    }
    return ret;
}


/**
 * Personal details
 */

var bio = {
    "name" : "Armin Küpfer",
    "role" : "Senior Software Engineer",
    "contacts": {
        "mobile": "+41 79 7952890",
        "email": "armin.kuepfer@bluewin.ch",
        "github": "akuepfer",
        "twitter": "@arminku",
        "blog": "https://plus.google.com/103781553615893463670/posts",
        "location": "Zürich, CH"
    },
    "welcomeMessage": "Welcome to my resume",
    "skills": [ "Java Language", "Java Enterprise Development", "Spring Framework", "Java Persistence (JPA)", "Oracle Database", "UNIX OS",
                "Subversion / Git", "Jenkins CI" ],
    "biopic": "images/ArminKuepfer.jpg",

    display: function () {
        var header = $("#header");

        header.prepend(replaceData(HTMLheaderRole, bio.role));
        header.prepend(replaceData(HTMLheaderName, bio.name));
        header.append(replaceData(HTMLWelcomeMsg, bio.welcomeMessage))
        header.append(replaceData(HTMLbioPic, bio.biopic))
        header.append(HTMLskillsStart);
        for (var i=0; i<bio.skills.length; i++) {
            header.append(replaceData(HTMLskills, bio.skills[i]))
        }

        var topContacts = $("#topContacts");
        topContacts.append(replaceData(HTMLmobile, bio.contacts.mobile));
        topContacts.append(replaceData(HTMLemail, bio.contacts.email));
        topContacts.append(replaceData(HTMLgithub, bio.contacts.github));
        topContacts.append(replaceData(HTMLtwitter, bio.contacts.twitter));
        topContacts.append(replaceData(HTMLlocation, bio.contacts.location));

        var footerContacts = $("#footerContacts");
        footerContacts.append(replaceData(HTMLmobile, bio.contacts.mobile));
        footerContacts.append(replaceData(HTMLemail, bio.contacts.email));
        footerContacts.append(replaceData(HTMLgithub, bio.contacts.github));
        footerContacts.append(replaceData(HTMLtwitter, bio.contacts.twitter));
        footerContacts.append(replaceData(HTMLlocation, bio.contacts.location));

    }
};


/**
 * Details of education
 */
var education = {
    "schools": [
        {
            "name": "Zurich University of Applied Sciences",
            "location": "Winterthur",
            "degree": "Bachelor of Science in Electrical Engineering",
            "majors": ["Information Technology"],
            "dates": "1984 - 1987",
            "url": "http://www.zhaw.ch/en/zurich-university-of-applied-sciences.html"
        },
        {
            name: "Post-graduate Studies in Computer Science and Telecommunications (former NDIT/FPIT)",
            "location": "Bern CH, Fribourg CH",
            "degree": "Diploma of NDIT/FPIT",
            "majors": "Computer Science and Telecommunications",
            "dates": "1993 - 1997",
            "url": "http://cds.unibe.ch/"
        }
    ],

    displaySchools: function () {
        var tag = $("#education");
        tag.append(HTMLschoolStart);
        tag = $(".education-entry:last");
        for (var i=0; i<education.schools.length; i++) {
            (function(school) {
                tag.append(replaceData(HTMLschoolName, school.name, school.url));
                tag.append(replaceData(HTMLschoolDegree, school.degree));
                tag.append(replaceData(HTMLschoolDates, school.dates));
                tag.append(replaceData(HTMLschoolLocation, school.location));
                tag.append(replaceData(HTMLschoolMajor, school.majors));
            })(education.schools[i]);
        }

    },

    "onlineCourses": [
        {
            "title": "Cryptography I",
            "school": "Coursera / Stanford University",
            "date": "2013",
            "url": "https://www.coursera.org/course/crypto",
            "description": "Coursera Statement of Accomplishment",
            "diploma": "pdf/Coursera crypto 2015.pdf"
        },
        {
            "title": "Programming Mobile Applications for Android Handheld Systems",
            "school": "Coursera / University of Maryland, College Park",
            "date": "2014",
            "url": "https://www.coursera.org/course/android",
            "description": "Coursera Statement of Accomplishment",
            "diploma": "pdf/Coursera android 2015.pdf"
        },
        {
            "title": "Pattern-Oriented Software Architectures: Programming Mobile Services for Android Handheld Systems",
            "school": "Coursera / Vanderbilt University",
            "date": "2014",
            "url": "https://www.coursera.org/course/posa",
            "description": "Coursera Statement of Accomplishment",
            "diploma": "pdf/Coursera posa 2015.pdf"
        },
        {
            "title": "Programming Cloud Services for Android Handheld Systems",
            "school": "Coursera / Vanderbilt University",
            "date": "2014",
            "url": "https://www.coursera.org/course/mobilecloud",
            "description": "Coursera Statement of Accomplishment",
            "diploma": "pdf/Coursera mobilecloud 2015.pdf"
        },
        {
            "title": "Algorithms: Design and Analysis, Part 1",
            "school": "Coursera / Stanford University",
            "date": "2014",
            "url": "https://www.coursera.org/course/algo",
            "description": "Coursera Statement of Accomplishment",
            "diploma": "pdf/Coursera algo 2015.pdf"
        },
        {
            "title": "Developing Your Musicianship",
            "school": "Coursera / Berklee College of Music",
            "date": "2014",
            "url": "https://www.coursera.org/course/musicianship",
            "description": "Coursera Statement of Accomplishment",
            "diploma": "pdf/Coursera musicianship 2015.pdf"
        }
    ],

    displayOnlineCourses: function () {
        var tag = $("#education");
        tag.append(HTMLonlineClasses);
        tag.append(HTMLschoolStart);
        tag = $(".education-entry:last");
        for (var i=0; i<education.onlineCourses.length; i++) {
            (function(course) {
                tag.append(replaceData(HTMLonlineTitle, course.title, course.url));
                tag.append(replaceData(HTMLonlineSchool, course.school));
                tag.append(replaceData(HTMLonlineDates, course.date));
                tag.append(replaceData(HTMLonlineURL, course.description, course.diploma));
            })(education.onlineCourses[i])
        }
    },

    display: function() {
        education.displaySchools();
        education.displayOnlineCourses();
    }
};


/**
 * Details of employment
 */

var work = {

    "jobs": [
        {
            "employer": "UBS AG",
            "url": "http://www.ubs.com/",
            "title": "Senior Software Developer",
            "location": "Zurich, CH",
            "dates": "2002 - current",
            "description": "Software Development in different projects like Asset Investment Proposal, " +
            "Demilitarized Zone (DMZ), Credit Risk Assessment, Wealth Planning. " +
            "Utilizing Java, frameworks like Spring, Hibernate, JPA and databases like Qracle and MYSQL."
        },
        {
            "employer": "Siemens Switzerland AG",
            "url": "http://www.siemens.ch/",
            "title": "Software Engineer",
            "location": "Zurich, CH",
            "dates": "1999 - 2002",
            "description": "Software Development in two telecom projects: VoIP-PSTN Gateway and VoIP based Call-Center. " +
            " Development of components with C++ using MS Visual Studio and development of components in Java using Swing and JNI." +
            "Performance measurement and implementation of performance improvements."
        },
        {
            "employer": "Switching Test Solution (STS)",
            "url": "http://nexustelecom.com/",
            "title": "Software Engineer",
            "location": "Zurich, CH",
            "dates": "1997 - 1998",
            "description": "Software development of a telecom test system. " +
            "Developed subsystems and gui applications using C, UNIX and OSF/Motif. " +
            "Member of the archtectural design team."
        },

        {
            "employer": "Alcatel Switzerland AG",
            "url": "http://www.alcatel-lucent.com/ch/",
            "title": "Software Engineer",
            "location": "Zurich, CH",
            "dates": "1988 – 1996",
            "description": "Development of a Telecom test systems with Solaris, C, OSF/Motif. " +
            "Designed and developed components using C, Unix socket and  system calls. " +
            "Installation and customer support at customer sites within Europe and Asia. " +
            "Promotion to the network-system-export squad."
        },
    ],

    display: function() {
        var tag = $("#workExperience");
        tag.append(HTMLworkStart);
        tag = $(".work-entry:last");
        for (var i=0; i<work.jobs.length; i++) {
            (function(job) {
                tag.append(replaceData(HTMLworkEmployer, job.employer, job.url));
                tag.append(replaceData(HTMLworkTitle, job.title));
                tag.append(replaceData(HTMLworkDates, job.dates));
                tag.append(replaceData(HTMLworkLocation, job.location));
                tag.append(replaceData(HTMLworkDescription, job.description));
            })(work.jobs[i])
        }
    }
};



/**
 * Details of projects
 */
var proj = {
    "projects": [
        {
            "title": "Coursera Android Capstone Project",
            "dates": "2014",
            "objective": "The Capstone project following the three mobile cloude with android couress.",
            "description": "Develop a complex mobile cloud computing application from the ground up.",
            "images": ["https://d15cw65ipctsrr.cloudfront.net/50/45bf20453c11e4bcab21dc4d856aa4/MoCCA.png"],
            "url": "https://www.coursera.org/course/androidcapstone"
        },
        {
            "title": "Protocol Driver Development with the CIP-Method",
            "dates": "1997",
            "objective": "The diploma work of the NDIT/FPIT studies.",
            "description": "Develop a Protocol Driver for the ISDN Layer 1 Basic Rate Interface",
            "images": ["images/isdn.jpg"],
            "url": "http://en.wikipedia.org/wiki/CIP-Tool"
        },
        {
            "title": "PC Board Logic Analyzer",
            "dates": "1987",
            "objective": "The diploma work of the Bachelor of Science studies.",
            "description": "Develop an eight channel logic analyzer on a PC board.",
            "images": ["images/la.jpg"],
            "url": "http://de.wikipedia.org/wiki/Logikanalysator"
        }
    ],

    display: function () {
        var tag = $("#projects");
        tag.append(HTMLprojectStart);
        tag = $(".project-entry:last");
        for (var i=0; i<proj.projects.length; i++) {
            (function(project) {
                tag.append(replaceData(HTMLprojectTitle, project.title, project.url));
                tag.append(replaceData(HTMLprojectDates, project.dates));
                tag.append(replaceData(HTMLprojectObjective, project.objective))
                    .append(replaceData(HTMLprojectDescription, project.description));
                tag.append(replaceData(HTMLprojectImage, project.images));
            })(proj.projects[i])
        }
    }
};



/**
 * Convert the name to internationalized form on click.
 */
function inName(name) {
    name = bio.name;
    var firstName = name.substr(0,1).toUpperCase() + name.substr(1, name.indexOf(" ")-1).toLowerCase();
    var lastaName = name.substr(name.lastIndexOf(" ") + 1).toUpperCase();
    finalName = firstName + " " + lastaName;
    console.log("OUT  "  + name);
    return finalName;
}


/**
 * Display click location on the console
 */

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
} );


/**
 * Display the data of the various resume parts.
 */
bio.display();
education.display();
work.display();
proj.display();


/*
 * And finally display the 'Where I've Lived and Worked' map and the internationalize button
 */
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);




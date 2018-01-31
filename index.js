

$(document).ready(function() {
    var mediumChoice = ["painting", "drawing", "photograph", "mixed", "collage"];
    var tally = [3, 0, 0, 0, 1, 1, 3, 2, 3, 2, 4, 4, 2, 4];
    var artObjects = [
        {"id":"1","medium":"mixed","isVisible":true},
        {"id":"2","medium":"painting","isVisible":true},
        {"id":"3","medium":"painting","isVisible":true},
        {"id":"4","medium":"painting","isVisible":true},
        {"id":"5","medium":"drawing","isVisible":true},
        {"id":"6","medium":"drawing","isVisible":true},
        {"id":"7","medium":"mixed","isVisible":true},
        {"id":"8","medium":"photograph","isVisible":true},
        {"id":"9","medium":"mixed","isVisible":true},
        {"id":"10","medium":"photograph","isVisible":true},
        {"id":"11","medium":"collage","isVisible":true},
        {"id":"12","medium":"collage","isVisible":true},
        {"id":"13","medium":"photograph","isVisible":true},
        {"id":"14","medium":"collage","isVisible":true},
    ]

    // ADD STICKY NAVIGATIONAL FEATURE WHEN SCROLLING DOWN
    var stickyNavTop = $('#header').offset().top;
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();          
        if (scrollTop > stickyNavTop) { 
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky'); 
        }
    };

    // TOGGLE HEADER MENU ON MOBILE PHONES
    var stickyNavTop = $('#header').offset().top;
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();          
        if (scrollTop > stickyNavTop) { 
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky'); 
        }
    };

    // TOGGLE HEADER MENU ON MOBILE PHONES
    var barNotVisible = true;
    var navBar = function() {
        if (barNotVisible) {
            $('#header').addClass('responsive');
            barNotVisible = false;
        } else {
            $('#header').removeClass('responsive');
            barNotVisible = true;
        }
    }

    $("#art-filter").val("all");

    var artToggle = function(id, position) {
        id += 1; var artID = "art" + id;
        $('#' + artID).css('display', position);
    }

    var visibleWork = artObjects.length;
    console.log(visibleWork);
    var artFilter = function() {
        var choice = $("#art-filter").val();
        switch(choice) {

            case 'all':
                for (var oc=0; oc < artObjects.length; oc++) {
                    
                    const newLocal = artObjects[oc];
                    var thisArt = newLocal;

                    if (!thisArt["isVisible"]) {
                        artToggle(oc, "inline");
                        thisArt["isVisible"] = true;
                    }
                }
                visibleWork = artObjects.length;
                break;

            case 'painting':
                for (var oc=0; oc < artObjects.length; oc++) {
                    var thisArt = artObjects[oc];

                    if (thisArt["medium"] === 'painting' && !thisArt["isVisible"]) {
                        artToggle(oc, "inline");
                        thisArt["isVisible"] = true;
                        visibleWork += 1;

                    } else if (thisArt["medium"] != 'painting' && thisArt["isVisible"]) {
                        artToggle(oc, "none");
                        thisArt["isVisible"] = false;
                        visibleWork -= 1;
                    }
                }
                break;

            case 'drawing':
                for (var oc=0; oc < artObjects.length; oc++) {
                    var thisArt = artObjects[oc];

                    if (thisArt["medium"] === 'drawing' && !thisArt["isVisible"]) {
                        artToggle(oc, "inline");
                        thisArt["isVisible"] = true;
                        visibleWork += 1;

                    } else if (thisArt["medium"] != 'drawing' && thisArt["isVisible"]) {
                        artToggle(oc, "none");
                        thisArt["isVisible"] = false;
                        visibleWork -= 1;
                    }
                }
                break;

            case 'photograph':
                for (var oc=0; oc < artObjects.length; oc++) {
                    var thisArt = artObjects[oc];

                    if (thisArt["medium"] === 'photograph' && !thisArt["isVisible"]) {
                        artToggle(oc, "inline");
                        thisArt["isVisible"] = true;
                        visibleWork += 1;

                    } else if (thisArt["medium"] != 'photograph' && thisArt["isVisible"]) {
                        artToggle(oc, "none");
                        thisArt["isVisible"] = false;
                        visibleWork -= 1;
                    }
                }
                break;

            case 'collage':
                for (var oc=0; oc < artObjects.length; oc++) {
                    var thisArt = artObjects[oc];

                    if (thisArt["medium"] === 'collage' && !thisArt["isVisible"]) {
                        artToggle(oc, "inline");
                        thisArt["isVisible"] = true;
                        visibleWork += 1;

                    } else if (thisArt["medium"] != 'collage' && thisArt["isVisible"]) {
                        artToggle(oc, "none");
                        thisArt["isVisible"] = false;
                        visibleWork -= 1;
                    }
                }
                break;

            case 'mixed':
                for (var oc=0; oc < artObjects.length; oc++) {
                    var thisArt = artObjects[oc];

                    if (thisArt["medium"] === 'mixed' && !thisArt["isVisible"]) {
                        artToggle(oc, "inline");
                        thisArt["isVisible"] = true;
                        visibleWork += 1;

                    } else if (thisArt["medium"] != 'mixed' && thisArt["isVisible"]) {
                        artToggle(oc, "none");
                        thisArt["isVisible"] = false;
                        visibleWork -= 1;
                    }
                }
                break;
        }
        if (visibleWork == 3) {
            $(".thumbnail").css('max-height', '20vw');
            $(".hover-img").css('height', '20vw');
        } else if (visibleWork == 2 || visibleWork == 1) {
            $(".thumbnail").css('max-height', '25vw');
            $(".hover-img").css('height', '25vw');
        } else {
            console.log(visibleWork);
            $(".thumbnail").css('max-height', '200px');
            $(".hover-img").css('height', '200px');
        }
    }

    // *****EVENT-HANDLERS*****

    $("#art-filter").change(function() {
        artFilter();
    })

    $('.icon').click(function() {
        navBar();
    });

    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });





});


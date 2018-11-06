var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Dear Lake",
        image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1c8cc988efddbda8746281871c0c8bf&auto=format&fit=crop&w=1859&q=80",
        description: "Beautiful and peaceful lake for the soul! Lorem ipsum dolor sit amet, quod alia nemore te qui, mea constituto complectitur ex. Cu purto adipisci vix, sea in dicat soluta regione. Partem explicari elaboraret nam ad, duo ne soleat luptatum constituam. Ne malis falli neglegentur sea, ne eius affert dicant vix. Quaestio hendrerit cum ne, ubique recteque reprimique at mea, at eum labitur equidem. Idque volumus in usu. Ei sed putent dolorem vulputate, cu ullum quidam est. Quis homero cetero ei eam, case illud homero mel no. Oblique sensibus constituto ea eum. Nibh ocurreret ex nam."
    },
    {
        name: "Loon Ranger",
        image: "https://images.unsplash.com/photo-1522031153701-b3eba74004e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=78d51c49f731c56ff8bf3bd2cf2d3301&auto=format&fit=crop&w=1650&q=80",
        description: "Hot and peaceful rock for the crazy soul! Lorem ipsum dolor sit amet, quod alia nemore te qui, mea constituto complectitur ex. Cu purto adipisci vix, sea in dicat soluta regione. Partem explicari elaboraret nam ad, duo ne soleat luptatum constituam. Ne malis falli neglegentur sea, ne eius affert dicant vix. Quaestio hendrerit cum ne, ubique recteque reprimique at mea, at eum labitur equidem. Idque volumus in usu. Ei sed putent dolorem vulputate, cu ullum quidam est. Quis homero cetero ei eam, case illud homero mel no. Oblique sensibus constituto ea eum. Nibh ocurreret ex nam."
    },
    {
        name: "Lapis Lazuli",
        image: "https://images.unsplash.com/photo-1508157942875-586a83457569?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e44ac86bb0159d96217cb24dae824a74&auto=format&fit=crop&w=1652&q=80",
        description: "Lapis lazuli colored lake for the soul! Lorem ipsum dolor sit amet, quod alia nemore te qui, mea constituto complectitur ex. Cu purto adipisci vix, sea in dicat soluta regione. Partem explicari elaboraret nam ad, duo ne soleat luptatum constituam. Ne malis falli neglegentur sea, ne eius affert dicant vix. Quaestio hendrerit cum ne, ubique recteque reprimique at mea, at eum labitur equidem. Idque volumus in usu. Ei sed putent dolorem vulputate, cu ullum quidam est. Quis homero cetero ei eam, case illud homero mel no. Oblique sensibus constituto ea eum. Nibh ocurreret ex nam."
    }
];

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
}


module.exports = seedDB;


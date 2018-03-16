/*
Template Name: Viral
Author: <a href="http://www.os-templates.com/">OS Templates</a>
Author URI: http://www.os-templates.com/
Licence: Free to use under our free template licence terms
Licence URI: http://www.os-templates.com/template-terms
File: Mobile Menu JS

Thanks to:
"Convert a Menu to a Dropdown for Small Screens" from Chris Collier - http://css-tricks.com/convert-menu-to-dropdown/
"Submenu's with a dash" Daryn St. Pierre - http://jsfiddle.net/bloqhead/Kq43X/
*/

/* MAIN NAV - DO NOT EDIT */
$('<form action="#"><select /></form>').appendTo("#mainav");
$("<option />",{selected:"selected",value:"",text:"MENU"}).appendTo("#mainav select");
$("#mainav a").each(function(){
    var e = $(this);
    if($(e).parents("ul ul ul").length >= 1){
        $("<option />",{value:e.attr("href"),text:"- - - "+e.text()}).appendTo("#mainav select")
    }
    else if($(e).parents("ul ul").length>=1){
            $("<option />",{value:e.attr("href"),text:"- - "+e.text()}).appendTo("#mainav select")
        }
    else if($(e).parents("ul").length>=1){
            $("<option />",{value:e.attr("href"),text:""+e.text()}).appendTo("#mainav select")
        }
    else{
        $("<option />",{value:e.attr("href"),text:e.text()}).appendTo("#mainav select")
        }
});
$("#mainav select").change(function(){
    if($(this).find("option:selected").val() !== "#"){
    window.location=$(this).find("option:selected").val()
    }
});

/* SIDEBAR */
// Create the dropdown base
$("<select />").appendTo(".sidebar");

// Create default option "Go to..."
$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "Go to..."
}).appendTo(".sidebar select");

// // Populate dropdown with menu items
$(".sidebar a").each(function() {
 var el = $(this);
 $("<option />", {
     "value"   : el.attr("href"),
     "text"    : el.text()
 }).appendTo(".sidebar select");
});

$(".sidebar select").change(function() {
    window.location = $(this).find("option:selected").val();
  });
/*globals $:false */
import Ember from 'ember';

export default Ember.View.extend({
    click: function() {
        if ($('#navicon').hasClass("naviconactive"))
        {
            //make inactive
            $('#navicon').removeClass("naviconactive");
            $('#navoverlay').removeClass("navoverlayactive");
            $('#sidenav').removeClass("sidenavactive");
            $('#navtitlecontainer').removeClass("navtitlecontaineractive");
            $('#appcontent').removeClass("appcontentactive");
        }
        else
        {
            //make active
            $('#navicon').addClass("naviconactive");
            $('#navoverlay').addClass("navoverlayactive");
            $('#sidenav').addClass("sidenavactive");
            $('#navtitlecontainer').addClass("navtitlecontaineractive");
            $('#appcontent').addClass("appcontentactive");
        }
    }
});
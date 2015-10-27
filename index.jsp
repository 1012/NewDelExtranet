<%@ page import="com.delmar.common.entity.profile.Profile" %>
<%@ page import="com.delmar.common.entity.profile.ProfileManager" %>
<%@ page language="java"%>
<%@ taglib uri="/WEB-INF/custom.tld" prefix="custom" %>
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>Delmar Extranet</title>
    <!-- standard reset, fonts and grids -->
    <link rel="stylesheet" type="text/css" href="../yui/build/reset-fonts-grids/reset-fonts-grids.css">
    <!-- css for menu -->
    <link rel="stylesheet" type="text/css" href="../yui/build/menu/assets/skins/sam/menu.css">
    <!-- Dependencies -->
    <script type="text/javascript" src="../yui/build/yahoo-dom-event/yahoo-dom-event.js"></script>
    <script type="text/javascript" src="../yui/build/container/container_core-min.js"></script>

    <!-- Source File -->
    <script type="text/javascript" src="../yui/build/menu/menu-min.js"></script>

    <script type="text/javascript" src="../script/break_out_of_frame.js"></script>

    <script type="text/javascript">
        YAHOO.util.Event.onContentReady("extranetmenus", function () {
            var oMenuBar = new YAHOO.widget.MenuBar("extranetmenus", { autosubmenudisplay: true, hidedelay: 750, lazyload: true });
            oMenuBar.render();
        });
    </script>
</head>
<%
    //String processid=(String.valueOf((int) System.currentTimeMillis()));
    Profile profile =(Profile) request.getSession().getAttribute(Profile.PROFILE_KEY);
    String defaultpage="../administrationfm/NoticeSearch.jsp?private=yes";
    if (profile==null) profile = ProfileManager.getInstance().getProfile(request);
    if (profile.getUser().isPolicyAgreement()) {
        defaultpage="../administrationfm/NoticeSearch.jsp?private=yes";
    } else {
        if (profile.getUser().getPolicyDiffDays() > 10) {
            defaultpage="../administrationfm/NoticeSearch.jsp?private=yes";
          /*defaultpage="../LoginAccountDisable.jsp";*/
        }  else {
            defaultpage="../administrationfm/NoticeSearch.jsp?private=yes";
          /*defaultpage="../administrationfm/PolicySearch.jsp?language=english&policyAgreement=no&justlog=yes&nextAction=Find";*/
        }

    }

%>

<body class="yui-skin-sam" onload="document.getElementById('processId').value  =document.getElementById('time_Process').value ;resizeIframe(screen.availHeight);" onmouseover="document.getElementById('processId').value  =document.getElementById('time_Process').value ;">
<input type="hidden" name="processId" id="processId" value=""/>
<div id="doc3" class="yui-b">
    <div id="hd">
        <jsp:include page="header_yui.jsp"/>
    </div>
    <div id="bd">
        <custom:isUserOfType type="E">
            <jsp:include page="menu_yui.jsp"/>
            <div id="notice" style="height:1px">
                <p id="note"><strong>&nbsp;</strong><em>&nbsp;</em></p>
            </div>
            <div id="content">
                <iframe id="contentframe" name="contentframe" src="<%=defaultpage%>"  marginwidth="0" marginheight="0" frameborder="0"
                        style="overflow:auto; width:100%;height:450px;">
                </iframe>
            </div>
        </custom:isUserOfType>
        <custom:isUserOfType type="E" reverse="true">
            <p>This content is only accessible to delmar employee.</p>
        </custom:isUserOfType>
    </div>
    <div id="ft">
        <jsp:include page="footer_yui.jsp"/>
    </div>
</div>
</body>

</html>
<script language="JavaScript" type="text/javascript">
    function resizeIframe(the_height)
    {
        //if (the_height > 450) {
        //    document.getElementById('contentframe').style.height=(the_height+360)+"px";
        //    document.getElementById('content').style.height=(the_height+380)+"px";
        //    document.getElementById('doc3').style.height=(the_height+430)+"px";

        //} else {
        var my_h=(the_height-280);
        document.getElementById('contentframe').style.height=(my_h)+"px";
        document.getElementById('content').style.height=(my_h+20)+"px";
        /*document.getElementById('doc3').style.height=(my_h+50)+"px";*/
        //}
    }
</SCRIPT>
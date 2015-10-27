<%@ taglib uri="/custom" prefix="custom" %>
<%
    String time_process= (String.valueOf((long) System.currentTimeMillis()));
%>
<input type="hidden" name="time_Process" id="time_Process" value="<%=time_process%>">
<div id="extranetmenus" class="yuimenubar yuimenubarnav">
  <div class="bd">
    <ul class="first-of-type">
            <li class="yuimenubaritem first-of-type"><a class="yuimenubaritemlabel" href="../administrationfm/NoticeSearch.jsp?private=yes" target="contentframe">News</a></li>
            <li class="yuimenubaritem"><a class="yuimenuitemlabel" href="#">DelCom</a>
                <div id="delcom" class="yuimenu">
                    <div class="bd">
                        <ul>
                            <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/CommuCenterMyRequestList.html" target="contentframe">DelCom&trade;</a></li>
                            <%--<li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/DelcomMainAdmMyRequest.do?reloadMe=NO" target="contentframe">DelCom&trade; IT</a></li>--%>
                            <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.delmarcargo.com/polycom_images/polycom.html" target="_blank">PolyCom</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="yuimenubaritem"><a class="yuimenuitemlabel" href="#">DelCRM</a>
                <div id="delcrm" class="yuimenu">
                    <div class="bd">
                        <ul>
                            <li class="yuimenuitem"><a class="yuimenuitemlabel" href="https://crm.delmarcargo.com" target="_blank">DelCRM</a></li>
                            <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://crmportal.delmarcargo.com" target="_blank">DelCRM Portal</a></li>
                            <li class="yuimenuitem"><a class="yuimenuitemlabel" href="https://www.delmarcargo.com/extranet/sms/SubmitLead.jsp" target="contentframe">DelCRM Sales Lead</a></li>
                        </ul>
                    </div>
                </div>
            </li>

            <li class="yuimenubaritem"><a class="yuimenuitemlabel" href="http://cognosdel/cognos/" target="_blank">DelBI</a></li>
            <%--<li class="yuimenubaritem"><a class="yuimenuitemlabel" href="../assets/HTMLArea/reference.html" target="contentframe">HTMLArea</a></li>--%>
      <li class="yuimenubaritem"><a class="yuimenubaritemlabel" href="#">DelDocs&trade;</a>
        <div id="deldocs" class="yuimenu">
            <div class="bd">
                <ul>
                    <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://docudel.delmar-group.com:8080/webtop" target="_blank">Content Management</a></li>
                    <li class="yuimenuitem"><a class="yuimenuitemlabel" href="https://eroom.delmar-group.com/" target="_blank">eRoom</a></li>
                </ul>
            </div>
        </div>
      </li>
      <li class="yuimenubaritem"><a class="yuimenubaritemlabel" href="#">Accounts</a>
        <div id="accounts" class="yuimenu">
          <div class="bd">
            <ul>
                   <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/AccountList.html" target="contentframe">Account List</a></li>
                   <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/AccountFM.jsp" target="contentframe">Account Management</a></li>
                   <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/AgentPartnerSearch.html" target="contentframe">Agent/Partner Inquiry</a></li>
                   <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/AgentProfileUpdateForm.html" target="contentframe">Agent Profile Update Form</a></li>
                   <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/ClientProfileUpdateForm.html" target="contentframe">Client Profile Update Form</a></li>
                   <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/CustomerServiceRepFM.html" target="contentframe">CSR Maintenance</a></li>
                   <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/AccountImageSearch.html" target="contentframe">Partner Documents</a></li>
                   <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/AccountSalesRepSearch.html" target="contentframe">Sales & Services Representatives Search</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li class="yuimenubaritem"><a class="yuimenubaritemlabel" href="#">Finance</a>
        <div id="accounting" class="yuimenu">
          <div class="bd">
            <ul>
                    <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../vendorsrequest/addVendorRequest.jsp?id=KASBOA" target="contentframe">Add Vendor Request</a></li>
                    <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../checkrequestPreApprove.htm" target="contentframe">Check Preapprove</a></li>
                    <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../controllers/checkInitRequest.jsp?cid=-1&ID=N/A&ax_d=N" target="contentframe">Check Request System</a></li>
                    <li class="yuimenuitem"><a class="yuimenuitemlabel" href="#">Credit & Collection</a>
                    <div id="credit_collection" class="yuimenu">
                        <div class="bd">
                            <ul>
                                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../accounts/index.do" target="contentframe">AR Aging</a></li>
                                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../accounting/ar/reports/ARByDept.do" target="contentframe">AR By Department</a></li>
                                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../common/servlets/FileViewer?fileMaker=com.delmar.accounting.ar.fileMakers.TopAccounts" target="contentframe">Download Top AR Accounts</a></li>
                                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../accounting/ap/reports/Purchases.jsp" target="contentframe">Purchases Report</a></li>
                                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../accounting/ar/reports/SalesForPeriod.jsp" target="contentframe">Sales by Period</a></li>
                                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../accounting/ar/reports/SummaryBilling.jsp" target="contentframe">Summary Billing</a></li>
                            </ul>
                        </div>
                    </div>
                    </li>
                    <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../checkrequest/listCheckRequest.jsp" target="contentframe">List Cheque Pending Processing</a></li>
                    <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/VendorList.html" target="contentframe">List Vendors</a></li>
                   <%-- <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../accounts/Ax_PaymentMain.html" target="contentframe">List Payment</a></li>--%>
                    <%--<custom:userable ability="VENDORALTERNETAPPROVE" forbidden="false">
                        <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../vendorsrequest/approveVendorRequest.jsp?deptid=<%=dept%>&siteid=<%=siteid%>" target="contentframe">List Vendor Pending Processing</a></li>
                    </custom:userable>--%>
                    <%--<li class="yuimenuitem"><a class="yuimenuitemlabel" href="../controllers/checkInitRequest.jsp?cid=-1&ID=N/A&ax_d=Y" target="contentframe">Check Request System (AX)</a></li>
                    <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../checkrequest/ax_ListCheck.jsp" target="contentframe">List Cheque Pending Processing (AX)</a></li>--%>
                <%--<li class="yuimenuitem"><a class="yuimenuitemlabel" href="../checkrequest/ax_ListCheck.jsp" target="contentframe">List Cheque Pending Processing (Not posted)</a></li>--%>
            </ul>
        </div>
      </div>
    </li>
    <li class="yuimenubaritem"><a class="yuimenubaritemlabel" href="#">Brokerage</a>
      <div id="brokerage" class="yuimenu">
        <div class="bd">
          <ul>
              <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../minicode/f_main.jsp" target="contentframe">Minicode</a></li>
              <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../brokerage/cadex/PendingReleaseSummary.jsp" target="contentframe">Pending Release Summary</a></li>
              <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../brokerage/NotPickedUp.jsp" target="contentframe">Shipments Not Picked Up</a></li>
          </ul>
        </div>
      </div>
    </li>
    <li class="yuimenubaritem"><a class="yuimenubaritemlabel" href="#">Freight</a>
      <div id="freight" class="yuimenu">
        <div class="bd">
          <ul>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../sales/quote/pricingSearch.do" target="contentframe">Freight Quotations</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.shipwithcts.com/Delmar/" target="contentframe">Ground rate request (CTS)</a></li>
                <%--<li class="yuimenuitem"><a class="yuimenuitemlabel" href="../freight/stats/TonnageStats.do" target="contentframe">Freight Tonnage Report</a></li>  --%>
          </ul>
        </div>
      </div>
    </li>
    <li class="yuimenubaritem"><a class="yuimenubaritemlabel" href="#">Sales</a>
      <div id="sales" class="yuimenu">
        <div class="bd">
          <ul>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../sms/SubmitLead.jsp" target="contentframe">Sales Lead</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../sales/quote/templateSearchMassQuote.do?massUpdateQuote=true&modeAction=admquote&processId=<%=time_process%>" target="contentframe">Mass Quote</a></li>
              <%--<li class="yuimenuitem"><a class="yuimenuitemlabel" href="../sales/quote/massQuoteMultirate.do?" target="contentframe">New Mass Quote</a></li>--%>
                <%--<li class="yuimenuitem"><a class="yuimenuitemlabel" href="../sales/quote/pricingBrowser.jsp" target="contentframe">Pricing Browser</a></li>--%>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../sales/quote/wizard.do?modeAction=admquote&processId=<%=time_process%>"  target="contentframe">Quote Wizard</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="#">Report</a>
                      <div id="report_collection" class="yuimenu">
                        <div class="bd">
                          <ul>
                              <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/ExpiresQuote.do?originCountry=0" target="contentframe">Discount by service</a></li>
                              <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../sales/quote/autoMultirateReport.do?" target="contentframe">Multirate Automatic Sending</a></li>
                              <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/CustomersQuotedSalesRateBrowser.jsp" target="contentframe">Quoted Account</a></li>
                          </ul>
                        </div>
                      </div>
                </li>
                <%--<li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/CustomersQuotedSalesRateBrowser.jsp" target="contentframe">Report Quoted Account</a></li>--%>
                <%--<li class="yuimenuitem"><a class="yuimenuitemlabel" href="../sms/smsintro.jsp?leadtype=<%=leadType_isCare%>" target="contentframe">SMS Intro </a></li>--%>
                <%--<li class="yuimenuitem"><a class="yuimenuitemlabel" href="../sales/quote/wizard.do?modeAction=admtemplate&processId=<%=time_process%>"  target="contentframe">Template Wizard</a></li>--%>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/UpdateQuoteToRelatedCompany.do?expiredQuote=false" target="contentframe">Update quotes under related companies</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="https://www.delmarcargo.com/sales/marketing/marketing_tools_archive.html" target="contentframe">Marketing Tools Archive</a></li>
          </ul>
        </div>
      </div>
    </li>
    <li class="yuimenubaritem"><a class="yuimenubaritemlabel" href="#">HR</a>
      <div id="searching" class="yuimenu">
        <div class="bd"> 
          <ul>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://my.adp.ca/" target="_blank">Employee Paystub Enquiry (ADP LOGIN)</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://registerme.adp.ca/essRegistration/Default.aspx" target="_blank">Employee Paystub Registration (ADP LOGIN)</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.medavie.croixbleue.ca" target="_blank">Croix Bleue</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.medavie.bluecross.ca" target="_blank">Blue Cross</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/OfficeLists.jsp" target="contentframe">Office List</a></li>
                <%--<li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/PolicySearch.jsp?language=english&justlog=no&nextAction=Find" target="contentframe">Policies</a></li>--%>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/JobSearch.jsp?private=yes&nextAction=ShowMore_J" target="contentframe">Job Opening(s)</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/StaffPhoneSearchMain.do?updateTetelLocal=Y" target="contentframe">Staff Search</a></li>
          </ul>
        </div>
      </div>
    </li>
    <li class="yuimenubaritem"><a class="yuimenubaritemlabel" href="#">Links</a>
      <div id="externallinks" class="yuimenu">
        <div class="bd">
          <ul>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/editApproveLink.do?searchTypeCat=O&from_menu=A" target="contentframe">Approved Sites - List</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.delmarcargo.com/en/aci_ams.html" target="_blank">ACI/AMS (Forwarder Logic)</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.cargosphere.biz/del" target="_blank">Cargosphere (Deltran)</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.delmarcargo.com/cms" target="_blank">DCMS</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.delmarchina.cn" target="_blank">Delmar China - Intranet</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.delmarcargo.cn" target="_blank">Delmar China - Website</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.delmarcargo.com" target="_blank">Delmar Group - Website</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.delmarcargo.com/mobile" target="_blank">Delmar Mobile</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="https://webmail.delmarcargo.com" target="_blank">Delmar Webmail</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://deltrac.delmar-group.com/net/Home/GtLogin.aspx" target="_blank">DelTrac</a></li>
                <%--<li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.exdocs.net/exdoc/delmarlaunch.html" target="_blank">exDocs</a></li>--%>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.delmarcargo.com/delagram/delagram.html" target="_blank">DEL-A-GRAM</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/editApproveLink.do?searchTypeCat=A&from_menu=3" target="contentframe">3<sup>rd</sup> Party Tracking Tools</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/PromoItemOrderMain.jsp" target="contentframe">Order Promo Items Delmar</a></li>
                <li class="yuimenuitem"><a class="yuimenuitemlabel" href="http://www.officeholidays.com/" target="_blank">Today's Holidays</a></li>
          </ul>
        </div>
      </div>
    </li>
    <li class="yuimenubaritem"><a class="yuimenubaritemlabel" href="#">Admin</a>
      <div id="admin" class="yuimenu">
        <div class="bd">
          <ul>
            <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/UpdatePassWord.do" target="contentframe">Update Password</a></li>
            <li class="yuimenuitem"><a class="yuimenuitemlabel" href="#">File Maintenance</a>
                <div id="filemaintenance" class="yuimenu">
                  <div class="bd">
                    <ul>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/BrokerForwarderFMMain.do" target="contentframe">Broker Forwarder FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/ChargeCodeFMList.html" target="contentframe">ChargeCode FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/CarrierFMList.html" target="contentframe">Carrier FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/CategoryFMList.html" target="contentframe">Category FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/CityFMList.html" target="contentframe">City FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/CommodityFMList.html" target="contentframe">Commodities FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/CompanyFMList.html" target="contentframe">Company FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/CountryFMList.html" target="contentframe">Country FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/CrcyFMList.html" target="contentframe">Currency FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/CommuCenterCategoryFM.html" target="contentframe">DelCom Department FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/DepartmentFMList.html" target="contentframe">Department FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/ServiceDeptFMList.html" target="contentframe">Department Service FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/EquipmentFMList.html" target="contentframe">Equipment FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/FacilityFMList.html" target="contentframe">Facility FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/FreightTypeFMList.html" target="contentframe">Freight Type FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/ImageFMList.html" target="contentframe">Image Files FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/IncoTermFMList.html" target="contentframe">IncoTerm FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/ProgramFMMain.do" target="contentframe">Program Admin</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/PSFMList.html" target="contentframe">Prov/State FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../ReplaceCityDelete.jsp" target="contentframe">Replace City Delete FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/SalesCustomerRepFM.html" target="contentframe">Sales & CSR</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/SiteFMList.html" target="contentframe">Site FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/StaffPhoneSearch.html" target="contentframe">Staff Profile Update</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/UomFMList.html" target="contentframe">Unit of Measure FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/UserAccessTemplate.html" target="contentframe">User Access Template FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/UserFMList.html" target="contentframe">User Admin</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/TitleFMList.html" target="contentframe">Title FM</a></li>
                          <%--<li class="yuimenuitem"><a class="yuimenuitemlabel" href="../carrier/vesselList.do?searchType=1&searchFilter=CHINA OCEAN SHIPPING CO COSCO" target="contentframe">Vessel FM</a></li>--%>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../carrier/voyageList.do?vesselId=0&carrierName=&vesselName======Select=====" target="contentframe">Vessel FM</a></li>
                          <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/ZoneFMList.html" target="contentframe">Zone FM</a></li>
                    </ul>
                  </div>
              </div>
            </li>
            <li class="yuimenuitem"><a class="yuimenuitemlabel" href="#">Admin only</a>
              <div id="adminonly" class="yuimenu">
                <div class="bd">
                  <ul>
                        <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/BlackBerryCenterAdm.html" target="contentframe">Blackberry Center</a></li>
                        <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/PromoItemFMMain.jsp" target="contentframe">Delmar Promo Give-away FM</a></li>
                        <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/ProgramFMMain.do" target="contentframe">Program Admin</a></li>
                        <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/RoleFMBrowser.html" target="contentframe">Role Admin</a></li>
                        <%--<li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/SalesCustomerRepFM.html" target="contentframe">Sales & CSR</a></li>--%>
                        <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../carrier/ShippingScreen.jsp" target="contentframe">Sailing Schedule</a></li>
                        <li class="yuimenuitem"><a class="yuimenuitemlabel" href="../administrationfm/UserFMList.html" target="contentframe">User Admin</a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </li>
    </ul>
  </div><!-- end of class bd -->
</div><!-- end of menu -->
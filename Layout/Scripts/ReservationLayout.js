// File: ReservationLayout.js
// Date: 2024-11-19
// Author: Gunnar Lidén

// Inhalt
// =============
//
// Main functions for the application reservation layout

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// XML object layout
var g_layout_xml = null;


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Main Functions ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Initialisation for Guestbook Admin
// 1. Load objects JazzGuests.xml and JazzGuestsUploaded.xml. 
//    Call of loadAllXmlObjectsForAdminAndUpload
// 2. Create the UtilLock object. The functions of this call is used to lock and unlock
//    the files JazzGuests.xml and JazzGuestsUploaded.xml.
function initReservationLayout()
{
    debugReservationLayout('initReservationLayout Enter');
 
    createReservationLayoutControls();

    var result_server_directory_name = 'Spagi_76_Chairs_V_1';

    g_layout_server_dir_text_box.setValue(result_server_directory_name);

    g_layout_xml = new ReservationLayoutXml(callbackAfterLoadOfXmlLayout, result_server_directory_name);

    //TODO initAdminControls();

    //TODO setAdminControls();

} // initReservationLayout

function callbackAfterLoadOfXmlLayout()
{
    debugReservationLayout('callbackAfterLoadOfXmlLayout Enter');

    var premises_data = getPremisesDataFromXml(g_layout_xml);

    var stage_data =  getLayoutStageDataFromXml(g_layout_xml);

    var general_table_data = getGeneralTableDataFromXml(g_layout_xml);

    var cashier_data = getCashierDataFromXml(g_layout_xml);

    var image_text_data = getTextImageCaptionsFromXml(g_layout_xml);

    var door_number = 2;

    var door_data = getDoorDataFromXml(g_layout_xml, door_number);

    var door_data_array = getDoorDataArrayFromXml(g_layout_xml);

    var table_number = 1;

    var table_data = getTableDataFromXml(g_layout_xml, table_number);

    var table_data_array = getTableDataArrayFromXml(g_layout_xml);

} // callbackAfterLoadOfXmlLayout

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Main Functions //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Execute Functions /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Create and upload layout files to the result server directory
function createUploadLayoutFiles()
{
    debugReservationLayout('createUploadLayoutFiles Enter');


    debugReservationLayout('createUploadLayoutFiles Exit');

} // createUploadLayoutFiles

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Execute Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Layout Xml Functions //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Event Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


// User clicked the layout save button
function onClickOfLayoutSaveButton()
{
	createUploadLayoutFiles();

}// onClickOfLayoutSaveButton

// User clicked the layout cancel button
function onClickOfLayoutCancelButton()
{
	alert("onClickOfLayoutCancelButton");

}// onClickOfLayoutCancelButton

// User clicked the layout premises size button
function onClickOfLayoutPremisesSizeButton()
{
	alert("onClickOfLayoutPremisesSizeButton");

}// onClickOfLayoutPremisesSizeButton

// User clicked the layout stage definition button
function onClickOfLayoutStageDefinitionButton()
{
	alert("onClickOfLayoutStageDefinitionButton");

}// onClickOfLayoutStageDefinitionButton

// User clicked the layout table color button
function onClickOfLayoutTableColorButton()
{
	alert("onClickOfLayoutTableColorButton");

}// onClickOfLayoutTableColorButton

// User clicked the layout cashier desk button
function onClickOfCashierDeskButton()
{
	alert("onClickOfCashierDeskButton");

}// onClickOfCashierDeskButton

// User selected a rectangular table
function eventSelectRectangularTableDropdown()
{
    var selected_concert_option_number = g_rectangular_table_dropdown.getSelectOptionNumber();

    var b_append = g_rectangular_table_dropdown.selectedOptionNumberIsAppendItem(selected_concert_option_number);

    if (b_append)
    {
        // g_record_active_guest.setBand("");
    }
    else
    {
        // var band_name_array = g_season_xml.getBandNameArray();

        var index_band = parseInt(selected_concert_option_number) - 1;

        // g_record_active_guest.setBand(band_name_array[index_band]);
    }

    // setAdminControls();

} // eventSelectRectangularTableDropdown

// User selected a round table
function eventSelectRoundTableDropdown()
{
    var selected_concert_option_number = g_round_table_dropdown.getSelectOptionNumber();

    var b_append = g_round_table_dropdown.selectedOptionNumberIsAppendItem(selected_concert_option_number);

    if (b_append)
    {
        // g_record_active_guest.setBand("");
    }
    else
    {
        // var band_name_array = g_season_xml.getBandNameArray();

        var index_band = parseInt(selected_concert_option_number) - 1;

        // g_record_active_guest.setBand(band_name_array[index_band]);
    }

    // setAdminControls();

} // eventSelectRoundTableDropdown

// User selected a premises door
function eventSelectPremisesDoorDropdown()
{
    var selected_concert_option_number = g_premises_door_dropdown.getSelectOptionNumber();

    var b_append = g_premises_door_dropdown.selectedOptionNumberIsAppendItem(selected_concert_option_number);

    if (b_append)
    {
        // g_record_active_guest.setBand("");
    }
    else
    {
        // var band_name_array = g_season_xml.getBandNameArray();

        var index_band = parseInt(selected_concert_option_number) - 1;

        // g_record_active_guest.setBand(band_name_array[index_band]);
    }

    // setAdminControls();

} // eventSelectPremisesDoorDropdown

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Debug Function ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Displays the input string in the debugger Console
function debugReservationLayout(i_msg_str)
{
    console.log(i_msg_str);

    UtilServer.appendDebugFile(i_msg_str, 'ReservationLayout');

} // debugReservationLayout

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Debug Function //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
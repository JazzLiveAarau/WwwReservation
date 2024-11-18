// File: ReservationLayout.js
// Date: 2024-11-18
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

    var stage_data =  getLayoutStageDataFromXml(g_layout_xml);


    /*

    var premises_width = g_layout_xml.getPremisesWidth();

    var premises_width_new_value = '8888';

    g_layout_xml.setPremisesWidth(premises_width_new_value);

    var premises_width_after_change = g_layout_xml.getPremisesWidth();

    var door_number = 2; 

    var door_type = g_layout_xml.getDoorType(door_number);

    g_layout_xml.setDoorType(door_number, "Blaha");

    var door_type_new = g_layout_xml.getDoorType(door_number);

    var table_number_int = 4;

    var table_number_str = g_layout_xml.getTableNumber(table_number_int);

    g_layout_xml.setTableNumber(table_number_int, "NyttBordsNamn");

    var table_number_str_new = g_layout_xml.getTableNumber(table_number_int);

    var table_group_number_int = 6;

    var table_group_text = g_layout_xml.getTableGroupText(table_group_number_int);

    g_layout_xml.setTableGroupText(table_group_number_int, "NewTableGroupName");

    var table_group_text_new = g_layout_xml.getTableGroupText(table_group_number_int);

    */


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
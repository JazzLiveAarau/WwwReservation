// File: ReservationLayoutCommon.js
// Date: 2024-11-19
// Authors: Gunnar Lidén

// Content
// =======
//
// Reservation layout common classes and functions
//


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class Premises Data ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class holding premises
class PremisesData
{
    // Creates the instance of the class
    // i_case: get_data_from_xml, get_default_data, set_xml_object, check_data
    // i_layout_xml: Object for a reservation layout XML file. May be null for case get_default_data
    constructor(i_case, i_layout_xml, i_input_data_object) 
    {
        // Member variables
        // ================

        // Constructor case
        this.m_case = i_case;

       // Layout XML object
       this.m_layout_xml = i_layout_xml;

       // An instance of this class to be used for case set_xml_object
       this.m_input_data_object = i_input_data_object;

       this.m_width = "";
       this.m_height = "";
       this.m_max_reservation_procent = 100.0;
	   
       this.execute();

    } // constructor

    // Execute
    execute()
    {
        if (this.m_case == "get_data_from_xml")
        {
            this.setDataFromXml();
        }
        else
        {
            alert("LayoutStageData.execute Not yet an implemented case " + this.m_case);
        }

    } // execute

    // Sets the data from the XML object m_layout_xml
    setDataFromXml()
    {
        this.m_width = this.m_layout_xml.getPremisesWidth();
        this.m_height = this.m_layout_xml.getPremisesHeight();

        this.m_max_reservation_procent = parseFloat(this.m_layout_xml.getMaxReservationsProcent());

    } // setDataFromXml

    // Checks the data
    checkData()
    {
        var ret_b_check = true;

        if(!LayoutDataInput.check(this.m_case, this.m_layout_xml, this.m_input_data_object, "PremisesData"))
        {
            ret_b_check = false;

            return ret_b_check;
        }

        // TODO Add checks of member variables



        return ret_b_check;

    } // checkData

} // PremisesData

// Returns premises data object with data retrieved from the 
// i_layout_xml: Object for a reservation layout XML file
function getPremisesDataFromXml(i_layout_xml)
{
    var layout_case = "get_data_from_xml";

    var input_data_object = null;

    var ret_object = new PremisesData(layout_case, i_layout_xml, input_data_object);

    if (!ret_object.checkData())
    {
        return null;
    }

    return ret_object;

} // getPremisesDataFromXml

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class Premises Data /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class General Table Data //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class holding general data for the tables
class GeneralTableData
{
    // Creates the instance of the class
    // i_case: get_data_from_xml, get_default_data, set_xml_object, check_data
    // i_layout_xml: Object for a reservation layout XML file. May be null for case get_default_data
    constructor(i_case, i_layout_xml, i_input_data_object) 
    {
        // Member variables
        // ================

        // Constructor case
        this.m_case = i_case;

       // Layout XML object
       this.m_layout_xml = i_layout_xml;

       // An instance of this class to be used for case set_xml_object
       this.m_input_data_object = i_input_data_object;

       this.m_color = "";
       this.m_stroke_color = "";
       this.m_stroke_width = "";
       this.m_text_rel_x_procent = "";
       this.m_text_rel_y_procent = "";
       this.m_text_color = "";

       this.execute();

    } // constructor

    // Execute
    execute()
    {
        if (this.m_case == "get_data_from_xml")
        {
            this.setDataFromXml();
        }
        else
        {
            alert("LayoutStageData.execute Not yet an implemented case " + this.m_case);
        }

    } // execute

    // Sets the dat from the XML object m_layout_xml
    setDataFromXml()
    {
        this.m_color = this.m_layout_xml.getTableColor();
        this.m_stroke_color = this.m_layout_xml.getTableStrokeColor();
        this.m_stroke_width = this.m_layout_xml.getTableStrokeWidth();
        this.m_text_rel_x_procent = this.m_layout_xml.getTableTextRelXProcent();
        this.m_text_rel_y_procent = this.m_layout_xml.getTableTextRelYProcent();
        this.m_text_color = this.m_layout_xml.getTableTextColor();

    } // setDataFromXml

    // Checks the data
    checkData()
    {
        var ret_b_check = true;

        if(!LayoutDataInput.check(this.m_case, this.m_layout_xml, this.m_input_data_object, "GeneralTableData"))
        {
            ret_b_check = false;

            return ret_b_check;
        }

        // TODO Add checks of member variables



        return ret_b_check;

    } // checkData

} // GeneralTableData

// Returns general table data object with data retrieved from the 
// i_layout_xml: Object for a reservation layout XML file
function getGeneralTableDataFromXml(i_layout_xml)
{
    var layout_case = "get_data_from_xml";

    var input_data_object = null;

    var ret_object = new GeneralTableData(layout_case, i_layout_xml, input_data_object);

    if (!ret_object.checkData())
    {
        return null;
    }

    return ret_object;

} // getGeneralTableDataFromXml


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class General Table Data ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class Stage Data //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class holding all data for a stage
class LayoutStageData
{
    // Creates the instance of the class
    // i_case: get_data_from_xml, get_default_data, set_xml_object, check_data
    // i_layout_xml: Object for a reservation layout XML file. May be null for case get_default_data
    constructor(i_case, i_layout_xml, i_input_data_object) 
    {
        // Member variables
        // ================

        // Constructor case
        this.m_case = i_case;

       // Layout XML object
       this.m_layout_xml = i_layout_xml;

       // An instance of this class to be used for case set_xml_object
       this.m_input_data_object = i_input_data_object;

        this.m_upper_left_x = "";
        this.m_upper_left_y = "";
        this.m_width = "";
        this.m_height = "";
        this.m_text = "";
        this.m_color = "";
        this.m_stroke_color = "";
        this.m_stroke_width = "";
        this.m_text_rel_x_procent = "";
        this.m_text_rel_y_procent = "";
        this.m_text_color = "";
        this.m_image = "";
        this.m_image_width = "";
        this.m_image_height = "";

        this.execute();
        
    } // constructor

    // Execute
    execute()
    {
        if (this.m_case == "get_data_from_xml")
        {
            this.setDataFromXml();
        }
        else
        {
            alert("LayoutStageData.execute Not yet an implemented case " + this.m_case);
        }

    } // execute

    // Sets the dat from the XML object m_layout_xml
    setDataFromXml()
    {
        this.m_upper_left_x = this.m_layout_xml.getStageUpperLeftX();
        this.m_upper_left_y = this.m_layout_xml.getStageUpperLeftY();
        this.m_width = this.m_layout_xml.getStageWidth();
        this.m_height = this.m_layout_xml.getStageHeight();
        this.m_text = this.m_layout_xml.getStageText();
        this.m_color = this.m_layout_xml.getStageColor();
        this.m_stroke_color = this.m_layout_xml.getStageStrokeColor();
        this.m_stroke_width = this.m_layout_xml.getStageStrokeWidth();
        this.m_text_rel_x_procent = this.m_layout_xml.getStageTextRelXProcent();
        this.m_text_rel_y_procent = this.m_layout_xml.getStageTextRelYProcent();
        this.m_text_color = this.m_layout_xml.getStageTextColor();
        this.m_image = this.m_layout_xml.getStageImage();
        this.m_image_width = this.m_layout_xml.getStageImageWidth();
        this.m_image_height = this.m_layout_xml.getStageImageHeight();

    } // setDataFromXml

    // Checks the data
    checkData()
    {
        var ret_b_check = true;

        if(!LayoutDataInput.check(this.m_case, this.m_layout_xml, this.m_input_data_object, "LayoutStageData"))
        {
            ret_b_check = false;

            return ret_b_check;
        }

        // TODO Add checks of member variables



        return ret_b_check;

    } // checkData



} // LayoutStageData

// Returns a layout stage data object with data retrieved from the 
// i_layout_xml: Object for a reservation layout XML file
function getLayoutStageDataFromXml(i_layout_xml)
{
    var layout_case = "get_data_from_xml";

    var input_data_object = null;

    var ret_object = new LayoutStageData(layout_case, i_layout_xml, input_data_object);

    if (!ret_object.checkData())
    {
        return null;
    }

    return ret_object;

} // getLayoutStageDataFromXml


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class Stage Data ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class Cashier Data ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class holding cashier data
class CashierData
{
    // Creates the instance of the class
    // i_case: get_data_from_xml, get_default_data, set_xml_object, check_data
    // i_layout_xml: Object for a reservation layout XML file. May be null for case get_default_data
    constructor(i_case, i_layout_xml, i_input_data_object) 
    {
        // Member variables
        // ================

        // Constructor case
        this.m_case = i_case;

       // Layout XML object
       this.m_layout_xml = i_layout_xml;

       // An instance of this class to be used for case set_xml_object
       this.m_input_data_object = i_input_data_object;

       this.m_upper_left_x = "";
       this.m_upper_left_y = "";
	   this.m_image = "";
	   this.m_image_width = "";
	   this.m_image_height = "";
	   
       this.execute();

    } // constructor

    // Execute
    execute()
    {
        if (this.m_case == "get_data_from_xml")
        {
            this.setDataFromXml();
        }
        else
        {
            alert("LayoutStageData.execute Not yet an implemented case " + this.m_case);
        }

    } // execute

    // Sets the dat from the XML object m_layout_xml
    setDataFromXml()
    {
        this.m_upper_left_x = this.m_layout_xml.getCashUpperLeftX();
        this.m_upper_left_y = this.m_layout_xml.getCashUpperLeftY();
		this.m_image = this.m_layout_xml.getCashImage();
		this.m_image_width = this.m_layout_xml.getCashImageWidth();
		this.m_image_height = this.m_layout_xml.getCashImageHeight();
 
    } // setDataFromXml

    // Checks the data
    checkData()
    {
        var ret_b_check = true;

        if(!LayoutDataInput.check(this.m_case, this.m_layout_xml, this.m_input_data_object, "CashierData"))
        {
            ret_b_check = false;

            return ret_b_check;
        }

        // TODO Add checks of member variables



        return ret_b_check;

    } // checkData

} // CashierData

// Returns a cashier data object with data retrieved from the 
// i_layout_xml: Object for a reservation layout XML file
function getCashierDataFromXml(i_layout_xml)
{
    var layout_case = "get_data_from_xml";

    var input_data_object = null;

    var ret_object = new CashierData(layout_case, i_layout_xml, input_data_object);

    if (!ret_object.checkData())
    {
        return null;
    }

    return ret_object;

} // getCashierDataFromXml


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class Cashier Data //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class Text Image Captions /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class holding text image captions for buttons
class TextImageCaptions
{
    // Creates the instance of the class
    // i_case: get_data_from_xml, get_default_data, set_xml_object, check_data
    // i_layout_xml: Object for a reservation layout XML file. May be null for case get_default_data
    constructor(i_case, i_layout_xml, i_input_data_object) 
    {
        // Member variables
        // ================

        // Constructor case
        this.m_case = i_case;

       // Layout XML object
       this.m_layout_xml = i_layout_xml;

       // An instance of this class to be used for case set_xml_object
       this.m_input_data_object = i_input_data_object;

       this.m_select_seats = "";
       this.m_reserve_seats = "";
	   this.m_reserve_select_undef = "";
	   this.m_add_reservation = "";
	   this.m_delete_off = "";
	   this.m_delete_on = "";
	   this.m_reservation_list = "";
	   this.m_reservation_print = "";
	   this.m_save_reservation = "";
	   this.m_save_reservation_white = "";

	   
       this.execute();

    } // constructor

    // Execute
    execute()
    {
        if (this.m_case == "get_data_from_xml")
        {
            this.setDataFromXml();
        }
        else
        {
            alert("LayoutStageData.execute Not yet an implemented case " + this.m_case);
        }

    } // execute

    // Sets the dat from the XML object m_layout_xml
    setDataFromXml()
    {
       this.m_select_seats = this.m_layout_xml.getTextImageSelectSeats();
       this.m_reserve_seats = this.m_layout_xml.getTextImageReserveSeats();
	   this.m_reserve_select_undef = this.m_layout_xml.getTextImageReserveSelectUndef();
	   this.m_add_reservation = this.m_layout_xml.getTextImageAddReservation();
	   this.m_delete_off = this.m_layout_xml.getTextImageDeleteOff();
	   this.m_delete_on = this.m_layout_xml.getTextImageDeleteOn();
	   this.m_reservation_list = this.m_layout_xml.getTextImageReservationList();
	   this.m_reservation_print = this.m_layout_xml.getTextImageReservationPrint();
	   this.m_save_reservation = this.m_layout_xml.getTextImageSaveReservation();
	   this.m_save_reservation_white = this.m_layout_xml.getTextImageSaveReservationWhite();

    } // setDataFromXml

    // Checks the data
    checkData()
    {
        var ret_b_check = true;

        if(!LayoutDataInput.check(this.m_case, this.m_layout_xml, this.m_input_data_object, "TextImageCaptions"))
        {
            ret_b_check = false;

            return ret_b_check;
        }

        // TODO Add checks of member variables



        return ret_b_check;

    } // checkData

} // TextImageCaptions

// Returns an object with text image captions for buttons. Data is retrieved from the 
// i_layout_xml: Object for a reservation layout XML file
function getTextImageCaptionsFromXml(i_layout_xml)
{
    var layout_case = "get_data_from_xml";

    var input_data_object = null;

    var ret_object = new TextImageCaptions(layout_case, i_layout_xml, input_data_object);

    if (!ret_object.checkData())
    {
        return null;
    }

    return ret_object;

} // getTextImageCaptionsFromXml

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class Text Image Captions ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class Door Data ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class holding door data
class DoorData
{
    // Creates the instance of the class
    // i_case: get_data_from_xml, get_default_data, set_xml_object, check_data
    // i_layout_xml: Object for a reservation layout XML file. May be null for case get_default_data
    constructor(i_case, i_layout_xml, i_input_data_object, i_door_number) 
    {
        // Member variables
        // ================

        // Constructor case
        this.m_case = i_case;

       // Layout XML object
       this.m_layout_xml = i_layout_xml;

       // An instance of this class to be used for case set_xml_object
       this.m_input_data_object = i_input_data_object;

	   // Door number
	   this.m_door_number = i_door_number;

       this.m_type = "";
       this.m_position = "";
	   this.m_height = "";
	   this.m_text = "";
	   this.m_image = "";
	   this.m_image_width = "";
	   this.m_image_height = "";
	   
       this.execute();

    } // constructor

    // Execute
    execute()
    {
        if (this.m_case == "get_data_from_xml")
        {
            this.setDataFromXml();
        }
        else
        {
            alert("LayoutStageData.execute Not yet an implemented case " + this.m_case);
        }

    } // execute

    // Sets the dat from the XML object m_layout_xml
    setDataFromXml()
    {
       this.m_type = this.m_layout_xml.getDoorType(this.m_door_number);
       this.m_position = this.m_layout_xml.getDoorPosition(this.m_door_number);
	   this.m_height = this.m_layout_xml.getDoorHeight(this.m_door_number);
	   this.m_text = this.m_layout_xml.getDoorText(this.m_door_number);
	   this.m_image = this.m_layout_xml.getDoorImage(this.m_door_number);
	   this.m_image_width = this.m_layout_xml.getDoorImageWidth(this.m_door_number);
	   this.m_image_height = this.m_layout_xml.getDoorImageHeight(this.m_door_number);

    } // setDataFromXml

    // Checks the data
    checkData()
    {
        var ret_b_check = true;

        if(!LayoutDataInput.check(this.m_case, this.m_layout_xml, this.m_input_data_object, "DoorData"))
        {
            ret_b_check = false;

            return ret_b_check;
        }

        // TODO Add checks of member variables



        return ret_b_check;

    } // checkData

} // DoorData

// Returns an object with door data. Data is retrieved from the 
// i_layout_xml: Object for a reservation layout XML file
function getDoorDataFromXml(i_layout_xml, i_door_number)
{
    var layout_case = "get_data_from_xml";

    var input_data_object = null;

    var ret_object = new DoorData(layout_case, i_layout_xml, input_data_object, i_door_number);

    if (!ret_object.checkData())
    {
        return null;
    }

    return ret_object;

} // getDoorDataFromXml

// Returns an array of DoorData objects
function getDoorDataArrayFromXml(i_layout_xml)
{
    var ret_table_array = [];

    var n_doors = i_layout_xml.getNumberOfDoors();

    for (var door_number=1; door_number <=  n_doors; door_number++)
    {
        var table_data = getDoorDataFromXml(i_layout_xml, door_number);

        ret_table_array[door_number - 1] = table_data;
    }

    return ret_table_array;
 
} // getDoorDataArrayFromXml

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class Door Data /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class Table Data //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class holding table data
class TableData
{
    // Creates the instance of the class
    // i_case: get_data_from_xml, get_default_data, set_xml_object, check_data
    // i_layout_xml: Object for a reservation layout XML file. May be null for case get_default_data
    constructor(i_case, i_layout_xml, i_input_data_object, i_table_number) 
    {
        // Member variables
        // ================

        // Constructor case
        this.m_case = i_case;

       // Layout XML object
       this.m_layout_xml = i_layout_xml;

       // An instance of this class to be used for case set_xml_object
       this.m_input_data_object = i_input_data_object;

	   // Table number
	   this.m_table_number = i_table_number;

       this.m_number = "";
       this.m_upper_left_x = "";
	   this.m_upper_left_y = "";
	   this.m_width = "";
	   this.m_height = "";
	   this.m_number_left_right_seats = "0";
	   
	   
	   this.m_left_seats = [];
	   
	   this.m_right_seats = [];
	   
	   
	   this.m_seat_upper = "";
	   this.m_seat_lower = "";
	   this.m_text = "";

       this.initSeatData();

	   this.execute();

    } // constructor

    // Execute
    execute()
    {
        if (this.m_case == "get_data_from_xml")
        {
            this.setDataFromXml();
        }
        else
        {
            alert("LayoutStageData.execute Not yet an implemented case " + this.m_case);
        }

    } // execute

    // Sets the dat from the XML object m_layout_xml
    setDataFromXml()
    {
       this.m_number = this.m_layout_xml.getTableNumber(this.m_table_number);
       this.m_upper_left_x = this.m_layout_xml.getTableUpperLeftX(this.m_table_number);
	   this.m_upper_left_y = this.m_layout_xml.getTableUpperLeftY(this.m_table_number);
	   this.m_width = this.m_layout_xml.getTableWidth(this.m_table_number);
	   this.m_height = this.m_layout_xml.getTableHeight(this.m_table_number);
	   this.m_number_left_right_seats = this.m_layout_xml.getTableNumberLeftRightSeats(this.m_table_number);

       this.setSeatDataFromXml(this.m_number_left_right_seats, this.m_table_number);
	      
	   this.m_seat_upper = this.m_layout_xml.getTableSeatUpper(this.m_table_number);
	   this.m_seat_lower = this.m_layout_xml.getTableSeatLower(this.m_table_number);
	   this.m_text = this.m_layout_xml.getTableText(this.m_table_number);
	   
    } // setDataFromXml

    // Sets the seat arrays m_left_seats and m_right_seats from the XML object m_layout_xml
    setSeatDataFromXml(i_left_right_seats, i_table_number)
    {
        var left_right_seats_int = parseInt(i_left_right_seats);

        if (left_right_seats_int == 0)
        {
            alert("TableData.setSeatDataFromXml Warning. i_left_right_seats = 0 ");

            return;
        }

        var n_seat_pairs_float = i_left_right_seats/2.0 + 0.00001;

        var n_seat_pairs = Math.trunc(n_seat_pairs_float);

        for (var index_pair=0; index_pair < n_seat_pairs; index_pair++)
        {
            var seat_number = index_pair + 1;

            if (1 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatOneLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatOneRight(i_table_number));
            }
            else if (2 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatTwoLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatTwoRight(i_table_number));                
            }
            else if (3 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatThreeLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatThreeRight(i_table_number));                    
            }
            else if (4 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatFourLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatFourRight(i_table_number));                    
            }
            else if (5 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatFiveLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatFiveRight(i_table_number));                    
            }			
            else if (6 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatSixLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatSixRight(i_table_number));                    
            }	
            else if (7 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatSevenLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatSevenRight(i_table_number));                    
            }			
            else if (8 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatEightLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatEightRight(i_table_number));                    
            }		
            else if (9 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatNineLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatNineRight(i_table_number));                    
            }			
            else if (10 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatTenLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatTenRight(i_table_number));                    
            }	
            else if (11 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatElevenLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatElevenRight(i_table_number));                    
            }	
            else if (12 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatTwelveLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatTwelveRight(i_table_number));                    
            }	
            else if (13 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatThirteenLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatThirteenRight(i_table_number));                    
            }	
            else if (14 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatFourteenLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatFourteenRight(i_table_number));                    
            }	
            else if (15 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatSeatFifteenLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatSeatFifteenRight(i_table_number));                    
            }	
            else if (16 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatSixteenLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatSixteenRight(i_table_number));                    
            }	
            else if (17 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatSeventeenLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatSeventeenRight(i_table_number));                    
            }	
            else if (18 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatEighteenLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatEighteenRight(i_table_number));                    
            }	
            else if (19 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatNineteenLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatNineteenRight(i_table_number));                    
            }	
            else if (20 == seat_number)
            {
                this.m_left_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatTwentyLeft(i_table_number));

                this.m_right_seats[index_pair] = TableData.booleanStringToBoolean(this.m_layout_xml.getTableSeatTwentyRight(i_table_number));                    
            }
            else
            {
                alert("TableData.setSeatDataFromXml Maximum number of seat pairs is twenty (20) ");

                break;
            }

        } // index_pair

    } // setSeatDataFromXml

    // Converts a boolean stri that is 'false' or 'true' to a boolean
    static booleanStringToBoolean(i_b_str)
    {
        if (i_b_str == 'true')
        {
            return true;
        }
        else if (i_b_str == 'false')
        {
            return false;
        }
        else
        {
            alert("TableData.booleanStringToBoolean Must be false or true. i_b_str= " + i_b_str);

            return false;
        }
    

    } // booleanStringToBoolean

    initSeatData()
    {
        for (var index_seat=0; index_seat < 20; index_seat++)
        {
            this.m_left_seats[index_seat] = false;

            this.m_right_seats[index_seat] = false;
        }

    } // initSeatData

    // Checks the data
    checkData()
    {
        var ret_b_check = true;

        if(!LayoutDataInput.check(this.m_case, this.m_layout_xml, this.m_input_data_object, "TableData"))
        {
            ret_b_check = false;

            return ret_b_check;
        }

        // TODO Add checks of member variables



        return ret_b_check;

    } // checkData

} // TableData

// Returns an object with table data. Data is retrieved from the 
// i_layout_xml: Object for a reservation layout XML file
function getTableDataFromXml(i_layout_xml, i_table_number)
{
    var layout_case = "get_data_from_xml";

    var input_data_object = null;

    var ret_object = new TableData(layout_case, i_layout_xml, input_data_object, i_table_number);

    if (!ret_object.checkData())
    {
        return null;
    }

    return ret_object;

} // getTableDataFromXml

// Returns an array of TableData objects
function getTableDataArrayFromXml(i_layout_xml)
{
    var ret_table_array = [];

    var n_tables = i_layout_xml.getNumberOfTables();

    for (var table_number=1; table_number <=  n_tables; table_number++)
    {
        var table_data = getTableDataFromXml(i_layout_xml, table_number);

        ret_table_array[table_number - 1] = table_data;
    }

    return ret_table_array;
 
} // getTableDataArrayFromXml

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class Table Data ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class Table Group Data ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// TODO
// The table group data is not yet used by the creation of the HTML files

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class Table Group Data //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class Check Input Data ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class holding all data for a stage
class LayoutDataInput
{
    // Checks the input data
    static check(i_case, i_layout_xml, i_input_data_object, i_class_name)
    {
        var ret_b_input = true;

        if (i_case != "get_data_from_xml" && i_case != "get_default_data" && i_case != "set_xml_object" && i_case != "check_data" )
        {
            alert("LayoutDataInput.check Not a valid input case= " + i_case + " Class= " + i_class_name);
    
            ret_b_input = false;   
            
            return ret_b_input;
        }

        if (i_case != "get_default_data" && i_case != "check_data")
        {
            if (i_layout_xml == null)
            {
                alert("LayoutDataInput.check XML object is null" + " Class= " + i_class_name);
    
                ret_b_input = false;
            }
        }

        return ret_b_input;

    } // check

} // LayoutDataInput

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class Check Input Data //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
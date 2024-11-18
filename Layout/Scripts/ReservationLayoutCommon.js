// File: ReservationLayoutCommon.js
// Date: 2024-11-18
// Authors: Gunnar Lidén

// Content
// =======
//
// Reservation layout common classes and functions
//

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

    // Checks the class input data
    checkInputData()
    {
        var ret_b_input = true;

        if (this.m_case != "get_data_from_xml" && this.m_case != "get_default_data" && this.m_case != "set_xml_object" && this.m_case != "check_data" )
        {
            alert("LayoutStageData.checkInputData Not a valid input case= " + this.m_case);
    
            ret_b_input = false;   
            
            return ret_b_input;
        }

        if (this.m_case != "get_default_data" && this.m_case != "check_data")
        {
            if (this.m_layout_xml == null)
            {
                alert("LayoutStageData.checkInputData XML object is null");
    
                ret_b_input = false;
            }
        }

        return ret_b_input;

    } // checkInputData

    // Checks the data
    checkData()
    {
        var ret_b_check = true;

        if(!this.checkInputData())
        {
            ret_b_check = false;

            return ret_b_check;
        }



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

    if (!ret_object.checkInputData())
    {
        return null;
    }        

    if (!ret_object.checkData())
    {
        return null;
    }

    return ret_object;

} // getLayoutStageDataFromXml


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class Stage Data ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
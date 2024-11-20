// File: ReservationLayoutSvg.js
// Date: 2024-11-20
// Authors: Gunnar Lidén

// Content
// =======
//
// Reservation layout SVG classes and functions
//


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class Layout Svg //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class that creates all SVG code for the reservation layout HTML file
class LayoutSvg
{
    // Creates the instance of the class
    // i_layout_xml: Object for a reservation layout XML file. 
    constructor(i_layout_xml) 
    {
        // Member variables
        // ================

       // Layout XML object
       this.m_layout_xml = i_layout_xml;

       // The conversion factor mm to pixel
       this.m_scale_dimension = -0.123456789;

       // All SVG code from this class
       this.m_svg_code = '';    
	   
       // Create (construct) the SVG code
       this.execute();

    } // constructor

    // Create (construct) the SVG code
    // 1. Calculate conversion factor mm to pixel. Create premises SVG object.
    // 2. Add premises SVG to m_svg_code. Call of PremisesSvg.get.
    execute()
    {
        if (this.m_layout_xml == null)
        {
            alert("LayoutSvg.execute Layout XML object is null");

            return;
        }

        this.m_scale_dimension = this.millimeterToPixel(this.m_layout_xml);

        this.m_svg_code = '';

        var premises_svg = new PremisesSvg(this.m_layout_xml, this.m_scale_dimension);

        this.m_svg_code = this.m_svg_code + premises_svg.get();
 

    } // execute

    // Get all SVG code for the body of the output HTML files
    get()
    {
        return this.m_svg_code;

    } // get

    // Fonts, font sizes and colors (styles)
    static fontBig()
    {
        var font_big = ' font-family="arial" font-size="50px" fill=';

        return font_big;

    } // fontBig

    static fontMid()
    {
        var font_mid = ' font-family="arial" font-size="30px" fill=';

        return font_mid;

    } // fontMid

    static colorJazzLiveAarau()
    {
        var color_jazz_live_aarau = ' "rgb(255, 0, 40)" ';

        return color_jazz_live_aarau;

    } // colorJazzLiveAarau

/*
// Fonts, font sizes and colors (styles)


var g_font_button = ' font-family="arial" font-size="22px" ';
var g_style_button = ' style="cursor: pointer;fill:white;stroke-width:1;stroke:black" ';
var g_style_button_blue = ' style="fill:blue;stroke-width:1;stroke:black" ';
var g_style_button_purple = ' style="fill:purple;stroke-width:1;stroke:black" ';
var g_style_cursor_pointer = ' style="cursor: pointer; "';

var g_prompt_text_color = "yellow";
var g_active_mode_color = "magenta";
var g_color_white = "white";
var g_color_silver = "silver";
var g_color_light_blue = "LightSkyBlue";
var g_color_indigo = "Indigo";
var g_color_green_yellow = "GreenYellow";
var g_color_yellow = "Yellow";

var g_color_free_seat = "white"; // Blue rgb(142, 181, 242) Light green rgb(175, 234, 152)
var g_color_reserved_seat = "red";
var g_color_seat_circle = "black";

*/

    // Returns the conversion factor mm to pixel
    millimeterToPixel(i_layout_xml)
    {
        var ret_scale_factor = -0.123456789;

        var premises_data = getPremisesDataFromXml(i_layout_xml);

        var premises_width = premises_data.getWidth();

        var max_width_pixels = premises_data.getMaxWidthPixel(); 

        if (premises_width > 0)
        {
            ret_scale_factor = max_width_pixels/premises_width;
        }
        else
        {
            alert("LayoutSvg.millimeterToPixel  premises_width <= 0");
        }

        return ret_scale_factor;

    } // millimeterToPixel

} // LayoutSvg

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class Layout Svg ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class Premises Svg ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class that creates all premises SVG code for the reservation layout HTML files
class PremisesSvg
{
    // Creates the instance of the class
    // i_layout_xml: Object for a reservation layout XML file. 
	// i_scale_dimension: The conversion factor mm to pixel
    constructor(i_layout_xml, i_scale_dimension) 
    {
        // Member variables
        // ================

       // Layout XML object
       this.m_layout_xml = i_layout_xml;

       // The conversion factor mm to pixel
       this.m_scale_dimension = i_scale_dimension;

       this.m_style_wall = ' style="fill:rgb(222, 223, 224);stroke-width:1;stroke:black"';
       this.m_style_wall_black = ' style="fill:rgb(0, 0, 0);stroke-width:1;stroke:black"';

       // All SVG code from this class
       this.m_svg_code = '';
	   
       // Create (construct) the SVG code
       this.execute();

    } // constructor

    // Create (construct) the SVG code
    execute()
    {
        if (this.m_layout_xml == null)
        {
            alert("PremisesSvg.execute Layout XML object is null");

            return;
        }

        var premises_data = getPremisesDataFromXml(this.m_layout_xml);
        var premises_width = premises_data.getWidth(); 
        var premises_height = premises_data.getHeight();
        var wall_thickness = premises_data.getWallThickness();
        var organizer_name = premises_data.getOrganizerName();
        var organizer_text_logo = premises_data.getOrganizerTextLogo();
       
        // Convert premises dimensions from mm to pixel
        var premises_width_pixel = parseInt(premises_width*this.m_scale_dimension);
        var premises_height_pixel = parseInt(premises_height*this.m_scale_dimension);
        var wall_thickness_pixel = parseInt(wall_thickness*this.m_scale_dimension);
        
        var premises_svg = '';
        
        // Rectangle defining the premises
        var rectangle_svg = '<rect width=' + premises_width_pixel + ' height=' + premises_height_pixel +  ' />';
        premises_svg = premises_svg + rectangle_svg + '\n';
     
        // Position and dimension of the left wall	
        var wall_left_x_pixel = 0;
        var wall_left_y_pixel = 0;
        var wall_left_width_pixel = wall_thickness_pixel;
        var wall_left_height_pixel = premises_height_pixel;
       
        // Rectangle defining the left wall
        rectangle_svg = '<rect ' + ' x=' + wall_left_x_pixel + ' y=' + wall_left_y_pixel
          + ' width=' + wall_left_width_pixel + ' height=' + wall_left_height_pixel     
          + this.m_style_wall +  ' />';
        premises_svg = premises_svg + rectangle_svg + '\n';
        
        // Position and dimension of the right wall		
        var wall_right_x_pixel = premises_width_pixel - wall_thickness_pixel;
        var wall_right_y_pixel = 0;
        var wall_right_width_pixel = wall_thickness_pixel;
        var wall_right_height_pixel = premises_height_pixel;
    
        // Rectangle defining the right wall
        rectangle_svg = '<rect ' + ' x=' + wall_right_x_pixel + ' y=' + wall_right_y_pixel
          + ' width=' + wall_right_width_pixel + ' height=' + wall_right_height_pixel     
          + this.m_style_wall +  ' />';
        premises_svg = premises_svg + rectangle_svg + '\n';   
    
        // Position and dimension of the upper wall	(height = 3 X wall thickness)	  
        var wall_upper_x_pixel = 0;
        var wall_upper_y_pixel = 0;
        var wall_upper_width_pixel = premises_width_pixel;
        var wall_upper_height_pixel = 3*wall_thickness_pixel;
    
        // Rectangle defining the upper wall (color black)	
        rectangle_svg = '<rect ' + ' x=' + wall_upper_x_pixel + ' y=' + wall_upper_y_pixel
          + ' width=' + wall_upper_width_pixel + ' height=' + wall_upper_height_pixel     
          + this.m_style_wall_black +  ' />';
        premises_svg = premises_svg + rectangle_svg + '\n'; 	  
    
        // Position and dimension of the lower wall	
        var wall_lower_x_pixel = 0;
        var wall_lower_y_pixel = premises_height_pixel - wall_thickness_pixel;
        var wall_lower_width_pixel = premises_width_pixel;
        var wall_lower_height_pixel = wall_thickness_pixel;
    
        // Rectangle defining the lower wall
        rectangle_svg = '<rect ' + ' x=' + wall_lower_x_pixel + ' y=' + wall_lower_y_pixel
          + ' width=' + wall_lower_width_pixel + ' height=' + wall_lower_height_pixel     
          + this.m_style_wall +  ' />';
        premises_svg = premises_svg + rectangle_svg + '\n';
        
        // 	JAZZ live AARAU text logo position
        var jazz_text_x_pixel = wall_upper_x_pixel + parseInt(wall_upper_width_pixel*0.28);
        var jazz_text_y_pixel = wall_upper_y_pixel + wall_upper_height_pixel - parseInt(wall_upper_height_pixel*0.96);
        
        // JAZZ live AARAU text object
        var text_svg = '<text x=' + jazz_text_x_pixel + ' y=' + jazz_text_y_pixel + 
                  LayoutSvg.fontBig() + LayoutSvg.colorJazzLiveAarau() + '>' + 
                  organizer_name + '</text>';
        // premises_svg = premises_svg + text_svg + '\n';   
        
        var image_width = '400px';
        var image_height = '40px';
        var image_file = organizer_text_logo;
        
        var image_svg = '<image x= ' + jazz_text_x_pixel + ' y= ' + jazz_text_y_pixel + 
                        ' width=' + image_width + ' height=' + image_height + 
                        ' xlink:href=' +image_file + '>' +
                        ' <title>'+ organizer_name +' Text Logo</title> ' + 
                        ' </image>';	
        premises_svg = premises_svg + image_svg + '\n'; 

        this.m_svg_code = premises_svg;
 
    } // execute

    // Get all SVG code for the body of the output HTML files
    get()
    {
        return this.m_svg_code;

    } // get

} // PremisesSvg

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class Premises Svg //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

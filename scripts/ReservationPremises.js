// File: Reservation\scripts\ReservationPremises.js

// Dimension premises
var g_premises_width = -12345;
var g_premises_heigth = -12345;

// Wall thickness
var g_wall_thickness = 300;


// Set premises properties and calculate the conversion factor g_scale_dimension: mm to pixel
function setPremisesProperties()
{
    // Get premises dimensions
    g_premises_width = g_layout_xml.getElementsByTagName(g_tag_premises_width)[0].childNodes[0].nodeValue;
    g_premises_heigth = g_layout_xml.getElementsByTagName(g_tag_premises_height)[0].childNodes[0].nodeValue;
 
   
    // Conversion factor
    if (g_premises_width > 0)
    {
	   g_scale_dimension = g_premises_width_max_pixel/g_premises_width;
    }
   
} // setPremisesProperties


// Draw the rectangle defining the premises
function drawPremises()
{
    // Return string with SVG data defining the premises
    var ret_premises_svg = '';
   
    // Convert premises dimensions from mm to pixel
    var 	premises_table_width_pixel = parseInt(g_premises_width*g_scale_dimension);
    var 	premises_table_height_pixel = parseInt(g_premises_heigth*g_scale_dimension);
	
   
    // Rectangle defining the premises
    var rectangle_svg = '<rect width=' + premises_table_width_pixel + ' height=' + premises_table_height_pixel +  ' />';
    ret_premises_svg = ret_premises_svg + rectangle_svg + '\n';
   
    // Wall thickness in pixels
    var wall_thickness_pixel = parseInt(g_wall_thickness*g_scale_dimension);

    // Position and dimension of the left wall	
    var wall_left_x_pixel = 0;
    var wall_left_y_pixel = 0;
    var wall_left_width_pixel = wall_thickness_pixel;
    var wall_left_height_pixel = premises_table_height_pixel;
   
    // Rectangle defining the left wall
    rectangle_svg = '<rect ' + ' x=' + wall_left_x_pixel + ' y=' + wall_left_y_pixel
      + ' width=' + wall_left_width_pixel + ' height=' + wall_left_height_pixel     
      + g_style_wall +  ' />';
    ret_premises_svg = ret_premises_svg + rectangle_svg + '\n';
	
    // Position and dimension of the right wall		
    var wall_right_x_pixel = premises_table_width_pixel - wall_thickness_pixel;
    var wall_right_y_pixel = 0;
    var wall_right_width_pixel = wall_thickness_pixel;
    var wall_right_height_pixel = premises_table_height_pixel;

	// Rectangle defining the right wall
    rectangle_svg = '<rect ' + ' x=' + wall_right_x_pixel + ' y=' + wall_right_y_pixel
      + ' width=' + wall_right_width_pixel + ' height=' + wall_right_height_pixel     
      + g_style_wall +  ' />';
    ret_premises_svg = ret_premises_svg + rectangle_svg + '\n';   

    // Position and dimension of the upper wall	(height = 3 X wall thickness)	  
    var wall_upper_x_pixel = 0;
    var wall_upper_y_pixel = 0;
    var wall_upper_width_pixel = premises_table_width_pixel;
    var wall_upper_height_pixel = 3*wall_thickness_pixel;

	// Rectangle defining the upper wall (color black)	
    rectangle_svg = '<rect ' + ' x=' + wall_upper_x_pixel + ' y=' + wall_upper_y_pixel
      + ' width=' + wall_upper_width_pixel + ' height=' + wall_upper_height_pixel     
      + g_style_wall_black +  ' />';
    ret_premises_svg = ret_premises_svg + rectangle_svg + '\n'; 	  

    // Position and dimension of the lower wall	
    var wall_lower_x_pixel = 0;
    var wall_lower_y_pixel = premises_table_height_pixel - wall_thickness_pixel;
    var wall_lower_width_pixel = premises_table_width_pixel;
    var wall_lower_height_pixel = wall_thickness_pixel;

	// Rectangle defining the lower wall
    rectangle_svg = '<rect ' + ' x=' + wall_lower_x_pixel + ' y=' + wall_lower_y_pixel
      + ' width=' + wall_lower_width_pixel + ' height=' + wall_lower_height_pixel     
      + g_style_wall +  ' />';
    ret_premises_svg = ret_premises_svg + rectangle_svg + '\n';
	
    // 	JAZZ live AARAU text logo position
	var jazz_text_x_pixel = wall_upper_x_pixel + parseInt(wall_upper_width_pixel*0.28);
	var jazz_text_y_pixel = wall_upper_y_pixel + wall_upper_height_pixel - parseInt(wall_upper_height_pixel*0.96);
	
	// JAZZ live AARAU text object
    var text_svg = '<text x=' + jazz_text_x_pixel + ' y=' + jazz_text_y_pixel + 
              g_font_big + g_color_jazz_live_aarau + '>' + 
              "JAZZ live AARAU" + '</text>';
    // ret_premises_svg = ret_premises_svg + text_svg + '\n';   
	
	var image_width = '400px';
	var image_height = '40px';
	var image_file = 'reservation_jazz_live_aarau_text_logo.png';
	
    var image_svg = '<image x= ' + jazz_text_x_pixel + ' y= ' + jazz_text_y_pixel + 
	                ' width=' + image_width + ' height=' + image_height + 
                    ' xlink:href=' +image_file + '>' +
                    ' <title>JAZZ live AARAU Text Logo</title> ' + 
                    ' </image>';	
    ret_premises_svg = ret_premises_svg + image_svg + '\n'; 					

	// Returns the SVG data defining the premises
    return ret_premises_svg;
   
} // drawPremises















// File: Reservation\scripts\ReservationStage.js

// Draw the stage and write the stage texts
function drawStage()
{
    // Return string defining the SVG objects for the stage
    var ret_stage_svg = '';
   
    // Get stage data from the layout XML file    
    var stage_upper_left_x = g_layout_xml.getElementsByTagName(g_tag_stage_upper_left_x)[0].childNodes[0].nodeValue;
    var stage_upper_left_y = g_layout_xml.getElementsByTagName(g_tag_stage_upper_left_y)[0].childNodes[0].nodeValue;
    var stage_image = g_layout_xml.getElementsByTagName(g_tag_stage_image)[0].childNodes[0].nodeValue;
    var stage_image_width = g_layout_xml.getElementsByTagName(g_tag_stage_image_width)[0].childNodes[0].nodeValue;
    var stage_image_height = g_layout_xml.getElementsByTagName(g_tag_stage_image_height)[0].childNodes[0].nodeValue;
	
    var stage_width = g_layout_xml.getElementsByTagName(g_tag_stage_width)[0].childNodes[0].nodeValue;
    var stage_height = g_layout_xml.getElementsByTagName(g_tag_stage_height)[0].childNodes[0].nodeValue;
    var stage_text = g_layout_xml.getElementsByTagName(g_tag_stage_text)[0].childNodes[0].nodeValue;
    var stage_color = g_layout_xml.getElementsByTagName(g_tag_stage_color)[0].childNodes[0].nodeValue;
    var stage_stroke_color = g_layout_xml.getElementsByTagName(g_tag_stage_stroke_color)[0].childNodes[0].nodeValue;
    var stage_stroke_width = g_layout_xml.getElementsByTagName(g_tag_stage_stroke_width)[0].childNodes[0].nodeValue;
    var stage_text_rel_x_procent = g_layout_xml.getElementsByTagName(g_tag_stage_text_rel_x_procent)[0].childNodes[0].nodeValue;
    var stage_text_rel_y_procent = g_layout_xml.getElementsByTagName(g_tag_stage_text_rel_y_procent)[0].childNodes[0].nodeValue;
    var stage_text_color = g_layout_xml.getElementsByTagName(g_tag_stage_text_color)[0].childNodes[0].nodeValue; 
	
    var cash_image = g_layout_xml.getElementsByTagName(g_tag_cash_image)[0].childNodes[0].nodeValue;		
    var cash_upper_left_x = g_layout_xml.getElementsByTagName(g_tag_cash_upper_left_x)[0].childNodes[0].nodeValue;
    var cash_upper_left_y = g_layout_xml.getElementsByTagName(g_tag_cash_upper_left_y)[0].childNodes[0].nodeValue;	
    var cash_image_width = g_layout_xml.getElementsByTagName(g_tag_cash_image_width)[0].childNodes[0].nodeValue;
    var cash_image_height = g_layout_xml.getElementsByTagName(g_tag_cash_image_height)[0].childNodes[0].nodeValue;	
	
	// Convert from mm to pixel
    var stage_width_pixel = parseInt(stage_width*g_scale_dimension);  
    var stage_height_pixel = parseInt(stage_height*g_scale_dimension); 
    var stage_upper_left_x_pixel = parseInt(stage_upper_left_x*g_scale_dimension); 
    var stage_upper_left_y_pixel = parseInt(stage_upper_left_y*g_scale_dimension);
    var cash_upper_left_x_pixel = parseInt(cash_upper_left_x*g_scale_dimension); 
    var cash_upper_left_y_pixel = parseInt(cash_upper_left_y*g_scale_dimension);		
   
    // Draw the rectangle representing the stage defined by a relative value
    var rect_svg = '<rect ' + ' x=' + stage_upper_left_x_pixel + ' y=' + stage_upper_left_y_pixel
      + ' width=' + stage_width_pixel + ' height=' + stage_height_pixel     
      + ' style="fill:' + stage_color + ';stroke-width:' + stage_stroke_width + ';stroke:' + stage_stroke_color + '"' +  ' />';
    // ret_stage_svg = ret_stage_svg + rect_svg + '\n';

    // The X position for the stage text defined by a relative value
    var text_x = stage_width;
    text_x = text_x*stage_text_rel_x_procent;
    text_x = text_x/100.0;
    text_x = text_x + parseInt(stage_upper_left_x);

    // The Y position for the stage text defined by a relative value	
    var text_y = stage_height;
    text_y = text_y*stage_text_rel_y_procent;
    text_y = text_y/100.0;
    text_y = text_y + parseInt(stage_upper_left_y);
	
	// Position converted to pixels
    var text_x_pixel = parseInt(text_x*g_scale_dimension);
    var text_y_pixel = parseInt(text_y*g_scale_dimension);

	// Stage text object
    var text_svg = '<text x=' + text_x_pixel + ' y=' + text_y_pixel 
	               + g_font_big + stage_text_color + 
				   '>' + stage_text + '</text>';
    // ret_stage_svg = ret_stage_svg + text_svg + '\n';
	
	// Stage image object	
	var image_x_pixel = stage_upper_left_x_pixel + 8;
	var image_y_pixel = stage_upper_left_y_pixel - 25;
					
    var stage_image_svg = '<image x= ' + image_x_pixel + ' y= ' + image_y_pixel + 
	                ' width=' + stage_image_width + ' height=' + stage_image_height + 
                    ' xlink:href=' + stage_image + '>' +
                    ' <title>Bühne</title> ' + 
                    ' </image>';
					
    ret_stage_svg = ret_stage_svg + stage_image_svg + '\n'; 
	

	// Cash desk image object	
    var cash_image_svg = '<image x= ' + cash_upper_left_x_pixel + ' y= ' + cash_upper_left_y_pixel + 
	                ' width=' + cash_image_width + ' height=' + cash_image_height + 
                    ' xlink:href=' + cash_image + '>' +
                    ' <title>Kasse</title> ' + 
                    ' </image>';
					
    ret_stage_svg = ret_stage_svg + cash_image_svg + '\n'; 

	
    // Position for the concert text. Deltas from stage rectangle	
    var concert_text_x_pixel = stage_upper_left_x_pixel + 10;
    var concert_text_y_pixel = stage_upper_left_y_pixel + stage_height_pixel + 25;

	// Concert text object
    //QQ text_svg = '<text id= "conzert_title_text" x=' + concert_text_x_pixel + ' y=' + concert_text_y_pixel + 
    //QQ          g_font_mid + stage_text_color + '>' + 
    //QQ          "dd/mm 2019 Band ...." + '</text>';
    //QQ ret_stage_svg = ret_stage_svg + text_svg + '\n';   
 
    // Return the stage SVG data
    return ret_stage_svg;
   
} // drawStage














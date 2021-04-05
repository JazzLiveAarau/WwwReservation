// File: Reservation\scripts\ReservationDoors.js

// Draw all doors
function drawDoors(i_layout_xml)
{
    var ret_all_doors_svg = '';	
	
    var n_number_doors = getNumberOfDoors(i_layout_xml);
	
    for (door_number=1; door_number <= n_number_doors; door_number++)
    {
        var door_node = getDoorNode(i_layout_xml, door_number);
		
        ret_all_doors_svg = ret_all_doors_svg + drawDoor(door_node);
		
    } // door_number
	
    return ret_all_doors_svg;
	
} // drawDoors

// Draw a door
function drawDoor(i_door_node)
{
	var ret_door_svg = '';	
	
	var door_type = i_door_node.getElementsByTagName(g_tag_door_type)[0].childNodes[0].nodeValue;
	var door_position = i_door_node.getElementsByTagName(g_tag_door_position)[0].childNodes[0].nodeValue;
	var door_height = i_door_node.getElementsByTagName(g_tag_door_height)[0].childNodes[0].nodeValue;
	var door_text = i_door_node.getElementsByTagName(g_tag_door_text)[0].childNodes[0].nodeValue;
	
	var door_image = i_door_node.getElementsByTagName(g_tag_door_image)[0].childNodes[0].nodeValue;
	var door_image_width_pixel = i_door_node.getElementsByTagName(g_tag_door_image_width)[0].childNodes[0].nodeValue;
	var door_image_height_pixel = i_door_node.getElementsByTagName(g_tag_door_image_height)[0].childNodes[0].nodeValue;	
	
	var door_position_pixel = parseInt(door_position*g_scale_dimension);
	var door_height_pixel = parseInt(door_height*g_scale_dimension);
	
	var premises_width_pixel = parseInt(g_premises_width*g_scale_dimension);
	var premises_height_pixel = parseInt(g_premises_heigth*g_scale_dimension);
	var wall_thickness_pixel = parseInt(g_wall_thickness*g_scale_dimension);	
	

    if ("right" == door_type)
	{
		var right_coordinate_x_pixel = premises_width_pixel - wall_thickness_pixel;
		var right_coordinate_y_pixel = door_position_pixel;
		var right_width_pixel = premises_width_pixel;
		var right_height_pixel = door_height_pixel;
		
        var door_right_svg = '<rect ' + ' x=' + right_coordinate_x_pixel + ' y=' + right_coordinate_y_pixel +
		                    ' width=' + right_width_pixel + ' height=' + right_height_pixel + 
							' style="fill:white;stroke-width:1;stroke:white"' +  ' />';
						
        // ret_door_svg  = ret_door_svg + door_right_svg + '\n';

        var right_text_x_pixel	= right_coordinate_x_pixel +  4;
		var right_text_y_pixel	= right_coordinate_y_pixel +  4;
    
        var text_right_svg = '<text x=' + right_text_x_pixel + ' y=' + right_text_y_pixel + 
		                     ' transform="rotate(90, ' + right_text_x_pixel + ',' + + right_text_y_pixel + ')"' +
							 ' font-family="arial" font-size="25px" fill=' + g_table_text_color + '>' + door_text + '</text>';
					
        // ret_door_svg  = ret_door_svg + text_right_svg + '\n';
		
	    // Right door image object	
	    var right_image_x_pixel = premises_width_pixel - 2 * wall_thickness_pixel;
	    var right_image_y_pixel = door_position_pixel;
					
        var right_image_svg = '<image x= ' + right_image_x_pixel + ' y= ' + right_image_y_pixel + 
	                ' width=' + door_image_width_pixel + ' height=' + door_image_height_pixel + 
                    ' xlink:href=' + door_image + '>' +
                    ' <title>Tür</title> ' + 
                    ' </image>';
					
        ret_door_svg = ret_door_svg + right_image_svg + '\n'; 		
		   
	}
    if ("lower" == door_type)
	{
		var lower_coordinate_x_pixel = door_position_pixel;
		var lower_coordinate_y_pixel = premises_height_pixel - wall_thickness_pixel;
		var lower_width_pixel = door_height_pixel;
		var lower_height_pixel = premises_width_pixel;
		
        var door_lower_svg = '<rect ' + ' x=' + lower_coordinate_x_pixel + ' y=' + lower_coordinate_y_pixel
           + ' width=' + lower_width_pixel + ' height=' + lower_height_pixel     
           + ' style="fill:white;stroke-width:1;stroke:white"' +  ' />'
		
        // ret_door_svg  = ret_door_svg + door_lower_svg + '\n';		

        var lower_text_x_pixel	= lower_coordinate_x_pixel +  4;
		var lower_text_y_pixel	= lower_coordinate_y_pixel + wall_thickness_pixel - 4;

        var text_lower_svg = '<text x=' + lower_text_x_pixel + ' y=' + lower_text_y_pixel 
		+ ' transform="rotate(0, ' + lower_text_x_pixel + ',' + lower_text_y_pixel + ')"' + 
		' font-family="arial" font-size="25px" fill=' + g_table_text_color + '>' + door_text + '</text>'
		
        // ret_door_svg  = ret_door_svg + text_lower_svg + '\n';	

	    // Lower door image object	
	    var lower_image_x_pixel = lower_coordinate_x_pixel;
	    var lower_image_y_pixel = lower_coordinate_y_pixel - wall_thickness_pixel;
					
        var lower_image_svg = '<image x= ' + lower_image_x_pixel + ' y= ' + lower_image_y_pixel + 
	                ' width=' + door_image_width_pixel + ' height=' + door_image_height_pixel + 
                    ' xlink:href=' + door_image + '>' +
                    ' <title>Tür</title> ' + 
                    ' </image>';
					
        ret_door_svg = ret_door_svg + lower_image_svg + '\n'; 		
		
	}


    return 	ret_door_svg;
	
} // drawDoor

// Get number of doors
function getNumberOfDoors(i_layout_xml)
{
	var ret_number_doors = -12345;
	
	var all_door_nodes = i_layout_xml.getElementsByTagName(g_tag_door);
	
	ret_number_doors = all_door_nodes.length;
	
	return ret_number_doors;
	
} // getNumberOfDoors

// Get a door node
function getDoorNode(i_layout_xml, i_door_number)
{
    var ret_door_node = null;
	
	var all_door_nodes = i_layout_xml.getElementsByTagName(g_tag_door);
	
	ret_door_node = all_door_nodes[i_door_number-1];
	   
	return ret_door_node;
	   
} // getDoorNode





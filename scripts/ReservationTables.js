// File: Reservation\scripts\ReservationTables.js

// Table properties
var g_table_color = "Undefined";
var g_table_stroke_color = "Undefined";
var g_table_stroke_width = -12345;
var g_table_text_rel_x_procent = 0.123456789;
var g_table_text_rel_y_procent = 0.123456789;
var g_table_text_color = "Undefined";

// Set table properties
function setTableProperties()
{
   g_table_color = g_layout_xml.getElementsByTagName(g_tag_table_color)[0].childNodes[0].nodeValue; 
   g_table_stroke_color = g_layout_xml.getElementsByTagName(g_tag_table_stroke_color)[0].childNodes[0].nodeValue; 
   g_table_stroke_width = g_layout_xml.getElementsByTagName(g_tag_table_stroke_width)[0].childNodes[0].nodeValue; 
   g_table_text_rel_x_procent = g_layout_xml.getElementsByTagName(g_tag_table_text_rel_x_procent)[0].childNodes[0].nodeValue;  
   g_table_text_rel_y_procent = g_layout_xml.getElementsByTagName(g_tag_table_text_rel_y_procent)[0].childNodes[0].nodeValue;   
   g_table_text_color = g_layout_xml.getElementsByTagName(g_tag_table_text_color)[0].childNodes[0].nodeValue;    
   
} // setTableProperties


// Draw all table groups
function drawTableGroups()
{
    var ret_tables_svg = '';
	
	var n_number_table_groups = getNumberOfTableGroups()
	
	for (table_group_number=1; table_group_number <= n_number_table_groups; table_group_number++)
	{
		var table_group_node = getTableGroupNode(table_group_number);
		
		var n_number_tables = getNumberOfTables(table_group_node);
		
		for (table_number=1; table_number <= n_number_tables;  table_number++)
		{
			var table_node = getTableNode(table_group_node, table_number);
			
            var table_svg = drawTable(table_node);
            ret_tables_svg = ret_tables_svg + table_svg;
			
		} // table_number
		
	} // table_group_number
	
    return ret_tables_svg;
	
} // drawTableGroups


// Draw one table
function drawTable(i_table_node)
{
    var ret_table_svg = '';
	
	var table_number = i_table_node.getElementsByTagName(g_tag_table_number)[0].childNodes[0].nodeValue;
	var upper_left_x = i_table_node.getElementsByTagName(g_tag_upper_left_x)[0].childNodes[0].nodeValue;
	var upper_left_y = i_table_node.getElementsByTagName(g_tag_upper_left_y)[0].childNodes[0].nodeValue;
	var table_width = i_table_node.getElementsByTagName(g_tag_width)[0].childNodes[0].nodeValue;
	var table_height = i_table_node.getElementsByTagName(g_tag_height)[0].childNodes[0].nodeValue;
	var table_text = i_table_node.getElementsByTagName(g_tag_text)[0].childNodes[0].nodeValue;
	var number_left_right_seats = i_table_node.getElementsByTagName(g_tag_number_left_right_seats)[0].childNodes[0].nodeValue;
	var seat_upper = i_table_node.getElementsByTagName(g_tag_seat_upper)[0].childNodes[0].nodeValue;
	var seat_lower = i_table_node.getElementsByTagName(g_tag_seat_lower)[0].childNodes[0].nodeValue;
	
	
    var rect_svg = addTableRectangle(table_width, table_height, upper_left_x, upper_left_y);	
	ret_table_svg = ret_table_svg + rect_svg + '\n';
	
    var text_svg = addTableText(table_width, table_height, upper_left_x, upper_left_y, table_number);	
	ret_table_svg = ret_table_svg + text_svg + '\n';
	
    var circle_radius = table_width/6.0;
    var circle_coordinates_x_pixel = getCirclePixelCoordinatesX(table_width, upper_left_x, circle_radius);
   
    var circle_coordinates_y_pixel = getCirclePixelCoordinatesY(table_height, upper_left_y, number_left_right_seats, circle_radius);
  
    var circles_exist_left = getCirclesExistLeft(i_table_node, number_left_right_seats);
    var circles_exist_right = getCirclesExistRight(i_table_node, number_left_right_seats);
  
    var circle_radius_pixel = parseInt(circle_radius*g_scale_dimension);   
   
    var circle_fill_color = g_color_free_seat;
   
    var row_number = -12345;
   
    var two_cir_svg = '';
    if (number_left_right_seats >= 2)
    {
		row_number = 1;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);	
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
	
    if (number_left_right_seats >= 4)
    {
		row_number = 2;
		two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }	
	
    if (number_left_right_seats >= 6)
    {
		row_number = 3;
		two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }		

    if (number_left_right_seats >= 8)
    {
		row_number = 4;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }		

	if (number_left_right_seats >= 10)
	{
		row_number = 5;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
	}		

    if (number_left_right_seats >= 12)
    {
        row_number = 6;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 14)
    {
        row_number = 7;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 16)
    {
        row_number = 8;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 18)
    {
        row_number = 9;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 20)
    {
        row_number = 10;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 22)
    {
        row_number = 11;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 24)
    {
        row_number = 12;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 26)
    {
        row_number = 13;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 28)
    {
        row_number = 14;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 30)
    {
        row_number = 15;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 32)
    {
        row_number = 16;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 34)
    {
        row_number = 17;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 36)
    {
        row_number = 18;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 38)
    {
        row_number = 19;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
    if (number_left_right_seats >= 40)
    {
        row_number = 20;
        two_cir_svg = addTwoCircles(circles_exist_left, circles_exist_right, circle_coordinates_x_pixel, circle_coordinates_y_pixel, row_number, circle_radius_pixel, circle_fill_color, table_number);
        ret_table_svg = ret_table_svg + two_cir_svg + '\n';
    }
	
	var seat_character_upper  = getSeatCharacterLeft(row_number+1, circles_exist_left.length);
	var seat_character_lower  = getSeatCharacterRight(row_number+1, circles_exist_left.length);
	
    var one_cir_svg = addOneCircle(circles_exist_left[row_number], circle_coordinates_x_pixel[2], circle_coordinates_y_pixel[row_number], 
	              circle_radius_pixel, circle_fill_color, seat_character_upper, "upper", table_number);
    ret_table_svg = ret_table_svg + one_cir_svg;				  
				  
    one_cir_svg = addOneCircle(circles_exist_right[row_number], circle_coordinates_x_pixel[3], circle_coordinates_y_pixel[row_number+1], 
	              circle_radius_pixel, circle_fill_color, seat_character_lower, "lower", table_number);
    ret_table_svg = ret_table_svg + one_cir_svg;
	
	
    return ret_table_svg;
	
} // drawTable

// Add two circles, i.e. the left and the right circle
function addTwoCircles(i_circles_exist_left, i_circles_exist_right, i_circle_coordinates_x_pixel, i_circle_coordinates_y_pixel, i_row_number, i_circle_radius_pixel, i_circle_fill_color, i_table_number)
{		
    var ret_two_cir_svg = '';
	
    if (parseInt(i_row_number) < 1 || parseInt(i_row_number) > 20)
	{
		return ret_two_cir_svg;
	}
  
    var character_left  = getSeatCharacterLeft(i_row_number, i_circles_exist_left.length);
	var character_right  = getSeatCharacterRight(i_row_number, i_circles_exist_left.length);
	
    var index_y = parseInt(i_row_number) - 1;
	
    var one_cir_svg = addOneCircle(i_circles_exist_left[index_y], i_circle_coordinates_x_pixel[0], i_circle_coordinates_y_pixel[index_y], 
	                  i_circle_radius_pixel, i_circle_fill_color, character_left, "left", i_table_number);
    ret_two_cir_svg = ret_two_cir_svg + one_cir_svg + '\n';
	
	one_cir_svg = addOneCircle(i_circles_exist_right[index_y], i_circle_coordinates_x_pixel[1], i_circle_coordinates_y_pixel[index_y], 
	              i_circle_radius_pixel, i_circle_fill_color, character_right, "right", i_table_number);
    ret_two_cir_svg = ret_two_cir_svg + one_cir_svg + '\n';
	
    return ret_two_cir_svg;
	
} // addTwoCircles

// Get seat character for a left seat or for the upper seat
function getSeatCharacterLeft(i_row_number, i_number_rows)
{
	character_left = "Undefined";
	if (1 == parseInt(i_row_number))
	{
		character_left = "A";
	}
	else if (2 == parseInt(i_row_number))
	{
		character_left = "C";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "C";
		}
	}
	else if (3 == parseInt(i_row_number))
	{
		character_left = "E";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "E";
		}
	}
	else if (4 == parseInt(i_row_number))
	{
		character_left = "G";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "G";
		}
	}
	else if (5 == parseInt(i_row_number))
	{
		character_left = "I";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "I";
		}
	}
	else if (6 == parseInt(i_row_number))
	{
		character_left = "K";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "K";
		}
	}	
	else if (7 == parseInt(i_row_number))
	{
		character_left = "M";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "M";
		}
	}		
	else if (8 == parseInt(i_row_number))
	{
		character_left = "O";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "O";
		}
	}
	else if (9 == parseInt(i_row_number))
	{
		character_left = "Q";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "Q";
		}
	}	
	else if (10 == parseInt(i_row_number))
	{
		character_left = "S";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "S";
		}
	}	
	else if (11 == parseInt(i_row_number))
	{
		character_left = "U";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "U";
		}
	}	
	else if (12 == parseInt(i_row_number))
	{
		character_left = "X";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "X";
		}
	}
	else if (13 == parseInt(i_row_number))
	{
		character_left = "Z";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "Z";
		}
	}	
	else if (14 == parseInt(i_row_number))
	{
		character_left = "a";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "a";
		}
	}	
	else if (15 == parseInt(i_row_number))
	{
		character_left = "c";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "c";
		}
	}
	else if (16 == parseInt(i_row_number))
	{
		character_left = "e";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "e";
		}
	}
	else if (17 == parseInt(i_row_number))
	{
		character_left = "g";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "g";
		}
	}
	else if (18 == parseInt(i_row_number))
	{
		character_left = "i";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "i";
		}
	}	
	else if (19 == parseInt(i_row_number))
	{
		character_left = "k";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_left = "k";
		}
	}	
	else if (parseInt(i_row_number) == parseInt(i_number_rows))
	{
		character_left = "m";

	}
		
	return character_left;
	
} // getSeatCharacterLeft

// Get seat character for a right seat or for the lower seat
function getSeatCharacterRight(i_row_number, i_number_rows)
{
	character_right = "Undefined";
	if (1 == parseInt(i_row_number))
	{
		character_right = "B";
	}
	else if (2 == parseInt(i_row_number))
	{
		character_right = "D";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "D";
		}
	}
	else if (3 == parseInt(i_row_number))
	{
		character_right = "F";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "F";
		}
	}
	else if (4 == parseInt(i_row_number))
	{
		character_right = "H";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "H";
		}
	}
	else if (5 == parseInt(i_row_number))
	{
		character_right = "J";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "J";
		}
	}
	else if (6 == parseInt(i_row_number))
	{
		character_right = "L";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "L";
		}
	}	
	else if (7 == parseInt(i_row_number))
	{
		character_right = "N";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "N";
		}
	}		
	else if (8 == parseInt(i_row_number))
	{
		character_right = "P";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "P";
		}
	}
	else if (9 == parseInt(i_row_number))
	{
		character_right = "R";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "R";
		}
	}	
	else if (10 == parseInt(i_row_number))
	{
		character_right = "T";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "T";
		}
	}	
	else if (11 == parseInt(i_row_number))
	{
		character_right = "V";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "V";
		}
	}	
	else if (12 == parseInt(i_row_number))
	{
		character_right = "Y";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "Y";
		}
	}
	else if (13 == parseInt(i_row_number))
	{
		character_right = "Ä";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "Ä";
		}
	}	
	else if (14 == parseInt(i_row_number))
	{
		character_right = "b";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "b";
		}
	}	
	else if (15 == parseInt(i_row_number))
	{
		character_right = "d";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "d";
		}
	}
	else if (16 == parseInt(i_row_number))
	{
		character_right = "f";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "f";
		}
	}
	else if (17 == parseInt(i_row_number))
	{
		character_right = "h";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "h";
		}
	}
	else if (18 == parseInt(i_row_number))
	{
		character_right = "j";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "j";
		}
	}	
	else if (19 == parseInt(i_row_number))
	{
		character_right = "l";
		if (parseInt(i_row_number) == parseInt(i_number_rows))
		{
			character_right = "l";
		}
	}	
	else if (parseInt(i_row_number) == parseInt(i_number_rows))
	{
		character_right = "n";

	}
		
	return character_right;
	
} // getSeatCharacterRight


// Add one circle if seat exists
function addOneCircle(i_seat_exists, i_circle_coordinate_x_pixel, i_circle_coordinate_y_pixel, i_circle_radius_pixel, i_circle_fill_color, i_seat_character, i_table_side, i_table_number)
{
    var ret_one_cir_svg = '';
	
	if(i_seat_exists == "true")
	{
		var circle_id_str =  i_table_number + "_" + i_seat_character;
		
        var cir_svg = '<circle ' + ' cx=' + i_circle_coordinate_x_pixel + ' cy=' + i_circle_coordinate_y_pixel + ' r=' + i_circle_radius_pixel 
		              + ' id="' + circle_id_str + '" ' + g_style_cursor_pointer 
		              + '  stroke=' + g_color_seat_circle +' stroke-width="4"  fill="' + i_circle_fill_color + '"/>';
        ret_one_cir_svg = ret_one_cir_svg + cir_svg + '\n';
	   
	   var text_x_pixel = i_circle_coordinate_x_pixel;
	   var text_y_pixel = i_circle_coordinate_y_pixel;
	   if ("left" == i_table_side)
	   {
		   text_x_pixel = text_x_pixel + 2*i_circle_radius_pixel;
		   text_y_pixel = text_y_pixel + 4
	   }
	   else if ("right" == i_table_side)
	   {
		   text_x_pixel = text_x_pixel - 2*i_circle_radius_pixel - 8;
		   text_y_pixel = text_y_pixel + 4
	   }
	   else if ("upper" == i_table_side)
	   {
		   text_x_pixel = text_x_pixel;
		   text_y_pixel = text_y_pixel + 2*i_circle_radius_pixel;
	   }	   
	   else if ("lower" == i_table_side)
	   {
		   text_x_pixel = text_x_pixel - 2;
		   text_y_pixel = text_y_pixel - 2*i_circle_radius_pixel;
	   }	   	   
	  
	  
	  var circle_text_id_str =  "cir_text_" + i_table_number + "_" + i_seat_character;
	  
      var text_svg = '<text x=' + text_x_pixel + ' y=' + text_y_pixel + ' id="' + circle_text_id_str + '" ' + 
	                 ' fill=' + g_table_text_color + '>' + i_seat_character + '</text>';
      ret_one_cir_svg = ret_one_cir_svg + text_svg + '\n';
	  	
	} // i_seat_exists

    return ret_one_cir_svg;
	
} // addOneCircle

// Get the X coordinates as pixels for the left, right, top and bottom circles
function getCirclePixelCoordinatesX(i_table_width, i_upper_left_x, i_circle_radius)
{
	
   var table_width_pixel = parseInt(i_table_width*g_scale_dimension);  
   var table_upper_left_x_pixel = parseInt(i_upper_left_x*g_scale_dimension); 
      
   var circle_radius_pixel = parseInt(i_circle_radius*g_scale_dimension);
   var delta_x_pixel = parseInt(g_table_stroke_width) + 2 + circle_radius_pixel;
   delta_x_pixel = - delta_x_pixel; // 20181109
   var circle_left_x_pixel = table_upper_left_x_pixel + delta_x_pixel;
   var circle_right_x_pixel = table_upper_left_x_pixel + table_width_pixel - delta_x_pixel;
   
   var circle_top_x_pixel = table_upper_left_x_pixel +  parseInt(table_width_pixel/2.0);
   var circle_bottom_x_pixel = circle_top_x_pixel;

   var ret_coordinates_x = new Array();  
   
   ret_coordinates_x[0] =  circle_left_x_pixel;
   ret_coordinates_x[1] =  circle_right_x_pixel;
   ret_coordinates_x[2] =  circle_top_x_pixel;
   ret_coordinates_x[3] =  circle_bottom_x_pixel;
	
   return ret_coordinates_x;	
	
} // getCirclePixelCoordinatesX


// Get the Y coordinates as pixels for all left and right circles and for the top and bottom circles
function getCirclePixelCoordinatesY(i_table_height, i_upper_left_y, i_number_left_right_seats, i_circle_radius)
{ 
   if (parseInt(i_number_left_right_seats) < 2)
   {
     return null;
   }	
   
   var number_seat_rows = parseInt(i_number_left_right_seats/2.0);
   var delta_n = number_seat_rows + 1.0 + 1.0*(number_seat_rows-1);
   var delta_y = i_table_height/delta_n;
   delta_y_pixel = -delta_y_pixel; // 20181109
   var delta_y_pixel = parseInt(delta_y*g_scale_dimension);
   
   var table_upper_left_y_pixel = parseInt(i_upper_left_y*g_scale_dimension); 
   

   var circle_coordinates_y_pixel = new Array();
   for (position_index=0; position_index<number_seat_rows; position_index++)
   {
	   circle_coordinates_y_pixel[position_index] = table_upper_left_y_pixel + delta_y_pixel + position_index*2.0*delta_y_pixel;	   
   }
   
   var circle_radius_pixel = parseInt(i_circle_radius*g_scale_dimension);
   var delta_y_pixel = parseInt(g_table_stroke_width) + 2 + circle_radius_pixel;
   delta_y_pixel = -delta_y_pixel; // 20181109
   var table_height_pixel = parseInt(i_table_height*g_scale_dimension);
   
   var circle_top_y_pixel = table_upper_left_y_pixel + delta_y_pixel;
   var circle_bottom_y_pixel = table_upper_left_y_pixel + table_height_pixel - delta_y_pixel;
   
   circle_coordinates_y_pixel[number_seat_rows] = circle_top_y_pixel;
   circle_coordinates_y_pixel[number_seat_rows + 1] = circle_bottom_y_pixel;
   	
   return circle_coordinates_y_pixel;
   
} // getCirclePixelCoordinatesY

// Get the circle exist flags for the left circles and the upper circle
function getCirclesExistLeft(i_table_node, i_number_left_right_seats)
{
   if (parseInt(i_number_left_right_seats) < 2 || parseInt(i_number_left_right_seats) > 40)
   {
     return null;
   }	
   
   var number_seat_rows = parseInt(i_number_left_right_seats/2.0);

   var ret_circles_exist_left = new Array();  
   
   for (row_index=0; row_index<number_seat_rows; row_index++)
   {
	   if (0 == row_index)
	   {
		   seat_one_left = i_table_node.getElementsByTagName(g_tag_seat_one_left)[0].childNodes[0].nodeValue;
		   ret_circles_exist_left[row_index] = seat_one_left;
	   }
	   else if (1 == row_index)
	   {
		   seat_two_left = i_table_node.getElementsByTagName(g_tag_seat_two_left)[0].childNodes[0].nodeValue;
		   ret_circles_exist_left[row_index] = seat_two_left;
	   }
	   else if (2 == row_index)
	   {
		   seat_three_left = i_table_node.getElementsByTagName(g_tag_seat_three_left)[0].childNodes[0].nodeValue;
		   ret_circles_exist_left[row_index] = seat_three_left;
	   }
	   else if (3 == row_index)
	   {
		   seat_four_left = i_table_node.getElementsByTagName(g_tag_seat_four_left)[0].childNodes[0].nodeValue;
		   ret_circles_exist_left[row_index] = seat_four_left;
	   }
	   else if (4 == row_index)
	   {
		   seat_five_left = i_table_node.getElementsByTagName(g_tag_seat_five_left)[0].childNodes[0].nodeValue;
		   ret_circles_exist_left[row_index] = seat_five_left;
	   }
	   else if (5 == row_index)
	   {
		   seat_six_left = i_table_node.getElementsByTagName(g_tag_seat_six_left)[0].childNodes[0].nodeValue;
		   ret_circles_exist_left[row_index] = seat_six_left;
	   }
	   else if (6 == row_index)
       {
           seat_seven_left = i_table_node.getElementsByTagName(g_tag_seat_seven_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_seven_left;
       }
	   else if (7 == row_index)
       {
           seat_eight_left = i_table_node.getElementsByTagName(g_tag_seat_eight_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_eight_left;
       }
	   else if (8 == row_index)
       {
           seat_nine_left = i_table_node.getElementsByTagName(g_tag_seat_nine_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_nine_left;
       }
	   else if (9 == row_index)
       {
           seat_ten_left = i_table_node.getElementsByTagName(g_tag_seat_ten_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_ten_left;
       }
	   else if (10 == row_index)
       {
           seat_eleven_left = i_table_node.getElementsByTagName(g_tag_seat_eleven_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_eleven_left;
       }
	   else if (11 == row_index)
       {
           seat_twelve_left = i_table_node.getElementsByTagName(g_tag_seat_twelve_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_twelve_left;
       }
	   else if (12 == row_index)
       {
           seat_thirteen_left = i_table_node.getElementsByTagName(g_tag_seat_thirteen_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_thirteen_left;
       }
	   else if (13 == row_index)
       {
           seat_fourteen_left = i_table_node.getElementsByTagName(g_tag_seat_fourteen_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_fourteen_left;
       }
	   else if (14 == row_index)
       {
           seat_fifteen_left = i_table_node.getElementsByTagName(g_tag_seat_fifteen_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_fifteen_left;
       }
	   else if (15 == row_index)
       {
           seat_sixteen_left = i_table_node.getElementsByTagName(g_tag_seat_sixteen_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_sixteen_left;
       }
	   else if (16 == row_index)
       {
           seat_seventeen_left = i_table_node.getElementsByTagName(g_tag_seat_seventeen_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_seventeen_left;
       }
	   else if (17 == row_index)
       {
           seat_eighteen_left = i_table_node.getElementsByTagName(g_tag_seat_eighteen_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_eighteen_left;
       }
	   else if (18 == row_index)
       {
           seat_nineteen_left = i_table_node.getElementsByTagName(g_tag_seat_nineteen_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_nineteen_left;
       }
	   else if (19 == row_index)
       {
           seat_twenty_left = i_table_node.getElementsByTagName(g_tag_seat_twenty_left)[0].childNodes[0].nodeValue;
           ret_circles_exist_left[row_index] = seat_twenty_left;
       }
	   else 
	   {
		   return null;
	   }
	   	   	   
   } // row_index
	
	var seat_upper = i_table_node.getElementsByTagName(g_tag_seat_upper)[0].childNodes[0].nodeValue;
	
	ret_circles_exist_left[number_seat_rows] = seat_upper;
	
   return ret_circles_exist_left;	
	
} // getCirclesExistLeft

// Get the circle exist flags for the right circles and the lower circle
function getCirclesExistRight(i_table_node, i_number_left_right_seats)
{
   if (parseInt(i_number_left_right_seats) < 2 || parseInt(i_number_left_right_seats) > 40)
   {
     return null;
   }	
   
   var number_seat_rows = parseInt(i_number_left_right_seats/2.0);

   var ret_circles_exist_right = new Array();  
   
   for (row_index=0; row_index<number_seat_rows; row_index++)
   {
	   if (0 == row_index)
	   {
		   seat_one_right = i_table_node.getElementsByTagName(g_tag_seat_one_right)[0].childNodes[0].nodeValue;
		   ret_circles_exist_right[row_index] = seat_one_right;
	   }
	   else if (1 == row_index)
	   {
		   seat_two_right = i_table_node.getElementsByTagName(g_tag_seat_two_right)[0].childNodes[0].nodeValue;
		   ret_circles_exist_right[row_index] = seat_two_right;
	   }
	   else if (2 == row_index)
	   {
		   seat_three_right = i_table_node.getElementsByTagName(g_tag_seat_three_right)[0].childNodes[0].nodeValue;
		   ret_circles_exist_right[row_index] = seat_three_right;
	   }
	   else if (3 == row_index)
	   {
		   seat_four_right = i_table_node.getElementsByTagName(g_tag_seat_four_right)[0].childNodes[0].nodeValue;
		   ret_circles_exist_right[row_index] = seat_four_right;
	   }
	   else if (4 == row_index)
	   {
		   seat_five_right = i_table_node.getElementsByTagName(g_tag_seat_five_right)[0].childNodes[0].nodeValue;
		   ret_circles_exist_right[row_index] = seat_five_right;
	   }
	   else if (5 == row_index)
	   {
		   seat_six_right = i_table_node.getElementsByTagName(g_tag_seat_six_right)[0].childNodes[0].nodeValue;
		   ret_circles_exist_right[row_index] = seat_six_right;
	   }
	   else if (6 == row_index)
       {
           seat_seven_right = i_table_node.getElementsByTagName(g_tag_seat_seven_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_seven_right;
       }
	   else if (7 == row_index)
       {
           seat_eight_right = i_table_node.getElementsByTagName(g_tag_seat_eight_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_eight_right;
       }
	   else if (8 == row_index)
       {
           seat_nine_right = i_table_node.getElementsByTagName(g_tag_seat_nine_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_nine_right;
       }
	   else if (9 == row_index)
       {
           seat_ten_right = i_table_node.getElementsByTagName(g_tag_seat_ten_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_ten_right;
       }
	   else if (10 == row_index)
       {
           seat_eleven_right = i_table_node.getElementsByTagName(g_tag_seat_eleven_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_eleven_right;
       }
	   else if (11 == row_index)
       {
           seat_twelve_right = i_table_node.getElementsByTagName(g_tag_seat_twelve_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_twelve_right;
       }
	   else if (12 == row_index)
       {
           seat_thirteen_right = i_table_node.getElementsByTagName(g_tag_seat_thirteen_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_thirteen_right;
       }
	   else if (13 == row_index)
       {
           seat_fourteen_right = i_table_node.getElementsByTagName(g_tag_seat_fourteen_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_fourteen_right;
       }
	   else if (14 == row_index)
       {
           seat_fifteen_right = i_table_node.getElementsByTagName(g_tag_seat_fifteen_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_fifteen_right;
       }
	   else if (15 == row_index)
       {
           seat_sixteen_right = i_table_node.getElementsByTagName(g_tag_seat_sixteen_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_sixteen_right;
       }
	   else if (16 == row_index)
       {
           seat_seventeen_right = i_table_node.getElementsByTagName(g_tag_seat_seventeen_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_seventeen_right;
       }
	   else if (17 == row_index)
       {
           seat_eighteen_right = i_table_node.getElementsByTagName(g_tag_seat_eighteen_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_eighteen_right;
       }
	   else if (18 == row_index)
       {
           seat_nineteen_right = i_table_node.getElementsByTagName(g_tag_seat_nineteen_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_nineteen_right;
       }
	   else if (19 == row_index)
       {
           seat_twenty_right = i_table_node.getElementsByTagName(g_tag_seat_twenty_right)[0].childNodes[0].nodeValue;
           ret_circles_exist_right[row_index] = seat_twenty_right;
       }
	   else 
	   {
		   return null;
	   }
	   	   	   
   } // row_index
	

	var seat_lower = i_table_node.getElementsByTagName(g_tag_seat_lower)[0].childNodes[0].nodeValue;	
	
	ret_circles_exist_right[number_seat_rows] = seat_lower;
	
   return ret_circles_exist_right;	
	
} // getCirclesExistRight

// Add table rectangle
function addTableRectangle(i_table_width, i_table_height, i_upper_left_x, i_upper_left_y)
{
    var ret_table_rect_svg = '';
	
    var table_width_pixel = parseInt(i_table_width*g_scale_dimension);  
    var table_height_pixel = parseInt(i_table_height*g_scale_dimension); 
    var table_upper_left_x_pixel = parseInt(i_upper_left_x*g_scale_dimension); 
    var table_upper_left_y_pixel = parseInt(i_upper_left_y*g_scale_dimension);
   
    var rect_svg = '<rect ' + ' x=' + table_upper_left_x_pixel + ' y=' + table_upper_left_y_pixel
                    + ' width=' + table_width_pixel + ' height=' + table_height_pixel     
                    + ' style="fill:' + g_table_color + ';stroke-width:' + g_table_stroke_width + ';stroke:' + g_table_stroke_color + '"' +  ' />';
    ret_table_rect_svg = ret_table_rect_svg + rect_svg;
	
    return ret_table_rect_svg;
	
} // addTableRectangle


// Add table text
function addTableText(i_table_width, i_table_height, i_upper_left_x, i_upper_left_y, i_table_number)
{
    var ret_table_text = '';
	
    var text_x = i_table_width;
    text_x = text_x*g_table_text_rel_x_procent;
    text_x = text_x/100.0;
    text_x = text_x + parseInt(i_upper_left_x);
   
    var text_y = i_table_height;
    text_y = text_y*g_table_text_rel_y_procent;
    text_y = text_y/100.0;
    text_y = text_y + parseInt(i_upper_left_y);
	
    var text_x_pixel = parseInt(text_x*g_scale_dimension);
    var text_y_pixel = parseInt(text_y*g_scale_dimension);

    var text_svg = '<text x=' + text_x_pixel + ' y=' + text_y_pixel + ' fill=' + 
	                g_table_text_color + '>' + i_table_number + '</text>';
    ret_table_text = ret_table_text + text_svg;
	
    return ret_table_text;
	
} // addTableText

// Get number of tables
function getNumberOfTables(i_table_group_node)
{
	var ret_number_tables = -12345;
	
	var all_table_nodes = i_table_group_node.getElementsByTagName(g_tag_table);
	
	ret_number_tables = all_table_nodes.length;
	
	return ret_number_tables;
	
} // getNumberOfTables

// Get a table node
function getTableNode(i_table_group_node, i_table)
{
    var ret_table_node = null;
	
	var all_table_nodes = i_table_group_node.getElementsByTagName(g_tag_table);

	  for (index_table = 0; index_table < all_table_nodes.length; index_table++) 
      { 
         if (index_table == i_table - 1)
	     {
	        ret_table_node = all_table_nodes[index_table];	
	     }
       }
	   
	   return ret_table_node;
	   
} // getTableNode


// Get number of table groups
function getNumberOfTableGroups()
{
	var ret_number_table_groups = -12345;
	
	var all_table_group_nodes = g_layout_xml.getElementsByTagName(g_tag_group_table);
	
	ret_number_table_groups = all_table_group_nodes.length;
	
	return ret_number_table_groups;
	
} // getNumberOfTableGroups

// Get a table group node
function getTableGroupNode(i_table_group)
{
    var ret_table_group_node = null;
	
	var all_table_group_nodes = g_layout_xml.getElementsByTagName(g_tag_group_table);

	  for (index_table_group = 0; index_table_group < all_table_group_nodes.length; index_table_group++) 
      { 
         if (index_table_group == i_table_group - 1)
	     {
	        ret_table_group_node = all_table_group_nodes[index_table_group];	
	     }
       }
	   
	   return ret_table_group_node;
	   
} // getTableGroupNode



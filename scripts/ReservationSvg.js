// File: Reservation\scripts\ReservationSvg.js

// Adds all the SVG elements as a string
function addSvgElementsToDocument(i_all_svg_elements_as_string)
{
	document.write(i_all_svg_elements_as_string);	
	
} // addSvgElementsToDocument


// Add start line for SVG
function addStartLineSvg()
{
    var 	premises_table_width_pixel = parseInt(g_premises_width*g_scale_dimension);
    var 	premises_table_height = parseInt(g_premises_heigth*g_scale_dimension);
   
    var ret_svg = '';
	
    var svg_svg = '<svg id= "LayoutSalmen" height=' + premises_table_height + ' width=' + premises_table_width_pixel 
                            + ' style="fill:rgb(255,255,255);stroke-width:3;stroke:rgb(0,0,0);margin-top:0px; padding:0px;">'
   
    ret_svg = ret_svg + svg_svg + '\n';
   
    return ret_svg;

} // addStartLineSvg

// Add end line for SVG
function addEndLineSvg()
{	
   return '</svg>';	
   
} // addEndLineSvg

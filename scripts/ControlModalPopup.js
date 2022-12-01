// File: ControlModalPopup.js
// Date: 2022-12-01
// Author: Gunnar Lidén

// Inhalt
// =============
//
// Standard control: Modal Popup (Window)
//
// Reference: https://www.w3schools.com/howto/howto_css_modals.asp


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class Modal Window ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class that creates a modal popup window
// Here is a sample how an object of the class can be created:
// var modal_popup_window = new ReservationModalPopup()
class ReservationModalPopup 
{
    // Function that is executed when an object of this class is created
    constructor() 
    {
        // Member variables
        // ================

        // The identity of the modal window
        this.m_id_div_content = 'id_div_content_modal_popup';

        // The identity of the container for the modal window
        this.m_id_div_container = 'id_div_container_modal_popup';

        // The container element for the modal window
        this.m_el_div_container = null;

        // The content element for the modal window
        this.m_el_div_content = null;

        // The close (exit) element
        this.m_el_span_close = null;

        // The text element for the content <div>
        this.m_el_div_text = null;

        // Initialization
        // ==============        

        this.createSetContainerElementCreateSetClass();
    
    } // constructor

    // Set the content of the modal popup window at click of Display Names (Namen zeigen)
    setContentOpenClickDisplayNames()
    {
        var html_str = ReservationModalPopup.getTablesNamesHtmlString();

        this.m_el_div_text.innerHTML = html_str;

        this.m_el_div_container.style.display = 'block';

    } // setContentOpenClickDisplayNames

    // Get the HTML string with names for all the tables.
    static getTablesNamesHtmlString()
    {
        var ret_html_str = '';

        var n_rows = ReservationModalPopup.getNumberOfTableRows();

        for (var row_number=1; row_number <= n_rows; row_number++)
        {
            // style="border-collapse:collapse; float:left; margin-left:10px" 
            ret_html_str = ret_html_str + '<div style="clear:both; padding-bottom:30px; overflow:hidden ">';

            var table_numbers = ReservationModalPopup.getTableRowNumbersAsStrings(row_number);

            for (var table_number=1; table_number <= table_numbers.length; table_number++)
            {
                var table_number_str = row_number.toString() + table_number.toString();

                ret_html_str = ret_html_str + ReservationModalPopup.getTableHtmlString(table_number_str);

            } // table_number

            ret_html_str = ret_html_str + '</div>';

        } // row_number

        return ret_html_str;

    } // getTablesNamesHtmlString

    // Close the modal popup window
    close()
    {
        this.m_el_div_container.style.display = 'none';

    } // close

    // Set container element, create and set class for the element
    // Create container <div> element if not existing 
    createSetContainerElementCreateSetClass()
    {
        this.m_el_div_container = document.getElementById(this.m_id_div_container);

        if (null == this.m_el_div_container)
        {
            this.createContainerElement();
        }

        this.appendContainerStyles();

        this.createAppendContentElement();

        this.appendContentStyles();

        this.createAppendCloseElement();

        this.appendCloseStyles();

        this.createAppendTextElement();

        this.appendTextStyles();


    } // createSetContainerElementCreateSetClass

    // Create container <div> element, add id and append to body
    createContainerElement()
    {
        this.m_el_div_container = document.createElement('div');

        this.m_el_div_container.id = this.m_id_div_container;

        document.body.appendChild(this.m_el_div_container);

    } // createContainerElement

    // Create content <div> element, add id and append to the container
    createAppendContentElement()
    {
        this.m_el_div_content = document.createElement('div');

        this.m_el_div_content.id = this.m_id_div_content;

        this.m_el_div_container.appendChild(this.m_el_div_content);

    } // createAppendContentElement  

    // Create close <span> element, add click funcion name and append to the container
    createAppendCloseElement()
    {
        this.m_el_span_close = document.createElement('span');

        //https://www.javatpoint.com/javascript-onclick-event
        this.m_el_span_close.onclick = function() { onClickClosePopup()};

        this.m_el_span_close.innerHTML = '&times';

        this.m_el_div_content.appendChild(this.m_el_span_close);

    } // createAppendCloseElement

    // Create and append text <div> element
    createAppendTextElement()
    {
        this.m_el_div_text = document.createElement('div');

        this.m_el_div_content.appendChild(this.m_el_div_text);

    } // createAppendTextElement

    // Append styles for the container
    appendContainerStyles()
    {
        // Hidden by defaults
        this.m_el_div_container.style.display = 'none';

        // Stay in place
        this.m_el_div_container.style.position = 'fixed';

        // Sit on top
        this.m_el_div_container.style.zIndex = '1';

        // Location of the container
        this.m_el_div_container.style.paddingTop = '10px';
        this.m_el_div_container.style.left = '0';
        this.m_el_div_container.style.top = '0';

        // Full width and height
        this.m_el_div_container.style.width = '950px';
        this.m_el_div_container.style.height = '100%';

        // Enable scroll if needed
        this.m_el_div_container.style.overflow = 'auto';

        // Fallback color
        this.m_el_div_container.style.backgroundColor = 'rgba(0,0,0,0.4)';

    } // appendContainerStyles

    // Append styles for the content
    appendContentStyles()
    {
        this.m_el_div_content.style.backgroundColor = '#fefefe';

        this.m_el_div_content.style.margin = 'auto';

        this.m_el_div_content.style.padding = '5px';

        this.m_el_div_content.style.border = '1px solid #888';

        this.m_el_div_content.style.width = '85%';

        this.m_el_div_content.style.height = 'auto';

    } // appendContentStyles

    appendTextStyles()
    {
        this.m_el_div_text.style.clear = 'both';

        this.m_el_div_text.style.fontWeight = 'bold';

        this.m_el_div_text.style.overflow = 'hidden';

    } // appendTextStyles

    // Append styles for the close element
    appendCloseStyles()
    {
        this.m_el_span_close.style.color = 'black';

        // this.m_el_span_close.style.float = 'right';

        // this.m_el_span_close.style.textAlign = 'right';

        this.m_el_span_close.style.fontSize = '58px';

        this.m_el_span_close.style.fontWeight = 'bold';

        this.m_el_span_close.style.cursor = 'pointer';

    } // appendCloseStyles

    // Rturns the length of the table/seat array used by in the loop creating the table
    static getEndIndexForTableLoop(i_reservation_table_array_left, i_reservation_table_array_right)
    {
        var ret_length_array = -12345;

        var length_left = i_reservation_table_array_left.length;

        var length_right = i_reservation_table_array_right.length;

        if (length_left == length_right) 
        {
            ret_length_array = length_left;
        }
        else if (length_left > length_right) 
        {
            ret_length_array = length_right;
        }
        else if (length_left < length_right) 
        {
            ret_length_array = length_left;
        }

        return ret_length_array - 1;

    } // getEndIndexForTableLoop

    // Get the top or the bottom row for the table
    // If there is one seat at the bottom or one seat at the top of the table
    // the array lengths from getReservationsTableArray and getReservationsTableArray
    // will not be equal.
    // The top and bottom name seats are the last elements in the array, i.e. first
    // come the side seats of the table A, B, C, ....
    // This function will not work if there is a top and a bottom seat!!!!!
    static getTopBottomRowHtmlString(i_table_number, i_top_bottom_case)
    {
        var ret_top_bottom_html_str = '';

        var reservation_table_array_left = ReservationModalPopup.getReservationsTableArray(i_table_number, 'left_name');

        var reservation_table_array_right = ReservationModalPopup.getReservationsTableArray(i_table_number, 'right_name');

        var reservation_table_array_left_seat = ReservationModalPopup.getReservationsTableArray(i_table_number, 'left_seat');

        var reservation_table_array_right_seat = ReservationModalPopup.getReservationsTableArray(i_table_number, 'right_seat');

        var length_left = reservation_table_array_left.length;

        var length_right = reservation_table_array_right.length;

        if (length_left == length_right)
        {
            return ret_top_bottom_html_str;
        }
        else if (length_left > length_right && 'top' == i_top_bottom_case)
        {
            return ret_top_bottom_html_str;
        }
        else if (length_left < length_right && 'bottom' == i_top_bottom_case)
        {
            return ret_top_bottom_html_str;
        }

        var end_index = -12345;

        var top_bottom_name = 'Not yet set name';

        var top_bottom_seat = 'Not yet set seat';

        if (length_left > length_right)
        {
            end_index = length_left - 1;

            top_bottom_name = reservation_table_array_left[end_index];

            top_bottom_seat = reservation_table_array_left_seat[end_index];
        }
        else
        {
            end_index = length_right - 1;

            top_bottom_name = reservation_table_array_right[end_index];

            top_bottom_seat = reservation_table_array_right_seat[end_index];
        }

        ret_top_bottom_html_str = ReservationModalPopup.getRowTopBottomHtmlString(top_bottom_seat, top_bottom_name);

        return ret_top_bottom_html_str;

    } // getTopBottomRowHtmlString

    // Get HTML string for one table
    // Perhaps move this function to file ReservationFiles.js
    // Reference: Function getColumnSeats
    static getTableHtmlString(i_table_number)
    {
        var ret_html = '';

        var reservation_table_array_left = ReservationModalPopup.getReservationsTableArray(i_table_number, 'left_name');

        var reservation_table_array_right = ReservationModalPopup.getReservationsTableArray(i_table_number, 'right_name');

        var reservation_table_array_left_seat = ReservationModalPopup.getReservationsTableArray(i_table_number, 'left_seat');

        var reservation_table_array_right_seat = ReservationModalPopup.getReservationsTableArray(i_table_number, 'right_seat');

        var end_index = ReservationModalPopup.getEndIndexForTableLoop(reservation_table_array_left, reservation_table_array_right);

        var length_left = reservation_table_array_left.length;

        var length_right = reservation_table_array_right.length;


        ret_html = ret_html + '<table border= "1" width= "31%" style="border-collapse:collapse; float:left; margin-left:10px" >';

        var empty_column = '&nbsp;' + '<br>' + '&nbsp;'

        ret_html = ret_html + ReservationModalPopup.getTopBottomRowHtmlString(i_table_number, 'top');

        for (var index_out=0; index_out <= end_index; index_out++)
        {
            var name_left = 'Undefined name left';

            var name_right = 'Undefined name right';

            var seat_left = 'Undefined seat left'

            var seat_right = 'Undefined seat right'

            if (index_out < length_left)
            {
                name_left = reservation_table_array_left[index_out];

                seat_left = reservation_table_array_left_seat[index_out];
            }

            if (index_out < length_right)
            {
                name_right = reservation_table_array_right[index_out];

                seat_right = reservation_table_array_right_seat[index_out];
            }

            if (index_out == 0)
            {
                ret_html = ret_html + ReservationModalPopup.getRowColSpanTwoHtmlString(seat_left, name_left, 'Tisch ' + '<br>' + i_table_number, seat_right, name_right);
            }
            else
            {
                ret_html = ret_html + ReservationModalPopup.getRowColSpanTwoHtmlString(seat_left, name_left, empty_column, seat_right, name_right);
            } 

        } // index_out

        ret_html = ret_html + ReservationModalPopup.getTopBottomRowHtmlString(i_table_number, 'bottom');

        ret_html = ret_html + '</table> ';

        return ret_html;

    } // getTableHtmlString

    // Get the HTML string for the end seats of the table
    static getRowTopBottomHtmlString(i_seat_2, i_name_2)
    {
        var ret_row_html = '';

        var seat_width = '11px';

        var name_width = '63px';

        var empty_column = '&nbsp;' + '<br>' + '&nbsp;'

        ret_row_html = ret_row_html + '<tr>';

        ret_row_html = ret_row_html + ReservationModalPopup.getColumnSpanTwoHtmlString(empty_column);

        ret_row_html = ret_row_html + ReservationModalPopup.getColumnHtmlString(seat_width, i_seat_2);

        ret_row_html = ret_row_html + ReservationModalPopup.getColumnHtmlString(name_width, i_name_2);

        ret_row_html = ret_row_html + ReservationModalPopup.getColumnSpanTwoHtmlString(empty_column);

        ret_row_html = ret_row_html + '</tr>';

        return ret_row_html;

    } // getRowTopBottomHtmlString

    // Get the HTML string for the side seats of the table
    // The two mid columns get together and have no boundaries representing the table
    static getRowColSpanTwoHtmlString(i_seat_1, i_name_1, i_name_2, i_seat_3, i_name_3)
    {
        var ret_row_html = '';

        var seat_width = '11px';

        var name_width = '63px';

        ret_row_html = ret_row_html + '<tr>';

        ret_row_html = ret_row_html + ReservationModalPopup.getColumnHtmlString(name_width, i_name_1);

        ret_row_html = ret_row_html + ReservationModalPopup.getColumnHtmlString(seat_width, i_seat_1);

        ret_row_html = ret_row_html + ReservationModalPopup.getColumnSpanTwoHtmlString(i_name_2);

        ret_row_html = ret_row_html + ReservationModalPopup.getColumnHtmlString(seat_width, i_seat_3);

        ret_row_html = ret_row_html + ReservationModalPopup.getColumnHtmlString(name_width, i_name_3);

        ret_row_html = ret_row_html + '</tr>';

        return ret_row_html;

    } // getRowColSpanTwoHtmlString

    // Get the column HTML string
    static getColumnHtmlString(i_width, i_text)
    {
        var ret_col_html = '';

        ret_col_html = ret_col_html + '<td width= "' + i_width + '" align= "center">';

        ret_col_html = ret_col_html + i_text;

        ret_col_html = ret_col_html + '</td>';

        return ret_col_html;

    } // getColumnHtmlString

    // Get the column HTML string where two column strings get together.
    // This column string is used for rows with left and right side seats
    // This column represents the table itself. It has no boundaries
    // The width of this column is determined by surrounding columns
    static getColumnSpanTwoHtmlString(i_text)
    {
        var ret_col_html = '';

        ret_col_html = ret_col_html + '<td  align= "center" colspan="2" style="border:none">';

        ret_col_html = ret_col_html + i_text;

        ret_col_html = ret_col_html + '</td>';

        return ret_col_html;

    } // getColumnSpanTwoHtmlString

    // Returns start index for the input table number
    static getTableStartIndex(i_table_number)
    {
        var ret_index_start = -12345;

        var table_number_array = getAvailableSeatsArray("number");
        
        for (var index_el=0; index_el < table_number_array.length; index_el++)
        {
            var current_table_number = table_number_array[index_el];

            if (current_table_number == i_table_number)
            {
                ret_index_start = index_el;

                break;
            }

        } // index_el

        return ret_index_start;

    } // getTableStartIndex

    // Returns start index for the input table number
    static getTableEndIndex(i_table_number)
    {
        var ret_index_end = -12345;

        var table_number_array = getAvailableSeatsArray("number");

        var table_found = false;
        
        for (var index_el=0; index_el < table_number_array.length; index_el++)
        {
            var current_table_number = table_number_array[index_el];

            if (current_table_number == i_table_number && !table_found)
            {
                table_found = true;   
            }
            else if (current_table_number == i_table_number && table_found)
            {
                ret_index_end = index_el;
            }
            else if (current_table_number != i_table_number && table_found)
            {
                break;
            }

        } // index_el

        return ret_index_end;

    } // getTableEndIndex


    static getReservationsTableArray(i_table_number, i_case)
    {
        var ret_reservations_table = [];
	
        var table_number_array = getAvailableSeatsArray("number");
        
        var seat_char_array = getAvailableSeatsArray("character");
        
        var index_table_out = 0;

        var index_element_start = ReservationModalPopup.getTableStartIndex(i_table_number);

        if (i_case == 'right_name' || i_case == 'right_seat')
        {
            index_element_start = index_element_start + 1;
        }

        var index_element_end = ReservationModalPopup.getTableEndIndex(i_table_number);
        
        for (var index_element=index_element_start; index_element <= index_element_end; index_element= index_element + 2)
        {
            var current_table_number = table_number_array[index_element];
            
            var current_seat_character = seat_char_array[index_element];
            
            if (current_table_number == i_table_number)
            {
                var reservation_name = getReservationName(current_table_number, current_seat_character);

                if (reservation_name == 'Undefined name')
                {
                    reservation_name = '&nbsp;';
                }

                if (i_case == 'left_name' || i_case == 'right_name')
                {
                    ret_reservations_table[index_table_out] = reservation_name;
                }
                else if (i_case == 'left_seat' || i_case == 'right_seat')
                {
                    ret_reservations_table[index_table_out] = current_seat_character;
                }
                else
                {
                    ret_reservations_table[index_table_out] = 'Unvalid case ' + i_case;
                }
                
                index_table_out = index_table_out + 1;
            }
            
        } // index_element
        
        return ret_reservations_table;

    } // getReservationsTableArray

   // Get table row numbers as strings
   static getTableRowNumbersAsStrings(i_row_number)
   {
       var ret_row_numbers = [];

       var n_table_rows = ReservationModalPopup.getNumberOfTableRows();

       if (i_row_number < 1 || i_row_number > n_table_rows)
       {
            alert('ReservationModalPopup.getTableRowNumbersAsStrings i_row_number ' + i_row_number.toString() + 
                        ' not between 1 and n_table_rows= ' + n_table_rows.toString());
            return ret_row_numbers;
       }

       var row_number_str = i_row_number.toString();

       for (var column_number = 1; column_number < 10; column_number++)
       {
            var table_number_str = row_number_str + column_number.toString();

            var b_exists = ReservationModalPopup.tableNumberExists(table_number_str);

            if (b_exists)
            {
                ret_row_numbers[column_number - 1] = table_number_str;
            }
            else
            {
                break;
            }

       } // column_number

       return ret_row_numbers;

   } // getTableRowNumbersAsStrings

   // Returns true if the table is defined
   static tableNumberExists(i_table_number_str)
   {
        var ret_exists = false;

        var table_number_array = getAvailableSeatsArray("number");

        for (var index_element=0; index_element < table_number_array.length; index_element++)
        {
            var table_number_str = table_number_array[index_element];

            if (table_number_str == i_table_number_str)
            {
                ret_exists = true;

                break;
            }
        }
 
        return ret_exists;

   } // tableNumberExists

   // Get number of table rows
   static getNumberOfTableRows()
   {
       var ret_n_table_rows = 0;

       var table_number_array = getAvailableSeatsArray("number");

       for (var index_element=0; index_element < table_number_array.length; index_element++)
       {
            var current_table_number_str = table_number_array[index_element];

            var current_row_str = current_table_number_str.substring(0, 1);

            var current_row = parseInt(current_row_str);

            if (ret_n_table_rows < current_row)
            {
                ret_n_table_rows = current_row;
            }

       } // index_element


       return ret_n_table_rows;

   } // getNumberOfTableRows


} // ReservationModalPopup

/*

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
}
*/

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class Modal Window //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Modal Window Event functions //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Close the popup window
function onClickClosePopup()
{
    g_modal_popup_window.close();
    
} // onClickClosePopup

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Modal Window Event functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

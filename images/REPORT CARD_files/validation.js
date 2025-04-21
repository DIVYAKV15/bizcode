/** Name of Project		: College E Cube
* Name of Module		: Common Functions
* Functionality 			: Javascript Functions
* Author				: Nitin Dubey
* Date				: 20/10/2003
* Review				: 
* Date				:
* Modified by			:
* Date and Remark		:
*/

// Remove leading spaces and carriage returns
function trim(s) {
		// Remove leading spaces and carriage returns
		while ((s.substring(0,1) == ' ') || (s.substring(0,1) == '\n') || (s.substring(0,1) == '\r')) { 
			s = s.substring(1,s.length); 
		}
		// Remove trailing spaces and carriage returns
		while ((s.substring(s.length-1,s.length) == ' ') || (s.substring(s.length-1,s.length) == '\n') || (s.substring(s.length-1,s.length) == '\r')) {
			s = s.substring(0,s.length-1);
		}
		return s;
	}	
	//Commented as it is written in isDate.jsp.
function isDate(dtStr,dtCh){
	// Declaring valid date character, minimum year and maximum year
	//var dtCh= "/";
	var minYear=1900;
	var maxYear=2100;
	// ending of declaration
	var returnval = false // returning value to calling function
	var daysInMonth = DaysArray(12)
	var pos1 = dtStr.indexOf(dtCh)
	var pos2 = dtStr.indexOf(dtCh,pos1+1)
	var strDay = dtStr.substring(0,pos1)
	var strMonth = dtStr.substring(pos1+1,pos2)
	var strYear = dtStr.substring(pos2+1)
	strYr = strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month = parseInt(strMonth)
	day = parseInt(strDay)
	year = parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		alert("The date format should be : dd"+dtCh+"mm"+dtCh+"yyyy.")
		return false
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		alert("Please enter a valid day.")
		return false
	}
	if (strMonth.length<1 || month<1 || month>12){
		alert("Please enter a valid month.")
		return false
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear+".")
		return false
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || hasInteger(stripCharsInBag(dtStr, dtCh))==false){
		alert("Please enter a valid date.")
		return false
	}
return true
}




//-------------------------------------------------------------------
// isNull(value)
//   Returns true if value is null
//-------------------------------------------------------------------
function isNull(val)	{
	return(val==null);
}

//-------------------------------------------------------------------
// isBlank(value)
//   Returns true if value only contains spaces
//-------------------------------------------------------------------
function isBlank(val)	{
	if(val==null || val=="")	{
		return true;
	}
	for(var i=0;i<val.length;i++)	{
		if ((val.charAt(i)!=' ')&&(val.charAt(i)!="\t")&&(val.charAt(i)!="\n")&&(val.charAt(i)!="\r"))	{
			return false;
		}
	}
	return true;
}

function Isnum(){	
	if (window.event.keyCode < 48  || window.event.keyCode > 57)
		window.event.returnValue=false; // Replace By window.event.keyCode=0 to make it Work On Diff Browsers
}//

//-------------------------------------------------------------------
// isInteger(value)
//   Returns true if value contains all digits
//-------------------------------------------------------------------
function isInteger(val)	{
	var counter		= 0;
	var	singleChar	= "";
	var	validChars	= "0123456789";
	
	if(isBlank(val))
		return false;
		
	for(;counter < val.length; counter++)	{
		singleChar	= val.substr(counter, 1);
		if(validChars.indexOf(singleChar) == -1)
			return false;
	}
	return true;		
}

//-------------------------------------------------------------------
// isNumeric(value)
//   Returns true if value contains a positive float value
//-------------------------------------------------------------------
function isNumeric(val)	{
	return(parseFloat(val,10)==(val*1));
}

//------------------------------------------------------------------
// isComboSelected(formName, comboName)
//		Returns true if a value is selected else false;
//------------------------------------------------------------------
function isComboSelected(formName, comboName)	{
	var	str	= "window.document." + formName + "." + comboName + ".value";
	if(eval(str) != 0)
		return true;
	else
		return false;
}

//------------------------------------------------------------------
// getSelectedCheckboxCount(formNameString, comboNameString)
//		Returns the number of checked checkboxes in the form that start with comboNameString;
//------------------------------------------------------------------
function getSelectedCheckboxCount(formNameString, checkboxNameString)	{
	
	var	tempString		= "";
	var	noOfFields		= eval("window.document." + formNameString + ".elements.length");
	var	checkBoxCount	= 0;
	var	counter			= 0;

	for(;counter < noOfFields; counter++)	{
		tempString	= "document." + formNameString + ".elements[" + counter + "]";
		if(	eval(tempString + ".type") == 'checkbox'
			 && eval(tempString + ".name.substring(0, " + checkboxNameString.length + ")") == checkboxNameString	)	{

				if(eval(tempString + ".checked") == true)	{
					checkBoxCount++;
				}
		}
	}

	return checkBoxCount;
}

//------------------------------------------------------------------------

function chkAllCheckBox(formNameString, checkboxNameString , chkbox)	
{

	var	tempString		= "";
	var	noOfFields		= eval("window.document." + formNameString + ".elements.length");
	

	var	counter			= 0;

	for(;counter < noOfFields; counter++)	
	{
		tempString	= "document." + formNameString + ".elements[" + counter + "]";
		if(	eval(tempString + ".type") == 'checkbox'
			 && eval(tempString + ".name.substring(0, " + checkboxNameString.length + ")") == checkboxNameString	)	
			{

				if(eval(tempString + ".checked") == true)	
				{
						var	noOfchk		= eval("window.document."+formNameString+"."+chkbox);
						
						if(noOfchk){
							var noOfchkbox = noOfchk.length;

							if(noOfchkbox){
								for(var count = 0;count < noOfchkbox; count++)
								{


									noOfchk[count].checked = true;
								}
							}else{
								noOfchk.checked = true;
							}
						}
				}
				else
				{
						var	noOfchk		= eval("window.document." + formNameString + "."+chkbox);
						if(noOfchk){
							var noOfchkbox = noOfchk.length;

							if(noOfchkbox){
								for(var count = 0;count < noOfchkbox; count++)
								{


									noOfchk[count].checked = false;
								}
							}else{
								noOfchk.checked = false;
							}
						}
				}
				
					
						
				
			}
	}

    
	return true;
}

//------------------------------------------------------------------------
function chkAllBox(formNameString, checkboxNameString , chkbox)
{

	var	tempString		= "";
	var	noOfFields		= eval("window.document." + formNameString + ".elements.length");


	var	counter			= 0;

	for(;counter < noOfFields; counter++)
	{
		tempString	= "document." + formNameString + ".elements[" + counter + "]";
		if(	eval(tempString + ".type") == 'checkbox'
			 && eval(tempString + ".name.substring(0, " + checkboxNameString.length + ")") == checkboxNameString	)
			{



						var	noOfchk		= eval("window.document."+formNameString+"."+chkbox);
						var noOfchkbox = noOfchk.length;
						var flag = true;

						for(var count = 0;count < noOfchkbox; count++)
						{

							if(noOfchk[count].checked != true){
								flag = false;
								break;
							}
						}
						
					if(!noOfchkbox && noOfchk.checked == false){
						flag = false;
					}

				        var temp  = eval(tempString);
				        if(flag == true)
				        {
				        	temp.checked = true;
				        	return;
				        }else if(flag == false){
							temp.checked = false;
							return;
				        }			}
	}

	return true;
}

//------------------------------------------------------------------------
//-----------------------------------------------------------------------

//------------------------------------------------------------------
// checkEmail(value)
//		Returns true if email is valid.
//------------------------------------------------------------------
/*

function isEMail(str2)
{
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str2))
{
	return true;
}
	return false;
}
*/


function isEMail(fld)
{
// simple email check
/*  var phony= /@(\w+\.)*example\.(com|net|org)$/i;
  if(phony.test(fld))
  { return false; }
  var emailfmt= /^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,8}$/;
  if(!emailfmt.test(fld))
  {  return false; }
  return true; 
 */
 
	if(fld.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)!= -1)
		return true; 
	else
		return false;
 
}



/*function isEMail(str) {

		var at="@";
		var dot=".";
		var lat=str.indexOf(at);
		var lstr=str.length;
		var ldot=str.indexOf(dot);
		if (str.indexOf(at)==-1){
		   alert("Invalid E-mail ID.");
		   return false;
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   alert("Invalid E-mail ID.");
		   return false;
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    alert("Invalid E-mail ID.");
		    return false;
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    alert("Invalid E-mail ID.");
		    return false;
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    alert("Invalid E-mail ID");
		    return false;
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    alert("Invalid E-mail ID");
		    return false;
		 }
		
		 if (str.indexOf(" ")!=-1){
		    alert("Invalid E-mail ID");
		    return false;
		 }

 		 return true;				
	}
	*/


//------------------------------------------------------------------
// isPhoneNumber(value)
//		Returns true if Phone No is valid.
//------------------------------------------------------------------
function isPhoneNumberOld(phoneNo)	{
	var validChars	= "0123456789-+";
	var	counter		= 0;
	var returnValue	= true;
	var singleChar	= "";

	for(;counter <= validChars.length; counter++)	{

		singleChar	= phoneNo.substr(counter + 1, 1);

		if(validChars.indexOf(singleChar) == -1)	{
			returnValue	= false;
			break;
		}

	}
	
	return returnValue;
}   

//------------------------------------------------------------------
// getSelectedItemsInListBox(formName, listBoxName)
//		Returns the no of items selected in listbox
//------------------------------------------------------------------

function getSelectedItemsInListBox(formName, listBoxName)	{
	var	items	= eval("window.document." + formName + "." + listBoxName + ".options");
	var	nCount	= 0;
	var	counter	= 0;
	
	for(;counter < items.length; counter++)	{
		if(items[counter].selected)
			nCount++;
	}
	
	return nCount;
}


//------------------------------------------------------------------
//This function checks whether radio button with the same name is selcted or not.
//------------------------------------------------------------------

function getSelectedRadioCount(formNameString,radioNameString)
{

	var	tempString		= "";
	var	noOfFields		= eval("window.document." + formNameString + ".elements.length");
	var	select	= false;
	var	counter			= 0;

	for(;counter < noOfFields; counter++)	{
		tempString	= "document." + formNameString + ".elements[" + counter + "]";

		//Checks whether the type of the element for the given name is radio button or not
		if(	eval(tempString + ".type") == 'radio'
			 && eval(tempString + ".name.substring(0, " + radioNameString.length + ")") == radioNameString	)	{
				if(eval(tempString + ".checked") == true)	{
					select = true;
					break;
				}
		}
	}

	return select;
}


//------------------------------------------------------------------
// elementCount(formName, fieldName)
//		Returns the no of times field appears in the form
//------------------------------------------------------------------
function elementCount(formNameString, elementName)	{
	var	tempString		= "";
	var	noOfFields		= eval("window.document." + formNameString + ".elements.length");
	var	nCount			= 0;
	var	counter			= 0;

	for(;counter < noOfFields; counter++)	{
		tempString	= "document." + formNameString + ".elements[" + counter + "]";
		if(eval(tempString + ".name") == elementName)
			nCount++;
	}

	return nCount;
}
//----------------------

function validateMe(testString,validChars){
    var testItem=new Array();
    //var trackIndex=new Array();
    var vChar,singleChar,invChar="";
    var count,flg=1,seqOccurence=1;
    var prevChar,firstChar;
        for(var i=0;i<testString.length;i++){
                testItem[i]=testString.charAt(i);
            }
        for( var i=0; i<validChars.length; i++){
                count=0;
                vChar=validChars.charAt(i);

                switch(vChar){      //trackIndex[indx]=count;

                     case "a":
                                for(; count<testItem.length; count++ ){
                                   singleChar = testItem[count];
                                   if((singleChar >= 'a' && singleChar <= 'z') || (singleChar >= 'A' && singleChar <= 'Z')){
                                      testItem[count]="0";
                                     }
                                 }

                                  break;

                     case "n":
                                for(; count<testItem.length; count++ ){
                                   singleChar = testItem[count];
                                   if( singleChar >= '0' && singleChar <= '9' ){
                                      testItem[count]="0";
                                    }
                                 }

                                  break;
                     case "s":
                                for(; count<testItem.length; count++ ){
                                   singleChar = testItem[count];
                                   if( singleChar==" " ){
                                      testItem[count]="0";
                                    }
                                 }

                                  break;
                     case ".":
                                for(; count<testItem.length; count++ ){
                                    singleChar = testItem[count];
                                    if( singleChar=="." && seqOccurence==1 && count!=0 ){
                                          if(chkChar(prevChar)){
                                              testItem[count]="0";
                                              seqOccurence++;
                                          }
                                     }
                                    else if(seqOccurence>=2 && singleChar != "."){
                                        seqOccurence--;
                                    }
                                 prevChar = testItem[count];

                                 }
                                 seqOccurence=1;
                                 break;
                     case "(":
                                for(; count<testItem.length; count++ ){
                                    singleChar = testItem[count];
                                    if( singleChar=="(" && seqOccurence==1 && count != testItem.length-1){
                                      testItem[count]="0";
                                      seqOccurence++;
                                      }
                                    else if(seqOccurence>=2 && singleChar != "("){
                                      seqOccurence--;
                                    }

                                 }
                                 seqOccurence=1;
                                 break;
                     case ")":
                                for(; count<testItem.length; count++ ){
                                    singleChar = testItem[count];
                                    if( singleChar==")" && seqOccurence==1 && count != 0 ){
                                      testItem[count]="0";
                                      seqOccurence++;
                                      }
                                    else if(seqOccurence>=2 && singleChar != ")"){
                                      seqOccurence--;
                                    }

                                 }
                                 seqOccurence=1;
                                 break;
                     case "_":
                               for(; count<testItem.length; count++ ){
                                    singleChar = testItem[count];
                                    if( singleChar=="_" && seqOccurence==1 && count != 0 && count != testItem.length-1){
                                      testItem[count]="0";
                                      seqOccurence++;
                                      }
                                    else if(seqOccurence>=2 && singleChar != "_"){
                                      seqOccurence--;
                                    }

                                 }
                                 seqOccurence=1;
                                 break;

                    case "-":
                               for(; count<testItem.length; count++ ){
                                    singleChar = testItem[count];
                                    if( singleChar=="-" && seqOccurence==1 && count != 0 && count != testItem.length-1){
                                      testItem[count]="0";
                                      seqOccurence++;
                                      }
                                    else if(seqOccurence>=2 && singleChar != "-"){
                                      seqOccurence--;
                                    }

                                 }
                                 seqOccurence=1;
                                 break;


                    case ",":
                                   for(; count<testItem.length; count++ ){
                                        singleChar = testItem[count];
                                        if( singleChar=="," && seqOccurence==1 && count != 0 && count != testItem.length-1){
                                          testItem[count]="0";
                                          seqOccurence++;
                                          }
                                        else if(seqOccurence>=2 && singleChar != ","){
                                          seqOccurence--;
                                        }

                                     }
                                     seqOccurence=1;
                                     break;
                    case "&":
                                   for(; count<testItem.length; count++ ){
                                        singleChar = testItem[count];
                                        if( singleChar=="&" && seqOccurence==1 && count != 0 && count != testItem.length-1){
                                          testItem[count]="0";
                                          seqOccurence++;
                                          }
                                        else if(seqOccurence>=2 && singleChar != "&"){
                                          seqOccurence--;
                                        }

                                     }
                                     seqOccurence=1;
                                     break;

         case ",":
                                   for(; count<testItem.length; count++ ){
                                        singleChar = testItem[count];
                                        if( singleChar=="," && seqOccurence==1 && count != 0 && count != testItem.length-1){
                                          testItem[count]="0";
                                          seqOccurence++;
                                          }
                                        else if(seqOccurence>=2 && singleChar != ","){
                                          seqOccurence--;
                                        }

                                     }
                                     seqOccurence=1;
                                     break;


   case "\\":
                                   for(; count<testItem.length; count++ ){
                                        singleChar = testItem[count];
                                        if( singleChar=="\\" && seqOccurence==1 && count != 0 && count != testItem.length-1){
                                          testItem[count]="0";
                                          seqOccurence++;
                                          }
                                        else if(seqOccurence>=2 && singleChar != "\\"){
                                          seqOccurence--;
                                        }

                                     }
                                     seqOccurence=1;
                                     break;

   case"'":         for(; count<testItem.length; count++ ){
                                        singleChar = testItem[count];
                                        if( singleChar=="'" && seqOccurence==1 && count != 0 && count != testItem.length-1){
                                          testItem[count]="0";
                                          seqOccurence++;
                                          }
                                        else if(seqOccurence>=2 && singleChar != "'"){
                                          seqOccurence--;
                                        }

                                     }
                                     seqOccurence=1;
                                     break;




                     default:
 

                     }//switch
              }//outer for


        for(var j=0;j<testItem.length;j++){
            if(!(testItem[j]=="0")){
                invChar =invChar + testItem[j];
                flg=0;
            }
        }

        if(flg==0){
 
            return false;
        }else{
            return true;}
  }//validateMe(val,vchar)
  
  //-------------------------------------------------------------
//-------------------------------------------------------------

function isSpecialChar(val)	{
	var counter		= 0;
	var	singleChar	= "";
	var	invalidChars	= "\"`~@#$%^&*+=|\';:>?,/!\\(){}[]<";

	for(counter = -1;counter < val.length-1; counter++)	{
		singleChar	= val.substr(counter + 1, 1);
		if(invalidChars.indexOf(singleChar) != -1 ){
			return true;
		}
	}
	return false;
}
function AllowSomeSpecialChar(val)	{
	var counter		= 0;
	var	singleChar	= "";
	var	invalidChars	= "`~@$%^&*=|\';:>?,/";

	for(counter = -1;counter < val.length-1; counter++)	{
		singleChar	= val.substr(counter + 1, 1);
		if(invalidChars.indexOf(singleChar) != -1 ){
			return true;
		}
	}
	return false;
}

function AllowSomeSpecialCharInFinance(val)	{

	var counter		= 0;
	var	singleChar	= "";
	var	invalidChars	= "`~$^*=|\';>?";

	for(counter = -1;counter < val.length-1; counter++)	{
		singleChar	= val.substr(counter + 1, 1);
		if(invalidChars.indexOf(singleChar) != -1 ){
			return true;
		}
	}
	return false;
}

function AllowSomeSpecialCharInResult(val)	{

	var counter		= 0;
	var	singleChar	= "";
	var	invalidChars	= "$'<>\"\\";
	for(counter = -1;counter < val.length-1; counter++)	{
		singleChar	= val.substr(counter + 1, 1);
		if(invalidChars.indexOf(singleChar) != -1 ){
			return true;
		}
	}
	return false;
}
  //-------------------------------------------------------------------
//    chkSalary(salary)
//  This function is used to validate the salary
//-------------------------------------------------------------------

function chkSalary(salary)
{
	var validChars	= "0123456789.";
	var counter = 0;
	var cnt=0;
	var singleChar;
	var str="0";
	var message;
	if(isBlank(salary))
	{
	message = "Empty value not allowed";
	return message;
	}

	if(isSpecialChar(salary))
	{
	message = "Special symbols not allowed.";

	return message;
	}


	if(salary == 0)
	{
		if(salary.substr(0,1) == '0' && salary.length > 1)
		{
			message = "Enter single '0' for zero value.";
			return message;
		}
	}	
	else
	{
		if(salary.indexOf('.') == -1)
		{
			if(salary.substr(0,1) == '0')
			{
				message = "Zero is not allowed at start";
				return message;
			}
		}
		
	}
	
	for(;counter <= validChars.length; counter++)	{
		singleChar	= salary.substr(counter, 1);

		//Checks whether the first and last positions are '.'
		if((salary.substring(0,1)=='.')||(salary.substring(salary.length-1,salary.length)=='.'))
		{
			message="'.' is not allowed at first or last position";
			break;
		}

		if(singleChar == '.')
		{
			cnt++;
			str = salary.substring(counter+1,validChars.length);
		}
		//Checks for more than two '.' in the number.
		if(cnt>=2)
		{
			message="Only one '.' allowed";
			return message;
		}
		//Character validation is checked here.
		if(validChars.indexOf(singleChar) == -1)	
		{
			message="Only numeric value is allowed";
			return message;
		}

	}
	//Checks if more than two numbers are present after '.'
	if(str.length>3)
		message="Only two numbers are allowed after '.'";

	
        if(salary.indexOf('.') != -1)
        {
        	if(salary.substr(0,2) == '00' || salary.substr(0,1) == '0' && salary.substr(1,1) != '.')
		{
			message = "Zero is not allowed at start";
			return message;
		}
        }

	return message;
}


//---------
function isBloodGroup(name){
		var nameCount = 0;
		var singleChar;
		var message;
		if(isNull(name) || isBlank(name) || name.substring(0,1)=='+' || name.substring(0,1)=='-') {
		message="Not A Valid String";
		} else {
		
		//Checks for each character in the loop.
		for(;nameCount<name.length;nameCount++){
		singleChar = name.substr(nameCount,1);
		
		//Enters into this only if it is a character or + or -
		if(!((singleChar >= 'a' && singleChar <= 'z')||(singleChar <= 'Z' && singleChar >= 'A')||(singleChar == '+')||(singleChar == '-'))){
		message="Not A Valid String";
		}
		}
		}
		return message;
		} // end  isBloodGroup(name)
		
		
function isAlphaNumericWithSpace(name){
	var nameCount = 0;
	var singleChar;
	var message;
	
	if(isNull(name)||name.substring(0,1)==' ') {
		return true;
	} else {	
		//Checks for each character in the loop.
		for(;nameCount<name.length;nameCount++){
		singleChar = name.substr(nameCount,1);
		//Enters into this only if it is a character or space or a number.
			if(!((singleChar >= 'a' && singleChar <= 'z')||(singleChar <= 'Z' && singleChar >= 'A')||(singleChar <= '9' && singleChar >= '0')||(singleChar == ' '))){
				return true;
			}
		}
	}	
	return false;
}




// Validation added by Suhas on 21-Oct 2005



//Usage: onkeypress="Ischar();stopSpecialChar();"
//Purpose: To avaid special character to be written on text boxes.
function isChar()
{
	if(window.event.keyCode <= 57  && window.event.keyCode >= 48)
	  window.event.keyCode=0;
}

function chkNumber()
	{
		if (!(window.event.keyCode >= 48  && window.event.keyCode <= 57 || window.event.keyCode == 92 || window.event.keyCode == 124 || window.event.keyCode ==43))
		window.event.keyCode = 0
	}
	
function  stopSpecialCharlastname(){
	if((window.event.keyCode >= 33  && window.event.keyCode < 45) || (window.event.keyCode >= 46  && window.event.keyCode < 48) || (window.event.keyCode >= 57  && window.event.keyCode <= 64) || window.event.keyCode == 96 || window.event.keyCode == 91 || (window.event.keyCode >= 93  && window.event.keyCode <= 94) || window.event.keyCode == 123 || (window.event.keyCode >= 125  && window.event.keyCode <= 126)){
		window.event.returnValue=false;
	}
}
    

//Avoid key in special character.
function  stopSpecialChar()
{
	if((window.event.keyCode >= 33  && window.event.keyCode <= 44) || (window.event.keyCode >= 46  && window.event.keyCode < 48) || (window.event.keyCode > 57  && window.event.keyCode <= 64) || window.event.keyCode == 96 || window.event.keyCode == 91 || (window.event.keyCode >= 93  && window.event.keyCode <= 94) || window.event.keyCode == 123 || (window.event.keyCode >= 125  && window.event.keyCode <= 126) || window.event.keyCode == 95)
	{
   		window.event.returnValue=false;
	}
}


//Avoid key in invalid char entries in Cell Number.
function IsCellNum()
{
	    	if ((( window.event.keyCode != 43 && window.event.keyCode < 48 ) || window.event.keyCode > 57 )  )
    			window.event.keyCode = 0
}//end of function Isnum()



//Return false if name start with digit.
function startsWithDigit(val)	
{
	var counter		= 0;
	var	singleChar	= "";
	var	validChars	= "0123456789";

	if(isBlank(val))
		return false;

	val = val.substr(0, 1);

	if(validChars.indexOf(val) != -1){
		return false;
	}
	return true;
}


//Method added by Suhas On 23rd Oct 2005

//Its accepts currency in ATM format.
function currencyFormat(fld, milSep, decSep, e) {
	var sep = 0;
	var key = '';
	var i = j = 0;
	var len = len2 = 0;
	var strCheck = '0123456789';
	var aux = aux2 = '';
	var whichCode = (window.Event) ? e.which : e.keyCode;
	if (whichCode == 13) return true;  // Enter
	key = String.fromCharCode(whichCode);  // Get key value from key code
	if (strCheck.indexOf(key) == -1) return false;  // Not a valid key
	len = fld.value.length;
	for(i = 0; i < len; i++)
		if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) break;
			aux = '';
			for(; i < len; i++)
			if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i);
				aux += key;
				len = aux.length;
				if (len == 0) fld.value = '';
				if (len == 1) fld.value = '0'+ decSep + '0' + aux;
				if (len == 2) fld.value = '0'+ decSep + aux;
				if (len > 2) {
					aux2 = '';
					for (j = 0, i = len - 3; i >= 0; i--) {
						if (j == 3) {
							aux2 += milSep;
							j = 0;
						}
				aux2 += aux.charAt(i);
				j++;
		}
		fld.value = '';
		len2 = aux2.length;
		for (i = len2 - 1; i >= 0; i--)
		fld.value += aux2.charAt(i);
		fld.value += decSep + aux.substr(len - 2, len);
		}
		return false;
	}	

// Remove leading spaces and carriage returns
function trim(s) {
		// Remove leading spaces and carriage returns
		while ((s.substring(0,1) == ' ') || (s.substring(0,1) == '\n') || (s.substring(0,1) == '\r')) { 
			s = s.substring(1,s.length); 
		}
		// Remove trailing spaces and carriage returns
		while ((s.substring(s.length-1,s.length) == ' ') || (s.substring(s.length-1,s.length) == '\n') || (s.substring(s.length-1,s.length) == '\r')) {
			s = s.substring(0,s.length-1);
		}
		return s;
	}	
	
// Functions Added By Sumit Prakash on 18/11/2005


function hasInteger(s){
	var i;
    for (i = 0; i < s.length; i++){
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   }
   return this
}
//Commented as it is written in isDate.jsp.
/*function isDate(dtStr,dtCh){
	// Declaring valid date character, minimum year and maximum year
	//var dtCh= "/";
	var minYear=1900;
	var maxYear=2100;
	// ending of declaration
	var returnval = false // returning value to calling function
	var daysInMonth = DaysArray(12)
	var pos1 = dtStr.indexOf(dtCh)
	var pos2 = dtStr.indexOf(dtCh,pos1+1)
	var strDay = dtStr.substring(0,pos1)
	var strMonth = dtStr.substring(pos1+1,pos2)
	var strYear = dtStr.substring(pos2+1)
	strYr = strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month = parseInt(strMonth)
	day = parseInt(strDay)
	year = parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		alert("The date format should be : dd"+dtCh+"mm"+dtCh+"yyyy.")
		return false
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		alert("Please enter a valid day.")
		return false
	}
	if (strMonth.length<1 || month<1 || month>12){
		alert("Please enter a valid month.")
		return false
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear+".")
		return false
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || hasInteger(stripCharsInBag(dtStr, dtCh))==false){
		alert("Please enter a valid date.")
		return false
	}
return true
}*/

// Function used for checking the validity of the date. the format of the date should be mm/dd/yyyy.
function ValidateDate(dateObj,dtCh){
	if (isDate(dateObj.value,dtCh)==false){
		dateObj.select();
		dateObj.focus();
		return false
	}
    return true
 }

function checkNumber(numObj){
	var x = numObj.value
	var anum=/(^\d+$)|(^\d+\.\d+$)/
	if (anum.test(x))
	testresult = true
	else{
		alert("Please input a valid number.")
		testresult = false;
		numObj.select();
	}
	return (testresult)
}

  
  // function for the checking the decimal number
// it allows user to enter the numeric value and one decimal. After decimal user can enter only two digits
function checkDecimalNumber(obj) {	
//alert("1");
	// Code added by Sumit Prakash on 22/11/05 for focusing on next control by pressing ENTER key
	if (window.event.keyCode==13) {
		var lenOfElements  = document.forms[0].elements.length;
		for(var i =0;i<lenOfElements;i++) {
			if(document.forms[0].elements[i]==obj) {
				if(document.forms[0].elements[i+1]!=null) {
					//document.forms[0].elements[i+1].focus();
					document.forms[0].elements[i+1].select();
					return;
				}
			}
		}
	}
	// end of Code of 22/11/05
	var x = obj.value;
	var len = x.length;
	var cnt = 0;
	for(var i = 0; i<len;i++) {
		if(x.substring(i,i+1)=='.') {
			cnt++;
			if(cnt>=1 && window.event.keyCode ==46) {
				window.event.returnValue=false;
				window.event.preventDefault();
				return false;

			} // end of inner if statement
		} // end of upper if statement
	} // end of for statement

	if((window.event.keyCode < 48  || window.event.keyCode > 57 ) && !(window.event.keyCode==46)) {
		window.event.keyCode = 0;
		window.event.preventDefault();
		return false;
		}

	// Updated by Sumit Prakash on 25/11/05
	//This code does not allow to enter any values after two digit of decimal 
	/*if(cnt>=1) {
		var str = x.substring(x.indexOf(".")+1);
		if(str!=null && str.length >= 2) {
			window.event.returnValue=false;
		}
	}*/
}
// function for the checking the special character on the lost focus of textbox 
// If user does copy & paste the special character

function checkSpecialChar(obj) {
	var str = obj.value;
	var len = str.length;
	for(var i = 0;i < len ;i++) {
		if(!(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57) && !(str.charCodeAt(i)==46)) {
			alert("Please enter Number or \'.' Character.");
			obj.value = "";
			obj.focus();
			return false;
		}
	}
	if(str.length>0)
		obj.value = parseFloat(str).toFixed(2);
	else {
		obj.value = "0.00";
	}
	return true;
}
// Ending of the Added Functions By Sumit Prakash on 18/11/2005	


//This function allow to check special character but allow dot(.) as well as ( )brackets

function  stopSpecialCharWithoutDot()
	{
		if((window.event.keyCode >= 33  && window.event.keyCode <= 39) 
		||(window.event.keyCode >= 42  && window.event.keyCode <= 43)  
		|| (window.event.keyCode > 58  && window.event.keyCode <= 64) 
		|| window.event.keyCode == 96 
		|| (window.event.keyCode >= 91  && window.event.keyCode <= 94) 
		|| (window.event.keyCode >= 123  && window.event.keyCode <= 126))
		{
   			window.event.returnValue=false;
   			return false;

		}
	}

function LTrim(str){
	if (str==null){return null;}
	for(var i=0;str.charAt(i)==" ";i++);
	return str.substring(i,str.length);
}
	
function RTrim(str){
	if (str==null){return null;}
	for(var i=str.length-1;str.charAt(i)==" ";i--);
	return str.substring(0,i+1);
}
	
	
//-------------------------------------------------------------------
// Trim functions
//   Returns string with whitespace trimmed
//-------------------------------------------------------------------
	
	
function Trim(str){
	return LTrim(RTrim(str));
}


//------------------------------------------------------------------
// chkExtraSpace() -->added by Nupoor 11-02-2006
// Prompts user to remove extra spaces from middle of the word.
// Returns false if there is extra spaces.
//------------------------------------------------------------------

function chkExtraSpace(val){

	var searchValue = Trim(val);
	for(i =0; i<searchValue.length;i++){
		if(searchValue.charAt(i)==' ' && searchValue.charAt(i+1)==' '){
			return false;
		}
	}

	return true;
}//end of function chkExtraSpace();


//------------------------------------------------------------------
//checkspace() checks for more than one space between words
//

//------------------------------------------------------------------
function checkSpace(fldValue)
{
    var name = fldValue;
    var nameCount = 0;
    var singleChar;
    var message;
    var previous = -2;
    if(isSpecialChar(name))
     {
	message = "Special symbols not allowed.";
   	return message;		            	
     }
     
 
    		if(isNull(name)) 
    			message="Not a valid string.";
     		else 
    		{    
        		//Checks for each character in the loop.
                 	for(;nameCount<name.length;nameCount++)
                 	{
                       	singleChar = name.substr(nameCount,1);
                        //Enters into this only if it is a character or space.
                       if(singleChar == ' ')
                       {
                                                    
                            if(nameCount == (previous+1))                       
                            {
   				message = "More than two space is not allowed between words.";
   				return message;		                         	
                            }
                            
                       		previous = nameCount;
                       }
                 	}
    		}   
   
       return message;
       }

//-------------------------------------------------------------------
// containSpace(value)
// Checks for the space in the string.
//-------------------------------------------------------------------
function containSpace(value)
{
    
    var len = value.length;
    var cnt = 0;
    var str;
       for(;cnt<len;cnt++)
    {
        str = value.substr(cnt,1);
        if(str == ' ')
        {
            return "Space is not allowed";
        }
    }
    return false;
}
       
//-----------------------------------------------------------------------
//         isCharacter(name)
//      Checks for the valid characters in the string.
//      It uses the "isBlank" function for the white space validations.
//-----------------------------------------------------------------------

function isCharacter(name){
	var nameCount = 0;
	var singleChar;
	var message;
	

	if(isSpecialChar(name))
	return "Special symbols are not allowed.";
	
	if(msg = checkSpace(name))
       	return msg;
	
	if(isBlank(name))
	{	
		message="Space is not allowed at start";
		return message;
	}
	if(isNull(name) || isBlank(name)) {
		message="Not A Valid String";
	} else {			
		//Checks for each character in the loop.
		for(;nameCount<name.length;nameCount++){
		singleChar = name.substr(nameCount,1);
		//Enters into this only if it is a character or space.
			if(!((singleChar >= 'a' && singleChar <= 'z')||(singleChar <= 'Z' && singleChar >= 'A')||(singleChar == ' '))){
				message="No special symbols with numbers are allowed";
			}
		}
	}	
	return message;
}

function isAlphaNumeric(name){
    var nameCount = 0;
    var singleChar;
    var message;
    if(isSpecialChar(name))
    	return "Special symbols are not allowed.";
    if(isNull(name)|| isBlank(name))
    {
    	message="Not A Valid String";
    	return message;
    }
    
    if(isSpecialChar(name))
	return "Special symbols are not allowed.";
       
    if(isInteger(name.substring(0,1))) {
        message="Number is not allowed at start";
    } else {    
        //Checks for each character in the loop.
        for(;nameCount<name.length;nameCount++){
        singleChar = name.substr(nameCount,1);
        //Enters into this only if it is a character or space.
            if(!((singleChar >= 'a' && singleChar <= 'z')||(singleChar <= 'Z' && singleChar >= 'A')||(singleChar <= '9' && singleChar >= '0'))){
                message="No special symbols with space allowed";
            }
        }
    }   
    return message;
}

//------------------------------------------------------------------------------------
//Function chkBirthYear(Object date,int Year)
//Function ValidateDate(dateObj,dtCh) must be called before calling this function.
//Function to check student birth date year,that it must be less than current year,
//Number of year less than current year you can pass to this function.
//------------------------------------------------------------------------------------

function chkBirthYear(dateObj,year)
{
			var bdate = dateObj.value;
			var byear; 
			var currdate = new Date();
			
			var curryear = currdate.getFullYear();
			var j = bdate.lastIndexOf('-');
			var len = bdate.length;
			byear = bdate.substring(j+1,len);
			
			var correctyear = curryear - year;
			
			if(byear > correctyear )
			{
                          
				return true;
			}
			return false;

}

//-----------------------------------------------------------------------------------
//END OF FUNCTION
//-----------------------------------------------------------------------------------
 


//-------------------------------------------------------------------	

//-----------------------------------------------------------------------------------
//Function chkFutureDate(Object date)
//Function ValidateDate(dateObj,dtCh) must be called before calling this function.
//This function checks for future dates
//----------------------------------------------------------------------------------

function chkFutureDate(dateObj)
	{
		var bdate = dateObj.value;
		var currdate = new Date();
		 
		var dDateArr=bdate.split("-");
		var dDateNew =new Date(dDateArr[1]+'/'+dDateArr[0]+'/'+dDateArr[2]);
	
		if(dDateNew>currdate){
			return true;
		}
		return false;



	}
 
//Method added by Aditi on 11 May 06
function isPhoneNumber(phoneNo)	{
	var validChars	= "0123456789-+";
	var	counter		= 0;
	var returnValue	= true;
	var singleChar	= "";

	for(;counter <= validChars.length; counter++)	{

		singleChar	= phoneNo.substr(counter + 1, 1);

		if(validChars.indexOf(singleChar) == -1)	{
			returnValue	= false;
			break;
		}

	}
	
	return returnValue;
}   


//------------------------------------------------------------------
 // isPhoneNumber1(value)
 //		This function is used to validate the phone number and returns the message.
 //------------------------------------------------------------------
 
 function isPhoneNumber1(phoneNo)	{
 	var validChars	= "0123456789+";
 	var	counter		= 0;
 	var singleChar	= "";
 	var phoneLength;
 	var cnt = 0;   //Is used to check for two consecutive '-'
 	var cnt1 = 0;  //Is used to check for more than two '-'
 	var message;
 	
 	if(isBlank(phoneNo))
 	 return message;
 	 
 	phoneLength=phoneNo.length;
 
 	//Checks for more than two consecutive '0' in the starting position of the number.
 	if((phoneNo.substring(0,3)=='000')||((phoneNo.substring(0,1)=='+')&&(phoneNo.substring(1,3)=='00')))
 		message="Invalid zeros.";
 
 	//This loop checks for all the digits and '-' and '+' characters.
 
 	for(;counter <= validChars.length; counter++)	{
 
 		singleChar	= phoneNo.substr(counter, 1);
 
 		//Checks for '+' character in the number.
 		if(counter>0 && singleChar=='+')
 			message="'+' not allowed from second position.";
 		//Checks for '+' character at start, if its not then alert.	
 		if(phoneNo.substring(0,1) != '+')
 			message = " Contact Number should start with '+' sign.";
 			
 		if(phoneNo.length==1)
 			message = " Not a valid Contact number.";
 		
 		//Checks for all other than the numbers, '+', '-' in the number.
 		if(validChars.indexOf(singleChar) == -1)	{
 			message="Not a valid Contact number.";
 			break;
 		}
 
 		//Checks for the minimum length of the number to be 10.
 	
 	}
 
 
 	return message;
 }
 



//------------------------------------------------------------------
// isMobileNumber(value)
//		This function is used to validate the O/R phone number and returns the message.
//------------------------------------------------------------------

function isMobileNumber(phoneNo)	{
	var validChars	= "0123456789";
	var singleChar	= "";
	var phoneLength=0;
	var message = "";
	if(isBlank(phoneNo))
	 return message;
	 
	phoneLength=phoneNo.length;

	//Checks for more than one consecutive '0' in the starting position of the number.
	if(phoneNo.substring(0,2)=="00")
		message="Invalid zeros; valid number like 9194480710 or 09894480710 or 9894480710";

	

	if(phoneLength<10 || phoneLength>12)
		message="The Mobile Number should have 10 to 12 digits like 9194480710 or 09894480710 or 9894480710";
	
	for(counter=0;counter <= phoneLength; counter++)	{

		singleChar	= phoneNo.substr(counter,1);
	if(validChars.indexOf(singleChar) == -1)	{
			message="Not a valid phone number; valid number like 9194480710 or 09894480710 or 9894480710";
			break;
		}
		}
	return message;
}

function isLandlineNumber(phoneNo)	{
	var validChars	= "0123456789-+";
	var	counter		= 0;
	var singleChar	= "";
	var phoneLength;
	var cnt = 0;   //Is used to check for two consecutive '-'
	var cnt1 = 0;  //Is used to check for more than two '-'
	var message;
	
	if(isBlank(phoneNo))
	 return message;
	 
	phoneLength=phoneNo.length;

	//Checks for more than two consecutive '0' in the starting position of the number.
	if((phoneNo.substring(0,3)=='000')||((phoneNo.substring(0,1)=='+')&&(phoneNo.substring(1,3)=='00')))
		message="Invalid zeros; valid number like +91-08345-123456";

	//This loop checks for all the digits and '-' and '+' characters.

	for(;counter <= validChars.length; counter++)	{

		singleChar	= phoneNo.substr(counter, 1);

		//Checks for '+' character in the number.
		if(counter>0 && singleChar=='+')
			message="'+' not allowed from second position; valid number like +91-08345-123456";
		//Checks for numbers after '+'
		if((phoneNo.substring(0,1) == '+') && (phoneNo.substring(1,2) == '-'))
			message = "After '+' only numbers are allowed; valid number like +91-08345-123456";
		//Checks for '-' in first and last positions in the number.
		if((phoneNo.substring(0,1)=='-')||(phoneNo.substring(phoneLength-1,phoneLength)=='-'))
			message="'-' should not be the first or last character; valid number like +91-08345-123456";
		//Checks for consecutive '-' in the number.
		else
		{
			if(cnt == 0 && singleChar == '-')
			{
				cnt++;
				cnt1++;
			}
			else if(cnt == 1 && singleChar == '-')
			{
					message="Two '-' are not allowed consecutively; valid number like +91-08345-123456";
					cnt1++;
			}
			else
				cnt = 0;
		}

		//Checks for all other than the numbers, '+', '-' in the number.
		if(validChars.indexOf(singleChar) == -1)	{
			message="Not a valid phone number; valid number like +91-08345-123456";
			break;
		}

		//Checks for the minimum length of the number to be 10.
		//else if(phoneLength<10)
			//message = "Minimum length is 10; valid number like +91-08345-123456";
	}
	if(cnt1 > 2)
		message = "More than two '-' are not allowed; valid number like +91-08345-123456";

	return message;
}





//------------------------------------------------------------------
//To use this function "chkSalary" function should be called compulsorily.
//------------------------------------------------------------------

function chkPercentage(percentage)
{
	var msg;
	var flg=0;
	var len;
	var message;

	//This chkSalary function is used to check for the '.' validations and number validations.
	msg=chkSalary(percentage);

	//If the message returned from chkSalary is some error it enters into 'if' else it goes to 'else'
	if(msg)
	{
		message="Invalid Percentage";
		return message;
	}
	else
	{
		if(percentage.indexOf('.',1) > 0)
		flg=1;
	}

	//If no '.' is present in the percentage then it enters 'if' else into 'else'
	if(flg==0)
	{
		len=percentage.length;
		//If percentage length is greater than 2, it will give error
		if(len>2)
		{
			message="If '.' is not there, maximum length should be 2";
			return message;
		}
		else if(percentage == "00")
		{
			message="00 is not a valid percentage";
			return message;
		}
	}
	else
	{
		//Checks for the '.' position if it is greater than two.
		if(percentage.indexOf('.',1) > 2)
		{
			message="Not a valid percentage. The maximum value is 99.99";
			return message;
		}
		else if(percentage == "00.0"||percentage == "0.0"||percentage == "0.00"||percentage == "00.00")
		{
			message="Not a valid percentage";
			return message;
		}
	}
	return message;
}
 

function chkFutureDatevalue(dateObj)
	{
		var bdate = dateObj;
		var currdate = new Date();
		var curryear = currdate.getFullYear();
		var currmonthdummy = currdate.getMonth();
		var currmonth = parseInt(currmonthdummy);
		currmonth = currmonth + 1;
		var currday = currdate.getDate();



		var j = bdate.lastIndexOf('-');
		var len = bdate.length;
		var year = bdate.substring(j+1,len);


		var k = bdate.indexOf('-');
		var month = bdate.substring(k+1,j);

		var day = bdate.substring(0,k);



		if(year > curryear)
		{
			
			return true;
		}

		if(year == curryear)
		{
			if(month > currmonth )
			{
			
				return true;
			}
			if(month == currmonth)
			{
				if(day > currday)
				{
			
					return true;
				}
			}

		}

		return false;



	}
	
	//Added by Nupoor on 30-May-2006
	 function selectText(obj){
    	obj.select();
    }//end of function selectText()
    
    
//function to restrict the number of characters for a textarea
//first param-textarea being validated, second param-maximum number of allowed chars.
//to be called for onkeypress event

 function restrictNumberOfChars(txtobj,max)
 {
	var str=txtobj.value;
	var len=str.length;
	if(len>=max){	
	 window.event.keyCode=0;
			 
	}		
}//end of function


 
    
//function to restrict the number of characters for a Text
//first param-text being validated, second param-minimum number of allowed chars, third param-maximum number of allowed chars.
//to be called for onChange event

 function restrictFieldMinAndMax(txtobj,min,max)
 {
	var str=txtobj.value;
	var len=str.length;
	if(len<min||len>max){	
	 return true;
			 
	}		
}//end of function


//To select all check boxes
/* function chkAllCheckBox(formNameString, checkboxNameString , chkbox)	
{

	var	tempString		= "";
	var	noOfFields		= eval("window.document." + formNameString + ".elements.length");
	

	var	counter			= 0;

	for(;counter < noOfFields; counter++)	
	{
		tempString	= "document." + formNameString + ".elements[" + counter + "]";
		if(	eval(tempString + ".type") == 'checkbox'
			 && eval(tempString + ".name.substring(0, " + checkboxNameString.length + ")") == checkboxNameString	)	
			{

				if(eval(tempString + ".checked") == true)	
				{
						var	noOfchk		= eval("window.document."+formNameString+"."+chkbox);
						var noOfchkbox = noOfchk.length;
						
						
						for(var count = 0;count < noOfchkbox; count++)
						{
							
							
							noOfchk[count].checked = true;
						}
				}
				else
				{
						var	noOfchk		= eval("window.document." + formNameString + "."+chkbox);
						var noOfchkbox = noOfchk.length;
						
						
						for(var count = 0;count < noOfchkbox; count++)
						{
							
							
							noOfchk[count].checked = false;
						}
				}
				
					
						
				
			}
	}

	return true;
}*/



//To select all check boxes...
	
/*	function chkAllBox(formNameString, checkboxNameString , chkbox)
{

	var	tempString		= "";
	var	noOfFields		= eval("window.document." + formNameString + ".elements.length");


	var	counter			= 0;

	for(;counter < noOfFields; counter++)
	{
		tempString	= "document." + formNameString + ".elements[" + counter + "]";
		if(	eval(tempString + ".type") == 'checkbox'
			 && eval(tempString + ".name.substring(0, " + checkboxNameString.length + ")") == checkboxNameString	)
			{



						var	noOfchk		= eval("window.document."+formNameString+"."+chkbox);
						var noOfchkbox = noOfchk.length;
						var flag = true;

						for(var count = 0;count < noOfchkbox; count++)
						{

							if(noOfchk[count].checked != true)
							flag = false;
						}


				        if(flag == true)
				        {


				        var temp  = eval(tempString);

				        temp.checked = true;

				        return;
				        }


		     }
         }
  return true;
         
 } */      
 
 
 //------------------------------------------------------------------
// checkList(this) -->added by trupti 2-9-2006
//  call this function on keyup.
//  allows the user to search the option in the combo box
//  by typing searchkey
//------------------------------------------------------------------
	var seconds = 1000;	//DELAY
	var timerID = 0;	//TIMER ID
	var keySearch =""; 	//SEARCH KEY

	function UpdateTimer() {
		if(timerID){
		   clearTimeout(timerID);//CLEAR TIMER
		   keySearch = "";//CLEAR THE SEARCH
		   lastIndex = 0;
		}
	}

	function Start() {
		clearTimeout(timerID);
	    timerID  = setTimeout("UpdateTimer()", seconds);//START THE TIMER
	}

	function checkList(selectBoxObj){
		var keyCodePressed = window.event.keyCode;//OBTAIN THE KEY PRESSED
		if(keyCodePressed >= 64 && keyCodePressed <=122){

			if(keySearch.length != 0){
				keySearch+= String.fromCharCode(keyCodePressed).toUpperCase();
			} else {
				keySearch = String.fromCharCode(keyCodePressed).toUpperCase();
			}
			setSelectBox(selectBoxObj);
			Start();
		}
	}

	function setSelectBox(selectBoxObj){
		var isMatched = 0;
		//var selectBoxObj = document.getElementById(SelectBoxName);

		for(var i = 0; i < selectBoxObj.options.length; i++){
			var opt = selectBoxObj.options[i].text;
			if(selectBoxObj.options[i].text.toUpperCase().indexOf(keySearch) == 0){
				isMatched = 1;
				selectBoxObj.options[i].selected = true;
				selectBoxObj.options.selectedIndex =i;
				selectBoxObj.value=selectBoxObj.options[i].value;
				break;
			}
		}
	}
//---------- Function Added by vijay for replace subString With given by String ----------

function replace(string,text,by) {
	var strLength = string.length, txtLength = text.length;
	if ((strLength == 0) || (txtLength == 0)) return string;
	var i = string.indexOf(text);
	if ((!i) && (text != string.substring(0,txtLength))) return string;
	if (i == -1) return string;
	var newstr = string.substring(0,i) + by;
	if (i+txtLength < strLength)
	newstr += replace(string.substring(i+txtLength,strLength),text,by);
	return newstr;
}	

//------------------------------------------------------------------
// startsWithUnderScore() -->added by Nupoor 16-09-2006
// Prompts user to remove underscore from the start of a String.
// Returns false if there string starts with underscore.
//------------------------------------------------------------------
	
	function startsWithUnderScore(obj){
		if(obj.charAt(0) =='_'){
			return false;
		}
		return true;
	}//end of startsWithUnderScore()	

	function startsWithHypen(obj){
		if(obj.charAt(0) =='-'){
			return false;
		}
		return true;
	}//end of startsWithUnderScore()
//-------------------------------------------------------------------
  
  // Added by Abhishek
  function setFocus()
	{
		if(document.forms[0].elements != null)
		{
			var i = document.forms[0].elements.length;
			for(var j = 0; j < i ; j++)
			{
				var obj = document.forms[0].elements[j];
				if( (!isNull(obj) && obj.type == 'text' && obj.disabled == false)            || //Text Field
				    (!isNull(obj) && obj.type == 'select-one' && obj.disabled == false)      || //Combo Box
				    (!isNull(obj) && obj.type == 'checkbox' && obj.disabled == false)        || //CheckBox
				    (!isNull(obj) && obj.type == 'select-multiple' && obj.disabled == false)    //ComboBox Multiple 
				  )
				{
					obj.focus();
					break;
				}
			}
		}
	}
//----------------------------------------------------------------------------------------



//------------------------------------------------------------------
// chkExtrahypen() -->added by shilpa
// Prompts user to remove extra hypens(more than one) from middle of the word.
// Returns false if there is extra spaces.
//------------------------------------------------------------------

function chkExtrahypen(val){

	var searchValue = Trim(val);
	if(searchValue.charAt(0)=='-'){
			return false;
	}
	for(i =0; i<searchValue.length;i++){
		if(searchValue.charAt(i)=='-' && searchValue.charAt(i+1)=='-'){
			return false;
		}
	}

	return true;
}//end of function chkExtrahypen();




function checkNumber(StringValue,digit,decimal)
{
	if (StringValue!=null && StringValue!="")
	{
		var ind = StringValue.indexOf(".");
		if (ind != -1)
		{
			var str = StringValue.substring(0,ind);
			if (str.length > digit)
			{
				return false;
			}
			str = StringValue.substring(ind+1,StringValue.length);
			if (str.length > decimal)
			{
				return false;
			}
		}else{
			if(StringValue.length > digit)
				return false
		}	
		return true;
	}else{
		return false;
	}
	
}


function isSpecialAddressChar(val)	{
	var counter		= 0;
	var	singleChar	= "";
	var	invalidChars	=  "`~@#$%^*+=|\;:>?!";

	for(counter = -1;counter < val.length-1; counter++)	{
		singleChar	= val.substr(counter + 1, 1);
		if(invalidChars.indexOf(singleChar) != -1 ){
			return true;
		}
	}
	return false;
}	
//------------------------------------------------------------------
// chkName(val, flag)
//	does not allow the user to enter invalid name, flag:1 represents 
//  for name in capital letters and flag:2 representa name in capital
//  and small letters.
//------------------------------------------------------------------

function chkName(val,flag)
{
	var name1,i,chr,incr=0,temp,chr1;
	name1=val.value;
	if(flag=="1")
	{
		if(!((event.keyCode>=65 && event.keyCode<=90) || event.keyCode==32))
			event.keyCode=0;
	}
	else
	{
		if(!((event.keyCode>=65 && event.keyCode<=90) ||
		     (event.keyCode>=97 && event.keyCode<=122)  || event.keyCode==32))
			event.keyCode=0;
	}
}

//-------------------------------------------------------------------



// --------------------- VIchu --------------------------------------------

function round_decimals(original_number, decimals) {
    var result1 = original_number * Math.pow(10, decimals)
    var result2 = Math.round(result1)
    var result3 = result2 / Math.pow(10, decimals)
    return pad_with_zeros(result3, decimals)
}

function pad_with_zeros(rounded_value, decimal_places) {





    // Convert the number to a string
    var value_string = rounded_value.toString()
    
    // Locate the decimal point
    var decimal_location = value_string.indexOf(".")

    // Is there a decimal point?
    if (decimal_location == -1) {
        
        // If no, then all decimal places will be padded with 0s
        decimal_part_length = 0
        
        // If decimal_places is greater than zero, tack on a decimal point
        value_string += decimal_places > 0 ? "." : ""
    }
    else {

        // If yes, then only the extra decimal places will be padded with 0s
        decimal_part_length = value_string.length - decimal_location - 1
    }



    
    // Calculate the number of decimal places that need to be padded with 0s
    var pad_total = decimal_places - decimal_part_length
    
    if (pad_total > 0) {
        
        // Pad the string with 0s
        for (var counter = 1; counter <= pad_total; counter++) 
            value_string += "0"
        }
    return value_string
}

//----------------------Subham ---------------------------------------
function validateCustname()	{ 
	{

	//alert(event.keyCode);
var name1,i,chr,incr=0,temp,chr1;
	//name1=val.value;
	if(!((event.keyCode>=65 && event.keyCode<=90) ||  event.keyCode==42 ||  event.keyCode==92 || window.event.keyCode == 32 || window.event.keyCode == 34 || window.event.keyCode == 39 ||
		     (event.keyCode>=97 && event.keyCode<=122) ||(window.event.keyCode >= 48  && window.event.keyCode <= 57 )||(window.event.keyCode>=43 && window.event.keyCode <=47) || window.event.keyCode==95 || window.event.keyCode==38 || window.event.keyCode ==40 || window.event.keyCode==41))
	     		event.keyCode=0;	
}

}
function validatePhoneNumber(){

if(!((window.event.keyCode >= 48  && window.event.keyCode <= 57 ) || window.event.keyCode ==45 ))
	event.keyCode=0;	

}

function validateEmail(){

if(!((event.keyCode>=65 && event.keyCode<=90) || (event.keyCode>=97 && event.keyCode<=122) ||(window.event.keyCode >= 48  && window.event.keyCode <= 57 ) || window.event.keyCode ==64 || window.event.keyCode==46 || window.event.keyCode==95))
	event.keyCode=0;	

}

function validateName(){
if(!((event.keyCode>=65 && event.keyCode<=90) || (event.keyCode>=97 && event.keyCode<=122)  || window.event.keyCode ==32  || window.event.keyCode ==46))
	event.keyCode=0;	

}
function validatemachine(){
        if(!((event.keyCode>=65 && event.keyCode<=90) || window.event.keyCode==47 || window.event.keyCode==95 || window.event.keyCode==92 ||
		     (event.keyCode>=97 && event.keyCode<=122) ||
		       (window.event.keyCode >= 48  && window.event.keyCode <= 57 )|| 
		       window.event.keyCode==45))
	     		event.keyCode=0;	
      
      }
      
      function	validateIAC(){
        if(!((event.keyCode>=65 && event.keyCode<=90) ||
		     (event.keyCode>=97 && event.keyCode<=122) 
		      || event.keyCode==32 || (window.event.keyCode >= 48  && window.event.keyCode <= 57 ) 
		      || window.event.keyCode==47 || window.event.keyCode==45))
	     		event.keyCode=0;	
      
      }	
      
       function validatefloat(){
 	      if(!((window.event.keyCode >= 48  && window.event.keyCode <= 57 )|| 
		       window.event.keyCode==46))
	     		event.keyCode=0;	
 	    
 	    }
     
function validateLotNo(){
if(!((event.keyCode>=65 && event.keyCode<=90) || window.event.keyCode == 32 || 
		     (event.keyCode>=97 && event.keyCode<=122) ||(window.event.keyCode >= 48  && window.event.keyCode <= 57 )|| window.event.keyCode==44 || window.event.keyCode ==45 || window.event.keyCode ==47 || window.event.keyCode==95  || window.event.keyCode ==40 || window.event.keyCode ==92  || window.event.keyCode==41))
	     		event.keyCode=0;	


}


//-------------------------------------------------------------------------
//         Function check for positive integer. It can take 0 as well. 
//          If entered -0. It won't flash an error but will finally make it to 0.
  
function checkPositiveInteger(val)
{
       
     if  (isNaN(val)  || (val < 0.0 ) )
     {
 		return false;

     }
     if (val == -0) 
     {
	    val = 0;
        return true;
     }
      return true;
}

//-------------------------------------------------------------------------------
//		Function dose not allow values less than or equal to 0

function checkZero(val)
{
   if (val <= 0 )   
	   return true;
}


//--------------------------------------------------------------------------------
//  	Function for checking dot(.) in numeric value. Dot should not be allowed.

function checkDot(val)
{
     if ((val.indexOf("." )) != -1  )
     //return true;
     return false;
}


//----------------------------------------------------------------------------------
//function restrictPastedNumberOfChars(txtobj,max)  added by ashok m
//function to restrict the number of characters for a textarea when text is pasted into the textarea
//first param-textarea being validated, second param-maximum number of allowed chars., third param is name of field to be shown in alert
//to be called for onblur event of textarea 
//-----------------------------------------------------------------------------------

		
		function restrictPastedNumberOfChars(txtobj,max,displayname){

			var str=txtobj.value;
			var len=str.length;
			if(len>max){
				alert("Length of "+displayname+" exceeded.");
				txtobj.value="";
				txtobj.focus();
				}//end of if

			}//end of function
		
//----------------------------------------------------------------------------------------------------------------------------------
//checkPastedSpecialChars(obj,msg)     added by ashok m
//function to check for special characters which may be copy-pasted into the text box
//first parameter-textbox being validated. second parameter-message to be displayed if special chars are found
//------------------------------------------------------------------------------------------------------------------------------


function checkPastedSpecialChars(obj,msg){

var str = obj.value;

var len = str.length;
var singlecharcode;
for(var i=0;i<len;i++)
 {
	singlecharcode = str.charCodeAt(i);

	if((singlecharcode >= 33  && singlecharcode <= 44) || (singlecharcode == 47) || (singlecharcode >= 58  && singlecharcode <= 64) || singlecharcode == 96 || (singlecharcode >= 91  && singlecharcode <= 94) || (singlecharcode >= 123  && singlecharcode <= 126))
		{
			alert(msg);
			obj.value="";
			obj.focus();
			return;
		}

  }

}			
			
function IsFloat(){	
	if (window.event.keyCode == 47 || window.event.keyCode < 46 || window.event.keyCode > 57)
		window.event.returnValue=false;
}	


function colorrow(CONTROL1)
	{
		var i=CONTROL1.childNodes.length;

		for (var j=0;j<i;j++)
		{
	     	CONTROL1.childNodes[j].className="MTTD3";
	   		
		}
	
 

	}

function uncolorrow(CONTROL)
{
	var i=CONTROL.childNodes.length;

	
	for (var j=0;j<i;j++)
	{
	   
 		CONTROL.childNodes[j].className="MTTD2";
	}
}

//------------------------------------------------------------------
// This function is used to compare two dates. (date1,date2)
// if date1 > date2 then it returns false
// else returns true. 
// -----------------------------------------------------------------	
function compareDate(joinDt, instiDt)
{
	var jdate=joinDt.substr(0,2);
	if(jdate.substr(1,1) == '-')
	{
		jdate = '0'+jdate.substr(0,1);
		joinDt = jdate + joinDt.substr(1,joinDt.length-1);
	}	

	var jmon=joinDt.substr(3,2);
	if(jmon.substr(1,1) == '-')
	{
		jmon = '0'+jmon.substr(0,1);
		joinDt = jdate +'-'+jmon +joinDt.substr(4,joinDt.length-1);	
	}	

	var jyear=joinDt.substr(6,4);

	var idate=instiDt.substr(0,2);
	if(idate.substr(1,1) == '-')
	{
		idate = '0'+idate.substr(0,1);
		instiDt = idate + instiDt.substr(1,instiDt.length-1);	
	}	

	var imon=instiDt.substr(3,2);
	if(imon.substr(1,1) == '-')
	{	imon = '0'+imon.substr(0,1);
		instiDt = idate +'-'+imon + instiDt.substr(4,instiDt.length-1);	
	}	

	var iyear=instiDt.substr(6,4);

	if(eval(jyear)>eval(iyear))
	{
		return false;
	}
	else if(eval(jyear)== eval(iyear) && eval(jmon)>eval(imon))
	{
		return false;
	}
	else if(eval(jyear)== eval(iyear) && eval(jmon)==eval(imon)&& eval(jdate)>eval(idate))
	{
		return false;
	}
	return true;
}//end of compareDate
		
function displayMessage(msg){
	if(msg){
		document.getElementById("msgrow").style.display='inline';
		DWRUtil.setValue("message",msg);
	}
}
function hideMessage(msg){
	if(document.getElementById("msgrow")){
		document.getElementById("msgrow").style.display='none';
		DWRUtil.setValue("message","");
	}
}
function isAlphaNumericWithHyphen(name){
	if(!((window.event.keyCode >= 97 && window.event.keyCode <= 122)||(window.event.keyCode <= 90 && window.event.keyCode >= 65)||(window.event.keyCode <= 57 && window.event.keyCode >= 48)||(window.event.keyCode == 95))){
		window.event.keyCode=0;
	}
}

//Added by rahulC
//----------------------------------------------------------------------------------------------------------------
// This function is used to compare date based on the compareFlag
// S -> Simple compare to check if first date is greater than second date.
// GE -> Greater than or equal
// For rest of the compareFlag dateStr1 = entered date and dateStr2 = current date
// B -> Is back dated.
// F -> Is future date.
// BC -> Is either back date or current date.
// CF -> Is either current or future date.
//----------------------------------------------------------------------------------------------------------------

function compareDateNew(dateStr1, dateStr2, dateFlag){
	var dateArray1 = dateStr1.split('-');
	var jdate=eval(dateArray1[0]);
	var jmon=eval(dateArray1[1]);
	var jyear = eval(dateArray1[2]);
	var date1= new Date(jmon+'/'+jdate+'/'+jyear);

	var dateArray2 = dateStr2.split('-');
	var jdate=eval(dateArray2[0]);
	var jmon=eval(dateArray2[1]);
	var jyear = eval(dateArray2[2]);
	var date2= new Date(jmon+'/'+jdate+'/'+jyear);
	
	if(dateFlag=='S'){
		if(date1 > date2){
			return false;
		}	
	}else if(dateFlag=='B'){ 
		if(date1 <= date2){

			return false;
		}
	}else if(dateFlag=='F'){ 
		if(date1 <= date2){
			return false;
		}
		
	}else if(dateFlag=='BC'){ 
		if(date1 > date2){
			return false;
		}

	}else if(dateFlag=='CF'){ 
		if(date1 < date2){
			return false;
		}	
	}else if(dateFlag=='GE'){
		if(date1 >= date2){
			return false;
		}	
	}
	return true;

}//end of compareDateNew();
//---------------------------------------------------------------------------------------------------------------- 
	
function isValidPAN(fld){
	if(fld.search(/^[A-Za-z][A-Za-z][A-Za-z][A-Za-z][A-Za-z][0-9][0-9][0-9][0-9][A-Za-z]/)!= -1)
		return true;
	else
		return false;
}

function isMoreBlankSpace(val)
   	 {
  		var i=0;
		for(i=0;i<val.length;i++){
		  	if((val.charAt(i)==' ') && (val.charAt(i+1)==' ')){
  				return true;
  			}
  		}
	    return false;
  	} 
//********************************** START OF CHECKBOX SELECTION-DESELECTION VALIDATION **************************

//----------------------------------------------------------------------------------------------------------------
// In case there are check boxes in the interface, then on checking the main check box, 
// rest should be checked and vice-versa.
// formName: Name of the form.
// mainCheckBoxName: Main check box (Select All check box)
// selectCheckBoxName: Name of checkbox that is to be selected and de-selected on check uncheck of main check box.
//----------------------------------------------------------------------------------------------------------------

function selectUnselectAll(formName, mainCheckBoxName , selectCheckBoxName){

	var	tempString		= "";
	var	noOfFields		= eval("window.document." + formName + ".elements.length");
	var	counter			= 0;

	for(;counter < noOfFields; counter++){

		tempString	= "document." + formName + ".elements[" + counter + "]";

		if(	eval(tempString + ".type") == 'checkbox'
				 && eval(tempString + ".name.substring(0, " + mainCheckBoxName.length + ")") == mainCheckBoxName	)
		{
			if(eval(tempString + ".checked") == true){
				var	noOfchk		= eval("window.document."+formName+"."+selectCheckBoxName);
				var noOfchkbox = noOfchk.length;


				for(var count = 0;count < noOfchkbox; count++){
							noOfchk[count].checked = true;
						}
			}else{
				var	noOfchk		= eval("window.document." + formName + "."+selectCheckBoxName);
				var noOfchkbox = noOfchk.length;
				for(var count = 0;count < noOfchkbox; count++){
						noOfchk[count].checked = false;
				}
			}
		}//end of if
	}//end of for
}//function selectUnselectAll()

//----------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------
// In case there are check boxes in the interface, and all are checked and if any check box is de-selected 
// the main check box should also be de-selected and vice-versa.
// formName: Name of the form.
// mainCheckBoxName: Main check box (Select All check box)
// selectCheckBoxName: Name of checkbox that is to be selected and de-selected on check uncheck of main check box.
//----------------------------------------------------------------------------------------------------------------

function selectUnselectMain(formName, mainCheckBoxName , selectCheckBoxName){
	var	tempString		= "";
	var	noOfFields		= eval("window.document." + formName + ".elements.length");
	var	counter			= 0;

	for(;counter < noOfFields; counter++)
	{
		tempString	= "document." + formName + ".elements[" + counter + "]";
		if(	eval(tempString + ".type") == 'checkbox'
			 && eval(tempString + ".name.substring(0, " + mainCheckBoxName.length + ")") == mainCheckBoxName	)
			{

				var	noOfchk		= eval("window.document."+formName+"."+selectCheckBoxName);
				var noOfchkbox = noOfchk.length;
				var flag = true;

				for(var count = 0;count < noOfchkbox; count++)
				{

					if(noOfchk[count].checked != true){
						flag = false;
						break;
					}
				}

				var temp  = eval(tempString);

				if(flag == true){
					temp.checked = true;

				}else{

					temp.checked = false;

				}
		}//end of if
	}//end of for

}//end of function selectUnselectMain()
//----------------------------------------------------------------------------------------------------------------



    <!-- ************************************************************************ -->
    <!-- INPUT MASK CODE FOR DATE AND TIME -->
    <!-- <input type="text" name="txtTime"  id="txtTime" size="4"    maskAlphaNumeric="x" OnFocus="javascript:ASI_InputMask_GotFocus(this);" OnCut="javascript:ASI_InputMask_OnCut(this);" RegexPattern="((\(\d{3}\) ?)|(\d{3}[- \.]))?\d{3}[- \.]\d{4}(\s(x\d+)?){0,1}$" OnClick="javascript:ASI_InputMask_OnClick(event, this);" OnRegexMatch="alert('matches!')" OnPaste="javascript:ASI_InputMask_OnPaste(this);" maskNumeric="n" mask="nn:nn" OnInput="javascript:ASI_InputMask_OnInput(event, this);" OnKeyDown="javascript:ASI_InputMask_KeyDown(event, this);" OnWrongKeyPressed="alert('Wrong key for this position!')" OnKeyPress="javascript:ASI_InputMask_KeyPress(event, this);" maskAlpha="a" OnBlur="javascript:ASI_InputMask_LostFocus(this);" maskDisplay="_">-->
    
    var $a;
function ASI_InputMask_OnInput(event,$b){
	ASI_InputMask_ValidateContent($b);
	ASI_InputMask_PutCaretPos($b,ASI_InputMask_GetSelectionStart($b));
};

function ASI_InputMask_ValidateContent($b){
	var $c="";var $d=$b.value;var $e=$b.getAttribute("mask");
	var $f=$b.getAttribute("maskAlpha");
	var $g=$b.getAttribute("maskNumeric");
	var $h=$b.getAttribute("maskAlphaNumeric");
	var $i=$b.getAttribute("maskDisplay");

	for(i=0;i<$e.length;i++){

		if($e.substring(i,(i+1))==$f){
			while($d.length>0&&(!(($d.substring(0,1).charCodeAt(0)>=65&&$d.substring(0,1).charCodeAt(0)<=90)||($d.substring(0,1).charCodeAt(0)>=97&&$d.substring(0,1).charCodeAt(0)<=122)))){

				$d=$d.substring(1);
			};
			if($d.length>0){$c+=$d.substring(0,1);
				$d=$d.substring(1);
			}else{
				$c+=$i;
			}
		}else if($e.substring(i,(i+1))==$g){
			while($d.length>0&&(!($d.substring(0,1).charCodeAt(0)>=48&&$d.substring(0,1).charCodeAt(0)<=57))){
				$d=$d.substring(1);
			};
			if($d.length>0){
				$c+=$d.substring(0,1);
				$d=$d.substring(1);
			}else{$c+=$i;
		}
	  }else if($e.substring(i,(i+1))==$h){
	  	while($d.length>0&&(!(($d.substring(0,1).charCodeAt(0)>=65&&$d.substring(0,1).charCodeAt(0)<=90)||($d.substring(0,1).charCodeAt(0)>=97&&$d.substring(0,1).charCodeAt(0)<=122)||($d.substring(0,1).charCodeAt(0)>=48&&$d.substring(0,1).charCodeAt(0)<=57)))){
	  		$d=$d.substring(1);
	  	};
	  	if($d.length>0){$c+=$d.substring(0,1);
	  		$d=$d.substring(1);
	  	}else{$c+=$i;
	  }}else{
	  	$c+=$e.substring(i,(i+1));
	  }};
	  	$b.value=$c;
	  };
	  function ASI_InputMask_ValidatePos($j,$b){
	  	if($b==null){
	  		$b=$a;
	  	};
	  	ASI_InputMask_PutCaretPos($b,$j);
	  };
	  	function ASI_InputMask_OnPaste($b){
	  		var $d=window.clipboardData.getData("Text");
	  		var $j=ASI_InputMask_PlaceInMask($b,$d);
	  		$a=$b;
	  		window.setTimeout("ASI_InputMask_ValidatePos("+$j+")",10);
	  		ASI_InputMask_StopEvent(event);
	  	};
	  	function ASI_InputMask_OnCut($b){
	  		var $k=ASI_InputMask_GetSelectionStart($b);
	  		var $l=ASI_InputMask_GetSelectionEnd($b);
	  		if($k+$l==$b.value.length){
	  			window.clipboardData.setData("Text",$b.value);
	  			$b.value="";ASI_InputMask_GotFocus($b);}else{var $i=$b.getAttribute("maskDisplay");
	  			window.clipboardData.setData("Text",$b.value.substring($k,($k+1)));
	  			ASI_InputMask_UpdateChar($b,$k,$i);
	  			ASI_InputMask_PutCaretPos($b,$k);
	  		};
	  			ASI_InputMask_StopEvent(event);
	  		};
	  	function ASI_InputMask_PlaceInMask($b,$d){
	  		var $c="";
	  		if($d.length>0){
	  			var $e=$b.getAttribute("mask");var $f=$b.getAttribute("maskAlpha");
	  			var $g=$b.getAttribute("maskNumeric");
	  			var $h=$b.getAttribute("maskAlphaNumeric");
	  			var $i=$b.getAttribute("maskDisplay");
	  			var $m=ASI_InputMask_GetSelectionStart($b);
	  			$c+=$b.value.substring(0,$m);
	  			
	  			for(i=$m;i<$e.length;i++){
	  				if($e.substring(i,(i+1))==$f){
	  					while($d.length>0&&(!(($d.substring(0,1).charCodeAt(0)>=65&&$d.substring(0,1).charCodeAt(0)<=90)||($d.substring(0,1).charCodeAt(0)>=97&&$d.substring(0,1).charCodeAt(0)<=122)))){
	  						$d=$d.substring(1);
	  					};
	  					if($d.length>0){
	  						$c+=$d.substring(0,1);
	  						$d=$d.substring(1);
	  					}else{break;}
	  				}else if($e.substring(i,(i+1))==$g){while($d.length>0&&(!($d.substring(0,1).charCodeAt(0)>=48&&$d.substring(0,1).charCodeAt(0)<=57))){
	  					$d=$d.substring(1);
	  				};
	  				if($d.length>0){
	  					$c+=$d.substring(0,1);
	  					$d=$d.substring(1);
	  				}else{break;}
	  				}else if($e.substring(i,(i+1))==$h){
	  				while($d.length>0&&(!(($d.substring(0,1).charCodeAt(0)>=65&&$d.substring(0,1).charCodeAt(0)<=90)||($d.substring(0,1).charCodeAt(0)>=97&&$d.substring(0,1).charCodeAt(0)<=122)||($d.substring(0,1).charCodeAt(0)>=48&&$d.substring(0,1).charCodeAt(0)<=57)))){
	  					$d=$d.substring(1);
	  				};
	  				if($d.length>0){
	  					$c+=$d.substring(0,1);
	  					$d=$d.substring(1);
	  				}else{break;}
	  				}else{
	  					$c+=$e.substring(i,(i+1));
	  				}
	  			};
	  			$c+=$b.value.substring(i,$e.length);
	  			};
	  			$b.value=$c;return i;
	  		};
	  		function ASI_InputMask_LostFocus($b){
	  			var $e=$b.getAttribute("mask");
	  			if($e!=null&&$b.value==ASI_InputMask_GetDisplayMask($b,true)){
	  			$b.value="";
	  		}else{
	  			if($b.value!=null&&$b.value.length>0){
	  				var $n=$b.getAttribute("RegexPattern");
	  				var $o=$b.getAttribute("OnRegexMatch");
	  				var $p=$b.getAttribute("OnRegexNoMatch");
	  			
	  			if($n!=null&&$n.length>0){
	  				var re=new RegExp($n);
	  				if($b.value.match(re)){
	  				if($o!=null&&$o.length>0){
	  					eval($o);
	  				}}else{
	  					if($p!=null&&$p.length>0){
	  						eval($p);
	  			}}}}}};
	  			function ASI_InputMask_KeyDown(event,$b){var $e=$b.getAttribute("mask");if($e!=null&&$e.length>0){var k=ASI_InputMask_GetKeyCode(event);if(k==8||(k>=33&&k<=40)||k==46){switch(k){case 8:ASI_InputMask_KeyBackspace($b);break;case 33:ASI_InputMask_PushPosBegin($b);break;case 34:ASI_InputMask_PushPosEnd($b);break;case 35:ASI_InputMask_PushPosEnd($b);break;case 36:ASI_InputMask_PushPosBegin($b);break;case 37:ASI_InputMask_PushPosLeft($b);break;case 38:ASI_InputMask_PushPosLeft($b);break;case 39:ASI_InputMask_PushPosRight($b);break;case 40:ASI_InputMask_PushPosRight($b);break;case 46:ASI_InputMask_KeyDelete($b);break;};ASI_InputMask_StopEvent(event);}}};function ASI_InputMask_KeyPress(event,$b){var $e=$b.getAttribute("mask");if($e!=null&&$e.length>0){var kc=ASI_InputMask_GetKeyCode(event);var ss=ASI_InputMask_GetSelectionStart($b);if(kc!=9){if(ASI_InputMask_KeyIsValid($b,ss,kc)){var ks=String.fromCharCode(kc);ASI_InputMask_UpdateChar($b,ss,ks);ASI_InputMask_PutCaretPos($b,ss+1);}else{var $q=$b.getAttribute("OnWrongKeyPressed");if($q!=null&&$q.length>0){eval($q);}};ASI_InputMask_StopEvent(event);}}};function ASI_InputMask_StopEvent(event){if(document.all){event.returnValue=false;}else if(event.preventDefault){event.preventDefault();}};function ASI_InputMask_StopEventPropagation(event){event.cancelBubble=true;if(event.stopPropagation){event.stopPropagation();}};function ASI_InputMask_GotFocus($b){var $e=$b.getAttribute("mask");if($e!=null&&$e.length>0){var $r=ASI_InputMask_GetSelectionStart($b);var $j=ASI_InputMask_GetValidPos($b,$r);if($j!=-1){if($b.value==null||$b.value.length==0){$b.value=ASI_InputMask_GetDisplayMask($b,true);};ASI_InputMask_PutCaretPos($b,$j);}else{$b.blur();}}};function ASI_InputMask_OnClick(event,$b){var $e=$b.getAttribute("mask");if($e!=null&&$e.length>0){var $s=ASI_InputMask_GetSelectionStart($b);ASI_InputMask_PutCaretPos($b,$s);};ASI_InputMask_StopEventPropagation(event);};function ASI_InputMask_GetKeyCode(event){return(event.keyCode?event.keyCode:event.which?event.which:event.charCode);};function ASI_InputMask_KeyDelete($b){var $k=ASI_InputMask_GetSelectionStart($b);var $l=ASI_InputMask_GetSelectionEnd($b);if($k==0&&$l==$b.value.length){$b.value="";ASI_InputMask_GotFocus($b);}else{var $i=$b.getAttribute("maskDisplay");ASI_InputMask_UpdateChar($b,$k,$i);ASI_InputMask_PutCaretPos($b,$k+1);}};function ASI_InputMask_KeyBackspace($b){var $k=ASI_InputMask_GetSelectionStart($b);var $l=ASI_InputMask_GetSelectionEnd($b);if($k==0&&$l==$b.value.length){$b.value="";ASI_InputMask_GotFocus($b);}else{var $i=$b.getAttribute("maskDisplay");ASI_InputMask_UpdateChar($b,$k,$i);$j=ASI_InputMask_GetValidPos($b,$k-1,true);ASI_InputMask_PutCaretPos($b,$j);}};function ASI_InputMask_PushPosLeft($b){var k=ASI_InputMask_GetSelectionStart($b);if((k-1)>=0){ASI_InputMask_PutCaretPos($b,(k-1),true);}};function ASI_InputMask_PushPosRight($b){var k=ASI_InputMask_GetSelectionStart($b);if((k+1)<$b.value.length){ASI_InputMask_PutCaretPos($b,(k+1));}};function ASI_InputMask_PushPosBegin($b){ASI_InputMask_PutCaretPos($b,0);};function ASI_InputMask_PushPosEnd($b){ASI_InputMask_PutCaretPos($b,$b.getAttribute("mask").length);};function ASI_InputMask_UpdateChar($b,$j,ks){var x=$b.value;var $t=x.substring(0,$j);var $u=x.substring($j+1,x.length);$b.value=$t+ks+$u;};function ASI_InputMask_PutCaretPos($b,$j,$v){if($j<=0){$j=0;};if($j>=$b.value.length-1){$j=$b.value.length-1};$j=ASI_InputMask_GetValidPos($b,$j,$v);if($j!=-1){if($b.createTextRange){var $w=$b.createTextRange();$w.moveStart("character",$j);$w.moveEnd('character',$j+1-$b.value.length);$w.select();}else if($b.setSelectionRange){$b.focus();$b.setSelectionRange($j,$j+1);}}else{$b.blur();}};function ASI_InputMask_GetValidPos($b,$j,$v){if($v==null){$v=false;};if(ASI_InputMask_PosIsValid($b,$j)){return $j;}else{var $e=$b.getAttribute("mask");if($v){while($j>=0){if(ASI_InputMask_PosIsValid($b,$j)){return $j;};$j--;};while($j<$e.length-1){if(ASI_InputMask_PosIsValid($b,$j)){return $j;};$j++;}}else{while($j<$e.length-1){if(ASI_InputMask_PosIsValid($b,$j)){return $j;};$j++;};while($j>=0){if(ASI_InputMask_PosIsValid($b,$j)){return $j;};$j--;}};return -1;}};function ASI_InputMask_PosIsValid($b,$j){var $e=$b.getAttribute("mask");var m=$e.split("");if(m.length>$j){if(m[$j]!=null){var $f=$b.getAttribute("maskAlpha");var $g=$b.getAttribute("maskNumeric");var $h=$b.getAttribute("maskAlphaNumeric");if(m[$j]==$f||m[$j]==$g||m[$j]==$h){return true;}else{return false;}}else{return false;}}else{return false;}};function ASI_InputMask_KeyIsValid($b,$j,$x){var m=$b.getAttribute("mask").split("");if(m.length>$j){var $y=m[$j];var $z=$b.getAttribute("maskAlpha");var $A=$b.getAttribute("maskNumeric");var $B=$b.getAttribute("maskAlphaNumeric");if($y==$z){if(($x>=65&&$x<=90)||($x>=97&&$x<=122)){return true;}else{return false;}}else if($y==$A){if($x>=48&&$x<=57){return true;}else{return false;}}else if($y==$B){if(($x>=48&&$x<=57)||($x>=65&&$x<=90)||($x>=97&&$x<=122)){return true;}else{return false;}}else{return false;}}else{return false;}};function ASI_InputMask_GetSelectionStart($b){if($b.createTextRange){$C=document.selection.createRange().duplicate();$C.moveEnd("character",$b.value.length);$j=$b.value.lastIndexOf($C.text);if($C.text=="")$j=$b.value.length;return $j;}else{return $b.selectionStart;}};function ASI_InputMask_GetSelectionEnd($b){if($b.createTextRange){$C=document.selection.createRange().duplicate();$C.moveStart("character",-$b.value.length);$j=$C.text.length;return $j;}else{return $b.selectionEnd;}};function ASI_InputMask_GetDisplayMask($b,$D){var $e=$b.getAttribute("mask");if($D==true){var f="";var $f=$b.getAttribute("maskAlpha");var $g=$b.getAttribute("maskNumeric");var $h=$b.getAttribute("maskAlphaNumeric");var $i=$b.getAttribute("maskDisplay");var m=$e.split("");for(mi=0;mi<m.length;mi++){if(m[mi]==$f||m[mi]==$g||m[mi]==$h){f+=$i;}else{f+=m[mi];}};return f;}else{return $e;}}
    
    <!-- END OF INPUT MASK CODING -->
    
    
    //------------------------------------------------------------------
    // getTokens(str,delimator)
    // This function is used used to split the value with the specified delimeter.
    //------------------------------------------------------------------
     
    function getTokens(str,delimator){
    	var _returnArray= str.split(delimator);
    	return _returnArray;
	}
    
    <!-- ****************************************************************************** -->


//********************************** END OF CHECKBOX SELECTION-DESELECTION VALIDATION ****************************

//Usage: checkTimeNum(checkTime,24)
//Possible Formats cane be: 24 or 12
//returns true if desired format is correct else returns false.

function checkTime(field,format){
	var flag=false;
	re = /^(\d{1,2}):(\d{2})$/;
    if(regs = field.value.match(re)){
	    // 24-hour time format
	    if(format==24){
		if((regs[1]>=0 && regs[1] <= 23) && (regs[2]>=0 && regs[2]<=59)){
			flag=true;
		}
	    }
	    // 12-hour time format
	    if(format==12){
		if((regs[1]>=0 && regs[1] <= 11) && (regs[2]>=0 && regs[2]<=59)){
			flag=true;
		}
	    }
    }
	return flag;
}

//Usage: onkeypress="return checkTimeNum(this);"

function checkTimeNum(txtTime){
if((window.event.keyCode >= 48  && window.event.keyCode <= 57)){
	var len=(txtTime.value).length;
	if((txtTime.value).indexOf(':')<0){
		if(len==2){
			if(event.keyCode!=58){
				txtTime.value=txtTime.value+":";
			}	
		}
	}
	return true;	
}else{
	window.event.returnValue=false;
	return false;
}   
}


//Usage:compareDateNew2(date1,date2,dateflag);//to compare in between date1 and date as per flag
//Usage:compareDateNew2(date1,dateflag);//to compare with current date
//Arguments: Valid only for 2 or 3 parameters and not for any other no of arguments.

function compareDateNew2(){

	var argLength=arguments.length;
	if(argLength!=2 && argLength!=3){
		alert('Error:Ohhh! Invalid arguments!!!');
		return false;
	}
	
	if(argLength==2){
	

		var dateStr1=arguments[0];
		var dateFlag=arguments[1];
		
		var dateArray1 = dateStr1.split('-');
		var jdate=eval(dateArray1[0]);
		var jmon=eval(dateArray1[1]);
		var jyear = eval(dateArray1[2]);
		var date1= new Date(jmon+'/'+jdate+'/'+jyear);	
	
		var curDate = new Date();
		var jdate=curDate.getDate();
		var jmon=curDate.getMonth()+1;
		var jyear = curDate.getFullYear();
		var date2= new Date(jmon+'/'+jdate+'/'+jyear);

		if(dateFlag=='GE'){
			if(date1 >= date2){
				return true;
			}
			return false;	
		}
		if(dateFlag=='LE'){
			if(date1 <= date2){
				return true;
			}
			return false;	
		}
		if(dateFlag=='G'){
			if(date1 > date2){
				return true;
			}
			return false;	
		}
		if(dateFlag=='L'){
			if(date1 < date2){
				return true;
			}
			return false;	
		}		
		return true;
	}

	if(argLength==3){
		
		var dateStr1=arguments[0];
		var dateStr2=arguments[1];
		var dateFlag=arguments[2];
		
		var dateArray1 = dateStr1.split('-');
		var jdate=eval(dateArray1[0]);
		var jmon=eval(dateArray1[1]);
		var jyear = eval(dateArray1[2]);
		var date1= new Date(jmon+'/'+jdate+'/'+jyear);	
	
		var dateArray2 = dateStr2.split('-');
		var jdate=eval(dateArray2[0]);
		var jmon=eval(dateArray2[1]);
		var jyear = eval(dateArray2[2]);
		var date2= new Date(jmon+'/'+jdate+'/'+jyear);
	
	
		if(dateFlag=='GE'){
			if(date1 >= date2){
				return true;
			}
			return false;	
		}
		if(dateFlag=='LE'){
			if(date1 <= date2){
				return true;
			}
			return false;	
		}
		if(dateFlag=='L'){
			if(date1 < date2){
				return true;
			}
			return false;	
		}
		
		return true;
	}
}

function isValidShiftDuration(jsInTime,jsOutTime,jsShiftDur){
	var hh1,mm1,hh2,mm2,hh3,mm3;
	var date1,date2,date3,date4,date5,date6,date7,date8,date9;
	var inoutDiffinHH,inoutDiffinMI;

	hh1=getTokens(jsInTime,":")[0];
	mm1=getTokens(jsInTime,":")[1];
	hh2=getTokens(jsOutTime,":")[0];
	mm2=getTokens(jsOutTime,":")[1];
	hh3=getTokens(jsShiftDur,":")[0];
	mm3=getTokens(jsShiftDur,":")[1];

	date1=new Date(2009, 0, 01, hh1, mm1, 00, 00);
	date2=new Date(2009, 0, 01, hh2, mm2, 00, 00);
	date3=new Date(2009, 0, 01, hh3, mm3, 00, 00);

	date4=new Date(2009, 0, 01, 00 , 00 , 00 ,00);
	date4.setTime((date2-date1));
	inoutDiffinHH=date4.getUTCHours();
	inoutDiffinMI=date4.getUTCMinutes();

	date5=new Date(2009, 0, 01, inoutDiffinHH , inoutDiffinMI , 00 ,00);

	if(jsShiftDur=="00:00"){
		return 0;
	}
	if((date2<=date1)){
		date6=new Date(2009, 0, 01, 00 , 00 , 00 ,00);
		date7=new Date(2009, 0, 01, 00 , 00 , 00 ,00);
		date8=new Date(2009, 0, 01, 00 , 00 , 00 ,00);
		date7.setTime((date6-date1));
		date8.setTime((date2-date6));
		date9=new Date(2009, 0, 01, date7.getUTCHours()+date8.getUTCHours() , date7.getUTCMinutes()+date8.getUTCMinutes() , 00 ,00);
		if((date3>date9)){
			return 0;
		}else if((date3<date9)){
			return 2;
		}
	}
	if((date3>date5)){
		return 0;
	}else if((date3<date5)){
		return 2;
	}
	return 1;
}

//dayFlag: F, L , F= First, L= Last
//monthType: NAME (varMonth=June, July like wise), NUM (varMonth=6, 7 like wise)

function getFirstLastDayofMonth(varMonth,varYear,dayFlag,monthType){
	if(dayFlag=='F'){
		if(monthType=='NAME'){
			return new Date(""+varMonth+" 1,"+varYear+"");
		}
		if(monthType=='NUM'){
			return new Date(varYear,varMonth-1,1);
		}
	}
	if(dayFlag=='L'){
		if(monthType=='NAME'){
			var lastday=new Date(""+varMonth+" 1,"+varYear+"");
			lastday.setMonth(lastday.getMonth()+1);
			return new Date(lastday-1);
		}
		if(monthType=='NUM'){
			var lastday=new Date(varYear,varMonth,1);
			return new Date(lastday-1);
		}
	}
}

//gives u date2-date1 diff in days
function getDateDiffInDays(date1,date2){
	return (Math.round((date2-date1)/(1000*60*60*24),0));
} 

//Converts Javascript Date Object to equivalent Date value which will be seprated by the given "sep"
//For Example
// Supoose todays date is 3/5/2009 or May 3 2009
//var strDateValue=convertDateToValue(new Date(),'-');
//alert(strDateValue);Will Gives you: 03-05-2009 (String Value)


function convertDateToValue(dateObj,sep){
	var d1=dateObj.getDate();
	var m1=dateObj.getMonth()+1;
	var y1=dateObj.getFullYear();
	return (d1+sep+m1+sep+y1);
}

function getcoloredRadio(formNameString,radioNameString)
{

	var	tempString		= "";
	var	noOfFields		= eval("window.document." + formNameString + ".elements.length");
	var	select	= false;
	var	counter			= 0;

	for(;counter < noOfFields; counter++)	{
		tempString	= "document." + formNameString + ".elements[" + counter + "]";
        //alert(tempString);
		var temp=eval(tempString);
		//Checks whether the type of the element for the given name is radio button or not
		if(	eval(tempString + ".type") == 'radio'
			 && eval(tempString + ".name.substring(0, " + radioNameString.length + ")") == radioNameString	)	{
				if(eval(tempString + ".checked") == true)	{
					select = true;
//style="border: 2px solid
					  temp.style.border="2px solid  #E9CFEC";
					  temp.style.background="#E7E0B7";
					//break;
				}else
				{
					  temp.style.border="NONE";
				
					temp.style.background="NONE";
					
				}
		}
	}

	return select;
}



function removeOptions(mylistbox){
	if(mylistbox ){
		while(mylistbox.length > 0)
		{
			mylistbox.remove(0);
		}
	}
		
}

function stopSpecialCharLangAr()
{
		if((window.event.keyCode >= 33 && window.event.keyCode != 39  && window.event.keyCode <= 43) || (window.event.keyCode >= 58  && window.event.keyCode <= 64) || window.event.keyCode == 96 || (window.event.keyCode >= 91  && window.event.keyCode <= 94) || (window.event.keyCode >= 123  && window.event.keyCode <= 126)){
			if(window.event.keyCode != 123  && window.event.keyCode != 125  && window.event.keyCode != 59  
				&& window.event.keyCode != 96 && window.event.keyCode != 91 && window.event.keyCode != 93 )
			{
				window.event.returnValue=false;
			}
		}
}

function validateFileType(file,allowedFileTypes) {
			if(allowedFileTypes=="*.*" || allowedFileTypes=="")
			{
				return true;
			}
	 
			var fileName=file.value;
			if(fileName==null || fileName=='')
			{
				alert('Please select file');
				return false;
			}
			
			var ext = fileName.split(".");
			ext = ext[ext.length-1].toLowerCase();  
		 	var allowedExtensionsArray = allowedFileTypes.split(',');
		 	if (allowedExtensionsArray.lastIndexOf('.'+ext) == -1) {
				 alert("Invalid file type. Please upload files with extension "+ allowedFileTypes);
				 file.value = null;
				 return false;
			}
			else{
				return true;
			}
	}
	
function validateFileSize(file,maxFileUploadSizeMB){
	 	
		 const size = (file.files[0].size/1024/1024).toFixed(2); 
		 
			if (size > parseInt(maxFileUploadSizeMB)) { 
				alert("File must be less than "+ maxFileUploadSizeMB +" MB"); 
				file.value = null;
				return false;
			} else { 
				return true;
			} 
	   
	}